import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./InternshipJoin.module.css"; // Adjust the path as necessary

const InternshipJoin = () => {
  const [formData, setFormData] = useState({
    field: "Web developer",
    otherField: "",
    fullName: "",
    contactNo: "",
    email: "",
    cv: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.info("Submitting...", {
      position: "top-right",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    // Log form data to console (no backend submission)
    const submissionData = {
      field: formData.field,
      ...(formData.field === "Others" && { otherField: formData.otherField }),
      fullName: formData.fullName,
      contactNo: formData.contactNo,
      email: formData.email,
      cv: formData.cv ? formData.cv.name : null, // Log file name for demo
    };
    console.log("Form submitted:", submissionData);

    // Simulate a successful submission with a delay for UX
    setTimeout(() => {
      toast.dismiss(); // Clear the "Submitting..." toast
      toast.success("Form submitted successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // Reset form
      setFormData({
        field: "Web developer",
        otherField: "",
        fullName: "",
        contactNo: "",
        email: "",
        cv: null,
      });
    }, 1000); // 1-second delay to mimic processing
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Internship Form</h2>
      <form
        onSubmit={handleSubmit}
        className={styles.form}
        encType="multipart/form-data"
      >
        {/* Field Selection */}
        <div className={styles.formGroup}>
          <label htmlFor="field" className={styles.label}>
            Field of Interest <span className={styles.required}>*</span>
          </label>
          <select
            id="field"
            name="field"
            value={formData.field}
            onChange={handleChange}
            className={styles.select}
            required
          >
            <option value="Web developer">Web Developer</option>
            <option value="Graphics design">Graphics Design</option>
            <option value="UI/UX designer">UI/UX Designer</option>
            <option value="Content writer">Content Writer</option>
            <option value="Others">Others</option>
          </select>
        </div>

        {/* Conditional "Others" Input */}
        {formData.field === "Others" && (
          <div className={styles.formGroup}>
            <label htmlFor="otherField" className={styles.label}>
              Mention the Field <span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="otherField"
              name="otherField"
              value={formData.otherField}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
        )}

        {/* Full Name */}
        <div className={styles.formGroup}>
          <label htmlFor="fullName" className={styles.label}>
            Full Name <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>

        {/* Contact No */}
        <div className={styles.formGroup}>
          <label htmlFor="contactNo" className={styles.label}>
            Contact Number <span className={styles.required}>*</span>
          </label>
          <input
            type="tel"
            id="contactNo"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>

        {/* Email */}
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email <span className={styles.required}>*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>

        {/* CV Upload */}
        <div className={styles.formGroup}>
          <label htmlFor="cv" className={styles.label}>
            Attach CV (PDF) <span className={styles.required}>*</span>
          </label>
          <input
            type="file"
            id="cv"
            name="cv"
            accept=".pdf"
            onChange={handleChange}
            required
            className={styles.fileInput}
          />
        </div>

        {/* Submit Button */}
        <div className={styles.submitContainer}>
          <button
            type="submit"
            className={styles.submitButton}
            disabled={formData.submitting}
          >
            Submit
          </button>
        </div>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default InternshipJoin;
