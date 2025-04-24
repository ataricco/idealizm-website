import React, { useState } from "react";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const scriptURL = process.env.NEXT_PUBLIC_SCRIPT_URL; // web app url (in private file)
    if (!scriptURL) {
      alert("Script URL is not defined. Please check your environment variables.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      alert("Thank you for your message! Your response has been recorded.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        companyName: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your form. Please try again.");
    } finally { //after submitted
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 flex flex-col gap-8 rounded-xl">
      {/* Intro Section */}
      <div className="{bg-primaryYellow p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4 text-textBlue-800">Ready to make your organization more VIP friendly?</h2>
        <h2 className="text-xl font-bold mb-4 text-textBlue-800">Looking for advice about practices or protocols?</h2>
        <p className="text-textBlue-700 mb-4">
          Message me through this form, and someone will get back to you as soon as possible.
        </p>
      </div>

      {/* Form Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-6 text-graytext-textBlue800">Contact Plan Consulting</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block font-bold mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block font-bold mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Company Name */}
          <div>
            <label htmlFor="companyName" className="block font-bold mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg resize-vertical"
            />
          </div>

          {/* Submit Button and spinny loading wheel while submitting*/}
          <div className="flex flex-col items-center">
            {loading && (
              <div className="flex justify-center items-center mb-4">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-500"></div> 
              </div>
            )}
            <button
              type="submit"
              className={`w-full bg-primaryYellow text-textBlue font-bold py-3 rounded-xl transition ${
                loading ? "opacity-50 cursor-not-allowed" : "hover:bg-green-200"
              }`}
              disabled={loading} // Disable the button while loading
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;