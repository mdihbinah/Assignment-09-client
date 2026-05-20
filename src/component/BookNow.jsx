'use client'
import { IoIosArrowDown } from 'react-icons/io';
import DropdownCard from './Details/Dropdown';
import { useState } from 'react';
import {FieldError, Input, Label, TextField } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';

const BookNow = ({ car }) => {
    const [totalPrice, setTotalPrice] = useState(car.dailyRentPrice)
    const [isDriverAdded, setIsDriverAdded] = useState(false)
    const router = useRouter()
    const {data: session, isPending} = authClient.useSession()
    const userId = session?.session.userId 
    console.log(userId);

    const onSubmit = async(e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData.entries())
        if(isDriverAdded){
            data.driver = "Yes"
        } else {
            data.driver = 'No'
        }
        // console.log(data);

        const bookingInfo = {...car, ...data}

        bookingInfo.BookingDate = new Date()
        bookingInfo.userId = userId

        bookingInfo.carId = car._id
        delete bookingInfo._id
        console.log(bookingInfo);

        const res = await fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingInfo)
        })

        router.push('/my-bookings')

    }

    return (
        <div className=" flex flex-col justify-center space-y-4 shadow-xl lg:h-full rounded-lg p-5">
            <h2 className="text-lg font-bold">Book This Car</h2>
            <div className="flex justify-between gap-2">
                <p>Price</p>
                <p><span className='text-blue-600 font-bold'>${car.dailyRentPrice}</span>/day</p>
            </div>
            <form onSubmit={onSubmit}>
                <div className="flex-0 space-y-3">
                <div className="space-y-2">
                    <p className="text-sm font-bold">Driver Needed?</p>
                    <DropdownCard isDriverAdded={isDriverAdded} setIsDriverAdded={setIsDriverAdded} setTotalPrice={setTotalPrice} car={car}></DropdownCard>
                </div>

                <div className="">
                    <TextField name="pickupDate" type="date" isRequired>
                        <Label>PickUp Date</Label>
                        <Input type="date" className="rounded-2xl" />
                        <FieldError />
                    </TextField>
                </div>

                <div className="">
                    <TextField name="rentDays" type="number" isRequired>
                        <Label>Rent Days</Label>
                        <Input type="number" placeholder='3/4 days' className="rounded-2xl" />
                        <FieldError />
                    </TextField>
                </div>


                <div className="space-y-2">
                    <p className="text-xs font-bold">Special Note(optional)</p>
                    <textarea name='note' className="border-2 border-gray-200">

                    </textarea>
                </div>
                <div className="flex justify-between gap-2">
                    <p>Total Price</p>
                    <p><span className='text-blue-600 font-bold'>${totalPrice}</span>/day</p>
                </div>
                <button type='submit' className="bg-blue-600 rounded-md w-full py-2 text-white ">Book Now</button>
            </div>
            </form>
        </div>
    );
};

export default BookNow;