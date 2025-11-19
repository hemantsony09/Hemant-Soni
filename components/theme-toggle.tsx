"use client"

import { useEffect } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"

const THEME_STORAGE_KEY = "portfolio-theme"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  useEffect(() => {
    if (typeof window === "undefined") return
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)
    if (storedTheme && storedTheme !== theme) {
      setTheme(storedTheme)
    }
  }, [setTheme])

  useEffect(() => {
    if (typeof window === "undefined" || !theme) return
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
