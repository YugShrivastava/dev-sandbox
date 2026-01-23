import prisma from "@/lib/db";

async function main() {
    await prisma.blogPost.deleteMany()

    const blogPosts = [
        {
            title: "Midnight Ideas",
            content:
                "The best ideas show up when the world is quiet.\nSleep can wait. Curiosity can’t.",
            createdAt: new Date(),
            slug: "midnight-ideas",
        },
        {
            title: "Coffee First, Logic Later",
            content:
                "Nothing meaningful happens before the first cup.\nAfter that, anything is possible.",
            createdAt: new Date(),
            slug: "coffee-first-logic-later",
        },
        {
            title: "Tiny Wins Matter",
            content:
                "Big goals are just small wins stacked together.\nCelebrate progress, not perfection.",
            createdAt: new Date(),
            slug: "tiny-wins-matter",
        },
        {
            title: "Debugging Life",
            content:
                "Some problems disappear when you step back.\nOthers need a break and fresh eyes.",
            createdAt: new Date(),
            slug: "debugging-life",
        },
        {
            title: "Stay Curious",
            content:
                "Curiosity keeps things interesting.\nIt’s the fastest way to grow without noticing.",
            createdAt: new Date(),
            slug: "stay-curious",
        },
    ];


    for(const post of blogPosts) {
        await prisma.blogPost.create({
            data: post
        })
    }

    await prisma.comment.deleteMany();

    console.log("Seed data inserted successfully...")
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })