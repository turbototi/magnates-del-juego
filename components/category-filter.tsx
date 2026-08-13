'use client'

import { CATEGORIES, type Category } from '@/lib/store'

export type Filter = 'todos' | Category

export function CategoryFilter({
  active,
  onChange,
}: {
  active: Filter
  onChange: (f: Filter) => void
}) {
  return (
    <div className="flex w-full items-center gap-2 overflow-x-auto py-1 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <button
        type="button"
        onClick={() => onChange('todos')}
        className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
          active === 'todos'
            ? 'bg-primary text-primary-foreground shadow-sm'
            : 'border border-border bg-card text-foreground hover:bg-muted'
        }`}
      >
        Todos
      </button>
      {CATEGORIES.map((cat) => (
        <button
          key={cat.id}
          type="button"
          onClick={() => onChange(cat.id)}
          className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
            active === cat.id
              ? 'bg-primary text-primary-foreground shadow-sm'
              : 'border border-border bg-card text-foreground hover:bg-muted'
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}