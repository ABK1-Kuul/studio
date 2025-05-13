"use client"

import * as React from "react"
import { Palette, Moon, Sun } from "lucide-react" // Changed to Palette icon
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
  const { setTheme, theme, resolvedTheme } = useTheme()

  // Determine which icon to show based on the resolved system theme for the toggle button
  const ShowIcon = () => {
    if (resolvedTheme === 'dark') {
      return <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />;
    }
    return <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />;
  };


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          {/* Conditionally render Sun or Moon based on resolvedTheme if current theme is 'system' */}
          {/* Otherwise, show a generic Palette icon if a specific theme is chosen */}
          {theme === "system" ? (
            <>
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </>
          ) : (
            <Palette className="h-[1.2rem] w-[1.2rem]" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Select Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System Default (Emerald)
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
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
