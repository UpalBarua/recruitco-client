import { Navbar } from '@/components/Navbar/Navbar';
import { Hero } from '@/components/Hero/Hero';
import { SearchBar } from '@/components/SearchBar/SearchBar';

export default function index() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Hero />
        <div>
          <SearchBar />
        </div>
      </main>
    </>
  );
}
