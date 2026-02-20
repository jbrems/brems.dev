"use client";

import React, { useEffect, useState } from "react";

type Group = { group: string | null; list: string[] };

export default function SmileybookPage() {
  const [groups, setGroups] = useState<Group[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    const url = "/emoji-test.txt";
    let cancelled = false;

    async function fetchAndParse() {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const text = await res.text();

        const map = new Map<string, Group>();
        let currentGroup: string | null = null;

        for (const rawLine of text.split(/\r?\n/)) {
          const line = rawLine.trim();
          if (line.startsWith("# group:")) {
            currentGroup = line.slice(8).trim();
            continue;
          }
          if (line.startsWith("# subgroup:")) {
            continue;
          }
          if (line.includes("; fully-qualified")) {
            const codes = line.split(/\s{2,}/)[0];
            // Skip emojis with skin tone modifiers (1F3FB-1F3FF)
            if (/1F3F[B-F]/.test(codes)) continue;

            const hash = line.indexOf("#");
            if (hash === -1) continue;
            const after = line.slice(hash + 1).trim();
            const glyph = after.split(/\s+/)[0];
            if (!glyph) continue;

            const key = currentGroup || "Other";
            if (!map.has(key)) map.set(key, { group: currentGroup, list: [] });
            map.get(key)!.list.push(glyph);
          }
        }

        if (!cancelled) setGroups(Array.from(map.values()));
      } catch (err: any) {
        if (!cancelled) setError(err.message || String(err));
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchAndParse();
    return () => {
      cancelled = true;
    };
  }, []);

  async function copyToClipboard(s: string) {
    try {
      await navigator.clipboard.writeText(s);
      setCopied(s);
      setTimeout(() => setCopied(null), 1400);
    } catch (e) {
      const ta = document.createElement("textarea");
      ta.value = s;
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
        setCopied(s);
        setTimeout(() => setCopied(null), 1400);
      } finally {
        document.body.removeChild(ta);
      }
    }
  }

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">The Smileybook</h1>

      {loading && <div className="text-sm text-gray-500">Loading emojis…</div>}
      {error && <div className="text-sm text-red-600">Error: {error}</div>}

      {!loading && !error && (
        <div className="space-y-6">
          {groups.map((g) => (
            <section key={g.group || "Other"}>
              <h2 className="text-lg font-medium mb-2">{g.group || "Other"}</h2>
              <div className="grid grid-cols-8 sm:grid-cols-12 gap-2">
                {g.list.map((e, idx) => {
                  const popoverId = `popover-${g.group}-${idx}`.replace(/\s+/g, "_").replace(/&/g, "")
                  return (
                    <div key={e} className="relative">
                      <button
                        style={{ anchorName: `--emoji-anchor-${popoverId}` } as React.CSSProperties}
                        onClick={() => copyToClipboard(e)}
                        onMouseEnter={() => {
                          const popover = document.getElementById(popoverId) as HTMLDivElement;
                          popover?.showPopover();
                        }}
                        onMouseLeave={() => {
                          const popover = document.getElementById(popoverId) as HTMLDivElement;
                          popover?.hidePopover();
                        }}
                        aria-label={`Copy ${e}`}
                        className="cursor-pointer p-2 rounded hover:bg-gray-100 dark:hover:bg-slate-800 flex items-center justify-center text-2xl focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full"
                      >
                        <span>{e}</span>
                      </button>
                      <div
                        id={popoverId}
                        popover="manual"
                        className="bg-[var(--black)] border border-neutral-200 rounded-2xl px-2 py-6 -translate-x-1/2 -translate-y-[calc(100%+0.5rem)] top-[anchor(top)] left-[anchor(center)]"
                        style={{
                          positionAnchor: `--emoji-anchor-${popoverId}`,
                        } as React.CSSProperties}
                      >
                        <span className="text-8xl leading-none">{e}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      )}

      {copied ? (
        <div className="fixed bottom-6 right-6 bg-black text-white px-3 py-2 rounded shadow">
          Copied {copied}
        </div>
      ) : null}
    </main>
  );
}
