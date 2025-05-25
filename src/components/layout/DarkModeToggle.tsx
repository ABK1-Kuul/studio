
"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react" 
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

export function DarkModeToggle() {
  const { setTheme, theme: activeTheme } = useTheme() 
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const CurrentThemeIcon = React.useCallback(() => {
    if (!mounted) { 
        return <Sun className="h-[1.2rem] w-[1.2rem]" />; 
    }
    
    let effectiveTheme = activeTheme;
    if (activeTheme === 'system') {
      const systemIsDark = typeof window !== 'undefined' && window.matchMedia("(prefers-color-scheme: dark)").matches;
      effectiveTheme = systemIsDark ? 'dark' : 'light';
    }

    if (effectiveTheme === "dark") {
        return <Moon className="h-[1.2rem] w-[1.2rem]" />;
    }
    return <Sun className="h-[1.2rem] w-[1.2rem]" />;
  }, [activeTheme, mounted]);


   if (!mounted) {
    return (
      <Button variant="outline" size="icon" disabled={true} aria-label="Loading theme switcher">
        <Sun className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Toggle theme">
          <CurrentThemeIcon />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40 max-h-96 overflow-y-auto"> 
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
