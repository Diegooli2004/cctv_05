import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BlogHero } from "@/components/blog/blog-hero"
import { BlogPosts } from "@/components/blog/blog-posts"

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <BlogHero />
        <BlogPosts />
      </main>
      <Footer />
    </div>
  )
}