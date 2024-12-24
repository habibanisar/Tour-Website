
import { destinationsItems } from "@/app/data";
import { Container } from "./Container";
import Image from "next/image";
import { Star } from "lucide-react";

export function Tours(){
    return(
        <Container className="py-20">
            <h2 className="text-4xl font-heading font-semibold text-center">Most Demanded Destination</h2>
            <p className="text-center max-w-4xl mx-auto text-slate-600 mt-2">
                Explore our top destinations voted by more than 100,000+ customers around the world.
            </p>

            <ul >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
                    {destinationsItems.map((destination) => (
                        <div key={destination.id} className="rounded-md overflow-hidden shadow-lg">
                            <div className="aspect-[16/10]">
                                <Image 
                                    src={destination.image}
                                    alt={destination.title}
                                    width={420}
                                    height={400}
                                    className="w-full h-full object-cover transition-transform hover:scale-110 origin-bottom duration-300"
                                />
                            </div>
                            {/* Displaying destination details below the image */}
                            <div className="flex justify-between items-center p-2">
                                <h3 className="text-lg font-semibold">{destination.title}</h3>
                                {/* Star Rating */}
                            <div className="flex justify-center">
                                {Array.from({ length: Math.round(destination.rating) }, (_, i) => (
                                    <Star key={i} className="text-yellow-400 w-5 h-5" />
                                ))}
                            </div>
                                </div>

                                <div className="flex justify-between items-center p-5">
                                <p className="font-medium text-slate-800">{destination.price}</p>
                                <p className="font-medium text-slate-800">{destination.period}</p>
                                </div>
                            
                        </div>
                    ))}
                </div>
                   
            </ul>

        </Container>
    );
}