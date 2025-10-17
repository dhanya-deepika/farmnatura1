"use client";
import { useState, useLayoutEffect, useRef, useEffect } from "react";
import Image from "next/image";
import FarmNaturaFooter from "./project-highlights/FarmNaturaFooter";
import MoveInSection from "./project-highlights/MoveInSection";
import gsap from "gsap";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interestedIn: "",
    PlotSize: "",
  });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.2,
        }
      );
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "name") {
      const namePattern = /^[A-Za-z\s]*$/;
      if (!namePattern.test(value)) return;
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.interestedIn ||
      !formData.PlotSize
    ) {
      alert("Please fill out all fields.");
      return;
    }

    const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(formData.name)) {
      alert("Name should only contain alphabets.");
      return;
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(formData.phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://192.168.0.95:3000/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      await response.json();
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        interestedIn: "",
        PlotSize: "",
      });
    } catch (error) {
      console.error(error);
      alert("There was an error submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <div className="bg-[#FFFFF] min-h-screen">
      <div
        ref={formRef}
        className="flex flex-col md:flex-row items-center bg-[#FFFFF] p-6 md:p-10 rounded-lg shadow-2xl max-w-4xl mx-auto mt-8"
      >
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <Image
            src="/images/contact/form.svg"
            alt="Contact Form Image"
            width={400}
            height={300}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-10">
          {/* Card Header inside form */}
          <div className="mb-6">

            <h3 className="text-xl font-semibold text-green-800">
               Book A site visit
            </h3>
          </div>

          {success && (
            <p className="text-green-600 text-sm mb-2">
              Your message has been sent successfully!
            </p>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={(e) => {
                if (/^\d{0,10}$/.test(e.target.value)) handleChange(e);
              }}
              placeholder="Phone"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
              maxLength={10}
            />
            <select
              name="interestedIn"
              value={formData.interestedIn}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            >
              <option value="">Interested In</option>
              <option value="Investments">Farm Plots</option>
              <option value="Residential Plots">Farm House</option>
              <option value="Weekend Destination">Weekend Destination</option>
            </select>
            <select
              name="PlotSize"
              value={formData.PlotSize}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            >
              <option value="">Looking Plot Size</option>
              <option value="200-300 Sq Yards">1000 sq.yards</option>
              <option value="300-500 Sq Yards">1/4 Acre (1210 sq.yards)</option>
              <option value="500-1000 Sq Yards">1/2 Acre (2420 sq.yards)</option>
              <option value="Above 1000 Sq Yards">1 Acre (4840 sq.yards)</option>
            </select>

            <button
              type="submit"
              className="w-full md:w-auto flex justify-center items-center gap-2 bg-yellow-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-yellow-600 transition"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit →"}
            </button>
          </form>
        </div>
      </div>

      <div className="mt-15">
        <MoveInSection bgColor="#FFFDF2" />
      </div>

      <div>
        <FarmNaturaFooter bgColor="#FFFDF2" />
      </div>
    </div>
  );
};

export default Contact;
