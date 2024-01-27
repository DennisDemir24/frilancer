import Image from 'next/image';
import Link from 'next/link';
import MobileNav from './MobileNav';
import { Button } from '../ui/button';

const Header = () => {
  return (
    <header className='w-full'>
      <div className='wrapper flex items-center justify-between'>
        <Link href='/' className='w-36'>
          <Image
            src='/assets/images/frilancer.png'
            alt='Evently Logo'
            width={168}
            height={48}
          />
        </Link>
        <nav className='md:flex-between hidden w-full max-w-xs'>
          <div>HOME</div>
          <div>OUR MISSION</div>
          <div>CONTACT</div>
        </nav>
        <div className='flex w-32 justify-end gap-3'>
          <>
            {/* <UserButton afterSignOutUrl='/' /> */}
            <MobileNav />
          </>
          <>
            <Button asChild className='rounded-full' size='lg'>
              <Link href='/sign-in'>Login</Link>
            </Button>
          </>
        </div>
      </div>
    </header>
  )
}

export default Header
