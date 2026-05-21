import { Button } from "@heroui/react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaCarOn } from "react-icons/fa6";
import { GiGearStickPattern } from "react-icons/gi";
import { MdEventSeat } from "react-icons/md";
import { RiOilLine } from "react-icons/ri";
import EditCarData from "./EditCarData";
import DeleteCar from "./DeleteCar";



const MyCarCard = ({ car }) => {
    const { carName, brand, carType, dailyRentPrice, fuelType, image, seatCapacity, availability, pickupLocation, rating, transmission } = car

    return (
        <div className="grid md:grid-cols-5 gap-5 border rounded-lg shadow-xl px-4 py-3">
            <div className="col-span-2 w-full h-full relative aspect-video">
                <Image src={car?.image} alt="car Image" fill className="object-cover"></Image>
            </div>
            <div className="col-span-2 flex flex-col justify-center space-y-1">
                <p className="text-md font-bold">{carName}</p>
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
            <div className="flex md:flex-col justify-center items-center gap-6">
                <EditCarData car={car} ></EditCarData>
                <DeleteCar car={car}></DeleteCar>
            </div>
        </div>
    );
};

export default MyCarCard;