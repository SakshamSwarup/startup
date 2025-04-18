import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from '../ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Wand2,
  SearchCheck,
  Clock,
  MapPin,
  Target,
  Siren,
  UserCheck,
  MessageCircle,
  BadgeCheck,
  HandCoins,
  Contact,
} from 'lucide-react'

import Infocard from '../job/Infocard'

export default function RightColoumn() {
  return (
    <Card className="mt-6 w-full max-w-[500px] bg-white shadow-md">
      <CardHeader>
        <CardTitle className="text-justify text-2xl font-bold">
          Get Started Instantly
        </CardTitle>
      </CardHeader>
      <CardContent className="">
        <Infocard
          icon={
            <>
              <Target size={55} className="text-blue-600" />
            </>
          }
          title="Post a Job/ Task"
          description="Need help? Post your task in seconds."
          buttonText="Post Now"
        />

        <Infocard
          icon={
            <>
              <Contact size={55} className="text-blue-600" />
            </>
          }
          title="Browse Jobs & Services"
          description="Find tasks or services that matches your skills."
          buttonText="Explore Jobs"
        />
        <Infocard
          icon={
            <>
              <Siren size={55} className="text-blue-600" />
            </>
          }
          title="Urgent Help Needed?"
          description="Post emergency tasks or same-day help requests."
          buttonText="Request Urgent Help"
        />
      </CardContent>
    </Card>
  )
}
