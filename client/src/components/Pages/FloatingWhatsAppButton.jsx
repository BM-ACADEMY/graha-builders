import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import logo from '../../assets/favi.png'; // Import the logo

const Whatsapp = () => {
  return (
    <div className="z-50 relative whatsapp-button-container">
      {/* 🎨 CUSTOM CSS TO REMOVE AVATAR BORDER */}
      <style>
        {`
          .whatsapp-button-container img {
            border: none !important;
            box-shadow: none !important;
            background: transparent !important;
          }
          /* Remove the white circle background/border often applied by the library */
          .whatsapp-button-container div[class*="avatar"] {
            border: none !important;
            background: transparent !important;
            box-shadow: none !important;
          }
        `}
      </style>

      <FloatingWhatsApp
        phoneNumber="919360367453"
        accountName="Graha Builders"
        avatar={logo}
        statusMessage="Online"
        chatMessage="Hello! 👋 Welcome to Graha Builders. How can we help you with your construction project today?"
        placeholder="Type a message..."
        darkMode={false}
        allowEsc
        allowClickAway
        notification
        notificationSound
      />
    </div>
  )
}

export default Whatsapp;