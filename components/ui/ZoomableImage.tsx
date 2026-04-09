'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef } from 'react'

interface ZoomableImageProps {
  src: string
  alt: string
  aspectClassName?: string
  sizes?: string
}

export function ZoomableImage({
  src,
  alt,
  aspectClassName = 'aspect-[4/3]',
  sizes = '(max-width: 1024px) 100vw, 50vw',
}: ZoomableImageProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  const open = useCallback(() => {
    dialogRef.current?.showModal()
  }, [])

  const close = useCallback(() => {
    dialogRef.current?.close()
  }, [])

  // Close on backdrop click
  const handleDialogClick = useCallback((e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) close()
  }, [close])

  // Close on Escape (native dialog handles this, but ensure cleanup)
  useEffect(() => {
    const el = dialogRef.current
    return () => { el?.close() }
  }, [])

  return (
    <>
      <button
        type="button"
        onClick={open}
        className={`relative ${aspectClassName} overflow-hidden w-full block cursor-zoom-in group`}
        aria-label={`Zoom: ${alt}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
          sizes={sizes}
        />
        <span className="absolute bottom-3 right-3 bg-black/50 text-white text-xs font-headline uppercase tracking-widest px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Zoom
        </span>
      </button>

      {/* biome-ignore lint/a11y/useKeyWithClickEvents: dialog handles Escape natively */}
      <dialog
        ref={dialogRef}
        onClick={handleDialogClick}
        className="bg-transparent p-0 max-w-none w-full h-full backdrop:bg-black/80 open:flex open:items-center open:justify-center"
        style={{ border: 'none', outline: 'none' }}
      >
        <div className="relative w-[90vw] h-[90vh] max-w-6xl">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain"
            sizes="90vw"
            quality={90}
          />
        </div>
        <button
          type="button"
          onClick={close}
          className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/80 w-10 h-10 flex items-center justify-center text-xl font-light transition-colors"
          aria-label="Close"
        >
          ✕
        </button>
      </dialog>
    </>
  )
}
