import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { Button } from '@/components/ui/button'

type InfocardProps = {
  icon: ReactNode
  title: string
  description: string
  buttonText: string
}
export default function Infocard({
  icon,
  title,
  description,
  buttonText,
}: InfocardProps) {
  return (
    <Card className="mt-6 mb-2.5 bg-white p-4 shadow-md">
      <CardHeader className="flex flex-row items-center justify-between gap-5 space-y-0 p-4">
        {/* Icon */}
        <div>{icon}</div>

        {/* Text Content */}
        <div className="flex w-full flex-grow flex-col justify-center">
          <CardTitle className="mb-2 text-base text-xl/tight font-semibold">
            {title}
          </CardTitle>
          <CardDescription className="text-muted-foreground text-left text-sm">
            {description}
          </CardDescription>
        </div>

        {/* Button */}
        <Button>{buttonText}</Button>
      </CardHeader>
    </Card>
  )
}
