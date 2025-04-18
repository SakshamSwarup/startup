import { Card, CardTitle, CardHeader, CardContent } from '../ui/card'
import { Button } from '../ui/button'
import { Search, Briefcase } from 'lucide-react'

export default function CalltoAction() {
  return (
    <Card className="mt-6 mb-5">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold">
          What do you want to do?
        </CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-center gap-2">
        <Button variant={'outline'} className="px-5 py-6 text-sm">
          <Search />
          Find You a Job
        </Button>
        <Button className="px-5 py-6 text-sm">
          <Briefcase /> Post a Job
        </Button>
      </CardContent>
    </Card>
  )
}
