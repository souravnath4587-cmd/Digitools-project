import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#101727] p-14">
      <div className="w-sm mx-auto lg:w-4xl flex flex-col gap-6 lg:flex-row justify-between text-white">
        <div className=" lg:text-left  ">
          <h1 className="!text-white !mt-0 ">DigiTools</h1>
          <p className="w-sm lg:w-[300px] ">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>
        <div className="!space-y-2">
          <h3 className="text-2xl !font-bold">Products</h3>
          <p>Features</p>
          <p>Pricing</p>
          <p>Templates</p>
          <p>Integrations</p>
        </div>
        <div className="!space-y-2">
          <h3 className="text-2xl !font-bold">Company</h3>
          <p>About</p>
          <p>Blog</p>
          <p>Careers</p>
          <p>Press</p>
        </div>
        <div className="!space-y-2">
          <h3 className="text-2xl !font-bold">Resources</h3>
          <p>Documentation</p>
          <p>Help Center</p>
          <p>Comunity</p>
          <p>Contact</p>
        </div>
        <div className="!space-y-2">
          <h3 className="text-2xl !font-bold">Social Links</h3>
          <div className="flex flex-row gap-4 justify-center lg:justify-start items-center">
            <a className="p-2 rounded-full bg-[#0537ff] " href="">
              <FaInstagram />
            </a>
            <a className="p-2 rounded-full bg-[#0537ff] " href="">
              {" "}
              <FaFacebook />
            </a>
            <a className="p-2 rounded-full bg-[#0537ff] " href="">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <hr className="border-white my-10" />

      <div className="flex flex-col lg:flex-row justify-between itmes-center text-white ">
        <p>© 2026 Digitools. All rights reserved.</p>
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <p>Privacy Policy </p>
          <p>Terms of Service</p>
          <p>Cookies </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
