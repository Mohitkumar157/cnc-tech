"use client";

function FilterTabs({
    buttonsData,
    activeButton,
    onButtonChange,
    className
}) {
    return (
        <ul className={`flex items-center justify-start md:justify-center flex-wrap gap-3 ${className}`}>
            {buttonsData.map((buttonText, index) => (
                <li key={index} className="shrink-0">
                    <button
                        onClick={() => onButtonChange(buttonText)}
                        type="button"
                        aria-pressed={activeButton === buttonText}
                        className={`cursor-pointer font-inter rounded-md border px-5 py-2 text-sm font-medium transition-colors 
                            ${activeButton === buttonText
                                ? "border-[#0878F9] bg-linear-to-r from-[#003DA8] to-[#0878F9] text-white shadow-sm"
                                : "border-slate-200 bg-white text-[#444444] hover:border-blue-600 hover:text-blue-600"
                            }`}
                    >
                        {buttonText}
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default FilterTabs;