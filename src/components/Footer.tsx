import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
export function Footer(){
        return (
            <>
            {/* Footer Section */}
            <footer className="bg-gray-900 text-gray-300 py-12">
              <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  {/* Three Headings */}
                  <div className="flex flex-col md:flex-row justify-between w-full md:space-x-8">
                    <div className="mb-6 md:mb-0">
                      <h3 className="text-lg font-semibold mb-4">Explore</h3>
                      <ul className="space-y-2">
                        <li>Home</li>
                        <li>Destinations</li>
                        <li>Hotels</li>
                        <li>Tours</li>
                      </ul>
                    </div>
                    <div className="mb-6 md:mb-0">
                      <h3 className="text-lg font-semibold mb-4">Services</h3>
                      <ul className="space-y-2">
                        <li>Travel Planning</li>
                        <li>Hotel Booking</li>
                        <li>Customized Tours</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Contact</h3>
                      <ul className="space-y-2">
                        <li>Email: info@nexttours.com</li>
                        <li>Phone: +123-456-7890</li>
                        <li>Location: City Center</li>
                      </ul>
                    </div>
                  </div>
                </div>
      
                {/* Social Media Section */}
                <div className="mt-8 text-center">
                  <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                  <div className="flex justify-center space-x-4">
                    <Link href="#" className="text-blue-500 hover:text-blue-400">
                      <Facebook size={24} />
                    </Link>
                    <Link href="#" className="text-pink-500 hover:text-pink-400">
                      <Instagram size={24} />
                    </Link>
                    <Link href="#" className="text-blue-300 hover:text-blue-200">
                      <Twitter size={24} />
                    </Link>
                  </div>
                </div>
              </div>
            </footer>
          </>
        );
      };