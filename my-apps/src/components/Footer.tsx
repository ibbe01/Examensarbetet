import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer style={{
      backgroundColor: "#f0f0f0",
      padding: "20px 0",
      textAlign: "center",
      marginTop: "200px",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <p style={{ margin: 0, color: "#333" }}>
          © {new Date().getFullYear()} Assistena. All rights reserved.
        </p>
        <nav style={{ marginTop: "10px" }}>
          <a href="/about" style={linkStyle}>About</a>
          <a href="/contact" style={linkStyle}>Contact</a>
          <a href="/privacy" style={linkStyle}>Privacy Policy</a>
        </nav>
      </div>
    </footer>
  );
};

const linkStyle: React.CSSProperties = {
  color: "#666",
  textDecoration: "none",
  margin: "0 10px",
  fontSize: "14px"
};

