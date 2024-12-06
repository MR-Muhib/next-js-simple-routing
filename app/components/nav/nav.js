import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="border">
      <ul className="flex gap-3">
        <li className="">
          <Link href="/">Home</Link>
        </li>
        <li className="">
          <Link href="/about">About</Link>
        </li>
        <li className="">
          <Link href="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
