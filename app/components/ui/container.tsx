import * as React from 'react'
import { cn } from '@/app/lib/utils'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, maxWidth = 'full', padding = 'md', ...props }, ref) => {
    const maxWidthClasses = {
      sm: 'max-w-screen-sm',
      md: 'max-w-screen-md',
      lg: 'max-w-screen-lg',
      xl: 'max-w-container-max',
      full: 'max-w-full',
    }

    const paddingClasses = {
      none: '',
      sm: 'px-margin-mobile',
      md: 'px-margin-desktop',
      lg: 'px-margin-desktop py-section-gap-lg',
    }

    return (
      <div
        ref={ref}
        className={cn(
          'mx-auto w-full',
          maxWidthClasses[maxWidth],
          paddingClasses[padding],
          className
        )}
        {...props}
      />
    )
  }
)
Container.displayName = 'Container'

export { Container }