import Link from 'next/link';
import Image from 'next/image';

export const AppsSection = () => {
  return (
    <section className="grid gap-5 justify-center items-center py-16 text-center lg:justify-items-center lg:text-start lg:grid-cols-2">
      <div className="grid place-content-center bg-dark-400 rounded-tl-[88%]  rounded-tr-[36%]  rounded-bl-[67%] rounded-br-[78%]">
        <Image
          src="/images/apps.svg"
          alt="resume builder"
          height={500}
          width={500}
        />
      </div>
      <div className="grid gap-5 justify-items-center max-w-sm lg:justify-items-start lg:-order-1">
        <h2 className="text-3xl font-bold font-secondary lg:text-4xl">
          Build professional resume with our free tool
        </h2>
        <p className="lg:text-lg text-light-400">
          Create a professional resume in minutes. Choose from a library of 30+
          free resume templates and samples of career-specific writing examples.
        </p>
        <Link
          className="inline-block px-6 py-3 w-40 font-semibold text-center rounded-md lg:text-lg bg-accent-400 focus:outline-accent-400 hover:bg-accent-500"
          href="/resume-builder">
          Build Resume
        </Link>
      </div>
    </section>
  );
};
