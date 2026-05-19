'use client'
import { IoIosArrowDown } from 'react-icons/io';
import DropdownCard from './Details/Dropdown';
import { useState } from 'react';

const BookNow = ({ car }) => {
    const [totalPrice, setTotalPrice] = useState(car.dailyRentPrice)
    return (
        <div className=" flex flex-col justify-center space-y-4 shadow-xl lg:h-full rounded-lg p-5">
            <h2 className="text-lg font-bold">Book This Car</h2>
            <div className="flex justify-between gap-2">
                <p>Price</p>
                <p><span className='text-blue-600 font-bold'>${car.dailyRentPrice}</span>/day</p>
            </div>
            <div className="flex-0 space-y-3">
                <div className="space-y-2">
                    <p className="text-sm font-bold">Driver Needed?</p>
                    <DropdownCard setTotalPrice={setTotalPrice} car={car}></DropdownCard>
                </div>

                <div className="space-y-2">
                    <p className="text-xs font-bold">Special Note(optional)</p>
                    <textarea className="border-2 border-gray-200">

                    </textarea>
                </div>
                <div className="flex justify-between gap-2">
                    <p>Total Price</p>
                    <p><span className='text-blue-600 font-bold'>${totalPrice}</span>/day</p>
                </div>
                <button className="bg-blue-600 rounded-md w-full py-2 text-white">Book Now</button>
            </div>
        </div>
    );
};

export default BookNow;