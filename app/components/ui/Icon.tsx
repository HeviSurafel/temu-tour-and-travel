import * as React from 'react'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/app/lib/utils'

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  icon: LucideIcon
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?: string
}

const Icon = React.forwardRef<HTMLSpanElement, IconProps>(
  ({ icon: IconComponent, className, size = 'md', color, ...props }, ref) => {
    const sizeClasses = {
      sm: 'h-4 w-4',
      md: 'h-6 w-6',
      lg: 'h-8 w-8',
      xl: 'h-10 w-10',
    }

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center',
          sizeClasses[size],
          className
        )}
        {...props}
      >
        <IconComponent className={cn(sizeClasses[size], color)} />
      </span>
    )
  }
)
Icon.displayName = 'Icon'

export { Icon }