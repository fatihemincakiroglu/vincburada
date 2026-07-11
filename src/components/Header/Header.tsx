import { getNavigation } from '@/data/navigation'
import Logo from '@/shared/Logo'
import Link from 'next/link'
import clsx from 'clsx'
import HamburgerBtnMenu from './HamburgerBtnMenu'
import Navigation from './Navigation/Navigation'

interface HeaderProps {
  hasBorderBottom?: boolean
  className?: string
}

const Header = async ({ hasBorderBottom = true, className }: HeaderProps) => {
  const navigationMenu = await getNavigation()

  return (
    <div className={clsx('relative', className)}>
      <div className="container">
        <div
          className={clsx(
            'flex h-20 justify-between gap-x-2.5 border-neutral-200 dark:border-neutral-700',
            hasBorderBottom && 'border-b',
            !hasBorderBottom && 'has-[.header-popover-full-panel]:border-b'
          )}
        >
          <div className="flex items-center justify-center gap-x-3 sm:gap-x-8">
            <Logo />
          </div>

          <div className="mx-4 hidden flex-1 items-center justify-center lg:flex">
            <Navigation menu={navigationMenu} />
          </div>

          <div className="flex items-center justify-end gap-x-2.5 sm:gap-x-6">
            <div className="block lg:hidden">
              <HamburgerBtnMenu />
            </div>
            <Link
              href="/iletisim"
              className="group relative -mx-1 inline-flex items-center gap-2 overflow-hidden rounded-full bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-orange-600/30 transition hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-600/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 sm:px-5 sm:py-2.5"
            >
              {/* Parlama efekti */}
              <span
                aria-hidden="true"
                className="absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-700 group-hover:left-[150%]"
              />
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="size-4 shrink-0 transition-transform duration-300 group-hover:-rotate-12"
              >
                <path d="M13.5 2 4 13h6l-1.5 9L18 11h-6l1.5-9Z" />
              </svg>
              <span className="hidden sm:inline">Hemen Teklif Al</span>
              <span className="sm:hidden">Teklif Al</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
