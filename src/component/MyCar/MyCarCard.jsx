import { Button } from "@heroui/react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaCarOn } from "react-icons/fa6";
import { GiGearStickPattern } from "react-icons/gi";
import { MdEventSeat } from "react-icons/md";
import { RiOilLine } from "react-icons/ri";
import EditCarData from "./EditCarData";



const MyCarCard = ({ car }) => {
    const { carName, brand, carType, dailyRentPrice, fuelType, image, seatCapacity, availability, pickupLocation, rating, transmission } = car

    return (
        <div className="grid grid-cols-3 gap-5">
            <div className="col-span-1 relative aspect-video">
                <Image src={car?.image} alt="car Image" fill className="object-cover"></Image>
            </div>
            <div className="flex flex-col justify-center space-y-2">
                <p className="text-xl font-bold tracking-wider">{carName}</p>
                <div className="flex justify-between z-10">
                    <p className='bg-lime-500 text-white px-3 rounded-sm'>{carType}</p>
                    <p className={`${availability == 'Available' ? 'bg-green-500' : 'bg-amber-600'} text-white px-3 rounded-sm`}>{availability}</p>
                </div>


                <div className=" flex justify-between border-b-2 border-gray-400/70 pb-2 my-2">
                    <p className='flex items-center gap-1 font-bold '><FaStar className='text-yellow-500 '></FaStar>{rating}</p>
                    <p><span className='text-blue-600 text-lg font-bold'>${dailyRentPrice}</span>/day</p>
                </div>

                <div className="space-y-1">
                    <div className='flex justify-between items-center gap-1 '>
                        <p className="flex justify-between items-center gap-1"><FaCarOn />Brand</p>
                        {brand}
                    </div>
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

                </div>

            </div>
            <div className="flex flex-col justify-center items-center gap-4">
                <div className="flex items-center gap-3">
                    <h2>Update Your Car Data</h2>
                    <EditCarData car={car} ></EditCarData>
                    
                </div>
                <div className="flex items-center gap-3">
                    <h2>Delete Your Car Data</h2>
                    
                </div>
                
            </div>
        </div>
    );
};

export default MyCarCard;