"use client"

import { memo, useEffect, useLayoutEffect, useState } from "react"
import type { LucideIcon } from "lucide-react"
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

function useMediaQuery(query: string, defaultValue = false): boolean {
  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined") return defaultValue
    return window.matchMedia(query).matches
  })

  useIsomorphicLayoutEffect(() => {
    const mql = window.matchMedia(query)
    const handler = () => setMatches(mql.matches)
    handler()
    mql.addEventListener("change", handler)
    return () => mql.removeEventListener("change", handler)
  }, [query])

  return matches
}

export interface CarouselCard {
  icon: LucideIcon
  title: string
  description: string
}

interface CarouselCylinderProps {
  controls: ReturnType<typeof useAnimation>
  cards: CarouselCard[]
}

const CarouselCylinder = memo(({ controls, cards }: CarouselCylinderProps) => {
  const isSmall = useMediaQuery("(max-width: 640px)")
  const cylinderWidth = isSmall ? 600 : 1000
  const faceCount = cards.length
  const faceWidth = cylinderWidth / faceCount
  const radius = cylinderWidth / (2 * Math.PI)
  const rotation = useMotionValue(0)
  const transform = useTransform(
    rotation,
    (value) => `rotate3d(0, 1, 0, ${value}deg)`
  )

  return (
    <div className="flex h-[280px] items-center justify-center overflow-hidden md:h-[350px]">
      <div className="relative flex h-full w-full items-center justify-center" style={{ perspective: "1000px" }}>
        <motion.div
          drag="x"
          className="relative flex h-full w-full items-center justify-center"
          style={{
            transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          onDrag={(_, info) => {
            rotation.set(rotation.get() + info.offset.x * 0.05)
          }}
          onDragEnd={(_, info) => {
            controls.start({
              rotateY: rotation.get() + info.velocity.x * 0.05,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 30,
                mass: 0.1,
              },
            })
          }}
          animate={controls}
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="absolute flex h-full items-center justify-center"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${i * (360 / faceCount)}deg) translateZ(${radius}px)`,
              }}
            >
              <Card className="mx-2 w-[200px] md:w-[260px] select-none cursor-grab active:cursor-grabbing">
                <CardHeader>
                  <card.icon className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{card.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
})

CarouselCylinder.displayName = "CarouselCylinder"

function ThreeDCardCarousel({ cards }: { cards: CarouselCard[] }) {
  const controls = useAnimation()

  return (
    <div className="relative w-full">
      <CarouselCylinder controls={controls} cards={cards} />
      <p className="text-center text-sm text-muted-foreground mt-2">
        Arrastra para girar ↔
      </p>
    </div>
  )
}

export { ThreeDCardCarousel }
