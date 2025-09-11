import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 mt-10">
      <p className="text-center text-white py-6">
        Copyright &copy; 2021 All rights reserved.
      </p>
      <div className="flex justify-center gap-4">
        <a href="#" className="text-white text-sm">
          <i class="fa-brands fa-facebook"></i>
        </a>
        <a href="#" className="text-white text-sm">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="#" className="text-white text-sm">
          <i class="fa-brands fa-x-twitter"></i>
        </a>
        <a href="#" className="text-white text-sm">
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </div>
      <div className="flex justify-center gap-4">
        <a href="#" className="text-white text-sm">
          Privacy Policy
        </a>
        <a href="#" className="text-white text-sm">
          Terms & Conditions
        </a>
      </div>
    </footer>
  );
};

export default Footer;
