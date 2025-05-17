import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.NEXT_PUBLIC_WEB_FORM_API_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_WEB_FORM_API_KEY);
  }, []);

  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg[length:90%_auto]"
    >
      <h4 className="text-center mb-2 text-lg" style={{ fontFamily: "ovo" }}>
        Connect With Me
      </h4>
      <h2 className="text-center text-5xl" style={{ fontFamily: "ovo" }}>
        Get In Touch
      </h2>

      <p
        className="text-center max-w-2xl mx-auto mt-5 mb-12"
        style={{ fontFamily: "ovo" }}
      >
        I'd love to hear from you! If you have any questions, comments or
        feedbacks. Please use the form below.
      </p>

      <form className="max-w-2xl mx-auto" onSubmit={onSubmit}>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Enter your name"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            name="Name"
          />
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            name="Email"
          />
        </div>
        <textarea
          name="Message"
          id=""
          placeholder="Enter your message"
          required
          rows="6"
          className="outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 w-full p-4"
        ></textarea>
        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500"
        >
          Submit Now <Image src={assets.right_arrow} className="w-4" alt="" />
        </button>
        <p className="mt-4">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
