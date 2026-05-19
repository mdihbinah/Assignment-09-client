import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { GiGearStickPattern } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { MdEventSeat } from "react-icons/md";
import { RiOilLine } from "react-icons/ri";
import BookNow from "./BookNow";



const DetailsCard = ({ car }) => {
    const { carName, brand, carType, dailyRentPrice, image, seatCapacity, availability, pickupLocation, rating, transmission, description, bookingCount, fuelType } = car
    return (
        <div className="grid grid-cols-4 md:grid-cols-11 lg:grid-cols-16 gap-5 ">
            <div className="col-span-4 md:col-span-7 lg:col-span-12 grid grid-cols-5 shadow-lg p-4 rounded-xl gap-4">
                <div className=" relative aspect-video col-span-5 lg:col-span-3">
                    <Image src={image} alt="Cars Image" fill className="rounded-lg"></Image>
                </div>
                <div className="col-span-5 md:col-span-3 lg:col-span-2 flex flex-col justify-center space-y-2">
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
                <div className="col-span-5 md:col-span-2 lg:col-span-3 flex flex-col justify-center">
                    <h2 className="text-lg font-bold">About This Car</h2>
                    <p className="text-md opacity-70">{description}</p>
                </div>
            </div>
            
            <div className="col-span-4 w-full h-full ">
                <BookNow  car={car}></BookNow>
            </div>
        </div>
    );
};

export default DetailsCard;