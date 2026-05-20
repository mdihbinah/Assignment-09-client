import Image from 'next/image';
import React from 'react';
import { FaCarOn } from 'react-icons/fa6';
import { IoLocationOutline } from 'react-icons/io5';
import { MdEventSeat, MdOutlineDateRange } from 'react-icons/md';

const BookingCard = ({ booking }) => {
    const { carName, brand, carType, dailyRentPrice, pickupLocation, seatCapacity, pickupDate, note, driver, BookingDate, rentDays } = booking
    let totalPrice = dailyRentPrice * rentDays
    if(driver === 'Yes'){
        totalPrice += 20
    }
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 rounded-lg border shadow-2xl px-5 py-3'>
            <div className="relative w-full h-full aspect-video">
                <Image src={booking?.image} alt='Car Image' fill className='object-cover rounded-lg'></Image>
            </div>
            <div className="space-y-3">
                <h2 className='text-xl font-bold'>{carName}</h2>
                <p className='flex items-center gap-1'><IoLocationOutline /> {pickupLocation}</p>
                <div className="flex justify-between">
                    <p className='flex items-center gap-1'><FaCarOn />{carType}</p>
                    <p className='flex items-center gap-1'><MdEventSeat />{seatCapacity} Seats</p>
                </div>
                <p className='text-blue-600 border-2 border-blue-600 bg-blue-600/20 rounded-md w-30 py-0.5  text-center'>Driver: {driver}</p>
            </div>
            <div className="flex flex-col justify-around">
                <div className="flex justify-between items-center gap-1 px-1">
                    <div className="flex items-center gap-2">
                        <MdOutlineDateRange />
                    <p>Booking Date:</p>
                    </div>
                    <p>{new Date(BookingDate).toLocaleDateString("en-GB")}</p>
                </div>
                <div className="flex justify-between items-center gap-1 px-1">
                    <div className="flex items-center gap-2">
                        <MdOutlineDateRange />
                    <p>PickUp Date:</p>
                    </div>
                    <p>{new Date(pickupDate).toLocaleDateString("en-GB")}</p>
                </div>
                <div className="flex justify-between items-center gap-1 px-1">
                    <div className="flex items-center gap-2">
                        <MdOutlineDateRange />
                    <p>Booking Date:</p>
                    </div>
                    <p>{new Date(BookingDate).toLocaleDateString("en-GB")}</p>
                </div>
                <p className='px-1'>Note: {note}</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-3 text-lg ">
                <div className="flex gap-2">
                    <p>Total Price:</p>
                    <p className='font-bold text-blue-600'>${totalPrice}</p>
                </div>
                <div className="flex gap-2">
                    <p className=' font-bold text-blue-600'>${dailyRentPrice}/day</p>
                    <p> - </p>
                    <p>{rentDays} Days</p>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;