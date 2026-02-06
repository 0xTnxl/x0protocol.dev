"use client";

import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  title?: string;
}

export function CodeBlock({
  code,
  language = "typescript",
  showLineNumbers = true,
  title,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.trim().split("\n");

  return (
    <div className="relative group">
      {title && (
        <div className="flex items-center justify-between px-4 py-2 bg-gray-900 border-b border-gray-800 rounded-t-lg">
          <span className="text-xs font-mono-custom text-muted-dark uppercase tracking-wider">
            {title}
          </span>
          <span className="text-[10px] font-mono-custom text-gray-600 uppercase">
            {language}
          </span>
        </div>
      )}
      <div
        className={`relative bg-black overflow-hidden ${
          title ? "rounded-b-lg" : ""
        }`}
      >
        <button
          onClick={copyToClipboard}
          className="absolute top-3 right-3 p-2 bg-white/10 hover:bg-white/20 transition-colors opacity-0 group-hover:opacity-100 z-10"
          aria-label="Copy code"
        >
          {copied ? (
            <svg
              className="w-4 h-4 text-accent-green"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : (
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          )}
        </button>

        <pre className="p-4 overflow-x-auto code-scroll text-sm leading-relaxed">
          <code className="font-mono-custom">
            {lines.map((line, i) => (
              <div key={i} className="table-row">
                {showLineNumbers && (
                  <span className="table-cell pr-4 text-gray-600 text-right select-none w-8">
                    {i + 1}
                  </span>
                )}
                <span
                  className="table-cell"
                  dangerouslySetInnerHTML={{ __html: highlightSyntax(line) }}
                />
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}

// Simple syntax highlighting
function highlightSyntax(line: string): string {
  // Handle comments first (entire line)
  if (line.trim().startsWith("//")) {
    return `<span class="text-gray-500">${escapeHtml(line)}</span>`;
  }

  const tokens: Array<{ type: string; value: string }> = [];
  let i = 0;
  const text = line;

  const keywords = new Set([
    "import", "from", "const", "let", "var", "function", "async", "await",
    "return", "if", "else", "new", "export", "default", "class", "extends",
    "try", "catch", "throw", "interface", "type", "enum"
  ]);

  while (i < text.length) {
    // Strings
    if (text[i] === '"' || text[i] === "'" || text[i] === '`') {
      const quote = text[i];
      let str = quote;
      i++;
      while (i < text.length && text[i] !== quote) {
        if (text[i] === '\\' && i + 1 < text.length) {
          str += text[i] + text[i + 1];
          i += 2;
        } else {
          str += text[i];
          i++;
        }
      }
      if (i < text.length) str += text[i++];
      tokens.push({ type: "string", value: str });
      continue;
    }

    // Numbers
    if (/\d/.test(text[i])) {
      let num = "";
      while (i < text.length && /[\d_]/.test(text[i])) {
        num += text[i++];
      }
      tokens.push({ type: "number", value: num });
      continue;
    }

    // Identifiers and keywords
    if (/[a-zA-Z_$]/.test(text[i])) {
      let word = "";
      while (i < text.length && /[a-zA-Z0-9_$]/.test(text[i])) {
        word += text[i++];
      }
      
      // Check if next non-space char is '(' for function calls
      let j = i;
      while (j < text.length && text[j] === ' ') j++;
      const isFunction = text[j] === '(';
      
      if (keywords.has(word)) {
        tokens.push({ type: "keyword", value: word });
      } else if (isFunction) {
        tokens.push({ type: "function", value: word });
      } else if (/^[A-Z]/.test(word)) {
        tokens.push({ type: "type", value: word });
      } else {
        tokens.push({ type: "plain", value: word });
      }
      continue;
    }

    // Everything else (operators, punctuation, whitespace)
    tokens.push({ type: "plain", value: text[i++] });
  }

  // Rebuild with highlighting
  return tokens.map(({ type, value }) => {
    const escaped = escapeHtml(value);
    switch (type) {
      case "keyword": return `<span class="text-purple-400">${escaped}</span>`;
      case "string": return `<span class="text-green-400">${escaped}</span>`;
      case "number": return `<span class="text-orange-400">${escaped}</span>`;
      case "function": return `<span class="text-blue-400">${escaped}</span>`;
      case "type": return `<span class="text-yellow-400">${escaped}</span>`;
      default: return escaped;
    }
  }).join('');
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
