
"use client"

import * as React from "react"
import { Palette, Moon, Sun, Leaf } from "lucide-react" 
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
    // This component might render on the server before theme is available,
    // or on client before activeTheme is determined.
    // The `mounted` state helps, but `activeTheme` can still be undefined initially.
    if (!activeTheme) { // Handles undefined activeTheme gracefully
        return <Sun className="h-[1.2rem] w-[1.2rem]" />; // Default icon
    }
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
    if (activeTheme === "eco-green" || activeTheme === "lemon-green" || activeTheme === "lemon-navy" || activeTheme === "lemon-grey-minimalist" || activeTheme === "green-authority") return <Leaf className="h-[1.2rem] w-[1.2rem]" />;
    return <Palette className="h-[1.2rem] w-[1.2rem]" />; 
  }, [activeTheme]);


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
        <DropdownMenuItem onClick={() => setTheme("lemon-grey-minimalist")}>
          Minimalist (Lemon/Grey)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("green-authority")}>
          Green Authority
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

