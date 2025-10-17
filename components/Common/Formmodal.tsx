"use client";
import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interestedIn: "",
    PlotSize: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;



  if (name === "name") {
    const namePattern = /^[A-Za-z\s]*$/;
    if (!namePattern.test(value)) {
      return;
    }
  }


    if (name === "phone" && (/[^0-9]/.test(value) || value.length > 10)) {
      return;
    }


    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const response = await fetch("http://192.168.0.95:3000/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", phone: "", email: "", interestedIn: "", PlotSize: "" });


        setTimeout(() => {
          onClose();
          setSuccess(false);
         }, 3000);
      } else {
        alert("Error submitting form");
      }
    } catch (error) {
      console.error("API error:", error);
      alert("Submission failed!");
    } finally {
      setLoading(false);
    }
  };




  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.5)] z-50 px-4">
 <div className="relative flex flex-col md:flex-row items-center bg-white p-3 md:p-6 rounded-lg shadow-2xl w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl mx-auto max-h-[90vh] md:max-h-none overflow-y-auto">


    {/* Close Button */}
    <button
      onClick={onClose}
      className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 transition"
    >
      <X size={24} />
    </button>

    {/* Image Section */}
    <div className="w-full md:w-1/2 flex justify-center">
      <Image
        src="/images/form.svg"
        alt="Contact Form Image"
        width={400}
        height={300}
        className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-none h-auto rounded-lg"
      />
    </div>

    {/* Form Section */}
    <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-6">
      <h2 className="text-lg font-bold text-green-800 mb-1 text-center md:text-left">Book</h2>
      <h3 className="text-xl font-semibold text-green-800 mb-1 text-center md:text-left">A site visit</h3>
      <h2 className="text-lg text-green-800 mt-4 md:mt-6 text-center md:text-left">Send Us A Message</h2>

      {success && <p className="text-green-600 text-sm mt-2 text-center md:text-left">Your message has been sent successfully!</p>}

      <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
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
          onChange={handleChange}
          placeholder="Phone"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        {/* Interested In Dropdown */}
        <select
          name="interestedIn"
          value={formData.interestedIn}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        >
          <option value="">Interested In</option>
              <option value="Investments">Farm Plots </option>
              <option value="Residential Plots">Farm House</option>
              <option value="Weekend Destination">Weekend Destination</option>
        </select>

        {/* Looking Plot Size Dropdown */}
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
          className="w-[60%]  flex items-center justify-center gap-2 bg-yellow-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-yellow-600 transition"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit →"}
        </button>
      </form>
    </div>
  </div>
</div>

  );
};

export default Modal;