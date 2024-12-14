import { Calendar, Clock, User } from "lucide-react"
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
  const [readingProgress, setReadingProgress] = useState(0)

  useEffect(() => {
    const updateReadingProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setReadingProgress(progress)
    }

    window.addEventListener('scroll', updateReadingProgress)
    return () => window.removeEventListener('scroll', updateReadingProgress)
  }, [])

  // Function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const renderContent = (content: string) => {
    const sections = content.split('\n\n').map((section, index) => {
      if (section.startsWith('# ')) {
        return <h1 key={index} className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl mb-6">{section.replace('# ', '')}</h1>
      }
      if (section.startsWith('## ')) {
        return <h2 key={index} className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4 mt-8">{section.replace('## ', '')}</h2>
      }
      if (section.startsWith('### ')) {
        return <h3 key={index} className="scroll-m-20 text-xl font-semibold tracking-tight mt-6 mb-2">{section.replace('### ', '')}</h3>
      }

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

      return <p key={index} className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground">{section}</p>
    })

    return sections
  }

  return (
    <>
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-muted z-50">
        <div 
          className="h-full bg-primary transition-all duration-200 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Category Badge */}
        <div className="mb-6">
          <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
            {post.category}
          </span>
        </div>

        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl mb-6">
          {post.title}
        </h1>
        
        {/* Author Info and Meta Section */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
              <User className="h-5 w-5" />
            </div>
            <div>
              <p className="font-medium text-foreground">{post.author}</p>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.date)}</span>
                <span>•</span>
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative w-full mb-10 rounded-lg overflow-hidden bg-muted">
          <div className="aspect-video">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-none">
          {renderContent(post.content)}
        </div>

        {/* Article Footer */}
        <div className="mt-16 pt-8 border-t">
          <h2 className="text-xl font-semibold mb-4">Share this article</h2>
          <div className="flex gap-4">
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              Twitter
            </button>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              LinkedIn
            </button>
          </div>
        </div>
      </article>
    </>
  )
}

export default BlogPostContent
