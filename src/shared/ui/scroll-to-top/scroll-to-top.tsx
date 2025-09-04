"use client"

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "lucide-react";

import { cn, SCROLL_CONSTANTS } from "@/shared/lib";

import { Button } from "../button";

type ScrollToProps = {
  className?: string
}

export function ScrollToTop({ className }: ScrollToProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > SCROLL_CONSTANTS.SHOW_BUTTON_OFFSET) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!isVisible) {
    return null
  }

  return (
    <Button
      onClick={handleScrollToTop}
      className={cn("fixed bottom-6 right-20 z-50 animate-bounce", className)}
      size="icon"
    >
      <ArrowUpIcon className="size-4" />
    </Button>
  )
}