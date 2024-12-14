import { Calendar, Clock } from "lucide-react"

interface BlogPostContentProps {
  post: {
    title: string
    author: string
    date: string
    readTime: string
    content: string
    image: string
  }
}

const BlogPostContent = ({ post }: BlogPostContentProps) => {
  const renderContent = (content: string) => {
    const sections = content.split('\n\n').map((section, index) => {
      // Handle headings
      if (section.startsWith('# ')) {
        return <h1 key={index} className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl mb-6">{section.replace('# ', '')}</h1>
      }
      if (section.startsWith('## ')) {
        return <h2 key={index} className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4 mt-8">{section.replace('## ', '')}</h2>
      }
      if (section.startsWith('### ')) {
        return <h3 key={index} className="scroll-m-20 text-xl font-semibold tracking-tight mt-6 mb-2">{section.replace('### ', '')}</h3>
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
        const rows = section.split('\n').filter(row => row.trim() !== '')
        return (
          <div key={index} className="my-6 w-full overflow-y-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="m-0 border-t p-0 even:bg-muted">
                  {rows[0].split('|').map((cell, cellIndex) => (
                    <th key={cellIndex} className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                      {cell.trim()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.slice(2).map((row, rowIndex) => (
                  <tr key={rowIndex} className="m-0 border-t p-0 even:bg-muted">
                    {row.split('|').map((cell, cellIndex) => (
                      <td key={cellIndex} className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        {cell.trim()}
                      </td>
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
    <article className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl mb-4">
        {post.title}
      </h1>
      
      <div className="flex items-center text-sm text-muted-foreground mb-6">
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

      <div className="max-w-none">
        {renderContent(post.content)}
      </div>
    </article>
  )
}

export default BlogPostContent
