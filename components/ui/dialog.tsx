'use client'

import * as React from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const DialogContext = React.createContext<{
  open: boolean
  setOpen: (open: boolean) => void
  titleId: string
} | null>(null)

function useDialog() {
  const context = React.useContext(DialogContext)
  if (!context) throw new Error('Dialog parts must be used within <Dialog>')
  return context
}

function Dialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false)
  const titleId = React.useId()

  return (
    <DialogContext.Provider value={{ open, setOpen, titleId }}>
      {children}
    </DialogContext.Provider>
  )
}

function DialogTrigger({
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { setOpen } = useDialog()

  return (
    <Button
      data-slot="dialog-trigger"
      aria-haspopup="dialog"
      onClick={(event) => {
        onClick?.(event)
        setOpen(true)
      }}
      {...props}
    />
  )
}

function DialogContent({
  className,
  children,
  ...props
}: React.ComponentProps<'dialog'>) {
  const { open, setOpen, titleId } = useDialog()
  const dialogRef = React.useRef<HTMLDialogElement>(null)

  React.useEffect(() => {
    const dialog = dialogRef.current
    if (!open || !dialog) return

    const root = document.documentElement
    dialog.showModal()
    root.classList.add('overflow-hidden')

    return () => {
      dialog.close()
      root.classList.remove('overflow-hidden')
    }
  }, [open])

  return (
    <dialog
      ref={dialogRef}
      data-slot="dialog-content"
      aria-labelledby={titleId}
      onClose={() => setOpen(false)}
      onMouseDown={(event) => {
        // Only the backdrop reports the <dialog> itself as the target
        if (event.target === event.currentTarget) setOpen(false)
      }}
      className={cn(
        'bg-background text-foreground backdrop:bg-black/50 open:animate-in open:fade-in-0 open:zoom-in-95 fixed inset-0 z-50 m-auto w-full max-w-[calc(100%-2rem)] rounded-lg border p-0 shadow-lg duration-200 sm:max-w-lg',
        className,
      )}
      {...props}
    >
      <div className="grid gap-4 p-6">
        {/* Rendered first so showModal() focuses it rather than a link deep in the content */}
        <button
          type="button"
          data-slot="dialog-close"
          onClick={() => setOpen(false)}
          className="ring-offset-background focus-visible:ring-ring absolute top-4 right-4 cursor-pointer rounded-xs opacity-70 transition-opacity hover:opacity-100 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden"
        >
          <XMarkIcon className="pointer-events-none size-4 shrink-0" />
          <span className="sr-only">Kapat</span>
        </button>
        {children}
      </div>
    </dialog>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="dialog-header"
      className={cn('flex flex-col gap-2 text-center sm:text-left', className)}
      {...props}
    />
  )
}

function DialogTitle({ className, ...props }: React.ComponentProps<'h2'>) {
  const { titleId } = useDialog()

  return (
    <h2
      id={titleId}
      data-slot="dialog-title"
      className={cn('text-lg leading-none font-semibold', className)}
      {...props}
    />
  )
}

export { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger }
