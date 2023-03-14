import Link from 'next/link';
import Image from 'next/image';

const stats = [
  {
    id: 0,
    stat: '10k',
    label: 'active job seekers',
  },
  {
    id: 1,
    stat: '7k',
    label: 'active job recruiter',
  },
  {
    id: 2,
    stat: '25+',
    label: 'partner companies',
  },
];

export const Hero = () => {
  return (
    <section className="grid gap-5 justify-center py-20 lg:py-32 lg:grid-cols-2">
      <div className="flex flex-col order-1 gap-6 justify-center items-center text-center lg:gap-7 lg:text-start lg:items-start lg:-order-1">
        <h1 className="px-1 text-4xl font-bold capitalize lg:text-5xl xl:text-6xl font-secondary">
          Join us and explore thousands of{' '}
          <span className="text-accent-400">super jobs</span>
        </h1>
        <div className="flex gap-4">
          {stats.map(({ id, stat, label }) => (
            <div className="w-20" key={id}>
              <h2 className="mb-1 text-3xl font-bold lg:text-4xl font-secondary">
                {stat}
              </h2>
              <p className="text-light-400">{label}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-3 justify-center">
          <Link
            className="inline-block px-6 py-3 font-semibold text-center rounded-md lg:text-lg lg:w-40 bg-accent-400 focus:outline-accent-400 hover:bg-accent-500"
            href="/">
            Get Started
          </Link>
          <Link
            className="inline-block px-6 py-3 font-semibold text-center rounded-md lg:text-lg lg:w-40 bg-accent-400 focus:outline-accent-400 hover:bg-accent-500"
            href="/">
            About Us
          </Link>
        </div>
      </div>
      <div className="grid place-content-center bg-dark-400 rounded-tl-[88%]  rounded-tr-[36%]  rounded-bl-[67%] rounded-br-[78%]">
        <Image src="/images/hero.svg" alt="hero" height={600} width={600} />
      </div>
    </section>
  );
};
