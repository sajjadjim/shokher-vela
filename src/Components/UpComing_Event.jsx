import React from 'react';
import { Slide } from "react-awesome-reveal";

const events = [
    {
        name: "📸 Photography Challenge",
        date: "August 10, 2026",
        location: "Online",
        description: "Submit your best cityscape photo and win exciting prizes!",
        action: "Join Now",
        link: "http://localhost:5173/login",
    },
    {
        name: "🎨 HobbyHub Art Fair",
        date: "July 5, 2026",
        location: "Community Center",
        description: "Live painting, sketching, and local artist showcases.",
        action: "More Info",
        link: "http://localhost:5173/login",
    },
    {
        name: "🏃‍♂️ 5K Running Challenge",
        date: "June 25, 2026",
        location: "Central Park",
        description: "Challenge yourself and earn rewards at our summer run.",
        action: "Register",
        link: "http://localhost:5173/login",
    },
    {
        name: "🏃‍♂️ 7.5K Running Challenge",
        date: "January 25, 2026",
        location: "Central Park",
        description: "Challenge yourself and earn rewards at our summer run.",
        action: "Register",
        link: "http://localhost:5173/login",
    }
];


const UpComing_Event = () => {
    return (
        <div>
            <section className="my-14 px-6 w-10/12 mx-auto text-[#3A0519]">
                <h2 className="text-4xl font-bold text-center mb-10"> Upcoming Events</h2>
                <div className="relative border-[#944E63] md:border-l-0 border-l-4 md:flex pl-6 space-y-10">
                    {events.map((event, index) => (
                        <Slide className='border-[#944E63]  md:border-l-4 border-l-0 pl-6 space-y-10' key={index} direction="up" triggerOnce>
                            <div className="relative">
                                <div className="absolute -left-[18px] w-4 h-4 bg-[#944E63]  rounded-full top-0.5 "></div>
                                <p className="text-sm text-[#3A0519]">{event.date} — {event.location}</p>
                                <h3 className="text-2xl font-semibold text-[#3A0519]">{event.name}</h3>
                                <p className="text-gray-600">{event.description}</p>
                                <a href={event.link} className="inline-block mt-2 text-[#944E63] hover:cursor-pointer font-medium">
                                    🔗 {event.action}
                                </a>
                            </div>
                        </Slide>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default UpComing_Event;