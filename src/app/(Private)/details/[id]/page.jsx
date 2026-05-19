import React from 'react';
import { cars } from '../../../../../public/carData';
import DetailsCard from '@/component/DetailsCard';

const DetailsPage = async({params}) => {
    const {id} = await params
    const car = cars.find(ele => ele.id == id)
    
    return (
        <div className='my-5 '>
            <h1 className='w-[90%] mx-auto text-3xl font-bold'>Details Pages</h1>
            <div className="w-[90%] mx-auto">
                {
                    <DetailsCard car={car}></DetailsCard>
                }
            </div>
        </div>
    );
};

export default DetailsPage;