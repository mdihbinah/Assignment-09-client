'use client'

import React, { useEffect, useState } from 'react';
import CarCard from '@/component/home/CarCard';
import SearchCard from '@/component/general/Search';
import EmptyData from '@/component/general/Empty';

const ExploreCarsPages = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        const fetchCars = async () => {
            const res = await fetch('http://localhost:5000/cars');

            const data = await res.json();

            setCars(data);
        }
        fetchCars()

    }, [])  
    
    return (
        <div className='w-[90%] mx-auto my-5'>

            <h1 className='text-3xl text-center font-bold mb-5'>
                Explore Pages
            </h1>

            <SearchCard setCars={setCars} />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">

                { 
                    cars.map(car => (
                        <CarCard
                            key={car._id}
                            car={car}
                        />
                    ))
                }

            </div>
            <div className="flex justify-center items-center">
                {
                    cars.length == 0 && <EmptyData/>
                }
            </div>
        </div>
    );
};

export default ExploreCarsPages;