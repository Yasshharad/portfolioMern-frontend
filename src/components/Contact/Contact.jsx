import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Contact.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { contactUs } from "../../actions/user";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();

    const {
        loading,
        message: alertMessage,
        error,
    } = useSelector((state) => state.update);

    const contactFormHandler = (e) => {
        e.preventDefault();
        dispatch(contactUs(name, email, message));
    };

    const alert = () => {
        if (error) {
            toast.error(error);
            dispatch({ type: "CLEAR_ERRORS" });
        }
        if (alertMessage) {
            toast.success(alertMessage);
            dispatch({ type: "CLEAR_MESSAGE" });
        }
    };

    return (
        <>
            <div className="contact">
                <div className="contactRightBar"></div>

                <div className="contactContainer">
                    <form className="contactContainerForm" onSubmit={contactFormHandler} onClick={alert}>
                        <Typography variant="h4">Contact Us</Typography>

                        <input
                            type="text"
                            placeholder="Name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <textarea
                            placeholder="Message"
                            required
                            cols="30"
                            rows="10"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        <Button variant="contained" type="submit" disabled={loading}>
                            Send
                        </Button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default Contact;
