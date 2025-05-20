
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
    
    const systemIsDark = typeof window !== 'undefined' && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const currentEffectiveTheme = activeTheme === 'system' ? (systemIsDark ? 'dark' : 'light') : activeTheme;


    if (currentEffectiveTheme === "light") return <Sun className="h-[1.2rem] w-[1.2rem]" />;
    if (currentEffectiveTheme === "dark") return <Moon className="h-[1.2rem] w-[1.2rem]" />;
    if (["eco-green", "lemon-green", "lemon-navy", "lemon-grey-minimalist", "green-authority"].includes(currentEffectiveTheme)) return <Leaf className="h-[1.2rem] w-[1.2rem]" />;
    
    if (currentEffectiveTheme.startsWith("orange-") || ["corporate-blue", "innovation-orange"].includes(currentEffectiveTheme) ) return <Palette className="h-[1.2rem] w-[1.2rem]" />;
    
    if (activeTheme === 'system') return systemIsDark ? <Moon className="h-[1.2rem] w-[1.2rem]" /> : <Sun className="h-[1.2rem] w-[1.2rem]" />;

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
      <DropdownMenuContent align="end" className="w-56 max-h-96 overflow-y-auto"> 
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
          Orange + #C7EA46
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

    