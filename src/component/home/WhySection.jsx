import { BiSupport } from "react-icons/bi";
import { FaShieldAlt } from "react-icons/fa";
import { IoMdPricetags } from "react-icons/io";
import { IoCar } from "react-icons/io5";
import { VscWorkspaceTrusted } from "react-icons/vsc";

const WhySection = () => {
    return (
        <div className="w-[90%]  mx-auto my-5">
            <h1 className="text-2xl text-center font-bold mb-3">Why Choose DriveFleet?</h1>
            <div className="flex flex-col md:flex-row  gap-3">
                <div className=" flex items-center gap-3">
                    <p className="text-5xl font-bold text-blue-600"><VscWorkspaceTrusted /></p>
                    <div className="">
                        <h3 className="text-lg tracking-wide font-bold">Trusted & Secure</h3>
                        <p className="text-md opacity-60">100% secure booking and payments</p>
                    </div>
                </div>
                <span className="divider md:divider-horizontal"></span>
                <div className=" flex items-center gap-3">
                    <p className="text-5xl font-bold text-blue-600"><IoCar /></p>
                    <div className="">
                        <h3 className="text-lg tracking-wide font-bold">Wide Selection</h3>
                        <p className="text-md opacity-60">Choose from a variety of vehicles</p>
                    </div>
                </div>
                <span className="divider md:divider-horizontal"></span>
                <div className=" flex items-center gap-3">
                    <p className="text-5xl font-bold text-blue-600"><IoMdPricetags /></p>
                    <div className="">
                        <h3 className="text-lg tracking-wide font-bold">Best Price</h3>
                        <p className="text-md opacity-60">Get the best prices and offers</p>
                    </div>
                </div>
                <span className="divider md:divider-horizontal"></span>
                <div className=" flex items-center gap-3">
                    <p className="text-5xl font-bold text-blue-600"><BiSupport /></p>
                    <div className="">
                        <h3 className="text-lg tracking-wide font-bold">24/7 Support</h3>
                        <p className="text-md opacity-60">We are here to help you anytime</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhySection;