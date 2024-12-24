import { testmonials } from "@/app/data";
import { Container } from "./Container";
import Image from "next/image";

export function Testmonial() {
  return (
    <Container className="py-20">
      <h2 className="text-4xl font-heading font-semibold text-center mb-8">What Our Customers Say</h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testmonials.map((testimonial) => (
          <div key={testimonial.name} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Image
                src={testimonial.image || "/images/default-avatar.jpg"}
                alt={testimonial.name}
                width={50}
                height={50}
                className="w-12 h-12 rounded-full mr-3"
              />
              <div>
                <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                {/* Display star rating */}
                <div className="flex">
                  {Array.from({ length: Math.round(testimonial.rating) }).map((_, index) => (
                    <span key={index} className="text-yellow-500">★</span>
                  ))}
                  {Array.from({ length: 5 - Math.round(testimonial.rating) }).map((_, index) => (
                    <span key={index} className="text-gray-300">★</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600">{testimonial.description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
