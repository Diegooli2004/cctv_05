import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { BlogPost } from "@/types/blog"

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="p-0">
        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={400}
          className="object-cover w-full h-48 rounded-t-lg"
        />
      </CardHeader>
      <CardContent className="flex-1 p-6">
        <Badge className="mb-2">{post.category}</Badge>
        <CardTitle className="text-2xl mb-2">
          <Link href={`/blog/${post.id}`} className="hover:underline">
            {post.title}
          </Link>
        </CardTitle>
        <CardDescription className="text-muted-foreground mb-4">
          {post.excerpt}
        </CardDescription>
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="w-4 h-4 mr-1" />
          <span className="mr-4">{post.date}</span>
          <Clock className="w-4 h-4 mr-1" />
          <span>{post.readTime}</span>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="ghost" className="w-full">
          <Link href={`/blog/${post.id}`}>
            Read More <ChevronRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}