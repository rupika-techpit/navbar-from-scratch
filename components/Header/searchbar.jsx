"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

const mockData = [
  { id: 1, title: "Dashboard Overview", link: "/dashboard" },
  { id: 2, title: "Marketing Report", link: "/dashboard/subModule" },
  { id: 3, title: "Sales Analytics", link: "/dashboard/sales" },
  { id: 4, title: "Operations Security", link: "/report/security" },
  { id: 5, title: "User Analytics", link: "/analytics/basic" },
  { id: 6, title: "Enterprise Analytics", link: "/analytics/enterprise" },
  { id: 7, title: "Case Study 1", link: "/forms/case1" },
  { id: 8, title: "Team Insights", link: "/analytic/team" },
];

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const results = mockData
    .filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    )
    .slice(0, 5);

  return (
    <div className="relative w-80">
      {/* Input */}
      <Search className="absolute left-3 top-2.5 h-4 w-4 text-[var(--muted-foreground)]" />
      <input
        type="text"
        placeholder="Global Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setTimeout(() => setIsFocused(false), 200)}
        className="w-full pl-9 pr-3 py-2 rounded-lg 
                   border bg-background text-foreground text-sm 
                   focus:outline-none focus:ring-2 focus:ring-[var(--border-color)]"
        style={{ borderColor: "var(--border-color)" }}
      />

      {/* Dropdown */}
      {isFocused && query && (
        <div
          className="absolute mt-1 w-full bg-background rounded-lg shadow-lg z-50"
          style={{ border: "1px solid var(--border-color)", boxShadow: "var(--dropdown-shadow)" }}
        >
          <ul className="max-h-60 overflow-y-auto text-sm">
            {results.length > 0 ? (
              results.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.link}
                    className="block px-4 py-2 hover:bg-[var(--hover-bg)] dark:hover:bg-[var(--hover-bg)]"
                  >
                    {item.title}
                  </Link>
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-[var(--muted-foreground)]">
                No results found
              </li>
            )}
          </ul>

          {/* See all results */}
          {results.length > 0 && (
            <div style={{ borderTop: "1px solid var(--border-color)" }}>
              <Link
                href={`/search?query=${query}`}
                className="block px-4 py-2 text-blue-500 hover:bg-[var(--hover-bg)]"
              >
                🔍 See all results
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
