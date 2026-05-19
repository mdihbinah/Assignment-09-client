// import { cars } from '../../../../../public/carData';
import DetailsCard from '@/component/DetailsCard';

const DetailsPage = async({params}) => {
    const {id} = await params
    // console.log(id);
    const res = await fetch('http://localhost:5000/cars', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })
    const cars = await res.json()
    const car = cars.find(ele => ele._id == id)
    // console.log(car);
    
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