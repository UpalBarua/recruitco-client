import { Navbar } from '@/components/Navbar/Navbar';
import { Hero } from '@/components/Hero/Hero';
import { SearchBar } from '@/components/SearchBar/SearchBar';
import { ResumeSection } from '@/components/ResumeSection';
import { AppsSection } from '@/components/AppsSection/AppsSection';

export default function index() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Hero />
        <div>
          {/* <SearchBar /> */}
          <ResumeSection />
          <AppsSection />
        </div>
      </main>
    </>
  );
}
