import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Snackbar } from "components";

const Contact = () => {
  const form = useRef();
  const [openAlert, setOpenAlert] = useState(false);
  const [alertStatus, setAlertStatus] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const handleCloseAlert = () => setOpenAlert(false);
  const initialValue = {
    fullName: "",
    email: "",
    subject: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialValue);
  const { fullName, email, subject, message } = formData;
  const onValueChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE,
        process.env.REACT_APP_TEMPLATE_SERVICE,
        form.current,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        (res) => {
          setOpenAlert(true);
          setAlertStatus("success");
          setAlertMessage("Email Sent Successfully!");
          setFormData({ ...initialValue });
          setTimeout(() => {
            if (res.text === "OK") {
              window.scrollTo(0, 0);
            }
          }, 1500);
        },
        (err) => {
          setOpenAlert(true);
          setAlertStatus("error");
          setAlertMessage(err.text);
        }
      );
  };

  return (
    <>
      <section id="contact" className="pb-16">
        <div className="container">
          <h2 className="text-headingColor font-[700] text-[2.5rem] mb-8">
            Get in touch
          </h2>
          <div className="md:flex justify-between items-center">
            <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
              <iframe
                title="google-maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1466.9811724122417!2d21.167332249488883!3d42.66215334660495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549f6bebbb9f29%3A0xd63b46c92fd7abac!2sParku%20i%20qytetit!5e0!3m2!1sen!2s!4v1682983700722!5m2!1sen!2s"
                className="border-0 w-full h-full"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8">
              <form className="w-full" ref={form} onSubmit={sendEmail}>
                <div className="mb-5">
                  <input
                    name="fullName"
                    type="text"
                    value={fullName}
                    placeholder="Enter your name"
                    className="w-full p-3 focus:outline-none rounded-[5px]"
                    onChange={(e) => onValueChange(e)}
                  />
                </div>
                <div className="mb-5">
                  <input
                    name="email"
                    type="email"
                    value={email}
                    placeholder="Enter your email"
                    className="w-full p-3 focus:outline-none rounded-[5px]"
                    onChange={(e) => onValueChange(e)}
                  />
                </div>
                <div className="mb-5">
                  <input
                    name="subject"
                    type="text"
                    value={subject}
                    placeholder="Subject"
                    className="w-full p-3 focus:outline-none rounded-[5px]"
                    onChange={(e) => onValueChange(e)}
                  />
                </div>

                <div className="mb-5">
                  <textarea
                    name="message"
                    type="text"
                    value={message}
                    rows={3}
                    placeholder="Write your message"
                    className="w-full p-3 focus:outline-none rounded-[5px]"
                    onChange={(e) => onValueChange(e)}
                  />
                </div>

                <button className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Snackbar
        open={openAlert}
        handleClose={handleCloseAlert}
        alertStatus={alertStatus}
      >
        {alertMessage}
      </Snackbar>
    </>
  );
};

export default Contact;
