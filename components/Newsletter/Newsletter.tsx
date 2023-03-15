import Link from 'next/link';
import { FaFacebookF } from 'react-icons/fa';

const socialLinks = [
  {
    id: 0,
    link: '/',
    Icon: <FaFacebookF />,
  },
  {
    id: 1,
    link: '/',
    Icon: <FaFacebookF />,
  },
  {
    id: 2,
    link: '/',
    Icon: <FaFacebookF />,
  },
  {
    id: 3,
    link: '/',
    Icon: <FaFacebookF />,
  },
];

export const Newsletter = () => {
  return (
    <section className="grid my-10 rounded-md bg-dark-300 md:grid-cols-2">
      <div className="p-5 space-y-2 md:p-8 lg:p-10 md:space-y-4">
        <h2 className="text-3xl font-bold font-secondary">Newsletter</h2>
        <p className="text-light-400 lg:text-lg lg:pr-14">
          Create a professional resume in minutes. Choose from a library of 30+
          free resume templates and samples of career-specific writing examples.
        </p>
        <div className="space-y-2">
          <p className="text-lg font-bold font-secondary">Keep In Touch</p>
          <ul className="flex gap-2">
            {socialLinks.map(({ id, link, Icon }) => (
              <li
                className="p-2 text-lg rounded-full lg:text-xl lg:p-3 bg-dark-500"
                key={id}>
                <Link href={link}>{Icon}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <form className="p-5 space-y-3 bg-dark-400 md:p-8 lg:p-10 md:space-y-5">
        <div className="grid gap-2 md:gap-3">
          <label>Your Name</label>
          <input
            className="p-2 w-full rounded bg-dark-500 md:w-80"
            type="text"
          />
        </div>
        <div className="grid gap-2 md:gap-3">
          <label>Email Address</label>
          <input
            className="p-2 w-full rounded bg-dark-500 md:w-80"
            type="text"
          />
        </div>
        <button className="inline-block px-5 py-2 font-semibold text-center rounded-md w-26 bg-accent-400 focus:outline-accent-400 hover:bg-accent-500">
          Subscribe
        </button>
      </form>
    </section>
  );
};
