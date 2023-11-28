import React, { useRef, useState } from "react";
import RobotCanvas from "./canvas/Robot";
import emailjs from "@emailjs/browser";
import { Slide } from "react-awesome-reveal";



const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });


  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const isFormValid =   form.name.trim() !== "" && form.email.trim() !== "" && form.message.trim() !== "";

  const inputArea = (label, type, name, rows) => (
    <label className="flex flex-col text-size-14">
      <span className="text-white font-medium mb-2">{label}</span>
      {type === "textarea" ? (
        <textarea
          rows={rows}
          name={name}
          value={form[name]}
          onChange={handleChange}
          className="bg-secondary py-2 px-6  text-white rounded-lg outline-none border-none font-medium shadow-md shadow-blue"
        />
      ) : (
        <input
          type={type}
          name={name}
          value={form[name]}
          onChange={handleChange}
          className="bg-secondary py-2 px-6  text-white rounded-lg outline-none border-none font-medium shadow-md shadow-blue"
        />
      )}
    </label>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) {
        alert("Please enter your name, email, and message.");
      return;
    }
    setLoading(true);


    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Beyzanur",
          from_email: form.email,
          to_email: "beyzanur.balci00@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      id="contact"
      className=" lg:w-4/5 lg:m-auto  flex flex-col  m-5  ">
      <Slide direction="left">
        <div className="flex w-[350px] flex-row ">
          <h1 className="text-primary  text-3xl font-bold mt-[60px]   ">
            Contact
          </h1>
          <div className="flex-grow border-t-2 border-secondary w-1/2 mt-[80px] ml-2 mr-20 mb-[60px]"></div>
        </div>

        <div className="flex lg:flex-row flex-col mb-20  ">
          <div className=" lg:w-1/2 w-full m-auto  green-pink-gradient p-[1px] rounded-[20px] shadow-card  ">
            <div className="bg-gray-300 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly flex-col  ">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col gap-5">
                {inputArea("Your Name", "text", "name")}
                {inputArea("Your Email", "email", "email")}
                {inputArea("Your Message", "textarea", "message", 6)}

                <button
                  type="submit"
                  className="bg-gray-400 py-2 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-blue">
                  {loading ? "Sending..." : "Send"}
                </button>
              </form>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <RobotCanvas />
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Contact;
