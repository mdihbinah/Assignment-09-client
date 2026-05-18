import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { GiGearStickPattern } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { MdEventSeat } from "react-icons/md";
import { RiOilLine } from "react-icons/ri";



const DetailsCard = ({ car }) => {
    const { carName, brand, carType, dailyRentPrice, image, seatCapacity, availability, pickupLocation, rating, transmission, description, bookingCount, fuelType } = car
    return (
        <div className="grid grid-cols-16 gap-5">
            <div className="col-span-12 grid grid-cols-5 shadow-lg p-4 rounded-xl gap-4">
                <div className=" relative aspect-video col-span-3">
                    <Image src={image} alt="Cars Image" fill className="rounded-lg"></Image>
                </div>
                <div className=" col-span-2 flex flex-col justify-center space-y-2">
                    <p className="text-xl font-bold tracking-wider">{carName}</p>
                    <div className="flex justify-between z-10">
                        <p className='bg-lime-500 text-white px-3 rounded-sm'>{carType}</p>
                        <p className={`${availability == 'Available' ? 'bg-green-500' : 'bg-amber-600'} text-white px-3 rounded-sm`}>{availability}</p>
                    </div>
                    <p className='flex items-center gap-1 font-bold '><FaStar className='text-yellow-500 '></FaStar>{rating}</p>
                    <p><span className='text-blue-600 font-bold'>${dailyRentPrice}</span>/day</p>

                    <div className="opacity-40 border-t-2 my-2">
                    </div>

                    <div className="space-y-1">
                        <div className='flex justify-between items-center gap-1'>
                            <p className="flex justify-between items-center gap-1"><MdEventSeat />Seat Capacity</p>
                            <p>{seatCapacity} Seats</p>
                        </div>
                        <div className='flex justify-between items-center gap-1 '>
                            <p className="flex justify-between items-center gap-1"><GiGearStickPattern></GiGearStickPattern>Transmission</p>
                            {transmission}
                        </div>
                        <div className='flex justify-between items-center gap-1 '>
                            <p className="flex justify-between items-center gap-1"><RiOilLine />Fuel Type</p>
                            {fuelType}
                        </div>
                        <div className='flex justify-between items-center gap-1 '>
                            <p className="flex justify-between items-center gap-1"><GiGearStickPattern></GiGearStickPattern>Transmission</p>
                            {transmission}
                        </div>
                    </div>

                </div>
                <div className="col-span-3">
                    <h2 className="text-lg font-bold">About This Car</h2>
                    <p className="text-md opacity-70">{description}</p>
                </div>
            </div>
            <div className="col-span-4 flex flex-col justify-center space-y-2 shadow-xl rounded-lg p-2">
                <h2>Book This Car</h2>
                <div className="flex justify-between gap-2">
                    <p>Price</p>
                    <p><span className='text-blue-600 font-bold'>${dailyRentPrice}</span>/day</p>
                </div>
                <div className="space-y-2">
                        <p className="text-sm font-bold">Driver Needed?</p>
                    <div className="dropdown dropdown-start">
                        <div tabIndex={0} role="button" className="btn m-1">Select <IoIosArrowDown /></div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a>Yes <span className="font-bold">(+$20)</span></a></li>
                            <li><a>No</a></li>
                        </ul>
                    </div>
                    <div className="space-y-2">
                        <p className="text-xs font-bold">Special Note(optional)</p>
                        <textarea className="border-2 border-gray-200">

                        </textarea>
                    </div>
                    <div className="flex justify-between gap-2">
                    <p>Price</p>
                    <p><span className='text-blue-600 font-bold'>${dailyRentPrice}</span>/day</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;