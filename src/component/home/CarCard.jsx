import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { GiGearStickPattern } from 'react-icons/gi';
import { IoLocationOutline } from 'react-icons/io5';
import { MdEventSeat } from 'react-icons/md';

const CarCard = ({ car }) => {
    const { carName, brand, carType, dailyRentPrice, image, seatCapacity, availability, pickupLocation, rating, transmission } = car
    return (
        <div className='space-y-4 rounded-lg overflow-hidden shadow-2xl'>
            <div className="relative aspect-video">
                <Image src={image} alt='Car Image' fill className=''></Image>
                <div className="flex justify-between relative top-3 mx-3 z-10">
                    <p className='bg-lime-500 text-white px-3 rounded-sm'>{carType}</p>
                <p className={`${availability == 'Available'? 'bg-green-500': 'bg-amber-600'} text-white px-3 rounded-sm`}>{availability}</p>
                </div>
            </div>
            <div className="space-y-2 px-4 pb-4">
                <div className="flex justify-between">
                    <p className='text-lg font-bold flex justify-center items-center'>{carName}</p>
                    <p><span className='text-blue-600 font-bold'>${dailyRentPrice}</span>/day</p>
                </div>
                <p className='flex items-center gap-1'><IoLocationOutline className='text-xl' />{pickupLocation}</p>
                <div className="flex justify-between">
                    <p className='flex justify-center items-center gap-1'><MdEventSeat />{seatCapacity}Seats</p>
                    <p className='flex justify-center items-center gap-1 '><GiGearStickPattern></GiGearStickPattern>{transmission}</p>
                    <p className='flex justify-center items-center gap-1 font-bold '><FaStar className='text-yellow-500 '></FaStar>{rating}</p>
                </div>
                <Link href={`/details/${car.id}`} className=''><button className='bg-blue-600 hover:bg-blue-800 text-white w-full text-center rounded-md p-1 duration-200'>View Details</button></Link>
            </div>

        </div>
    );
};

export default CarCard;