import React, { useState } from "react";
import { Spring } from "react-spring/renderprops.cjs";
import VisibilitySensor from "./VisibilitySensor";

export default () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    email: "",
    message: "",
  });

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    });
    const text = await res.text();
    handleResponse(res.status, text);
  };

  return (
    <VisibilitySensor once partialVisibility>
      {({ isVisible }) => (
        <Spring
          delay={110}
          to={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(100px)",
          }}
        >
          {(props) => (
            <div className="form-container" style={{...props}}>
              <h3>Contact us!</h3>
              <form onSubmit={handleOnSubmit} className="contact-form">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  onChange={handleOnChange}
                  required
                  value={inputs.email}
                />
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  onChange={handleOnChange}
                  required
                  value={inputs.message}
                />
                <button type="submit" disabled={status.submitting}>
                  <span>
                    {" "}
                    {!status.submitting
                      ? !status.submitted
                        ? "Submit"
                        : "Submitted"
                      : "Submitting..."}
                  </span>
                </button>
                <span className="response-text">
                  {status.info.error && (
                    <div className="error">{status.info.msg}</div>
                  )}
                  {!status.info.error && status.info.msg && (
                    <div className="success">{status.info.msg}</div>
                  )}
                </span>
              </form>
            </div>
          )}
        </Spring>
      )}
    </VisibilitySensor>
  );
};
