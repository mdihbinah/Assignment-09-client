'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const NavLink = ({path, data}) => {
    const pathName = usePathname()
    return (
        <div>
            <li className={`font-bold ${path == pathName ? 'text-blue-600': ''}`}><Link href={path}>{data}</Link></li>
        </div>
    );
};

export default NavLink;