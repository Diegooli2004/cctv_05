import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Calendar, Clock, ChevronRight, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { blogPosts } from "@/data/blog-posts"

const truncateText = (text: string, length: number) => {
  if (text.length <= length) return text
  return text.substring(0, length).trim() + '...'
}

export function BlogPosts() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 max-w-7xl mx-auto">
          {blogPosts.map((post) => (
            <Link 
              href={`/blog/${post.id}`} 
              key={post.id} 
              className="group block"
            >
              <Card className="flex flex-col h-full transition-all duration-200 ease-in-out hover:shadow-lg hover:-translate-y-1 overflow-hidden">
                <CardHeader className="p-0">
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={338}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                      priority={true}
                    />
                  </div>
                </CardHeader>
                <CardContent className="flex-1 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground space-x-4">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <CardTitle className="text-xl sm:text-2xl mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {truncateText(post.title, 80)}
                  </CardTitle>

                  <CardDescription className="text-muted-foreground mb-6 line-clamp-3">
                    {truncateText(post.excerpt, 160)}
                  </CardDescription>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t">
                    <div className="flex items-center">
                      <Avatar className="h-8 w-8 mr-2">
                        <AvatarFallback>
                          <User className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">{post.author}</span>
                    </div>
                    <span className="text-primary text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform">
                      Read More <ChevronRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
