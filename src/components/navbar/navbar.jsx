'use client';

import Link from 'next/link';
import style from './navbar.module.scss';

const links = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'Dashboard',
    url: '/dashboard',
  },
  {
    id: 3,
    title: 'Portfolio',
    url: '/portfolio',
  },
  {
    id: 4,
    title: 'Blog',
    url: '/blog',
  },
  {
    id: 5,
    title: 'About',
    url: '/about',
  },
  {
    id: 6,
    title: 'Contact',
    url: '/contact',
  },
];

const Navbar = () => {
  return (
    <div className={style.container}>
      <Link href='/' className={style.logo}>
        nex
      </Link>
      <div className={style.links}>
        {links.map((link) => {
          return (
            <Link className={style.link} key={link.id} href={link.url}>
              {link.title}
            </Link>
          );
        })}
        <button className={style.btn} onClick={() => console.log('logout')}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
