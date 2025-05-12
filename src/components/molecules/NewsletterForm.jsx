import React from "react";
import { Button, FormControl, InputBase } from "@mui/material";
import "./../../styles/organisms/newsletter.module.scss";

const NewsletterForm = () => {
  return (
    <div className="newsletter-form shadow">
      <InputBase
        className="email-input"
        placeholder="michael@ymail.com"
        fullWidth
      />
      <Button className="subscribe-btn">Subscribe Now</Button>
    </div>
  );
};

export default NewsletterForm;
