import React from 'react';
import { Slide } from "react-awesome-reveal";

const events = [
    {
        name: "📸 Photography Challenge",
        date: "June 10, 2025",
        location: "Online",
        description: "Submit your best cityscape photo and win exciting prizes!",
        action: "Join Now",
        link: "#",
    },
    {
        name: "🎨 HobbyHub Art Fair",
        date: "June 20, 2025",
        location: "Community Center",
        description: "Live painting, sketching, and local artist showcases.",
        action: "More Info",
        link: "#",
    },
    {
        name: "🏃‍♂️ 5K Running Challenge",
        date: "June 25, 2025",
        location: "Central Park",
        description: "Challenge yourself and earn rewards at our summer run.",
        action: "Register",
        link: "#",
    },
];


const Challenges = () => {
    return (
        <div>
            <section className="my-14 px-6 w-10/12 mx-auto text-[#3A0519]">
                <h2 className="text-4xl font-bold text-center mb-10"> Upcoming Events</h2>
                <div className="relative border-[#944E63] border-l-4  pl-6 space-y-10">
                    {events.map((event, index) => (
                        <Slide key={index} direction="up" triggerOnce>
                            <div className="relative">
                                <div className="absolute -left-[18px] w-4 h-4 bg-[#944E63]  rounded-full top-0.5 "></div>
                                <p className="text-sm text-[#3A0519]">{event.date} — {event.location}</p>
                                <h3 className="text-2xl font-semibold text-[#3A0519]">{event.name}</h3>
                                <p className="text-gray-600">{event.description}</p>
                                <a className="inline-block mt-2 text-[#944E63] hover:underline font-medium">
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

export default Challenges;