import React from 'react';
// import { cars } from '../../../public/carData';
import CarCard from '@/component/home/CarCard';
import { ObjectId } from 'mongodb';

const ExploreCarsPages = async() => {

    const res = await fetch('http://localhost:5000/cars', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })

    const cars = await res.json()
    // console.log(cars);


    return (
        <div className='my-5'>
            <h1 className='text-3xl text-center font-bold mb-5'>Explore Pages</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {
                    cars.map(car =>{
                        return <CarCard key={new ObjectId(car.id)} car={car}></CarCard>
                    })
                }
            </div>
        </div>
    );
};

export default ExploreCarsPages;