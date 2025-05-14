
"use client"

import * as React from "react"
import { Palette, Moon, Sun, Leaf } from "lucide-react" // Added Leaf for green themes
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
  const { setTheme, theme: activeTheme } = useTheme() // Renamed theme to activeTheme to avoid conflict
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const CurrentThemeIcon = React.useCallback(() => {
    if (activeTheme === "system") {
        return (
            <>
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </>
        );
    }
    if (activeTheme === "light") return <Sun className="h-[1.2rem] w-[1.2rem]" />;
    if (activeTheme === "dark") return <Moon className="h-[1.2rem] w-[1.2rem]" />;
    if (activeTheme === "eco-green" || activeTheme === "lemon-green" || activeTheme === "lemon-navy") return <Leaf className="h-[1.2rem] w-[1.2rem]" />;
    return <Palette className="h-[1.2rem] w-[1.2rem]" />; // Default for other custom themes
  }, [activeTheme]);


  // Placeholder for SSR and initial client render to prevent hydration mismatch
   if (!mounted) {
    return (
      <Button variant="outline" size="icon" disabled={true} aria-label="Loading theme switcher">
         {/* Use a static icon for placeholder to avoid hydration issues */}
        <Palette className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }
  
  // Actual component content when mounted
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Toggle theme">
          <CurrentThemeIcon />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Select Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System Default (Emerald)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light (Emerald)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark (Emerald)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("corporate-blue")}>
          Corporate (Blue/Grey)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("eco-green")}>
          Sustainability (Green/Charcoal)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("innovation-orange")}>
          Innovation (Orange/Navy)
        </DropdownMenuItem>
         <DropdownMenuItem onClick={() => setTheme("lemon-green")}>
          Modern (Lemon Green)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("lemon-navy")}>
          Bold (Lemon/Navy)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
