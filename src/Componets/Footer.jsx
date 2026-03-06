import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-indigo-900 text-white shadow-inner mt-10">
      
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        <div>
          <h6 className="footer-title text-lg font-bold mb-4">Genres</h6>
          <a className="link link-hover block mb-1 hover:text-primary transition-colors">Action</a>
          <a className="link link-hover block mb-1 hover:text-primary transition-colors">Comedy</a>
          <a className="link link-hover block mb-1 hover:text-primary transition-colors">Horror</a>
          <a className="link link-hover block mb-1 hover:text-primary transition-colors">Romance</a>
          <a className="link link-hover block mb-1 hover:text-primary transition-colors">Sci-Fi</a>
        </div>

        <div>
          <h6 className="footer-title text-lg font-bold mb-4">Company</h6>
          <a className="link link-hover block mb-1 hover:text-primary transition-colors">About Us</a>
          <a className="link link-hover block mb-1 hover:text-primary transition-colors">Contact</a>
          <a className="link link-hover block mb-1 hover:text-primary transition-colors">Careers</a>
          <a className="link link-hover block mb-1 hover:text-primary transition-colors">Press</a>
        </div>

        <div>
          <h6 className="footer-title text-lg font-bold mb-4">Legal</h6>
          <a className="link link-hover block mb-1 hover:text-primary transition-colors">Terms of Use</a>
          <a className="link link-hover block mb-1 hover:text-primary transition-colors">Privacy Policy</a>
          <a className="link link-hover block mb-1 hover:text-primary transition-colors">Cookie Policy</a>
        </div>

        <div>
          <h6 className="footer-title text-lg font-bold mb-4 text-center sm:text-left">Newsletter</h6>
          <p className="text-gray-300 mb-4 text-sm text-center sm:text-left">Get the latest movie updates and releases!</p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="username@site.com"
              className="input input-bordered flex-1 text-black text-sm"
            />
            <button className="btn btn-primary w-full sm:w-auto">Subscribe</button>
          </div>

          <div className="flex gap-3 mt-4 text-xl text-white">
            <a href="#" className="hover:text-primary transition-colors"><FaFacebookF /></a>
            <a href="#" className="hover:text-primary transition-colors"><FaInstagram /></a>
            <a href="#" className="hover:text-primary transition-colors"><FaTwitter /></a>
            <a href="#" className="hover:text-primary transition-colors"><FaYoutube /></a>
          </div>
        </div>

      </div>

      <div className="text-center py-4 text-gray-400 border-t border-gray-700">
        &copy; {new Date().getFullYear()} MovieBox. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
