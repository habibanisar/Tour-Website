import { hotels } from "@/app/data";
import { Container } from "./Container";
import Image from "next/image";
import { BedDoubleIcon, Star, User2 } from "lucide-react";

export function Hotels(){
    return(
        <Container className="py-20">
            <h2 className="text-4xl font-heading font-semibold text-center">Our Hotel Rooms</h2>
            <p className="text-center max-w-4xl mx-auto text-slate-600 mt-2">
            Experience the perfect blend of comfort and elegance in our hotel rooms,
            designed for ultimate relaxation. Each space offers modern amenities and 
            a welcoming atmosphere to make your stay truly memorable.
            </p>

            <ul>
               <div className="grid sm:grid-cols-2 gap-10 mt-20">
                    {hotels.map((hotel) => (
                        <div key={hotel.id} className="rounded-md overflow-hidden shadow-lg">
                            <div className="aspect-[16/10]">
                                <Image
                                    src={hotel.image}
                                    alt={hotel.title}
                                    width={420}
                                    height={400}
                                    className="w-full h-full object-cover transition-transform hover:scale-110 origin-bottom duration-300"
                                />
                            </div>
                            {/* Displaying destination details below the image */}
                            <div className="flex justify-between items-center p-2">
                                <h3 className="text-lg font-semibold">{hotel.title}</h3>
                                {/* Star Rating */}
                             <div className="flex justify-center">
                                {Array.from({ length: Math.round(hotel.rating) }, (_, i) => (
                                    <Star key={i} className="text-yellow-400 w-5 h-5" />
                                ))}
                             </div>
                                </div>
                             <div className="flex justify-between gap-2 items-center p-5">
                                <p className="font-medium text-slate-800 flex-1">{hotel.price}</p>
                                <p className="font-medium text-slate-800 flex items-center gap-2">
                                    <BedDoubleIcon size={20}/>
                                    {hotel.bed}</p>
                                    <p className="font-medium text-slate-800 flex items-center gap-2">
                                    <User2 size={20}/>
                                    {hotel.capacity} Guest</p>
                                </div>
                       </div>
                    ))}
                </div>
                   
            </ul>

        </Container>
    );
}