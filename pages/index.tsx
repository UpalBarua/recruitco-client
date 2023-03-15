import { Navbar } from '@/components/Navbar/Navbar';
import { Hero } from '@/components/Hero/Hero';
import { SearchBar } from '@/components/SearchBar/SearchBar';
import { ResumeSection } from '@/components/ResumeSection';

export default function index() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Hero />
        <div>
          {/* <SearchBar /> */}
          <ResumeSection />
        </div>
      </main>
    </>
  );
}
