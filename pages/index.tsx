import { Navbar } from '@/components/Navbar/Navbar';
import { Hero } from '@/components/Hero/Hero';
import { SearchBar } from '@/components/SearchBar/SearchBar';
import { ResumeSection } from '@/components/ResumeSection';
import { AppsSection } from '@/components/AppsSection/AppsSection';
import { Newsletter } from '@/components/Newsletter/Newsletter';

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
          <Newsletter />
        </div>
      </main>
    </>
  );
}
