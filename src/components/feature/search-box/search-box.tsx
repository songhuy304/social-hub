"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Search, X, Clock, Plus, FileText, Layers } from "lucide-react";
import { useSearchBox } from "@/shared/hooks";
import { Flex } from "@/components/ui";

const SearchBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    query,
    history,
    hasHistory,
    setQuery,
    handleSubmit,
    removeHistoryItem,
    clearHistory,
    selectFromHistory,
  } = useSearchBox();

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleHistoryItemClick = (search: string) => {
    selectFromHistory(search);
  };

  const handleHistoryItemRemove = (index: number) => {
    removeHistoryItem(index);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Popover open={true}>
        <PopoverTrigger asChild>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="pl-10 pr-4 py-2 w-full"
              onFocus={() => setIsOpen(true)}
              onBlur={() => setIsOpen(false)}
            />
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-96 p-0" align="start">
          <div className="p-4 border-b">
            <Flex justify="between" align="center">
              <h3 className="font-semibold text-sm text-gray-500">
                Recent searches
              </h3>

              {hasHistory && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs h-8 px-2 text-gray-500"
                  onClick={clearHistory}
                >
                  Clear all
                </Button>
              )}
            </Flex>

            {hasHistory ? (
              <div className="">
                {history.map((search, index) => (
                  <div key={index} className="relative group">
                    <Button
                      variant="ghost"
                      className="flex items-center justify-between w-full"
                      onClick={() => handleHistoryItemClick(search)}
                    >
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-sm">{search}</span>
                      </div>
                    </Button>
                    <X
                      className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => handleHistoryItemRemove(index)}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-400 py-2">No recent searches</p>
            )}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default SearchBox;
