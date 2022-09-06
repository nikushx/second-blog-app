import Head from 'next/head';
import Link from 'next/link';
import { dummyDB } from '../../dummyDB';

export async function getStaticPaths() {
    return {
        paths: dummyDB.map((post) => ({
            params: {
                slug: post.slug
            }
        })),
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    return {
        props: {
            blogPost: dummyDB.find((post) => post.slug === params.slug)
        }
    }
}

export default function BlogPostPage({ blogPost }) {
  return (
    <div className={''}>
      <Head>
        <title>{blogPost.title}</title>
      </Head>
      <main className="max-w-4xl mx-auto pt-16">
        <Link href="/">
        <button className="p-2 rounded-full hover:bg-black hover:text-white border border-black mb-4">
            Back to Blog Posts Home
        </button></Link>
        <h1 className="text-3xl font-bold">{blogPost.title}</h1>
        <p className="text-black mt-8">{blogPost.content}</p>
      </main>
    </div>
  )
}
