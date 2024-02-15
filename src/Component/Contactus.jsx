import React, { useState } from "react";
import { MDBInput, MDBBtn, MDBTextArea } from "mdb-react-ui-kit";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Navbar from "./Navbar";

function Contactus() {
  const form = useRef();
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setValidated(true);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_amih1xh", "template_aukveh8", form.current, {
        publicKey: "Cq1vUfUs5g4JU2gir",
      })
      .then((res) => alert("email send successfully.."))
      .catch((err) => alert("error"));
  };

  return (
    <>
      <Navbar />
      <form
        ref={form}
        onSubmit={sendEmail}
        id="form"
        className="text-center"
        style={{ maxWidth: "300px", margin: "0 auto" }}
      >
        <h2>Contact us</h2>

        <MDBInput label="Name" v-model="name" wrapperClass="mb-4" />

        <MDBInput
          type="email"
          name="email"
          label="Email address"
          v-model="email"
          wrapperClass="mb-4"
        />

        <MDBInput
          label="Subject"
          name="subject"
          v-model="subject"
          wrapperClass="mb-4"
        />

        <MDBTextArea wrapperClass="mb-4" name="message" label="Message" />

        <MDBBtn
          color="primary"
          block
          className="my-4"
          type="submit"
          style={{ width: "80px", height: "40px" }}
        >
          Send
        </MDBBtn>
      </form>
    </>
  );
}

export default Contactus;
