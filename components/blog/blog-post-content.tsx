"use client"

import { Calendar, Clock, Share2, ChevronUp } from "lucide-react"
import { useEffect, useState } from "react"

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

  const renderContent = (content: string) => {
    let sections = content.split('\n\n')
    
    return sections.map((section, index) => {
      // Handle headings with consistent styling
      if (section.startsWith('# ')) {
        const title = section.replace('# ', '')
        const id = title.toLowerCase().replace(/[^\w]+/g, '-')
        return (
          <h1 
            key={index} 
            id={id} 
            className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl mt-12 mb-6"
          >
            {title}
          </h1>
        )
      }
      
      if (section.startsWith('## ')) {
        const title = section.replace('## ', '')
        const id = title.toLowerCase().replace(/[^\w]+/g, '-')
        return (
          <h2 
            key={index} 
            id={id} 
            className="scroll-m-20 text-2xl font-semibold tracking-tight mt-10 mb-4"
          >
            {title}
          </h2>
        )
      }
      
      if (section.startsWith('### ')) {
        const title = section.replace('### ', '')
        const id = title.toLowerCase().replace(/[^\w]+/g, '-')
        return (
          <h3 
            key={index} 
            id={id} 
            className="scroll-m-20 text-xl font-semibold tracking-tight mt-8 mb-3"
          >
            {title}
          </h3>
        )
      }

      // Handle lists with improved spacing and styling
      if (section.startsWith('- ')) {
        const items = section.split('\n')
        return (
          <ul key={index} className="my-6 ml-6 list-disc space-y-3">
            {items.map((item, i) => (
              <li key={i} className="text-muted-foreground leading-relaxed">
                {item.replace('- ', '')}
              </li>
            ))}
          </ul>
        )
      }

      // Enhanced table styling
      if (section.includes('|')) {
        const rows = section.split('\n').filter(Boolean)
        return (
          <div key={index} className="my-8 overflow-x-auto rounded-lg border">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b bg-muted/50">
                  {rows[0].split('|').filter(Boolean).map((cell, i) => (
                    <th key={i} className="p-4 text-left font-semibold">{cell.trim()}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.slice(2).map((row, rowIndex) => (
                  <tr key={rowIndex} className="border-b last:border-0 hover:bg-muted/30 transition-colors">
                    {row.split('|').filter(Boolean).map((cell, cellIndex) => (
                      <td key={cellIndex} className="p-4">{cell.trim()}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      }

      // Regular paragraphs with improved spacing and readability
      return (
        <p key={index} className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground">
          {section}
        </p>
      )
    })
  }

  return (
    <div className="relative">
      {/* Rest of the component remains the same */}
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
        <div className="prose prose-lg max-w-none">
          {renderContent(post.content)}
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
