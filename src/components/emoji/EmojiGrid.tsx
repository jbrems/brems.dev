"use client";

import React, { useState, useMemo } from "react";
import type { EmojiGroup } from "../../lib/emoji.utils";

export default function EmojiGrid({ groups }: { groups: EmojiGroup[] }) {
  const [copied, setCopied] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return groups;
    return groups
      .map((g) => ({
        ...g, list: g.list.filter((e) => {
          const ds = `${e.description} v${e.version} ${e.glyph}`.toLowerCase();
          return ds.includes(q);
        })
      }))
      .filter((g) => g.list.length > 0);
  }, [groups, query]);

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
    <div className="space-y-6">
      <div>
        <label className="sr-only">Search emojis</label>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by description or version"
          className="w-full p-2 border rounded mb-4"
          aria-label="Search emojis"
        />
      </div>

      {filtered.map((g) => (
        <section key={g.group || "Other"}>
          <h2 className="text-lg font-medium mb-2">{g.group || "Other"}</h2>
          <div className="grid grid-cols-8 sm:grid-cols-12 gap-2">
            {g.list.map((e, idx) => {
              const popoverId = `popover-${g.group}-${idx}`
                .replace(/\s+/g, "_")
                .replace(/&/g, "");
              return (
                <div key={e.glyph} className="relative" data-search={`${e.description} v${e.version}`}>
                  <button
                    style={{ anchorName: `--emoji-anchor-${popoverId}` } as React.CSSProperties}
                    onClick={() => copyToClipboard(e.glyph)}
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
                    <span>{e.glyph}</span>
                  </button>
                  <div
                    id={popoverId}
                    popover="manual"
                    className="bg-[var(--black)] border border-neutral-200 rounded-2xl px-2 py-6 -translate-x-1/2 -translate-y-[calc(100%+0.5rem)] top-[anchor(top)] left-[anchor(center)]"
                    style={{
                      positionAnchor: `--emoji-anchor-${popoverId}`,
                    } as React.CSSProperties}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-8xl leading-none">{e.glyph}</span>
                      <span className="inline-flex items-center gap-2">
                        <span className="text-sm text-white">{e.description}</span>
                        <span className="text-xs text-gray-400">v{e.version}</span>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}

      {copied ? (
        <div className="fixed bottom-6 right-6 bg-black text-white px-3 py-2 rounded shadow">
          Copied {copied}
        </div>
      ) : null}
    </div>
  );
}
