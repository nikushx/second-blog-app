import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { dummyDB } from '../dummyDB'

export default function Home() {
  return (
    <div className={''}>
      <Head>
        <title>Blog App</title>
      </Head>

      <main className={'max-w-4xl mx-auto pt-16'}>
        <h1 className="text-3xl font-bold">Blog Posts</h1>
        {dummyDB.map((post) => (
          <Link href={`/blog/${post.slug}`} passHref>
            <a
              key={post.slug}
              className="block my-8 border border-black p-4 rounded-lg hover:bg-black hover:text-white"
            >
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-500">
                {post.content.substring(0, 32)}...
              </p>
            </a>
          </Link>
        ))}
      </main>
    </div>
  )
}
