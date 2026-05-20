import CarCard from "@/component/home/CarCard";
import MyCarCard from "@/component/MyCar/MyCarCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";



const MyAddedCars = async() => {
    const session = await auth.api.getSession({
            headers: await headers()
        })
        const userId = session?.session?.userId
    const res = await fetch(`http://localhost:5000/my-added-cars/${userId}`)
    const cars = await res.json()

    return (
        <div className="w-[90%] mx-auto">
            <h2 className="text-xl font-bold">My Added Cars</h2>
            <div className="">
                {
                    cars.map(car => {
                        return <MyCarCard key={car._id} car={car}></MyCarCard>
                    })
                }
            </div>
        </div>
    );
};

export default MyAddedCars;