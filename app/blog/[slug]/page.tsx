import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { fetchAPI } from '@/lib/strapi'
import { JsonLd } from '@/components/ui/JsonLd'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

// Fallback data
const fallbackPosts: Record<string, any> = {
  "silent-migration-global-indian-wealth": {
    title: "The Shift in Global NRI Wealth Management",
    subtitle: "Why traditional banking is failing the modern Indian diaspora and the rise of the concierge model.",
    author: {
      name: "Adv. Jag Mohan Kapoor",
      role: "Founder & Managing Director",
      avatar: "/assets/logo.png"
    },
    date: "May 1, 2026",
    readTime: "8 min read",
    category: "Wealth Strategy",
    image: "/assets/hero-office.png",
    content: `
      <p class="text-xl leading-relaxed mb-8">
        The landscape of wealth management for Non-Resident Indians (NRIs) has undergone a tectonic shift over the last decade. As the Indian economy integrates more deeply with global markets, the needs of the diaspora have evolved from simple remittance management to complex, multi-jurisdictional estate planning and asset stewardship.
      </p>

      <h2 class="text-3xl font-display font-bold mt-16 mb-6 uppercase tracking-tight">The Failure of Traditional Banking</h2>
      <p class="mb-6">
        For years, traditional "Priority Banking" for NRIs was limited to high-interest NRE accounts and basic mutual fund distribution. However, these models often suffered from high turnover in relationship managers and a "product-first" rather than "client-first" approach. 
      </p>
      <p class="mb-10">
        Modern HNIs require more than just an account manager; they require a fiduciary who understands the intersection of FEMA regulations, UK/US taxation, and the emotional complexities of managing family assets in India.
      </p>

      <blockquote class="border-l-4 border-swiss-blue pl-8 py-4 my-12 italic text-2xl font-serif text-swiss-black/80">
        "True wealth management isn't about the rate of return; it's about the depth of the relationship and the certainty of the outcome."
      </blockquote>

      <h2 class="text-3xl font-display font-bold mt-16 mb-6 uppercase tracking-tight">The Concierge Advantage</h2>
      <p class="mb-6">
        This is where the concierge model steps in. By acting as a single point of contact for everything—from legal compliance to property maintenance and elder care—we remove the friction of distance. 
      </p>
      <ul class="list-disc pl-6 mb-10 space-y-4">
        <li><strong>Unified Reporting:</strong> A single dashboard for all Indian assets, across banks and asset classes.</li>
        <li><strong>Proactive Compliance:</strong> Managing tax filings and legal documentation before they become emergencies.</li>
        <li><strong>On-Ground Execution:</strong> Physical presence in India to manage properties and family needs.</li>
      </ul>

      <h2 class="text-3xl font-display font-bold mt-16 mb-6 uppercase tracking-tight">Looking Ahead</h2>
      <p class="mb-6">
        As we move towards 2027, the focus will increasingly shift towards "Legacy Engineering"—ensuring that wealth isn't just preserved, but successfully transitioned to the next generation with minimal legal friction and maximum impact.
      </p>
    `
  }
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  let post = fallbackPosts[resolvedParams.slug] || fallbackPosts["silent-migration-global-indian-wealth"];

  try {
    const res = await fetchAPI({ 
      endpoint: 'articles', 
      query: { 
        'filters[slug][$eq]': resolvedParams.slug,
        'populate[seo][populate]': '*',
        'populate[cover]': '*',
        'populate[author]': '*'
      } 
    });
    
    if (res?.data?.length > 0) {
      const article = res.data[0];
      const seo = article.seo;
      
      post = {
        title: seo?.metaTitle || article.title,
        description: seo?.metaDescription || article.excerpt,
        keywords: seo?.keywords,
        image: seo?.metaImage?.url 
          ? `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337'}${seo.metaImage.url}`
          : (article.cover?.url ? `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337'}${article.cover.url}` : '/assets/hero-office.png'),
        author: { name: article.author?.name || 'Fin2Excel Team' },
        robots: seo?.metaRobots || 'index, follow',
        canonical: seo?.canonicalURL || `https://fin2excel.com/blog/${resolvedParams.slug}`
      }
    }
  } catch (e) {}

  return {
    title: `${post.title} | Fin2Excel Insights`,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: post.canonical },
    robots: post.robots,
    openGraph: {
      title: post.title,
      description: post.description,
      url: post.canonical,
      type: 'article',
      authors: [post.author?.name],
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.image],
    }
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  let post = fallbackPosts[resolvedParams.slug] || fallbackPosts["silent-migration-global-indian-wealth"];

  try {
    const res = await fetchAPI({ 
      endpoint: 'articles', 
      query: { 
        'filters[slug][$eq]': resolvedParams.slug,
        'populate': '*'
      } 
    });
    
    if (res?.data?.length > 0) {
      const article = res.data[0];
      post = {
        title: article.title,
        subtitle: article.excerpt,
        content: article.content,
        category: article.category?.name || "Wealth Strategy",
        date: new Date(article.publishedAt || article.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        readTime: `${article.readTime || 8} min read`,
        image: article.cover?.url ? `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337'}${article.cover.url}` : '/assets/hero-office.png',
        author: {
          name: article.author?.name || "Fin2Excel Team",
          role: article.author?.role || "Contributor",
          avatar: article.author?.avatar?.url ? `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337'}${article.author.avatar.url}` : '/assets/logo.png'
        }
      };
    }
  } catch (e) {}

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.subtitle,
    "image": post.image.startsWith('http') ? post.image : `https://fin2excel.com${post.image}`,
    "author": { "@type": "Person", "name": post.author.name },
    "publisher": { "@type": "Organization", "name": "Fin2Excel", "logo": { "@type": "ImageObject", "url": "https://fin2excel.com/assets/logo.png" } },
    "datePublished": post.date ? new Date(post.date).toISOString() : new Date().toISOString(),
  };

  return (
    <div className="bg-white min-h-screen pt-40 pb-20 selection:bg-swiss-blue selection:text-white">
      <JsonLd data={jsonLd} />
      <article className="max-w-[800px] mx-auto px-6">
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <span className="px-3 py-1 bg-swiss-blue/10 text-swiss-blue text-[10px] font-bold uppercase tracking-widest rounded-full">
              {post.category}
            </span>
            <span className="text-swiss-dark-gray text-xs font-medium">{post.readTime}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-[1.1] mb-6 text-swiss-black uppercase">
            {post.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-swiss-dark-gray leading-snug font-sans mb-10">
            {post.subtitle}
          </p>

          <div className="flex items-center justify-between py-8 border-y border-swiss-black/5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-swiss-blue/10 flex items-center justify-center">
                <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 object-contain" />
              </div>
              <div>
                <div className="font-bold text-sm uppercase tracking-tight">{post.author.name}</div>
                <div className="text-xs text-swiss-dark-gray uppercase tracking-widest">{post.author.role}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs font-bold text-swiss-dark-gray uppercase tracking-widest">{post.date}</div>
            </div>
          </div>
        </header>

        <div className="aspect-video w-full mb-16 overflow-hidden rounded-sm">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        <div className="prose prose-lg max-w-none font-serif text-swiss-black/90 leading-[1.8] space-y-6 blog-content">
          {Array.isArray(post.content) ? (
            <BlocksRenderer content={post.content} />
          ) : (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          )}
        </div>

        <footer className="mt-24 pt-12 border-t border-swiss-black/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 text-swiss-dark-gray hover:text-swiss-blue transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="text-xs font-bold uppercase tracking-widest">Applaud</span>
              </button>
              <button className="flex items-center gap-2 text-swiss-dark-gray hover:text-swiss-blue transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6a3 3 0 100 2.684m0-2.684l6.632-3.316m0 0a3 3 0 101.342-2.684 3 3 0 00-1.342 2.684zm0 9.316a3 3 0 101.342 2.684 3 3 0 00-1.342-2.684z" />
                </svg>
                <span className="text-xs font-bold uppercase tracking-widest">Share</span>
              </button>
            </div>
            <Link href="/blog" className="text-xs font-bold uppercase tracking-[0.3em] text-swiss-blue hover:text-swiss-black transition-colors">
              Back to Journal
            </Link>
          </div>

          <div className="mt-20 p-10 bg-swiss-bg border border-swiss-black/5 rounded-sm flex flex-col md:flex-row items-center gap-8">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-swiss-blue/10 flex items-center justify-center shrink-0">
              <img src={post.author.avatar} alt={post.author.name} className="w-16 h-16 object-contain" />
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-xl font-display font-bold uppercase mb-2">Written by {post.author.name}</h4>
              <p className="text-swiss-dark-gray mb-6 max-w-lg">
                Managing Partner at Fin2Excel, overseeing the private wealth strategy for NRI families across 12 countries.
              </p>
              <button className="px-6 py-2 border border-swiss-black text-[10px] font-bold uppercase tracking-widest hover:bg-swiss-black hover:text-white transition-all">
                Follow Journal
              </button>
            </div>
          </div>
        </footer>
      </article>
    </div>
  )
}
