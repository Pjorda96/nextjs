import Link from 'next/link'

const links = [
  { label: 'Home', route: '/' },
  { label: 'About', route: '/about' },
  { label: 'Posts', route: '/posts' },
];

export default function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          {links.map(({ label, route }) => <li key={route}><Link href={route}>{label}</Link></li>)}
        </ul>
      </nav>
    </header>
  )
}
