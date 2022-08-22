import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  return (
    <div className="p-4 bg-white shadow">
      <div className="container mx-auto">
        <form className="grid-cols-12">
          <div className="col-span-12 flex items-center gap-x-2 p-2 border border-neutral-300 border-neutral-300 focus-within:border-indigo-500 rounded">
            <label htmlFor="searchField" className="contents">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="text-neutral-900" />
            </label>
            <input type="text" name="searchField" id="searchField" className="w-full py-2 focus:outline-none" />
            <button type="submit" className="py-2 px-8 bg-indigo-500 rounded text-white">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
