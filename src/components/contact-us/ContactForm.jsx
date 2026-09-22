"use client";

import { useState } from "react";
import { ArrowRight, Send } from "lucide-react";

const initialFormData = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    const trimmedValue = value.trim();

    switch (name) {
      case "name":
        if (!trimmedValue) {
          return "Full name is required.";
        }

        if (trimmedValue.length < 2) {
          return "Name must contain at least 2 characters.";
        }

        if (!/^[a-zA-Z\s.'-]+$/.test(trimmedValue)) {
          return "Name can only contain letters and spaces.";
        }

        return "";

      case "phone": {
        if (!trimmedValue) {
          return "Phone number is required.";
        }

        const cleanPhone = trimmedValue.replace(/[\s()+-]/g, "");

        if (!/^\d+$/.test(cleanPhone)) {
          return "Phone number can only contain numbers.";
        }

        if (cleanPhone.length < 10 || cleanPhone.length > 13) {
          return "Please enter a valid 10–13 digit phone number.";
        }

        return "";
      }

      case "email":
        if (!trimmedValue) {
          return "Email address is required.";
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmedValue)) {
          return "Please enter a valid email address.";
        }

        return "";

      case "subject":
        if (!trimmedValue) {
          return "Please select a subject.";
        }

        return "";

      case "message":
        if (!trimmedValue) {
          return "Message is required.";
        }

        if (trimmedValue.length < 10) {
          return "Message must contain at least 10 characters.";
        }

        if (trimmedValue.length > 1000) {
          return "Message cannot exceed 1000 characters.";
        }

        return "";

      default:
        return "";
    }
  };

  const validateForm = () => {
    const newErrors = {};

    Object.keys(formData).forEach((fieldName) => {
      const errorMessage = validateField(
        fieldName,
        formData[fieldName]
      );

      if (errorMessage) {
        newErrors[fieldName] = errorMessage;
      }
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    /*
     * Agar field par pehle se error hai,
     * toh typing ke saath dobara validate hoga.
     */
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: validateField(name, value),
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const errorMessage = validateField(name, value);

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isFormValid = validateForm();

    if (!isFormValid) {
      return;
    }

    const emailBody = `
Name: ${formData.name.trim()}
Phone: ${formData.phone.trim()}
Email: ${formData.email.trim()}
Subject: ${formData.subject}

Message:
${formData.message.trim()}
    `;

    const mailtoLink = `mailto:clientemail@gmail.com?subject=${encodeURIComponent(
      `Website Enquiry: ${formData.subject}`
    )}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;
  };

  const getInputClasses = (fieldName) => {
    const baseClasses =
      "mt-2 h-10 w-full rounded-md border bg-[#f8faff] px-4 font-inter text-sm text-[#071b37] outline-none transition-all duration-300 placeholder:text-[#9aa6b6] focus:bg-white focus:ring-4";

    if (errors[fieldName]) {
      return `${baseClasses} border-red-500 focus:border-red-500 focus:ring-red-500/10`;
    }

    return `${baseClasses} border-[#dce3ed] focus:border-[#0878dc] focus:ring-[#0878dc]/10`;
  };

  const getTextareaClasses = () => {
    const baseClasses =
      "mt-2 min-h-35 w-full resize-y rounded-md border bg-[#f8faff] px-4 py-3 font-inter text-sm leading-6 text-[#071b37] outline-none transition-all duration-300 placeholder:text-[#9aa6b6] focus:bg-white focus:ring-4";

    if (errors.message) {
      return `${baseClasses} border-red-500 focus:border-red-500 focus:ring-red-500/10`;
    }

    return `${baseClasses} border-[#dce3ed] focus:border-[#0878dc] focus:ring-[#0878dc]/10`;
  };

  const ErrorMessage = ({ message }) => {
    if (!message) return null;

    return (
      <p
        role="alert"
        className="mt-1 font-inter text-xs leading-4 text-red-500"
      >
        {message}
      </p>
    );
  };

  return (
    <div className="w-full rounded-xl border border-slate-100 bg-white p-5 shadow-[0_15px_45px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
      <div className="mb-5">
        <h2 className="font-montserrat text-2xl font-bold text-[#071b37] sm:text-3xl">
          Send Us a Message
        </h2>

        <p className="mt-2 font-inter text-sm leading-6 text-[#657084]">
          Fill out the form below and we&apos;ll get back to you shortly.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
        noValidate
      >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="font-inter text-sm font-semibold text-[#10233e]"
            >
              Full Name <span className="text-red-500">*</span>
            </label>

            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={getInputClasses("name")}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={
                errors.name ? "name-error" : undefined
              }
              autoComplete="name"
            />

            <div id="name-error">
              <ErrorMessage message={errors.name} />
            </div>
          </div>

          <div>
            <label
              htmlFor="phone"
              className="font-inter text-sm font-semibold text-[#10233e]"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>

            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="Your mobile number"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              className={getInputClasses("phone")}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={
                errors.phone ? "phone-error" : undefined
              }
              inputMode="tel"
              autoComplete="tel"
              maxLength={18}
            />

            <div id="phone-error">
              <ErrorMessage message={errors.phone} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <label
              htmlFor="email"
              className="font-inter text-sm font-semibold text-[#10233e]"
            >
              Email Address <span className="text-red-500">*</span>
            </label>

            <input
              id="email"
              type="email"
              name="email"
              placeholder="you@company.com"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={getInputClasses("email")}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={
                errors.email ? "email-error" : undefined
              }
              autoComplete="email"
            />

            <div id="email-error">
              <ErrorMessage message={errors.email} />
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="font-inter text-sm font-semibold text-[#10233e]"
            >
              Subject <span className="text-red-500">*</span>
            </label>

            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${getInputClasses(
                "subject"
              )} cursor-pointer appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23657084'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m19 9-7 7-7-7'/%3E%3C/svg%3E")] bg-size-[18px] bg-position-[right_14px_center] bg-no-repeat pr-10`}
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={
                errors.subject ? "subject-error" : undefined
              }
            >
              <option value="" disabled>
                Select a subject
              </option>

              <option value="Request a Quote">
                Request a Quote
              </option>

              <option value="Manufacturing Enquiry">
                Manufacturing Enquiry
              </option>

              <option value="Product Support">
                Product Support
              </option>

              <option value="General Enquiry">
                General Enquiry
              </option>
            </select>

            <div id="subject-error">
              <ErrorMessage message={errors.subject} />
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="font-inter text-sm font-semibold text-[#10233e]"
          >
            Your Message <span className="text-red-500">*</span>
          </label>

          <textarea
            id="message"
            name="message"
            placeholder="Tell us about your project..."
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={getTextareaClasses()}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={
              errors.message ? "message-error" : undefined
            }
            maxLength={1000}
          />

          <div className="flex items-start justify-between gap-4">
            <div id="message-error">
              <ErrorMessage message={errors.message} />
            </div>

            <p className="mt-1 shrink-0 font-inter text-xs text-slate-400">
              {formData.message.length}/1000
            </p>
          </div>
        </div>

        <button
          type="submit"
          className="group flex h-10 w-full items-center justify-center gap-3 rounded-md bg-linear-to-r from-[#0860e8] to-[#0795f6] px-6 font-inter text-sm font-semibold text-white shadow-[0_8px_20px_rgba(8,120,220,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_25px_rgba(8,120,220,0.35)] focus:outline-none focus:ring-4 focus:ring-blue-200 active:translate-y-0"
        >
          <Send size={17} strokeWidth={1.8} />

          <span>Send Message</span>

          <ArrowRight
            size={17}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </form>
    </div>
  );
}