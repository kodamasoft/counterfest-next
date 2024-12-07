// app/(blog)/posts/[slug]/page.tsx

import { QueryParams } from "next-sanity";
import { notFound } from "next/navigation";
import { PROJECTS_QUERY, PROJECT_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/live";
import { PortableText } from "@portabletext/react";

export async function generateStaticParams() {
  const posts = await client.fetch(PROJECTS_QUERY);

  return posts.map((post) => ({
    slug: post?.slug?.current,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<QueryParams>;
}) {
  const { data: post } = await sanityFetch({
    query: PROJECT_QUERY,
    params: await params,
  });
  if (!post) {
    return notFound();
  }

  return (
    <main className="container mx-auto prose prose-lg dark:prose-invert p-4">
      <h1>{post.title}</h1>
      {/* @ts-expect-error value is not a valid prop */}
      <PortableText value={post.body} />
    </main>
  );
}