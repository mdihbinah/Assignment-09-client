import Image from "next/image";
import Link from "next/link";



const Banner = () => {
    return (
        <div className=" h-[90vh] relative aspect-video">
            <Image src={'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7'} alt="Cars Image" fill className="object-cover"></Image>

            <div className="w-[90%] mx-auto relative h-full  z-10 flex flex-col justify-center items-start gap-5 ">
                <h1 className="text-xl md:text-2xl lg:text-4xl tracking-wider font-extrabold text-white ">Drive Your Journey <br /> <span className="text-blue-500">With Confidence</span></h1>
            <p className="text-sm lg:text-md font-bold tracking-wide text-gray-300/50 w-[40%] hidden md:flex">Explore, book, and drive your favorite cars with an easy booking system, secure payments, and real-time availability.</p>
            <Link href={'/explore-cars'}><button className="btn border-0 bg-blue-600 hover:bg-blue-500 text-white">Explore Cars</button></Link>
            </div>
        </div>
    );
};

export default Banner;