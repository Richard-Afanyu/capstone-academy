// lib/markdown.ts
import MarkdownIt from "markdown-it";

// Initialize markdown-it with options
export const md = new MarkdownIt({
  html: true, // allow raw HTML in markdown
  linkify: true, // auto-detect URLs and convert to links
  breaks: true, // convert \n to <br>
});
