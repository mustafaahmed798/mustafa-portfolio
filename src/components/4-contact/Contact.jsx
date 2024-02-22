import React from "react";
import "./contact.css";
import contactAnimation from "./../2-Hero/animation/contact.json";
import correctAnimation from "./../2-Hero/animation/correct.json";
import oopsAnimation from "./../2-Hero/animation/oops.json";
import Lottie from "lottie-react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("myyrgarr");

  return (
    <section className="contact">
      <h1 className="title-c">
        <span className="icon-envelope-o"></span>
        Contact Us
      </h1>
      <p className="sub-title">
        {" "}
        Contact us for more information and get notified when i publish
        something new.{" "}
      </p>
      <div className="area flex">
        <form onSubmit={handleSubmit}>
          <div className="put flex">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              name="email"
              autoComplete="off"
              id="email"
              placeholder="your email ..."
            />

            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="put flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message:</label>
            <textarea
              name="message"
              id="message"
              placeholder="your message"
            ></textarea>

            <ValidationError
              prefix="message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button className="submit" disabled={state.submitting}>
            {state.submitting ? "Submitting" : "Submit"}
          </button>
          {state.succeeded && (
            <p
              className="flex"
              style={{
                marginTop: "1.2rem",
                fontSize: "18px",
                color: "var(--title)",
                marginLeft: "1rem",
              }}
            >
              {" "}
              <Lottie
                loop={false}
                style={{ height: "60px", width: "60px" }}
                animationData={correctAnimation}
              />
              <span>your message has been sent successfully</span>
            </p>
          )}
          {state.errors && (
            <p
              className="flex"
              style={{
                marginTop: "1.2rem",
                fontSize: "18px",
                color: "var(--title)",
              }}
            >
              <Lottie
                loop={false}
                style={{ height: "60px", width: "60px" }}
                animationData={oopsAnimation}
              />
              Please try again
            </p>
          )}
        </form>
        <div className="animation">
          <Lottie
            loop={true}
            style={{ height: "360px", width: "360px", paddingBottom: "2rem" }}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
