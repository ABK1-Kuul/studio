
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
    if (!activeTheme || !mounted) { 
        return <Sun className="h-[1.2rem] w-[1.2rem]" />; 
    }
    if (activeTheme === "system") {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        if (systemTheme === "dark") return <Moon className="h-[1.2rem] w-[1.2rem]" />;
        return <Sun className="h-[1.2rem] w-[1.2rem]" />;
    }
    if (activeTheme === "light") return <Sun className="h-[1.2rem] w-[1.2rem]" />;
    if (activeTheme === "dark") return <Moon className="h-[1.2rem] w-[1.2rem]" />;
    if (activeTheme === "eco-green" || activeTheme === "lemon-green" || activeTheme === "lemon-navy" || activeTheme === "lemon-grey-minimalist" || activeTheme === "green-authority") return <Leaf className="h-[1.2rem] w-[1.2rem]" />;
    // For orange themes and other custom themes, use Palette
    if (activeTheme.startsWith("orange-") || activeTheme === "corporate-blue" || activeTheme === "innovation-orange") return <Palette className="h-[1.2rem] w-[1.2rem]" />;
    return <Sun className="h-[1.2rem] w-[1.2rem]" />; // Default fallback
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
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Orange Series</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => setTheme("orange-emerald")}>
          Orange + Emerald
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("orange-sage")}>
          Orange + Sage
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("orange-dark-teal")}>
          Orange + Dark Teal
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("orange-teal")}>
          Orange + Teal
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

    