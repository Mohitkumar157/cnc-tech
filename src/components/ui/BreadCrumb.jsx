
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumb({ productTitle }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-6 border-b border-gray-300 pb-4"
    >
      <Link
        href="/"
        className="flex items-center gap-1 hover:text-blue-600"
      >
        <Home size={16} />
        Home
      </Link>

      /

      <Link
        href="/products"
        className="hover:text-blue-600"
      >
        Products
      </Link>

      /

      <span
        className="font-medium text-blue-600 text-nowrap"
        aria-current="page"
      >
        {productTitle}
      </span>
    </nav>
  );
}
