import BookingCard from '@/component/My-Booking/BookingCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';

const MyBookingsPage = async() => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const userId = session.session?.userId
    console.log(userId);
    const res = await fetch(`http://localhost:5000/bookings/${userId}`)
    const bookingsInfo = await res.json()
    console.log(bookingsInfo);

    
    return (
        <div className='w-[90%] mx-auto my-8'>
            <h1 className='text-2xl font-bold mb-5'>My Booking</h1>
            <div className=" space-y-5">
                {
                    bookingsInfo.map(booking => {
                        return <BookingCard key={booking._id} booking={booking}></BookingCard>
                    })
                }
            </div>
        </div>
    );
};

export default MyBookingsPage;