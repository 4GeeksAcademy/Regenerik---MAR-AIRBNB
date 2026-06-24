"use client";

import { useEffect, useMemo, useState } from "react";
import MobileTabBar from "@/components/layout/MobileTabBar";
import CategoryChips, { HOME_CATEGORIES } from "@/components/home/CategoryChips";
import HomeListingsSection from "@/components/home/HomeListingsSection";
import HomeTopNav from "@/components/home/HomeTopNav";
import { listings } from "@/lib/listings";
import type { Listing } from "@/types/listing";
import { filterListings } from "@/components/home/homeFilters";

const HomePageClient = () => {
  const [searchText, setSearchText] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todas");
  const [loading, setLoading] = useState(true);
  const [loadedListings, setLoadedListings] = useState<Listing[]>([]);
  const [visibleListings, setVisibleListings] = useState<Listing[]>([]);

  const filteredCountLabel = useMemo(() => {
    return loading ? "Cargando estancias" : `${visibleListings.length} alojamientos visibles`;
  }, [loading, visibleListings.length]);

  const handleSearchChange = (value: string) => {
    setSearchText(value);
    setVisibleListings(filterListings(loadedListings, value, activeCategory));
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setVisibleListings(filterListings(loadedListings, searchText, category));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadedListings(listings);
      setVisibleListings(listings);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen pb-20 md:pb-6">
      <HomeTopNav searchText={searchText} onSearchChange={handleSearchChange} />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-5 md:gap-8 md:px-8 md:py-8">
        <CategoryChips
          categories={HOME_CATEGORIES}
          activeCategory={activeCategory}
          onSelectCategory={handleCategoryChange}
        />

        <HomeListingsSection
          loading={loading}
          visibleListings={visibleListings}
          filteredCountLabel={filteredCountLabel}
        />
      </main>

      <MobileTabBar />
    </div>
  );
};

export default HomePageClient;
