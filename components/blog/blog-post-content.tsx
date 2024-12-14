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
    const sections = content.split('\n\n').map((section, index) => {
      // Handle headings with IDs for navigation
      if (section.startsWith('# ')) {
        const title = section.replace('# ', '')
        const id = title.toLowerCase().replace(/[^\w]+/g, '-')
        return <h1 key={index} id={id} className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl mb-6">{title}</h1>
      }
      if (section.startsWith('## ')) {
        const title = section.replace('## ', '')
        const id = title.toLowerCase().replace(/[^\w]+/g, '-')
        return <h2 key={index} id={id} className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4 mt-8">{title}</h2>
      }
      if (section.startsWith('### ')) {
        const title = section.replace('### ', '')
        const id = title.toLowerCase().replace(/[^\w]+/g, '-')
        return <h3 key={index} id={id} className="scroll-m-20 text-xl font-semibold tracking-tight mt-6 mb-2">{title}</h3>
      }

      // Handle lists
      if (section.startsWith('- ')) {
        const items = section.split('\n')
        return (
          <ul key={index} className="my-6 ml-6 list-disc [&>li]:mt-2">
            {items.map((item, i) => (
              <li key={i} className="text-muted-foreground">{item.replace('- ', '')}</li>
            ))}
          </ul>
        )
      }

      // Handle tables
      if (section.includes('|')) {
        const rows = section.split('\n').filter(Boolean)
        return (
          <div key={index} className="my-6 overflow-x-auto rounded-lg border">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b bg-muted/50">
                  {rows[0].split('|').filter(Boolean).map((cell, i) => (
                    <th key={i} className="p-4 text-left font-medium">{cell.trim()}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.slice(2).map((row, rowIndex) => (
                  <tr key={rowIndex} className="border-b last:border-0">
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

      // Regular paragraphs
      return <p key={index} className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground">{section}</p>
    })

    return sections
  }

  return (
    <div className="relative">
      {/* Table of Contents - Desktop */}
      <div className="hidden xl:block absolute left-0 top-0 w-64 h-full">
        <div className="sticky top-24 p-6 rounded-lg border bg-card">
          <h4 className="font-semibold mb-4">Table of Contents</h4>
          <nav className="space-y-2">
            {tableOfContents.map((item, index) => (
              <a
                key={index}
                href={`#${item.id}`}
                className={`block text-sm text-muted-foreground hover:text-foreground transition-colors ${
                  item.level === 2 ? 'pl-4' : item.level === 3 ? 'pl-8' : ''
                }`}
              >
                {item.title}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Category Badge */}
        <div className="mb-4">
          <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
            {post.category}
          </span>
        </div>

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

        <div className="relative w-full mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-auto rounded-lg object-cover aspect-video"
          />
        </div>

        {/* Mobile Table of Contents */}
        <div className="xl:hidden mb-8 p-4 rounded-lg border bg-card">
          <h4 className="font-semibold mb-4">Table of Contents</h4>
          <nav className="space-y-2">
            {tableOfContents.map((item, index) => (
              <a
                key={index}
                href={`#${item.id}`}
                className={`block text-sm text-muted-foreground hover:text-foreground transition-colors ${
                  item.level === 2 ? 'pl-4' : item.level === 3 ? 'pl-8' : ''
                }`}
              >
                {item.title}
              </a>
            ))}
          </nav>
        </div>

        <div className="max-w-none">
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
