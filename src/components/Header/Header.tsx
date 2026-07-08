import { getNavigation } from '@/data/navigation'
import { Button } from '@/shared/Button'
import Logo from '@/shared/Logo'
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
            <Button className="-mx-1 py-1.75!" color="light" href={'/iletisim'}>
              Teklif Al
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
