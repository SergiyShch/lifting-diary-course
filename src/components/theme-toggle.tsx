"use client"

import { useTheme } from "next-themes"
import { Moon, Sun, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-36 p-1" align="end">
        <Button
          variant={theme === "light" ? "secondary" : "ghost"}
          className="w-full justify-start gap-2"
          onClick={() => setTheme("light")}
        >
          <Sun className="h-4 w-4" />
          Light
        </Button>
        <Button
          variant={theme === "dark" ? "secondary" : "ghost"}
          className="w-full justify-start gap-2"
          onClick={() => setTheme("dark")}
        >
          <Moon className="h-4 w-4" />
          Dark
        </Button>
        <Button
          variant={theme === "system" ? "secondary" : "ghost"}
          className="w-full justify-start gap-2"
          onClick={() => setTheme("system")}
        >
          <Monitor className="h-4 w-4" />
          System
        </Button>
      </PopoverContent>
    </Popover>
  )
}
