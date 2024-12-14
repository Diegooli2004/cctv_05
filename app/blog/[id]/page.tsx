import { Metadata } from "next"
import { notFound } from "next/navigation"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { blogPosts } from "@/data/blog-posts"
import { Calendar, Clock } from "lucide-react"
import Image from "next/image"
import ReactMarkdown from 'react-markdown'
import { constructMetadata } from "@/components/seo/metadata"

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.id.toString() === params.id)
  
  if (!post) {
    return constructMetadata({})
  }

  return constructMetadata({
    title: `${post.title} - CCTV Installation Blog`,
    description: post.excerpt,
    image: post.image,
    type: "article",
  })
}

export function generateStaticParams() {
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
        <article className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={400}
                className="rounded-lg object-cover w-full aspect-video"
              />
            </div>
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center text-sm text-muted-foreground mb-8">
              <Calendar className="w-4 h-4 mr-1" />
              <span className="mr-4">{post.date}</span>
              <Clock className="w-4 h-4 mr-1" />
              <span>{post.readTime}</span>
            </div>
            <div className="prose prose-neutral max-w-none">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}