"use client";
import React from "react";
import Image from "next/image"; // Import Image component

const services = [
    {
        title: "Accommodation",
        image: "/accommodation.png",
        description: "We help students find safe, comfortable, and affordable accommodations near their universities. Our extensive network ensures you get the best options, whether you're looking for shared apartments, private rooms, or homestays."
    },
    {
        title: "Forex",
        image: "/forex.png",
        description: "Get the best exchange rates with our trusted Forex partners. We ensure secure and cost-effective currency exchange services for students traveling abroad, reducing financial stress."
    },
    {
        title: "Education Loan",
        image: "/education-loan.png",
        description: "Our expert advisors guide students in securing education loans with the lowest interest rates. We partner with top banks to ensure a hassle-free loan application process tailored to your financial needs."
    },
    {
        title: "Ticket Assistance",
        image: "/ticket.png",
        description: "We provide end-to-end ticket booking services, ensuring students get the most affordable and convenient flight tickets. Our team also offers flexible rescheduling and cancellation support."
    },
    {
        title: "Tourist Visa",
        image: "/tourist-visa.png",
        description: "Planning to explore a new country? We assist in obtaining tourist visas with expert guidance, ensuring a smooth and hassle-free application process."
    }
];

const ServicesPage = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">Our Services</h1>
            <div className="grid md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                    <div key={index} className="flex bg-blue-100 p-6 rounded-lg shadow-lg">
                        <Image
                            src={service.image}
                            alt={service.title}
                            width={96}
                            height={96}
                            className="w-24 h-24 mr-4 rounded-lg object-cover"
                        />
                        <div>
                            <h3 className="text-xl font-semibold text-blue-800">{service.title}</h3>
                            <p className="text-gray-600 mt-2">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesPage;
