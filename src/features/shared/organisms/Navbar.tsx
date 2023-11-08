'use client'

// import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import "./Navbar.css";

const Navbar = () =>
{
    const pathname = usePathname();

    return (
        <nav>
            {/*<Image*/}
            {/*    src={logo}*/}
            {/*    alt="star-wars"*/}
            {/*/>*/}
            <div className={'links'}>
                <Link href="/" className={pathname === "/" ? 'active' : ""}>Home</Link>
                <Link href="/items" className={  pathname === "/items" ? 'active' : ""}>Items</Link>
            </div>
            <Link
              className="link-back"
              href="/"
            >
                DGC
            </Link>
        </nav>
      );
};

export default Navbar;
