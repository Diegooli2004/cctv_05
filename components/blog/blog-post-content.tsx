"use client"

import { Calendar, Clock, Share2, ChevronUp } from "lucide-react"
import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

interface BlogPostContentProps {
  post: {
    title: string
    author: string
    date: string
    readTime: string
    content: string
    image: string
    category: string
  }
}

const BlogPostContent = ({ post }: BlogPostContentProps) => {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [tableOfContents, setTableOfContents] = useState<Array<{ id: string; title: string; level: number }>>([])

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', checkScroll)
    return () => window.removeEventListener('scroll', checkScroll)
  }, [])

  useEffect(() => {
    // Generate table of contents from content
    const headings = post.content.split('\n')
      .filter(line => line.startsWith('#'))
      .map(line => {
        const level = line.match(/^#+/)?.[0].length || 1
        const title = line.replace(/^#+\s/, '')
        const id = title.toLowerCase().replace(/[^\w]+/g, '-')
        return { id, title, level }
      })
    setTableOfContents(headings)
  }, [post.content])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="relative">
      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Category Badge */}
        <div className="mb-4">
          <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
            {post.category}
          </span>
        </div>

        {/* Title and metadata */}
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl mb-4">
          {post.title}
        </h1>
        
        <div className="flex items-center text-sm text-muted-foreground mb-8 pb-8 border-b">
          <span>By {post.author}</span>
          <span className="mx-2">•</span>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{post.date}</span>
          </div>
          <span className="mx-2">•</span>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Feature image */}
        <div className="relative w-full mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-auto rounded-lg object-cover aspect-video"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              table: ({ node, ...props }) => (
                <table className="border-collapse table-auto w-full" {...props} />
              ),
              thead: ({ node, ...props }) => (
                <thead className="bg-muted/50" {...props} />
              ),
              tr: ({ node, ...props }) => (
                <tr className="border-b border-border hover:bg-muted/30 transition-colors" {...props} />
              ),
              th: ({ node, ...props }) => (
                <th className="p-4 text-left font-semibold" {...props} />
              ),
              td: ({ node, ...props }) => (
                <td className="p-4 border-b border-border" {...props} />
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Social Share */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex items-center gap-4">
            <span className="font-medium">Share this article:</span>
            <button 
              onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
              className="p-2 rounded-full hover:bg-muted transition-colors"
            >
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </article>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-2 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-colors"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </div>
  )
}

export default BlogPostContent
