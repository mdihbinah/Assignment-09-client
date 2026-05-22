import { CarFront } from 'lucide-react';
import Link from 'next/link';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';



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
                    <Link href={'/explore-cars'} className="link link-hover">Explore Cars</Link>
                    <Link href={'/add-car'} className="link link-hover">Add Car</Link>
                    <Link href={'/my-bookings'} className="link link-hover">My Bookings</Link>
                </nav>

                <nav>
                    <h6 className="footer-title">Company</h6>
                    <Link href={'/'} className="link link-hover">About us</Link>
                    <Link href={'/'} className="link link-hover">Phone: +8801402245543</Link>
                    <Link href={'/'} className="link link-hover">Email: support@drivefleet.com</Link>
                </nav>

                <nav>
                    <h6 className="footer-title">Social Links</h6>
                    <div className="flex gap-4 mt-2 text-xl">
                        <Link href="https://x.com" target="_blank">
                            <FaX className="hover:text-success " />
                        </Link>
                        <Link href="https://linkedin.com" target="_blank">
                            <FaLinkedin className="hover:text-success" />
                        </Link>
                        <Link href="https://facebook.com" target="_blank">
                            <FaFacebook className="hover:text-success" />
                        </Link>
                    </div>
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