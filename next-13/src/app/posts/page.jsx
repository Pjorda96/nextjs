import { Suspense } from 'react'
import Link from 'next/link'

const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' })
    .then(res => res.json());
}

export default async function Posts() {
  const posts = await fetchPosts();

  return (
    <section>
      <Suspense fallback={<p>Cargando posts...</p>}>
        {posts.slice(0, 5).map(post => (
          <article key={post.id}>
            <Link href="/posts/[id]" as={`/posts/${post.id}`}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </Link>
          </article>
        ))}
      </Suspense>
    </section>
  )
}
