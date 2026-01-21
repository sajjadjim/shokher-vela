import React from 'react';
import { RiFacebookCircleLine } from 'react-icons/ri';
import { FaInstagram } from 'react-icons/fa';
import { SlSocialYoutube } from 'react-icons/sl';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center text-[#3A0519] p-10 bg-brand">
      <aside>
        <div>
          <h2 className="text-2xl font-bold">Shokhen Vela</h2>
        </div>
        <div>
          <p className="font-semibold mb-3">Follow us on</p>
          <div className="grid grid-flow-col gap-4 ">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <RiFacebookCircleLine size={26} />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={25} />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              <SlSocialYoutube size={26} />
            </a>
          </div>
        </div>
      </aside>

      <div className="text-sm ">
        <p>
          Want any help?{' '}
          <Link className="underline hover:text-[#944E63]" to="/support">
            Support
          </Link>
        </p>
        <p>
          Copyright © {new Date().getFullYear()} - All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
