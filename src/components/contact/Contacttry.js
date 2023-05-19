import React from "react";
import Title from "../../layouts/Title";

import ContactLeft from "./ContactLeft";

const Contacttry = () => {
  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form
              action="https://formspree.io/f/mknaelpv"
              method="POST"
              className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5"
            >
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Your name
                  </p>
                  <input
                    type="text"
                    name="username"
                    // id="username"
                    placeholder="Enter your name"
                    className={`"outline-designColor" contactInput`}
                    // value={user.username}
                    // onChange={handleChange}
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Phone Number
                  </p>
                  <input
                    type="number"
                    name="phone"
                    // id="phone"
                    placeholder="Enter your phone"
                    className={`"outline-designColor" contactInput`}
                    // value={user.phone}
                    // onChange={handleChange}
                    required
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Email
                </p>
                <input
                  type="text"
                  name="email"
                  //   id="email"
                  placeholder="Enter your email"
                  className={`"outline-designColor" contactInput`}
                  //   value={user.email}
                  //   onChange={handleChange}
                  required
                  autoComplete="off"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Subject
                </p>
                <input
                  type="text"
                  name="subject"
                  //   id="subject"
                  placeholder="Enter your subject"
                  className={`"outline-designColor" contactInput`}
                  //   value={user.subject}
                  //   onChange={handleChange}
                  required
                  autoComplete="off"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Message
                </p>
                <textarea
                  name="message"
                  //   id="message"
                  rows={5}
                  placeholder="Enter your Message"
                  className={`"outline-designColor"  contactTextArea`}
                  //   value={user.message}
                  //   onChange={handleChange}
                  required
                  autoComplete="off"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  // onClick={handleSend}
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacttry;
