// src/components/InputField.jsx
import React from "react";

export const InputField = ({ label, name, type, value, onChange }) => (
  <div style={{ marginBottom: "1rem" }}>
    <label>
      {label}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        style={{ display: "block", width: "100%", padding: "0.5rem" }}
        required
      />
    </label>
  </div>
);
