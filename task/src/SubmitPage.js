// SubmitPage.js
import React from "react";
import "./SubmitPage.css"; // Import the CSS file for styling
// import successIcon from "./success-icon.png"; // Import a tick icon (you can replace it with your own)

const SubmitPage = () => {
  return (
    <div className="submit-page">
      <div className="success-container">
        <img
          src={
            "https://png.pngtree.com/png-clipart/20221028/original/pngtree-right-symbol-png-image_8741184.png"
          }
          alt="Success Icon"
          className="success-icon"
        />
      </div>
      <h1 className="success-text">Successfully Submitted</h1>
    </div>
  );
};

export default SubmitPage;
