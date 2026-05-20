import Image from 'next/image';
import React from 'react';

const BookingCard = ({ booking }) => {
    return (
        <div className='grid grid-cols-4 gap-8'>
            <div className="relative aspect-video">
                <Image src={booking?.image} alt='Car Image' fill className='object-cover'></Image>
            </div>
            {/* <div className="">{carName}</div> */}
            <div className="">vvvvvvvv</div>
            <div className=""></div>
        </div>
    );
};

export default BookingCard;