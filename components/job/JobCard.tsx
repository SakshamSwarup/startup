import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

type JobCardProps = {
  title: string
  company: string
  location: string
  rate: string
  badges: string[]
  brief: string
  postedAgo: string
  bidsCount: number
}

export default function JobCard({
  title,
  company,
  location,
  rate,
  badges,
  brief,
  postedAgo,
  bidsCount,
}: JobCardProps) {
  return (
    <div className="w-full max-w-lg space-y-2 rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-md font-semibold">{title}</h3>
          <p className="text-sm text-gray-600">{company}</p>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
        <div className="text-sm font-semibold text-green-600">{rate}</div>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2">
        {badges.map((badge) => (
          <Badge key={badge} variant="outline" className="text-xs">
            {badge}
          </Badge>
        ))}
      </div>

      {/* Brief */}

      <div className="text-sm text-wrap text-gray-600">{brief}</div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2">
        <p className="text-xs text-gray-500">
          Posted {postedAgo} · {bidsCount} bids
        </p>
        <Button size="sm">Place Bid</Button>
      </div>
    </div>
  )
}
