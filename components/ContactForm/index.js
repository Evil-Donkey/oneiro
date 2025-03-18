'use client'

import { useForm } from "react-hook-form";
import { useState } from "react";
import Button from "../Button";
import useLazyLoad from "../../hooks/useLazyLoad";
import LazyItem from "../LazyItem";
import styles from "./ContactForm.module.scss";
const ContactForm = () => {
    useLazyLoad();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const onSubmit = async (data) => {
        const username = process.env.NEXT_PUBLIC_WORDPRESS_USERNAME;
        const appPassword = process.env.NEXT_PUBLIC_WORDPRESS_APP_PASSWORD;

        // Base64 encode the username and app password
        const base64Credentials = btoa(`${username}:${appPassword}`);

        const formData = new FormData();

        formData.append("_wpcf7", "55"); // Form ID
        formData.append("_wpcf7_version", "6.0.5"); // Change to your CF7 version
        formData.append("_wpcf7_locale", "en_UK"); // Update based on your language
        formData.append("_wpcf7_unit_tag", "wpcf7-f55-p9-o1"); // Fake unit tag
        formData.append("_wpcf7_container_post", "9"); // Change based on your form's post ID

        formData.append("first-name", data.firstName);
        formData.append("last-name", data.lastName);
        formData.append("email", data.email);
        formData.append("company", data.company);
        formData.append("job-title", data.jobTitle);

        try {
            const response = await fetch(
            `${process.env.NEXT_PUBLIC_WORDPRESS_ENDPOINT}/wp-json/contact-form-7/v1/contact-forms/${process.env.NEXT_PUBLIC_CF7_FORM_ID}/feedback`,
            {
                method: "POST",
                body: formData,
            }
            );

            const result = await response.json();

            if (result.status === "mail_sent") {
                setSuccess(true);
            } else {
                setError(result.messages.validation_error || "Submission failed. Please try again.");
            }
        } catch (err) {
            setError("An error occurred. Please try again later.");
        }
    };

  return (
    <LazyItem> 
        <form onSubmit={handleSubmit(onSubmit)} className={`row ${styles.form}`}>
                <div className="col-12 col-md-6 d-flex flex-column gap-2 mb-4">
                    <label htmlFor="firstName">First Name*</label>
                <input type="text" {...register("firstName", { required: "First name is required" })} placeholder="First Name" />
                {errors.firstName && <p>{errors.firstName.message}</p>}
            </div>

            <div className="col-12 col-md-6 d-flex flex-column gap-2 mb-4">
                <label htmlFor="lastName">Last Name*</label>
                <input type="text" {...register("lastName", { required: "Last name is required" })} placeholder="Last Name" />
                {errors.lastName && <p>{errors.lastName.message}</p>}
            </div>

            <div className="col-12 d-flex flex-column gap-2 mb-4">
                <label htmlFor="email">Email*</label>
                <input type="email" {...register("email", { required: "Email is required" })} placeholder="Email" />
                {errors.email && <p>{errors.email.message}</p>}
            </div>

            <div className="col-12 d-flex flex-column gap-2 mb-4">
                <label htmlFor="company">Company / Organisation*</label>
                <input type="text" {...register("company", { required: "Company is required" })} placeholder="Company / Organisation" />
                {errors.company && <p>{errors.company.message}</p>}
            </div>

            <div className="col-12 d-flex flex-column gap-2 mb-4">
                <label htmlFor="jobTitle">Job Title*</label>
                <input type="text" {...register("jobTitle", { required: "Job title is required" })} placeholder="Job Title" />
                {errors.jobTitle && <p>{errors.jobTitle.message}</p>}
            </div>

            <div className="col-12 d-flex flex-column gap-2 mb-4">
                <label htmlFor="privacyPolicy" className={styles.privacyPolicy}>
                    <input type="checkbox" {...register("privacyPolicy", { required: "You must accept the Privacy Policy" })} />
                    <span>By submitting this form, I agree to the <a href="/privacy-policy">Privacy Policy</a> and consent to the collection, use, and storage of my information as described.</span>
                </label>
                {errors.privacyPolicy && <p>{errors.privacyPolicy.message}</p>}
            </div>

            <div className="col-12 d-flex flex-column align-items-end gap-2">
                <Button submit>Submit</Button>
            </div>

            <div className="col-12 d-flex flex-column gap-2">
                {success && <p>Form submitted successfully!</p>}
                {error && <p>{error}</p>}
            </div>
        </form>
    </LazyItem>
  );
}

export default ContactForm;
