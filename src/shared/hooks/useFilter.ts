import { useState, useCallback } from "react";
import { FilterFormData } from "@/shared/schemas";

export const useFilter = () => {
  const [filters, setFilters] = useState<FilterFormData>({
    contentTypes: [],
    includeInnerGroups: false,
  });

  const applyFilters = useCallback((data: FilterFormData) => {
    setFilters(data);
  }, []);

  const clearFilters = useCallback(() => {
    setFilters({
      contentTypes: [],
      includeInnerGroups: false,
    });
  }, []);

  return {
    filters,
    applyFilters,
    clearFilters,
  };
};
