import * as React from "react"

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {}
interface CarouselContentProps extends React.HTMLAttributes<HTMLDivElement> {}
interface CarouselItemProps extends React.HTMLAttributes<HTMLDivElement> {}
interface CarouselNextProps extends React.HTMLAttributes<HTMLButtonElement> {}
interface CarouselPreviousProps extends React.HTMLAttributes<HTMLButtonElement> {}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(({ className, ...props }, ref) => {
  return <div className={`relative overflow-hidden w-full`} ref={ref} {...props} />
})
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<HTMLDivElement, CarouselContentProps>(({ className, ...props }, ref) => {
  return <div className={`flex snap-x snap-mandatory overflow-auto scroll-smooth`} ref={ref} {...props} />
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<HTMLDivElement, CarouselItemProps>(({ className, ...props }, ref) => {
  return <div className={`snap-start shrink-0`} ref={ref} {...props} />
})
CarouselItem.displayName = "CarouselItem"

const CarouselNext = React.forwardRef<HTMLButtonElement, CarouselNextProps>(({ className, ...props }, ref) => {
  return (
    <button
      className={`absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full`}
      ref={ref}
      {...props}
    >
      Next
    </button>
  )
})
CarouselNext.displayName = "CarouselNext"

const CarouselPrevious = React.forwardRef<HTMLButtonElement, CarouselPreviousProps>(({ className, ...props }, ref) => {
  return (
    <button
      className={`absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full`}
      ref={ref}
      {...props}
    >
      Previous
    </button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

export { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious }

