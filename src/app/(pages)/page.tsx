"use client";
import { ListPost, PremiumCard, WelcomeCard } from "@/components/blocks";
import { FilterSidebar } from "@/components/feature";
import { useFilter, withProtectedRoute } from "@/shared/hooks";
import { FilterFormData } from "@/shared/schemas";
import { useState } from "react";

const HomePage = () => {
  const [filters, setFilters] = useState<FilterFormData>({} as FilterFormData);

  return (
    <div className="container grid grid-cols-[1fr_550px_1fr] gap-x-6 xl:gap-x-12 py-6">
      <div className="space-y-6">
        <FilterSidebar filters={filters} setFilters={setFilters} />
      </div>

      <div className="space-y-6">
        <ListPost filters={filters} />
      </div>

      <div className="space-y-6">
        <PremiumCard />
        <WelcomeCard />
      </div>
    </div>
  );
};

export default withProtectedRoute(HomePage);
