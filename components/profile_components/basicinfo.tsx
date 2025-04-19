import {
  Card,
  CardDescription,
  CardHeader,
  CardContent,
  CardTitle,
} from '@/components/ui/card'

import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { ShieldCheck } from 'lucide-react'
import DetailCard from './detail_card'

export default function Basicinfo() {
  return (
    <div>
      <Card className="m-0 overflow-hidden rounded-2xl p-0 pb-15">
        <div>
          <div className="h-50 rounded-t-2xl bg-gradient-to-r from-blue-500 to-purple-600"></div>
          <div className="-mt-12 ml-6 flex w-fit justify-center border-4 border-black">
            <Avatar className="h-50 w-50 rounded-full border-4 border-white">
              <AvatarImage
                className="object-cover"
                src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                alt="Profile Picture"
              />
            </Avatar>
          </div>
        </div>
        <CardHeader>
          <CardTitle className="text-4xl">
            <div className="flex flex-row items-center gap-2">
              Basic Information
              <ShieldCheck className="mt-2.5" />
            </div>
          </CardTitle>
          <CardDescription className="text-lg">
            <p className="text-xl text-zinc-600">
              Here you can find the basic information about the user.
            </p>
            <p className="text-lg">📍Location</p>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center gap-4 text-lg">
          <div className="mt-10 mb-10 flex flex-row items-start justify-center gap-x-96">
            <div className="flex flex-col items-center">
              <h1>Total Jobs</h1>
              <h2>0</h2>
            </div>
            <div className="flex flex-col items-center">
              <h1>Total Volunteers Jobs</h1>
              <h2>0</h2>
            </div>

            <div className="flex flex-col items-center text-wrap">
              <h1>Average Rating</h1>
              <h2>4.3/5</h2>
            </div>
          </div>
        </CardContent>
      </Card>

      <DetailCard
        title="About Me"
        description="Lorem ipsum dolor sit amet 24e953b920a9cd0ff2e1d587742a2472"
      />
      <DetailCard
        title="Education"
        description="Lorem ipsum dolor sit amet 24e953b920a9cd0ff2e1d587742a2472"
      />
      <DetailCard
        title="Education"
        description="Lorem ipsum dolor sit amet 24e953b920a9cd0ff2e1d587742a2472"
      />
    </div>
  )
}
