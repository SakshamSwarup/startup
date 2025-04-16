import { Card, CardTitle, CardHeader, CardContent } from '../ui/card'
import { Button } from '../ui/button'
import { Search, Briefcase } from 'lucide-react'

export default function CalltoAction() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold">
          Call to Action
        </CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-between gap-2">
        <Button className=" ">
          <Search />
          Find You a Job
        </Button>
        <Button>
          <Briefcase /> Post a Job
        </Button>
      </CardContent>
    </Card>
  )
}
