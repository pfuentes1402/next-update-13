import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-5xl font-bold">
        Next 13+
      </h1>
      <Link href="/about">
        <span className='text-2xl'>About Page</span>
      </Link>
    </main>
  )
}
