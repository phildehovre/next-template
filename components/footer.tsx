import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center">
      <div className="flex justify-around p-3 text-sm items-center">
        <div>
          <ul className="flex flex-col gap-y-2">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-y-2">
            <li>
              <a href="/terms">Terms</a>
            </li>
            <li>
              <a href="/privacy">Privacy</a>
            </li>
            <li>
              <a href="/cookies">Cookies</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center">Copyright</div>
    </footer>
  );
};

export default Footer;
