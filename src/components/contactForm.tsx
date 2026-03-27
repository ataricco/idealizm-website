import React, { useState } from "react";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("idle");

    const scriptURL = process.env.NEXT_PUBLIC_SCRIPT_URL; // web app url (in private file)
    if (!scriptURL) {
      setSubmitStatus("error");
      return;
    }

    setLoading(true);

    try {
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        companyName: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      //after submitted
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 flex flex-col gap-8 rounded-xl"
         data-aos="fade-up">
      
      {/* Form Section */}
      <div className="bg-formBg p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-6 text-formText">
          Please complete all required fields, indicated with a *, so we can best respond to your inquiry.
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6 text-formText">
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block font-bold mb-2">
              First Name*
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full p-3 border border-inputBorder bg-inputBg text-inputText rounded-lg focus:ring-2 focus:ring-blueText outline-none"
            />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block font-bold mb-2">
              Last Name*
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full p-3 border border-inputBorder bg-inputBg text-inputText rounded-lg focus:ring-2 focus:ring-blueText outline-none"
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
              className="w-full p-3 border border-inputBorder bg-inputBg text-inputText rounded-lg focus:ring-2 focus:ring-blueText outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block font-bold mb-2">
              Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-inputBorder bg-inputBg text-inputText rounded-lg focus:ring-2 focus:ring-blueText outline-none"
            />
          </div>

          {/* Phone Number*/}
          <div>
            <label htmlFor="phoneNumber" className="block font-bold mb-2">
              Phone Number*
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="w-full p-3 border border-inputBorder bg-inputBg text-inputText rounded-lg focus:ring-2 focus:ring-blueText outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block font-bold mb-2">
              Message*
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border border-inputBorder bg-inputBg text-inputText rounded-lg resize-vertical focus:ring-2 focus:ring-blueText outline-none"
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
              className={`w-full bg-primaryYellow text-blueText font-bold py-3 rounded-xl transition ${
                loading ? "opacity-50 cursor-not-allowed" : "hover:bg-green-200"
              }`}
              disabled={loading} // Disable the button while loading
              aria-disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
            
            {/* Accessible status messages */}
            <div aria-live="polite" className="mt-4 text-center w-full">
              {submitStatus === "success" && (
                <p className="text-green-700 font-bold p-3 bg-green-50 rounded border border-green-200">
                  Thank you for your message! Your response has been recorded.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-700 font-bold p-3 bg-red-50 rounded border border-red-200">
                  There was an error submitting your form. Please try again.
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;