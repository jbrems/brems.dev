import React from "react";
import EmojiGrid from "../../../components/emoji/EmojiGrid";
import { loadEmojiTest } from "../../../lib/emoji.utils";

const groups = loadEmojiTest();

export default function SmileybookPage() {
  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">The Smileybook</h1>

      <EmojiGrid groups={groups} />
    </main>
  );
}
