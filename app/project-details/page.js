import { redirect } from 'next/navigation';
import { getPortfolioSlugs } from '@/data/portfoli';

export default function ProjectDetailsIndexPage() {
  const firstProject = getPortfolioSlugs()[0];
  redirect(firstProject ? `/project-details/${firstProject.slug}` : '/portfolio-gallery');
}