'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'

export default function ProfileSidebar() {
  return (
    <Card className="h-full max-h-[600px] w-[300px] bg-white shadow-md">
      <div className="flex items-center justify-center pt-4">
        <Image
          src=""
          alt=""
          width={80}
          height={80}
          className="mb-2 rounded-full"
        />
      </div>
      <CardHeader>
        <CardTitle>Sarah Thomson</CardTitle>
        <CardDescription>Software Engineer</CardDescription>
      </CardHeader>
      <CardContent>
        <h3>My dashboard</h3>
        <p>Saved Jobs</p>
        <div className="">
          <h3>My Services</h3>
          <p>Post a job</p>
          <p>My job postings</p>
        </div>
      </CardContent>
    </Card>
  )
}
