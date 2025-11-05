import React from 'react';
import { MapPin, Search } from 'lucide-react';

export default function LocationSearch() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-5xl px-4">
        <div className="-mt-6 md:-mt-10" />
        <div className="w-full rounded-full border border-black/10 bg-white shadow-sm">
          <div className="flex items-center gap-3 px-3 py-2 md:px-4 md:py-3">
            {/* Location */}
            <div className="flex flex-1 items-center gap-2 rounded-full border border-black/10 px-3 py-2 md:flex-[0.7]">
              <MapPin className="h-4 w-4 text-black/60" />
              <input
                type="text"
                defaultValue="Ranchi"
                aria-label="Location"
                className="w-full bg-transparent text-sm outline-none placeholder:text-black/50"
              />
            </div>

            {/* Search */}
            <div className="hidden h-6 w-px bg-black/10 md:block" />
            <div className="flex flex-1 items-center gap-2 rounded-full border border-black/10 px-3 py-2">
              <Search className="h-4 w-4 text-black/60" />
              <input
                type="text"
                placeholder="Find hospitals, clinics, doctors, services..."
                aria-label="Search"
                className="w-full bg-transparent text-sm outline-none placeholder:text-black/50"
              />
            </div>

            {/* Button */}
            <button className="ml-2 rounded-full bg-black px-5 py-2 text-sm font-medium text-white hover:bg-black/90">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
