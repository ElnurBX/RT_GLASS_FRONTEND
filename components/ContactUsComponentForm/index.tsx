"use client";
import React from "react";
import styles from "./ContactUsForm.module.css";

const ContactUsForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <div className={styles.flexRow}>
        <div className={styles.formGroup}>
          <label htmlFor="fullName" className={styles.label}>Full Name</label>
          <input id="fullName" name="fullName" placeholder="Full Name" className={styles.input} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input id="email" name="email" type="email" placeholder="Email" className={styles.input} />
        </div>
      </div>

      <div className={styles.flexRow}>
        <div className={styles.formGroup}>
          <label htmlFor="phone" className={styles.label}>Phone Number</label>
          <input id="phone" name="phone" placeholder="Phone Number" className={styles.input} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="subject" className={styles.label}>Subject</label>
          <input id="subject" name="subject" placeholder="Add Subject" className={styles.input} />
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.label}>Message</label>
        <textarea id="message" name="message" placeholder="Please enter your message..." className={styles.textarea}></textarea>
      </div>

      <button type="submit" className={styles.submitButton}>Göndərin</button>
    </form>
  );
};

export default ContactUsForm;
