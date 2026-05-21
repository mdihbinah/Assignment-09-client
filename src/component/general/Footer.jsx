import { CarFront } from 'lucide-react';
import Link from 'next/link';



const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
                <aside>
                    <Link href={'/'} className="btn btn-ghost text-xl font-bold"><span className="text-blue-600 font-extrabold "><CarFront strokeWidth={3} /></span>Drive<span className="text-blue-600 ">Fleet</span></Link>
                    <p>
                        Drive Fleet Ltd.
                        <br />
                        Providing reliable  since 1992
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <Link href={'/'} className="link link-hover">Explore Cars</Link>
                    <Link href={'/'} className="link link-hover">Add Car</Link>
                    <Link href={'/'} className="link link-hover">My Bookings</Link>
                </nav>

                <nav>
                    <h6 className="footer-title">Company</h6>
                    <Link href={'/'} className="link link-hover">About us</Link>
                    <Link href={'/'} className="link link-hover">+88001403345532</Link>
                    <Link href={'/'} className="link link-hover">drivefleet@gmail.com</Link>
                </nav>

                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Drive Fleet Ltd.</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;