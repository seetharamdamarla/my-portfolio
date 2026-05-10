import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface Post {
  id: string;
  title: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  url?: string;
  image: string;
}

interface Blog7Props {
  tagline: string;
  heading: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  posts: Post[];
}

const Blog7 = ({
  tagline = "Latest Updates",
  heading = "Blog Posts",
  description = "Discover the latest trends, tips, and best practices in modern web development.",
  buttonText = "View all articles",
  buttonUrl = "#",
  posts = [],
}: Blog7Props) => {
  return (
    <section className="py-16 md:py-20 bg-black">
      <div className="container mx-auto flex flex-col items-center gap-10 md:gap-12 lg:px-16">
        <div className="text-center">
          {tagline && (
            <Badge variant="secondary" className="mb-4 bg-neutral-900 text-[#a07cf6] border-neutral-800">
              {tagline}
            </Badge>
          )}
          <h2 className="mb-2 text-pretty text-3xl font-bold md:mb-3 md:text-4xl lg:mb-4 lg:max-w-3xl lg:text-5xl tracking-tight text-white">
            {heading}
          </h2>
          {description && (
            <p className="mb-6 text-neutral-400 md:text-sm lg:max-w-2xl lg:text-base">
              {description}
            </p>
          )}
          {buttonText && (
            <Button variant="link" className="w-full sm:w-auto text-[#a07cf6] hover:text-[#b794f4]" asChild>
              <a href={buttonUrl} target="_blank">
                {buttonText}
                <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
          )}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {posts.map((post) => (
            <Card key={post.id} className="grid grid-rows-[auto_1fr] bg-[#0a0a0a] border-neutral-800 transition-colors hover:border-neutral-700 overflow-hidden">
              <div className="aspect-[16/10] w-full bg-neutral-900">
                {post.url ? (
                  <a
                    href={post.url}
                    target="_blank"
                    className="transition-opacity duration-200 fade-in hover:opacity-70 h-full w-full block"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover object-top"
                    />
                  </a>
                ) : (
                  <div className="h-full w-full block">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                )}
              </div>
              <div className="flex flex-col">
                <CardHeader className="p-4 md:p-5">
                  <h3 className={cn("text-base font-bold md:text-lg text-white", post.url && "hover:underline")}>
                    {post.url ? (
                      <a href={post.url} target="_blank">
                        {post.title}
                      </a>
                    ) : (
                      post.title
                    )}
                  </h3>
                </CardHeader>
                <CardContent className="p-4 md:p-5 pt-0">
                  <p className="text-sm text-neutral-400 line-clamp-4">{post.summary}</p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Blog7 };
