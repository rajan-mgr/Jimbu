import React, { useState } from "react";
import "../styles/Contact.css";
import { MapPin, Phone, Mail, Rotate3d, Send } from "lucide-react";

function Contact() {
  const [selectbranch, setSelectBranch] = useState("Kalimati Branch");

  const branches = [
    {
      name: "Kalimati Branch",
      contact: "01-5922559, 9801912483",
      email: "contact@jimbuthakali.com",
      tour: "take a virtual tour",
      location:"Kalimati, Kathmandu",
    },
    {
      name: "New Baneshwor Branch",
      contact: "9803064988, 01-4622423",
      email: "contact@jimbuthakali.com",
      tour: "take a virtual tour",
      location:"New Baneshwor, Kathmandu",
    },
    {
      name: "Jhamsikel Branch",
      contact: "01-5922559, 9801231283",
      email: "contact@jimbuthakali.com",
      tour: "take a virtual tour",
      location:"Jhamsikel, Kathmandu",
    },
    {
      name: "Tangal Branch",
      contact: "01-5923559, 9823173212",
      email: "contact@jimbuthakali.com",
      tour: "take a virtual tour",
      location:"Tangal, Kathmandu",
    },
  ];

  const currentBranchData = branches.find((b) => b.name === selectbranch);

  return (
    <div className="contact-container">
      <div className="contact-title">
        <h1>Contact Us</h1>
      </div>
      
      <h1 className="reach">Reach out to us</h1>
      
      <div className="contact-content">
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <label>Name</label>
          <input type="text" placeholder="Your Full Name" />
          
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
          
          <label>Contact</label>
          <input type="number" placeholder="Enter your contact info" />
          
          <label>Message</label>
          <textarea
            placeholder="Any Messages..."
            rows={6}
            style={{ padding: "20px" }}
            className="message-input"
          ></textarea>
          
          <div className="radio">
            <h2>Preferred Mode of Contact</h2>
            <div className="selection">
              <label>
                <input type="radio" name="contact-mode" /> Phone
              </label>
              <label>
                <input type="radio" name="contact-mode" /> Email
              </label>
            </div>
          </div>
          
          <button className="mes-btn" style={{ padding: "25px 20px" }}>
            Send Message
          </button>
        </form>

        <div className="contactus-add">
          <p>
            <a href="/">Jimbu Thakali</a> is here to serve you{" "}
            <em>authentic thakali khana</em> at all our branches. Find the{" "}
            <i>thakali restaurant</i> or explore the best thakali khana near
            you for a delightful dining experience.
          </p>

          <div className="branch-select">
            <div className="branch-selector">
              {branches.map((b) => (
                <button
                  key={b.name}
                  type="button"
                  onClick={() => setSelectBranch(b.name)}
                  className={`branch-btn ${
                    selectbranch === b.name ? "active" : ""
                  }`}
                >
                  {b.name}
                </button>
              ))}
            </div>
            {selectbranch && currentBranchData ? (
            <div className="branch-info-grid">
              <div className="info-card">
                <div className="icon"><MapPin style={{width:"40px", height:"80px"}}></MapPin></div>
                <h4>Location</h4>
                <p>{currentBranchData.location}</p>
              </div>

              <div className="info-card">
                <div className="icon"><Mail  style={{width:"40px", height:"80px"}}></Mail></div>
                <h4>Write Message</h4>
                <p>{currentBranchData.email}</p>
              </div>

              <div className="info-card">
                <div className="icon"><Phone  style={{width:"40px", height:"80px"}}></Phone></div>
                <h4>Give us a call</h4>
                <p>{currentBranchData.contact}</p>
              </div>

              <div className="info-card">
                <div className="icon"><Rotate3d  style={{width:"40px", height:"80px"}}></Rotate3d></div>
                <h4>Virtual Tour</h4>
                 <p>{currentBranchData.tour}</p>
              </div>
            </div>
          ) : (
            <p className="select-hint">
              Select a branch to view contact details
            </p>
          )}
                

           
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;