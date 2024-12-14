import { Metadata } from "next"
import { notFound } from "next/navigation"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { blogPosts } from "@/data/blog-posts"
import BlogPostContent from "@/components/blog/blog-post-content"

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.id.toString() === params.id)
  
  if (!post) {
    return {
      title: "Blog Post Not Found",
    }
  }

  return {
    title: `${post.title} - CCTV Installation Blog`,
    description: post.excerpt,
  }
}

// Add this export to generate static paths
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }))
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.id.toString() === params.id)

  if (!post) {
    notFound()
  }

  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: post.title, href: `/blog/${post.id}` },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
        <BlogPostContent post={post} />
      </main>
      <Footer />
    </div>
  )
}
