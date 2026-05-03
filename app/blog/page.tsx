import { fetchAPI } from "@/lib/strapi"
import BlogList from "./BlogList"

// Fallback data in case Strapi is unavailable
const fallbackPosts = [
  {
    id: 1,
    slug: "silent-migration-global-indian-wealth",
    category: "Wealth",
    title: "The Silent Migration: Why Global Indian Wealth is Shifting to Private Family Offices",
    excerpt: "An in-depth analysis of how high-net-worth NRI families are restructuring their Indian portfolios for maximum multi-generational efficiency.",
    date: "May 12, 2026",
    readTime: "8 min read",
    author: "Vikram Mehta",
    img: "/assets/hero-office.png",
    featured: true
  },
  {
    id: 2,
    slug: "luxury-real-estate-outlook",
    category: "Property",
    title: "The 2026 Luxury Real Estate Outlook: Tier-1 Cities vs. Heritage Retreats",
    excerpt: "Where the elite are placing their bets in the Indian property market this year.",
    date: "May 10, 2026",
    readTime: "5 min read",
    author: "Sarah D'Souza",
    img: "/assets/global-network.png",
    featured: false
  },
  {
    id: 3,
    slug: "fema-amendments-nris",
    category: "Regulation",
    title: "Navigating the New FEMA Amendments: What NRIs Need to Know",
    excerpt: "Simplifying the latest regulatory changes to ensure your cross-border investments remain seamless.",
    date: "May 05, 2026",
    readTime: "12 min read",
    author: "Adv. Rajesh Kumar",
    img: "/assets/hero-office.png",
    featured: false
  },
  {
    id: 4,
    slug: "art-financial-concierge",
    category: "Lifestyle",
    title: "The Art of the Financial Concierge: Why Time is the Ultimate Asset",
    excerpt: "How delegating complex logistical and financial management creates a higher quality of life.",
    date: "April 28, 2026",
    readTime: "6 min read",
    author: "Aditi Rao",
    img: "/assets/global-network.png",
    featured: false
  },
  {
    id: 5,
    slug: "sustainable-philanthropy",
    category: "Wealth",
    title: "Sustainable Philanthropy: Building a Legacy Beyond Returns",
    excerpt: "Strategic giving frameworks for Indian HNI families looking to create measurable social impact.",
    date: "April 20, 2026",
    readTime: "10 min read",
    author: "Vikram Mehta",
    img: "/assets/hero-office.png",
    featured: false
  }
]

export default async function BlogPage() {
  let posts = fallbackPosts;

  try {
    // Attempt to fetch from Strapi
    // Populate relations to get images, categories, and authors
    const res = await fetchAPI({ 
      endpoint: 'articles', 
      query: { populate: ['category', 'cover', 'author'] },
      options: { next: { revalidate: 60 } } 
    });

    if (res && res.data && res.data.length > 0) {
      // Map Strapi structure to our frontend structure
      posts = res.data.map((article: any) => ({
        id: article.id,
        slug: article.slug || article.documentId, // Fallback to documentId in Strapi v5 if no slug
        title: article.title,
        excerpt: article.excerpt,
        category: article.category?.name || "Uncategorized",
        date: new Date(article.publishedAt || article.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        readTime: `${article.readTime || 5} min read`,
        author: article.author?.name || "Fin2Excel Team",
        img: article.cover?.url ? `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337'}${article.cover.url}` : null,
        featured: article.featured || false
      }));
    }
  } catch (e) {
    console.warn("Could not fetch from Strapi, using fallback data. Ensure Strapi is running.");
  }

  return <BlogList posts={posts} />
}
