import React from "react";
// import "tailwindcss/tailwind.css";
import Link from "next/link";
import ActiveLink from "./ActiveLink";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/">
          <a className="btn btn-ghost normal-case text-xl">Hiro Nakae</a>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <ActiveLink activeClassName="active" href="/">
              <a className="nav-link">Home</a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink activeClassName="active" href="/about">
              <a className="nav-link">About</a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink activeClassName="active" href="/blog">
              <a className="nav-link">Blog</a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink
              activeClassName="active"
              href="/[slug]"
              as="/dynamic-route"
            >
              <a className="nav-link">Dynamic Route</a>
            </ActiveLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
