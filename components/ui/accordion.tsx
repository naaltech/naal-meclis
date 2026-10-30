'use client'

import * as React from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

import { cn } from '@/lib/utils'

const AccordionContext = React.createContext<{
  openValue: string | null
  toggle: (value: string) => void
} | null>(null)

const AccordionItemContext = React.createContext<{
  isOpen: boolean
  value: string
  triggerId: string
  contentId: string
} | null>(null)

function useAccordion() {
  const context = React.useContext(AccordionContext)
  if (!context) throw new Error('Accordion parts must be used within <Accordion>')
  return context
}

function useAccordionItem() {
  const context = React.useContext(AccordionItemContext)
  if (!context) throw new Error('Accordion parts must be used within <AccordionItem>')
  return context
}

function Accordion({ ...props }: React.ComponentProps<'div'>) {
  const [openValue, setOpenValue] = React.useState<string | null>(null)

  const toggle = (value: string) => {
    setOpenValue((current) => (current === value ? null : value))
  }

  return (
    <AccordionContext.Provider value={{ openValue, toggle }}>
      <div data-slot="accordion" {...props} />
    </AccordionContext.Provider>
  )
}

function AccordionItem({
  className,
  value,
  ...props
}: React.ComponentProps<'div'> & { value: string }) {
  const { openValue } = useAccordion()
  const id = React.useId()

  return (
    <AccordionItemContext.Provider
      value={{
        isOpen: openValue === value,
        value,
        triggerId: `${id}-trigger`,
        contentId: `${id}-content`,
      }}
    >
      <div
        data-slot="accordion-item"
        className={cn('border-b last:border-b-0', className)}
        {...props}
      />
    </AccordionItemContext.Provider>
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<'button'>) {
  const { toggle } = useAccordion()
  const { isOpen, value, triggerId, contentId } = useAccordionItem()

  return (
    <h3 className="flex">
      <button
        type="button"
        id={triggerId}
        data-slot="accordion-trigger"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => toggle(value)}
        className={cn(
          'focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 cursor-pointer items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50',
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon
          className={cn(
            'text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200',
            isOpen && 'rotate-180',
          )}
        />
      </button>
    </h3>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  const { isOpen, triggerId, contentId } = useAccordionItem()

  return (
    <div
      id={contentId}
      role="region"
      aria-labelledby={triggerId}
      data-slot="accordion-content"
      inert={!isOpen}
      className={cn(
        'grid text-sm transition-[grid-template-rows] duration-200 ease-out',
        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
      )}
      {...props}
    >
      <div className="overflow-hidden">
        <div className={cn('pt-0 pb-4', className)}>{children}</div>
      </div>
    </div>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
