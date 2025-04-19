import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

type DetailCardProps = {
  title: string
  description: string
}

export default function DetailCard({ title, description }: DetailCardProps) {
  return (
    <div className="mt-1">
      <Card className="pb-15">
        <CardHeader>
          <CardTitle className="text-2xl">{title}</CardTitle>
        </CardHeader>
        <CardContent className="text-lg">
          <p>{description}</p>
        </CardContent>
      </Card>
    </div>
  )
}
