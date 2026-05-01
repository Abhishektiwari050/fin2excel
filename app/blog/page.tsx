"use client"

import { useState } from "react"
import { motion } from "motion/react"
import Link from "next/link"

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = ["All", "Wealth", "Property", "Lifestyle", "Regulation"]

  const posts = [
    {
      id: 1,
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
      category: "Property",
      title: "The 2026 Luxury Real Estate Outlook: Tier-1 Cities vs. Heritage Retreats",
      excerpt: "Where the elite are placing their bets in the Indian property market this year.",
      date: "May 10, 2026",
      readTime: "5 min read",
      author: "Sarah D'Souza",
      img: "/assets/global-network.png"
    },
    {
      id: 3,
      category: "Regulation",
      title: "Navigating the New FEMA Amendments: What NRIs Need to Know",
      excerpt: "Simplifying the latest regulatory changes to ensure your cross-border investments remain seamless.",
      date: "May 05, 2026",
      readTime: "12 min read",
      author: "Adv. Rajesh Kumar",
      img: "/assets/hero-office.png"
    },
    {
      id: 4,
      category: "Lifestyle",
      title: "The Art of the Financial Concierge: Why Time is the Ultimate Asset",
      excerpt: "How delegating complex logistical and financial management creates a higher quality of life.",
      date: "April 28, 2026",
      readTime: "6 min read",
      author: "Aditi Rao",
      img: "/assets/global-network.png"
    },
    {
      id: 5,
      category: "Wealth",
      title: "Sustainable Philanthropy: Building a Legacy Beyond Returns",
      excerpt: "Strategic giving frameworks for Indian HNI families looking to create measurable social impact.",
      date: "April 20, 2026",
      readTime: "10 min read",
      author: "Vikram Mehta",
      img: "/assets/hero-office.png"
    }
  ]

  const filteredPosts = activeCategory === "All" 
    ? posts 
    : posts.filter(post => post.category === activeCategory)

  return (
    <div className="bg-swiss-bg text-swiss-black font-sans min-h-screen pt-40 pb-20 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        {/* Blog Header */}
        <header className="mb-20 border-b border-swiss-black/5 pb-10">
          <h1 className="text-[10vw] md:text-[6vw] leading-none mb-6 font-display font-bold uppercase">
            Luxury<br />Insights
          </h1>
          <p className="text-xl text-swiss-dark-gray max-w-xl">
            Thought leadership and strategic intelligence for the global Indian elite.
          </p>
        </header>

        {/* Categories */}
        <nav className="flex flex-wrap gap-4 mb-16 border-b border-swiss-black/5 pb-6 sticky top-20 bg-swiss-bg z-20">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[10px] tracking-[0.3em] uppercase font-bold px-4 py-2 transition-all duration-300 rounded-sm ${
                activeCategory === cat 
                  ? "bg-swiss-black text-swiss-bg" 
                  : "hover:text-swiss-blue"
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>

        {/* Featured Post */}
        {activeCategory === "All" && (
          <section className="mb-24">
            {posts.filter(p => p.featured).map(post => (
              <Link key={post.id} href={`/blog/${post.id}`} className="group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src={post.img} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" 
                  />
                </div>
                <div className="space-y-6">
                  <span className="text-[10px] tracking-[0.4em] uppercase text-swiss-blue font-bold">Featured Analysis</span>
                  <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight group-hover:text-swiss-blue transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-lg text-swiss-dark-gray leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs font-bold text-swiss-dark-gray">
                    <span>{post.author}</span>
                    <span className="w-1 h-1 bg-swiss-muted rounded-full" />
                    <span>{post.date}</span>
                    <span className="w-1 h-1 bg-swiss-muted rounded-full" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </section>
        )}

        {/* Posts Grid */}
        <div className="grid grid-cols-1 gap-y-16">
          {filteredPosts.filter(p => !p.featured || activeCategory !== "All").map((post, i) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col md:flex-row gap-8 md:gap-12 pb-16 border-b border-swiss-black/5"
            >
              <Link href={`/blog/${post.id}`} className="flex-1 aspect-[16/9] md:aspect-[4/3] overflow-hidden rounded-sm relative block">
                <img 
                  src={post.img} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-swiss-blue/0 group-hover:bg-swiss-blue/10 transition-colors duration-700" />
              </Link>
              <div className="flex-[1.5] flex flex-col justify-center space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-swiss-blue font-bold">{post.category}</span>
                  <span className="w-1 h-1 bg-swiss-black/20 rounded-full" />
                  <span className="text-[10px] tracking-[0.2em] uppercase text-swiss-dark-gray font-bold">{post.readTime}</span>
                </div>
                <Link href={`/blog/${post.id}`} className="block">
                  <h3 className="text-3xl md:text-5xl font-display font-bold leading-tight group-hover:text-swiss-blue transition-colors uppercase">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-swiss-dark-gray leading-relaxed max-w-xl">
                  {post.excerpt}
                </p>
                <div className="pt-4">
                  <Link href={`/blog/${post.id}`} className="text-xs font-bold tracking-[0.4em] uppercase border-b border-swiss-black pb-1 hover:text-swiss-blue hover:border-swiss-blue transition-all">
                    Read Experience
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter */}
        <section className="mt-40 p-12 md:p-20 bg-swiss-black text-swiss-bg text-center space-y-8">
          <span className="text-[10px] tracking-[0.5em] uppercase text-swiss-blue font-bold">The Briefing</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold">Curated Intelligence. <br /> Delivered Monthly.</h2>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 pt-4">
            <input 
              type="email" 
              placeholder="Private Email Address" 
              className="flex-1 bg-white/5 border border-white/10 px-6 py-4 text-sm focus:border-swiss-blue outline-none transition-colors"
            />
            <button className="bg-swiss-blue text-swiss-black px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-swiss-bg transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-[10px] text-white/30 tracking-widest uppercase">Strictly confidential. No spam.</p>
        </section>
      </div>
    </div>
  )
}
