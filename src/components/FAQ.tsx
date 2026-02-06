"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-gray-800 border-t border-b border-gray-800">
      {items.map((item, index) => (
        <div key={index} className="group">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full py-5 flex items-center justify-between text-left"
          >
            <span className="text-base">{item.question}</span>
            <span
              className={`text-gray-500 text-xl transition-transform duration-200 ${
                openIndex === index ? "rotate-45" : "group-hover:rotate-45"
              }`}
            >
              +
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-96 pb-5" : "max-h-0"
            }`}
          >
            <p className="text-sm text-gray-500 leading-relaxed pr-12">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
