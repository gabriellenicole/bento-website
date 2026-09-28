import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const userAgent = navigator.userAgent
    const isSmall = window.matchMedia('(max-width: 768px)').matches
    const isMobile = Boolean(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.exec(userAgent),
    )

    const isDev = process.env.NODE_ENV !== 'production'
    if (isDev) setIsMobile(isSmall || isMobile)

    setIsMobile(isSmall && isMobile)
  }, [])

  return isMobile
}

// Store scroll position per route in sessionStorage
export function useScrollRestoration() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const [isRestoringScroll, setIsRestoringScroll] = useState(true)

  // Prevent scroll restoration flash
  useEffect(() => {
    if (isHomePage) {
      // Add a class to prevent scrolling during restoration
      document.documentElement.style.scrollBehavior = 'auto'
      document.body.classList.add('disable-scroll')

      // Restore scroll position and enable scrolling
      const savedPosition = sessionStorage.getItem('homeScrollPosition')
      if (savedPosition !== null) {
        window.scrollTo(0, parseInt(savedPosition))
      }

      // Small delay to ensure smooth transition
      requestAnimationFrame(() => {
        document.body.classList.remove('disable-scroll')
        setIsRestoringScroll(false)
        document.documentElement.style.scrollBehavior = 'smooth'
      })
    } else {
      // For other pages, scroll to top immediately
      window.scrollTo(0, 0)
      setIsRestoringScroll(false)
    }
  }, [location.pathname, isHomePage])

  // Save scroll position only when not restoring
  useEffect(() => {
    if (isHomePage && !isRestoringScroll) {
      const handleScroll = () => {
        sessionStorage.setItem('homeScrollPosition', window.scrollY.toString())
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [isHomePage, isRestoringScroll])
}

export const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
