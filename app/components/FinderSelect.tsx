"use client";

import { useEffect, useRef, useState } from "react";

type Option = { value: string; label: string };

export default function FinderSelect({
  label,
  options,
  value,
  onChange,
  placeholder = "Farketmez",
}: {
  label: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  const current = options.find((o) => o.value === value);

  return (
    <div className="search-float-field finder-select" ref={rootRef}>
      <label>{label}</label>
      <button
        type="button"
        className={`finder-select-trigger${open ? " open" : ""}`}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{current ? current.label : placeholder}</span>
        <svg className="chevron" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <ul className="finder-select-panel" role="listbox">
          <li
            role="option"
            aria-selected={value === ""}
            className={`finder-select-option${value === "" ? " active" : ""}`}
            onClick={() => {
              onChange("");
              setOpen(false);
            }}
          >
            {placeholder}
          </li>
          {options.map((o) => (
            <li
              key={o.value}
              role="option"
              aria-selected={value === o.value}
              className={`finder-select-option${value === o.value ? " active" : ""}`}
              onClick={() => {
                onChange(o.value);
                setOpen(false);
              }}
            >
              {o.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
