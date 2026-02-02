import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import CoreValues from '@/components/home/CoreValues';
import LiveTechFeed from '@/components/home/LiveTechFeed';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import { getSortedPostsData } from '@/lib/posts';
import { getFeaturedProjects } from '@/lib/projects';

export default function Home() {
  const allPostsData = getSortedPostsData();
  const featuredProjects = getFeaturedProjects();

  return (
    <div>
      <Hero />
      <CoreValues />
      <Services />
      <LiveTechFeed posts={allPostsData} />
      <FeaturedProjects projects={featuredProjects} />
    </div>
  );
}
