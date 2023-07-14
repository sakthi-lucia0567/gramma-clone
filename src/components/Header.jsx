import React from "react";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function sideMenu() {
    // console.log(isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
    // console.log(isMenuOpen);
  }

  return (
    <div>
      <header>
        <div className="header flex flex-row justify-between items-center m-6">
          <div className="logo">
            <label htmlFor="gramma">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="164"
                height="50"
              >
                <path
                  fill="#334CFF"
                  d="M-.02 25.03L24.587.423 49.194 25.03 24.587 49.638z"
                ></path>
                <path d="M67.7 20.1c3.3 0 4.2 2 4.2 2h.1v-.4c0-.8.4-1.3 1.5-1.3h2.4v2.2h-1c-.3 0-.6.2-.6.5V33c0 4.3-3.3 6-6.6 6-1.6 0-3.2-.4-4.5-1.1l.9-2s1.6.9 3.6.9c2.3 0 4.1-1 4.1-3.7v-.9c0-.4.1-.8.1-.8h-.1c-.8 1.3-2 2-3.9 2-3.6 0-5.9-2.9-5.9-6.7-.1-3.8 2-6.6 5.7-6.6zm4.1 6.6c0-3.4-1.7-4.4-3.7-4.4-2.3 0-3.6 1.7-3.6 4.3 0 2.7 1.4 4.6 3.8 4.6 1.8 0 3.5-1.1 3.5-4.5zm7.3-3.6c0-.4-.2-.6-.6-.6h-1.1v-2.2h2.4c1.1 0 1.7.5 1.7 1.5v.8c0 .5-.1.9-.1.9h.1c.6-1.9 2.1-3.4 4.1-3.4.3 0 .7.1.7.1v2.5s-.3-.1-.8-.1c-1.6 0-3.1 1.1-3.7 3.1-.2.8-.3 1.6-.3 2.4v5.4H79V23.1zm16.4 2.2h.6v-.1c0-2.3-.9-3.1-2.9-3.1-.6 0-2.2.2-2.2 1v.8h-2.4v-1.3c0-2.2 3.3-2.5 4.5-2.5 4.3 0 5.4 2.2 5.4 5.1v5.6c0 .4.2.6.6.6h1.1v2.2h-2.4c-1.2 0-1.6-.6-1.6-1.5 0-.4.1-.8.1-.8h-.1s-1 2.6-4.2 2.6c-2.3 0-4.5-1.4-4.5-4 .1-4.3 5.8-4.6 8-4.6zm-2.9 6.5c2.1 0 3.5-2.2 3.5-4.2v-.4h-.6c-1.9 0-5.3.1-5.3 2.5-.1 1.1.7 2.1 2.4 2.1zm10.9-8.7c0-.4-.2-.6-.6-.6h-1.1v-2.2h2.4c1.1 0 1.7.5 1.7 1.5v1.3h.1c.6-1.5 2.4-3 4.5-3 2.2 0 3.5 1 3.9 3h.1c.7-1.6 2.5-3 4.7-3 3 0 4.3 1.7 4.3 5v5.7c0 .4.2.6.6.6h1.1v2.2h-2.5c-1.2 0-1.7-.5-1.7-1.7v-6.2c0-1.8-.4-3.3-2.3-3.3-1.8 0-3.2 1.6-3.7 3.4-.1.5-.2 1.1-.2 1.8v6h-2.5v-7.9c0-1.7-.3-3.3-2.3-3.3-1.9 0-3.3 1.6-3.8 3.5-.1.5-.2 1.1-.2 1.7v6h-2.5V23.1zm31.4 2.2h.6v-.1c0-2.3-.9-3.1-2.9-3.1-.6 0-2.2.2-2.2 1v.8H128v-1.3c0-2.2 3.3-2.5 4.5-2.5 4.3 0 5.4 2.2 5.4 5.1v5.6c0 .4.2.6.6.6h1.1v2.2h-2.4c-1.2 0-1.6-.6-1.6-1.5 0-.4.1-.8.1-.8h-.1s-1 2.6-4.2 2.6c-2.3 0-4.5-1.4-4.5-4 .1-4.3 5.8-4.6 8-4.6zm-2.9 6.5c2.1 0 3.5-2.2 3.5-4.2v-.4h-.6c-1.9 0-5.3.1-5.3 2.5 0 1.1.8 2.1 2.4 2.1zm10.9-8.7c0-.4-.2-.6-.6-.6h-1.1v-2.2h2.4c1.1 0 1.7.5 1.7 1.5v.8c0 .5-.1.9-.1.9h.1c.6-1.9 2.1-3.4 4.1-3.4.3 0 .7.1.7.1v2.5s-.3-.1-.8-.1c-1.6 0-3.1 1.1-3.7 3.1-.2.8-.3 1.6-.3 2.4v5.4h-2.5V23.1zm16.4 2.2h.6v-.1c0-2.3-.9-3.1-2.9-3.1-.6 0-2.2.2-2.2 1v.8h-2.4v-1.3c0-2.2 3.3-2.5 4.5-2.5 4.3 0 5.4 2.2 5.4 5.1v5.6c0 .4.2.6.6.6h1.1v2.2h-2.4c-1.2 0-1.6-.6-1.6-1.5 0-.4.1-.8.1-.8h-.1s-1 2.6-4.2 2.6c-2.3 0-4.5-1.4-4.5-4 .1-4.3 5.8-4.6 8-4.6zm-2.9 6.5c2.1 0 3.5-2.2 3.5-4.2v-.4h-.6c-1.9 0-5.3.1-5.3 2.5-.1 1.1.7 2.1 2.4 2.1z"></path>
                <image
                  width="25"
                  height="26"
                  overflow="visible"
                  transform="translate(12 12)"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAaCAYAAABCfffNAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAdtJREFUeNq0Vl1SwyAQBkLVcbyU t/DVM3gpb+Gjb55FW3VMmgSzLB9ZaMg0TcrMDguBfMu3P6A/986poWk9CjVjWDc6/Ybv2JPrYio2 wxDcSMcYemmMuVx3UyBTG7ZuNgeIx9bbgRhJA0nfl6m4GEQOANS26aJzTjW3xpLltIB+voaiuf0e hMIVPah5uN/OK97xBABfXCW6OvHzrr8WSLdsw+MTE1pV7IPKsG5JLFcIoh1CnNs14SmrQexFvLpQ ZmxzZGskXZVZEE0ID5HEGnUPdLWBLurpyEt944K5khGj08oRfbLUN7FaT/T+NKGSK/gEGZ5n+jl0 9UNfaWbiJgRBTretG6YJtIGyUnt7LSfp84tzBOpdZUZjfMY3wgfNilzxIa1P5+zJZTMoP7+XgRBV qBwoVR7o/YNhjkeepMH+oNTXgSnsgvzVw5o21VGOvAwbD9+nwPTN1jUvwCnJR7GOuXEhPCGrdpTA /W7HPRkChnzmA4CsJgASypO72zEEnaATen6Deu5D0FB5IcHDw6hwG4IWGfPWqjLKxAuFjNpZkZTI fMoNcN124/FBTQJWevPkAWDSJ5TtMw6lM+UVkESLLhRHlZaWvvgkAo8mzW7cnPlVO/e6wdS/AAMA o2sZlrKOsfQAAAAASUVORK5CYII="
                ></image>
              </svg>
            </label>
          </div>
          <div className="mobile-view">
            <button onClick={sideMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="none"
                stroke="#334cff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M3 12L21 12"></path>
                <path d="M3 6L21 6"></path>
                <path d="M3 18L21 18"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
