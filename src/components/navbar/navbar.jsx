'use client';

import Link from "next/link"

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Dashboard",
    url: "/dashboard",
  },
  {
    id: 3,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 4,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 5,
    title: "About",
    url: "/about",
  },
  {
    id: 6,
    title: "Contact",
    url: "/contact",
  },
];

const Navbar = () => {
  return (
    <div>
      <Link
        href='/'
      >nex</Link>
      <div>
        {links.map((link) => {
          return (
            <Link
              key={link.id}
              href={link.url}
            >{link.title}</Link>
          )
        })}
        <button onClick={() => console.log('logout')}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar