"use client"

import React, { useEffect, useRef, useState } from "react"
import { Filter, ChevronDown } from "lucide-react"

export type FilterOptionItem = {
  value: string
  label: string
}

interface FilterOptionProps {
  title?: string
  options: FilterOptionItem[]
  selected?: string[]
  onChange?: (selected: string[]) => void
  multi?: boolean
}

export default function FilterOption({
  title = "Filter",
  options,
  selected: selectedProp,
  onChange,
  multi = true,
}: FilterOptionProps) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<string[]>(selectedProp ?? [])
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (!ref.current) return
      if (!ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  function toggleValue(val: string) {
    if (multi) {
      const next = selected.includes(val) ? selected.filter((v) => v !== val) : [...selected, val]
      setSelected(next)
      onChange?.(next)
    } else {
      const next = selected.includes(val) ? [] : [val]
      setSelected(next)
      onChange?.(next)
      setOpen(false)
    }
  }

  const selectedCount = selected.length

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded-md border border-input bg-transparent px-2 py-1 text-sm hover:bg-accent"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <span className="text-sm">{title}</span>
        {selectedCount > 0 && (
          <span className="ml-1 inline-flex items-center justify-center rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium">
            {selectedCount}
          </span>
        )}
        <ChevronDown className={`ml-1 size-4 transition-transform ${open ? "-rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-56 rounded-md border bg-background p-2 shadow-lg">
          <div className="flex flex-col gap-1 max-h-64 overflow-y-auto">
            {options.map((opt) => (
              <label
                key={opt.value}
                className="flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1 hover:bg-accent"
              >
                <input
                  type="checkbox"
                  checked={selected.includes(opt.value)}
                  onChange={() => toggleValue(opt.value)}
                  className="h-4 w-4 rounded border-input bg-background"
                />
                <span className="text-sm">{opt.label}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
