import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Initializer function for matching media query
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Set initial value inside a microtask to avoid exact sync setState warning 
    // but still trigger on first mount right after.
    queueMicrotask(() => setIsMobile(mql.matches))

    const onChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches)
    }
    mql.addEventListener("change", onChange)
    
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}
