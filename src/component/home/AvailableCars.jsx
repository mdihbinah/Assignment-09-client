// import { cars } from "../../../public/carData";
import { ObjectId } from "mongodb";
import CarCard from "./CarCard";


const AvailableCars = async() => {
    const res = await fetch('http://localhost:5000/cars', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })

    const cars = await res.json()
    const availableCars = cars.filter(ele => ele.availability == 'Available')
    return (
        <div className="w-[90%] mx-auto my-5">
            <h1 className="text-2xl font-bold mb-3">Available Cars</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    availableCars.slice(0,6).map(car => {
                        return <CarCard key={new ObjectId(car.id)} car={car}></CarCard>
                    })
                }
            </div>
        </div>
    );
};

export default AvailableCars;