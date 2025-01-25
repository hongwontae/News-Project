"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function MainHeader() {
  const pathname = usePathname();

  return (
    <>
      <header className="p-3">
        <nav>
          <ul className="grid grid-cols-main-header-template text-center w-full">
            <li className="text-[2rem]">
              <Link
                href={"/home"}
                className={`${pathname.endsWith("/") ? "text-red-300" : null}`}
              >
                Home
              </Link>
            </li>
            <li className="text-[2rem]">
              <Link
                href={"/nbs"}
                className={`${
                  pathname.startsWith("/nbs") ? "text-red-300" : null
                }`}
              >
                News By Sector
              </Link>
            </li>
            <li className="text-[2rem]">
              <Link
                href={"/latest"}
                className={`${
                  pathname.startsWith("/latest") ? "text-red-300" : null
                }`}
              >
                Latest News
              </Link>
            </li>
            <li className="text-[2rem]">
              <Link
                href={"/highlight"}
                className={`${pathname.startsWith("/highlight") ? "text-red-300" : null}`}
              >
                Hightlight News
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;
