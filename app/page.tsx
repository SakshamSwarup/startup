import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div>
        <Link href={'/dashborad'}>Go to Dasboard</Link>
        <br />
        <Link href={'/profile'}>Go to Profile</Link>
      </div>
    </>
  )
}
