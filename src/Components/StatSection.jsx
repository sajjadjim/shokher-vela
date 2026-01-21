import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { BarChart3, Users, Globe2, Star } from 'lucide-react';

const StatSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

  return (
    <section className="bg-secondary-color py-16 " ref={ref}>
      <div className="w-10/12 mx-auto px-6 text-center border-1 border-yellow-600 rounded-xl shadow-lg py-10">
        <h2 className="text-4xl font-bold text-[#3A0519] mb-4">"Shokher Vela" Connect</h2>
        <p className="text-gray-600 mb-12 text-lg">
          Our growing community is a testament to the power of shared passions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Users size={40} />, number: 1200, suffix: '+', label: 'Active Members' },
            { icon: <BarChart3 size={40} />, number: 235, suffix: '+', label: 'Vela Groups' },
            { icon: <Globe2 size={40} />, number: 27, suffix: '+', label: 'Cities Connected' },
            { icon: <Star size={40} />, number: 87, suffix: '%', label: 'User Satisfaction' },
          ].map((stat, index) => (
            <div key={index} className="bg-white shadow-amber-300 transition-all duration-300 hover:scale-105 cursor-pointer rounded-2xl shadow p-6">
              <div className="mx-auto text-[#3A0519]">{stat.icon}</div>
              <h3 className="text-3xl font-semibold text-[#3A0519] mt-4">
                {inView && (
                  <CountUp end={stat.number} duration={5} suffix={stat.suffix} />
                )}
              </h3>
              <p className="text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatSection;

