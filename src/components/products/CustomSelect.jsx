'use client';
import React, { useState } from 'react';

function CustomSelect() {
    // Dropdown ke open/close state ko track karne ke liye
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative w-full sm:max-w-xs md:max-w-3xs">
            {/* Custom Arrow Icon */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
                <svg
                    // State ke hisaab se rotate class add karna, saath hi transition smooth karne ke liye
                    className={`w-4 h-4 text-gray-500 transition-transform duration-300 ease-in-out ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </div>

            {/* Select Dropdown */}
            <select
                id="product-category"
                name="category"
                // onFocus and onBlur se hum state update kar rahe hain
                onFocus={() => setIsOpen(true)}
                onBlur={() => setIsOpen(false)}
                // Native dropdown khulne par state update handle karne ke liye onClick bhi de sakte hain, par onFocus/onBlur zyada reliable hota hai select ke liye
                className="block w-full px-4 py-2.5 pr-10 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 appearance-none cursor-pointer"
            >
                <option value="all">All</option>
                <option value="industrial">Industrial</option>
                <option value="molds-dies">Molds & Dies</option>
                <option value="sheet-metal">Sheet Metal</option>
                <option value="precision-parts">Precision Parts</option>
                <option value="gear-shafts">Gear & Shafts</option>
            </select>
        </div>
    );
}

export default CustomSelect;