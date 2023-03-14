import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import { FaSlackHash } from 'react-icons/fa';
import { RiMenu4Fill } from 'react-icons/ri';

const navLinks = [
  {
    id: 0,
    title: 'Find Jobs',
    link: '/jobs',
  },
  {
    id: 1,
    title: 'Resume Builder',
    link: '/jobs',
  },
  {
    id: 2,
    title: 'Testimonials',
    link: '/jobs',
  },
  {
    id: 3,
    title: 'About Us',
    link: '/jobs',
  },
  {
    id: 4,
    title: 'Login',
    link: '/login',
  },
  {
    id: 5,
    title: 'Register',
    link: '/register',
  },
];

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-dark-400">
      <div className="container flex justify-between items-center py-2 lg:py-3">
        <Link
          className="flex gap-1 items-center text-2xl font-bold lg:text-3xl font-secondary"
          href="/">
          <FaSlackHash className="text-accent-500" />
          <span>Recruitco</span>
        </Link>
        <ul className="hidden gap-3 md:flex md:gap-4 lg:gap-5">
          {navLinks.slice(0, 4).map(({ id, title, link }) => (
            <li key={id}>
              <Link href={link}>{title}</Link>
            </li>
          ))}
        </ul>
        <div className="hidden space-x-3 md:block">
          <Link
            href={'/'}
            className="inline-block px-5 py-2 w-24 font-semibold text-center rounded-md bg-accent-400 focus:outline-accent-400 hover:bg-accent-500">
            Login
          </Link>
          <Link
            href={'/'}
            className="inline-block px-5 py-2 w-24 font-semibold text-center rounded-md bg-accent-400 focus:outline-accent-400 hover:bg-accent-500">
            Register
          </Link>
        </div>

        <Menu>
          <Menu.Button className="p-1 text-2xl rounded-sm hover:bg-dark-500 md:hidden">
            <RiMenu4Fill />
          </Menu.Button>

          <Menu.Items className="flex fixed right-4 top-14 flex-col gap-5 p-8 rounded bg-dark-300">
            {navLinks.map(({ id, title, link }) => (
              <Menu.Item key={id}>
                <Link href={link}>{title}</Link>
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu>
      </div>
    </nav>
  );
};
