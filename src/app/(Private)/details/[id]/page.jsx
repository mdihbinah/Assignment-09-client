// import { cars } from '../../../../../public/carData';
import DetailsCard from '@/component/DetailsCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

const DetailsPage = async({params}) => {
    const {id} = await params
    console.log(id);
    const {token} = await auth.api.getToken({
        headers: await headers()
    })
    // console.log(token);

    // console.log(id);
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/cars/${id}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${token}`
        }
    })
    const car = await res.json()
    
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