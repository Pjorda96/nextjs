import Image from 'next/image'

const fetchComments = async id => {
  await new Promise(resolve => setTimeout(resolve, 2000))

  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, { cache: 'no-store' })
    .then(res => res.json());
}

export default async function Comments({ params }) {
  const { id } = params;

  const comments = await fetchComments(id);

  return (
    <ul style={{ background: '#444', fontSize: '12px' }}>
      {comments.map(comment => (
        <li key={comment.id}>
          <Image
            src={`https://avatars.dicebear.com/api/pixel-art-neutral/${comment.email}.svg`}
            width={50}
            height={50}
            alt={comment.name}
          />
          <h4>{comment.name}</h4>
          <small>{comment.body}</small>
        </li>
      ))}
    </ul>
  )
}
