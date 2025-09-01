"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ChevronUp,
  ChevronDown,
  Pen,
  Users,
  Tag,
  MessageSquare,
  User,
  Calendar,
} from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { filterSchema, type FilterFormData } from "@/shared/schemas";
import { useFilter } from "@/shared/hooks";

interface FilterSectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

const FilterSection = ({
  title,
  icon,
  children,
  defaultExpanded = true,
}: FilterSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="text-gray-600">{icon}</div>
          <h3 className="font-medium text-gray-900">{title}</h3>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="h-6 w-6 p-0"
        >
          {isExpanded ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>
      </div>
      {isExpanded && <div className="space-y-3">{children}</div>}
    </Card>
  );
};

export const FilterSidebar = ({
  filters,
  setFilters,
}: {
  filters: FilterFormData;
  setFilters: (filters: FilterFormData) => void;
}) => {
  const { applyFilters, clearFilters } = useFilter();

  const form = useForm<FilterFormData>({
    resolver: zodResolver(filterSchema),
    defaultValues: filters,
  });

  const onSubmit = (data: FilterFormData) => {
    applyFilters(data);
    setFilters(data);
  };

  return (
    <div className="w-80 p-4 space-y-4 max-h-screen overflow-y-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            form.reset();
            clearFilters();
          }}
        >
          Clear all
        </Button>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FilterSection title="Content type" icon={<Pen className="h-4 w-4" />}>
          <div className="space-y-2">
            {["post", "article", "series"].map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox
                  id={type}
                  checked={form.watch("contentTypes").includes(type as any)}
                  onCheckedChange={(checked) => {
                    const current = form.watch("contentTypes");
                    if (checked) {
                      form.setValue("contentTypes", [...current, type as any]);
                    } else {
                      form.setValue(
                        "contentTypes",
                        current.filter((t) => t !== type)
                      );
                    }
                  }}
                />
                <Label htmlFor={type} className="text-sm capitalize">
                  {type}
                </Label>
              </div>
            ))}
          </div>
        </FilterSection>

        <FilterSection title="Tags" icon={<Tag className="h-4 w-4" />}>
          <div className="space-y-2">
            <Input placeholder="Search a tag" {...form.register("tags")} />
            <p className="text-xs text-gray-500">
              Search at least 3 characters
            </p>
          </div>
        </FilterSection>

        <FilterSection
          title="Topics"
          icon={<MessageSquare className="h-4 w-4" />}
        >
          <Input placeholder="Select a topic" {...form.register("topics")} />
        </FilterSection>

        <FilterSection title="Creator" icon={<User className="h-4 w-4" />}>
          <Input placeholder="Select a creator" {...form.register("creator")} />
        </FilterSection>

        <Button type="submit" className="w-full">
          Apply Filters
        </Button>
      </form>
    </div>
  );
};
