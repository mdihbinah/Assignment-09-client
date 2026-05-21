import EmptyData from "@/component/general/Empty";
import CarCard from "@/component/home/CarCard";
import MyCarCard from "@/component/MyCar/MyCarCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";



const MyAddedCars = async() => {
    const {token} = await auth.api.getToken({
        headers: await headers()
    })
    console.log(token);
    const session = await auth.api.getSession({
            headers: await headers()
        })
        const userId = session?.session?.userId
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-added-cars/${userId}`,{
        headers:{
             authorization: `Bearer ${token}`
        }
    })
    const cars = await res.json()

    return (
        <div className="w-[90%] my-8 mx-auto">
            <h2 className="text-xl font-bold mb-5">My Added Cars</h2>
            <div className="flex flex-col justify-center items-center gap-8">
                {
                    cars.length ? cars.map(car => {
                        return <MyCarCard key={car._id} car={car}></MyCarCard>
                    }) : <EmptyData/>
                }
            </div>
        </div>
    );
};

export default MyAddedCars;