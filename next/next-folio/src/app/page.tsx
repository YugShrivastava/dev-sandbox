import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import type { Post } from "@/types/types"
import { Card, CardContent } from "@/components/ui/card";
import prisma from "@/lib/db";
import { ThemeSwitcher } from "@/components/custom/theme-switcher";

export default async function Home() {
    const posts: Post[] = await prisma.blogPost.findMany({
        orderBy: {createdAt: "desc"},
        take: 3
    })

    return (
        <main className="min-h-screen relative">
            <div className="fixed top-6 right-6 z-50">
                <ThemeSwitcher />
            </div>
            <section className="flex flex-col items-center justify-center py-20 px-4 text-center">
                <h1 className="text-4xl font-bold mb-4">
                    Hi, I&apos;m Yug Shrivastava
                </h1>
                <p className="text-muted-foreground text-lg max-w-md mb-6">
                    A full-stack developer passionate about building great web
                    experiences.
                </p>
                <div className="flex gap-4">
                    <Button asChild>
                        <Link href="/blog">Read Blog</Link>
                    </Button>
                    <Button variant="outline" asChild>
                        <Link href="/comments">
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Contact Me
                        </Link>
                    </Button>
                </div>
            </section>

            <section className="py-16 px-4 max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold mb-4">About Me</h2>
                <p className="text-muted-foreground">
                    I work with React, Next.js, and TypeScript. I may not have
                    years of experience yet, but I do have strong opinions, a
                    lot of curiosity, and a stubborn refusal to give up until it
                    works.
                </p>
            </section>

            <section className="py-16 px-4 max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold mb-4">Recent Posts</h2>
                {posts.length > 0 ? (
                    <div className="flex flex-col gap-4">
                        {posts.map((post) => (
                            <Card
                                key={post.id}
                                className="hover:bg-accent transition-colors"
                            >
                                <Link href={"/blog/" + post.slug}>
                                    <CardContent className="p-4">
                                        <h3 className="font-semibold">
                                            {post.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {new Date(
                                                post.createdAt,
                                            ).toLocaleDateString()}
                                        </p>
                                    </CardContent>
                                </Link>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <div className="text-muted-foreground">No posts yet.</div>
                )}
                <Button variant="link" asChild className="mt-4 px-0">
                    <Link href="/blog">
                        View all posts <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                </Button>
            </section>
        </main>
    );
}
