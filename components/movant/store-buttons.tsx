import { cn } from '@/lib/utils'
import { PlayBadge } from './play-badge'

type StoreButtonsProps = {
  className?: string
}

// Moman se descarga desde Google Play.
export function StoreButtons({ className }: StoreButtonsProps) {
  return (
    <div className={cn('flex flex-col items-center gap-4', className)}>
      <PlayBadge />
    </div>
  )
}
