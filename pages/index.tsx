import { Navbar } from '@/components/Navbar/Navbar';
import { Hero } from '@/components/Hero/Hero';

export default function index() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Hero />
      </main>
    </>
  );
}
