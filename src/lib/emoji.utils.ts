import fs from "fs";
import path from "path";

export type EmojiGroup = { group: string | null; list: { glyph: string; description: string, version: string }[] };

export function loadEmojiTest(): EmojiGroup[] {
  const filePath = path.join(process.cwd(), "src", "lib", "emoji-test.txt");
  const text = fs.readFileSync(filePath, "utf8");

  const map = new Map<string, EmojiGroup>();
  let currentGroup: string | null = null;

  for (const rawLine of text.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line) continue;
    if (line.startsWith("# group:")) {
      currentGroup = line.slice(8).trim();
      continue;
    }
    if (line.startsWith("# subgroup:")) {
      continue;
    }

    if (line.includes("; fully-qualified")) {
      const codes = line.split(/\s{2,}/)[0];
      // Skip emojis with certain skin tone modifiers if desired
      if (/1F3F[B-F]/.test(codes)) continue;

      const hash = line.indexOf("#");
      if (hash === -1) continue;
      const after = line.slice(hash + 1).trim();
      const [glyph, versionE, ...descriptions] = after.split(/\s+/);
      const version = versionE.replace(/^E/, "");
      const description = descriptions.join(" ");
      if (!glyph) continue;

      const key = currentGroup || "Other";
      if (!map.has(key)) map.set(key, { group: currentGroup, list: [] });
      map.get(key)!.list.push({ glyph, description, version });
    }
  }

  return Array.from(map.values());
}
