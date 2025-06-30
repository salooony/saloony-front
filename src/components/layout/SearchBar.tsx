'use client';

import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [focusedInput, setFocusedInput] = useState<'query' | 'location' | null>(null);

  return (
    <div className="p-[20px_0_0_20px]">
      <div className="w-[800px] min-h-[80px] flex items-center justify-between bg-white shadow-md rounded-[18px] px-6 py-4 border-0">

        <div className="flex-1 mr-4">
          <div
            className={`rounded-[12px] px-3 py-2 transition-all ${
              focusedInput === 'query' ? 'bg-gray-100 border border-black' : ''
            }`}
          >
            <label className="text-sm text-gray-400 block mb-1">
              What are you looking for ?
            </label>
            <input
              type="text"
              value={query}
              onFocus={() => setFocusedInput('query')}
              onBlur={() => setFocusedInput(null)}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={
              focusedInput === 'query' || query ? '' : 'Name of the salon, services ( cut, etc.)'
               }
              className="w-full bg-transparent focus:outline-none text-black placeholder:text-black"
            />
          </div>
        </div>

        <div>
          <div
            className={`rounded-[12px] px-3 py-2 transition-all ${
              focusedInput === 'location' ? 'bg-gray-100 border border-black' : ''
            }`}
          >
            <label className="text-sm text-gray-400 block mb-1">Or</label>
            <input
              type="text"
              value={location}
              onFocus={() => setFocusedInput('location')}
              onBlur={() => setFocusedInput(null)}
              onChange={(e) => setLocation(e.target.value)}
              placeholder={
              focusedInput === 'location' || location ? '' : 'Address, city...'
            }
              className="w-full bg-transparent focus:outline-none text-black placeholder:text-black"
            />
          </div>
        </div>
        <button className="ml-6 text-black hover:text-gray-700">
          <FiSearch size={22} />
        </button>
      </div>
    </div>
  );
}
