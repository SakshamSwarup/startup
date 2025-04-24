'use client'

import { Input } from '@/components/ui/input'
import { Bell, Mail, Briefcase, Home } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'

export default function TopNav() {
  return (
    <header className="sticky top-0 z-50 flex w-full items-center justify-between border-b bg-white px-6 py-6">
      <div className="flex items-center gap-4">
        <Link href="/#" className="flex items-center gap-2 text-xl">
          <Home size={20} /> Home
        </Link>
        <div className="">
          <Input
            type="search"
            placeholder="Search"
            className="w-[300px] md:w-[400px]"
          />
        </div>
      </div>

      <div className="flex items-center gap-7">
        <NavIcon icon={Home} label="Home" href="./dashborad" />
        <NavIcon icon={Briefcase} label="Jobs" href="#" />
        <NavIcon icon={Mail} label="Messages" href="#" />
        <NavIcon icon={Bell} label="Notifications" href="#" />

        <Link href="/profile">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/profile.jpg" alt="Profile" />
            <AvatarFallback>ME</AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </header>
  )
}

function NavIcon({
  icon: Icon,
  label,
  href,
}: {
  icon: any
  label: string
  href: string
}) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center text-sm text-gray-600 hover:text-blue-600"
    >
      <Icon className="h-5 w-5" />
      <span className="text-xs">{label}</span>
    </Link>
  )
}
