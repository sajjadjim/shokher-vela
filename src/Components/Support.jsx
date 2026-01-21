import React from 'react';
import { Mail, HelpCircle, Clock } from 'lucide-react';

const Support = () => {
  return (
    <section className="bg-[#F8EDE3] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#3A0519] mb-4">Support & Help Center</h2>
          <p className="text-gray-600 text-lg">
            We're here to assist you. Choose a method that suits you best to reach our team or find answers quickly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email Support */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center mb-4">
              <Mail className="text-[#3A0519] w-6 h-6 mr-3" />
              <h3 className="text-xl font-semibold text-[#3A0519]">Email Us</h3>
            </div>
            <p className="text-gray-600 mb-3">
              Reach out for technical or general support. We typically respond within 24 hours.
            </p>
            <a
              href="mailto:support@hobbyhub.com"
              className="text-[#3A0519] font-medium hover:underline"
            >
              support.hobbyhub@gmail.com
            </a>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center mb-4">
              <HelpCircle className="text-[#3A0519] w-6 h-6 mr-3" />
              <h3 className="text-xl font-semibold text-[#3A0519]">Help & FAQ</h3>
            </div>
            <p className="text-gray-600 mb-3">
              Visit our FAQ for answers to common questions about groups, profiles, and more.
            </p>
            <a
              href="/faq"
              className="text-[#3A0519] font-medium hover:underline"
            >
              View FAQ
            </a>
          </div>

          {/* Hours */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center mb-4">
              <Clock className="text-[#3A0519] w-6 h-6 mr-3" />
              <h3 className="text-xl font-semibold text-[#3A0519]">Support Hours</h3>
            </div>
            <p className="text-gray-600">
              Sunday – Thursday: 9:00 AM – 6:00 PM <br />
              We aim to resolve inquiries as quickly as possible.
            </p>
             <a
              href="/faq"
              className="text-[#3A0519] font-medium hover:underline"
            >
              Call us: +8801365802647
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;

