"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { getStrapiMedia } from "@/lib/strapi"

export default function BlogList({ posts }: { posts: any[] }) {
  const [activeCategory, setActiveCategory] = useState("All")
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  // Extract unique categories from posts, default to ["All"]
  const fetchedCategories = Array.from(new Set(posts.map(p => p.category)))
  const categories = ["All", ...fetchedCategories]

  const filteredPosts = activeCategory === "All" 
    ? posts 
    : posts.filter(post => post.category === activeCategory)

  return (
    <div className="bg-swiss-bg text-swiss-black font-sans min-h-screen pt-40 pb-20 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        {/* Newspaper Masthead */}
        <header className="mb-12 border-b-4 border-double border-swiss-black pb-8 text-center">
          <div className="flex justify-between items-center text-[10px] tracking-[0.3em] uppercase font-bold border-b border-swiss-black/10 pb-4 mb-8">
            <span>Volume IV • Issue No. 24</span>
            <span className="hidden md:block">Greater Kailash II • New Delhi</span>
            <span>{mounted ? new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' }) : ""}</span>
          </div>
          <h1 className="text-[12vw] md:text-[8vw] leading-none font-display font-black uppercase tracking-tighter mb-4">
            The Insights.
          </h1>
          <p className="text-sm md:text-lg text-swiss-dark-gray max-w-2xl mx-auto italic font-serif">
            "The definitive record of global wealth, Indian residency, and the strategic pursuit of excellence."
          </p>
        </header>

        {/* Categories Bar */}
        <nav className="flex flex-wrap justify-center gap-6 mb-12 border-b border-swiss-black/10 pb-6">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[11px] tracking-[0.2em] uppercase font-bold transition-all duration-300 ${
                activeCategory === cat 
                  ? "text-swiss-blue border-b-2 border-swiss-blue" 
                  : "text-swiss-dark-gray hover:text-swiss-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>

        {/* Main Newspaper Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Left: Primary Story */}
          <div className="lg:col-span-8 space-y-12">
            {filteredPosts.filter(p => p.featured).map(post => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group block border-b border-swiss-black/10 pb-12">
                <div className="aspect-[16/9] overflow-hidden mb-8 relative">
                  <img 
                    src={post.img || '/assets/hero-office.png'} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 grayscale group-hover:grayscale-0" 
                  />
                  <div className="absolute top-6 left-6 bg-swiss-blue text-swiss-black px-4 py-1 text-[10px] font-bold uppercase tracking-widest">
                    Top Story
                  </div>
                </div>
                <div className="space-y-4">
                  <h2 className="text-5xl md:text-7xl font-display font-bold leading-[0.9] uppercase group-hover:text-swiss-blue transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-xl text-swiss-dark-gray leading-relaxed font-serif italic max-w-2xl">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-6 pt-4 border-t border-swiss-black/5 mt-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-swiss-blue/10 flex items-center justify-center font-bold text-swiss-blue text-xs">
                        {post.author ? post.author.split(' ').map((n: string) => n[0]).join('') : 'F2E'}
                      </div>
                      <div className="text-[10px] uppercase tracking-widest font-bold">
                        By <span className="text-swiss-blue">{post.author || 'Fin2Excel Team'}</span>
                      </div>
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-swiss-dark-gray">{post.date}</span>
                  </div>
                </div>
              </Link>
            ))}

            {/* Secondary Stories Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {filteredPosts.filter(p => !p.featured).slice(0, 2).map(post => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group block border-b border-swiss-black/10 pb-8 lg:border-b-0 lg:pb-0">
                  <div className="aspect-[4/3] overflow-hidden mb-6">
                    <img 
                      src={post.img || '/assets/global-network.png'} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-swiss-blue font-bold mb-3 block">{post.category}</span>
                  <h3 className="text-2xl font-display font-bold leading-tight mb-4 group-hover:text-swiss-blue transition-colors uppercase">
                    {post.title}
                  </h3>
                  <p className="text-sm text-swiss-dark-gray leading-relaxed line-clamp-3 font-serif">
                    {post.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar: Briefs & Trending */}
          <aside className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-swiss-black/10 pt-12 lg:pt-0 lg:pl-12 space-y-12">
            <div>
              <h4 className="text-[10px] tracking-[0.5em] uppercase font-bold text-swiss-black bg-swiss-black/5 p-2 mb-8 text-center">
                Financial Briefs
              </h4>
              <div className="space-y-10">
                {filteredPosts.filter(p => !p.featured).slice(2).map((post, i) => (
                  <Link key={post.id} href={`/blog/${post.slug}`} className="group block border-b border-swiss-black/5 pb-8 last:border-0">
                    <div className="flex gap-4 mb-3 items-center">
                      <span className="text-swiss-blue font-display font-bold text-2xl">0{i + 1}</span>
                      <span className="text-[9px] tracking-[0.2em] uppercase text-swiss-dark-gray font-bold">{post.category}</span>
                    </div>
                    <h3 className="text-lg font-bold leading-snug group-hover:text-swiss-blue transition-colors">
                      {post.title}
                    </h3>
                    <div className="mt-3 text-[9px] uppercase tracking-widest text-swiss-dark-gray font-bold">
                      {post.readTime || '5 min read'}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter Card */}
            <div className="bg-swiss-black text-swiss-bg p-8 space-y-6">
              <h4 className="text-xl font-display font-bold uppercase leading-tight">Join the Private Briefing</h4>
              <p className="text-xs text-white/60 leading-relaxed tracking-wide">
                Get monthly strategic intelligence delivered to your inbox. No spam, only substance.
              </p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-white/10 border border-white/20 px-4 py-3 text-xs outline-none focus:border-swiss-blue"
                />
                <button className="w-full bg-swiss-blue text-swiss-black py-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-swiss-bg transition-colors">
                  Join List
                </button>
              </div>
            </div>

            {/* Legal Quote */}
            <div className="border-l-2 border-swiss-blue pl-6 py-4 italic text-sm text-swiss-dark-gray font-serif">
              "In wealth management, as in architecture, the beauty lies in the precision of the foundation."
            </div>
          </aside>
        </div>

        {/* Footer Editorial Row */}
        <div className="mt-24 pt-12 border-t-4 border-double border-swiss-black grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {posts.slice(0, 4).map(post => (
            <Link key={`foot-${post.id}`} href={`/blog/${post.slug}`} className="group block">
              <span className="text-[9px] tracking-[0.3em] uppercase text-swiss-blue font-bold mb-2 block">{post.category}</span>
              <h4 className="text-sm font-bold uppercase leading-tight group-hover:text-swiss-blue transition-colors">
                {post.title}
              </h4>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
