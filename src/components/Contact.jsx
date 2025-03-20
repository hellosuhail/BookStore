import React from "react";

const Contact = () => {
  return (
    <div className="flex mt-14 items-center justify-center min-h-screen ">
      <div className="max-w-lg w-full p-8 shadow-xl rounded-2xl ">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
        <form>
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-lg font-medium">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="input input-bordered w-full"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-lg font-medium">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="input input-bordered w-full"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-lg font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              required
              className="textarea textarea-bordered w-full h-32"
            ></textarea>
          </div>

          <button type="submit" className="btn bg-[#264653] text-white w-full">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
