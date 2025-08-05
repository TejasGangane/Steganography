import "../style/toggle.css";
import React, { useState } from "react";
import EncodeCard from "../components/encodeCard";
import DecodeCard from "../components/decodeCard";

function Toggle() {
  const [mode, setMode] = useState("encode");

  return (
    <div className="toggle-container">
      <div className="toggle-wrapper">
        <label className="toggle-label">
          <input
            type="checkbox"
            checked={mode === "decode"}
            onChange={() => setMode(mode === "encode" ? "decode" : "encode")}
            className="toggle-input"
          />
          <span className="toggle-slider"></span>
        </label>
        <div className="toggle-text">
          {mode === "encode" ? "Encode" : "Decode"}
        </div>
      </div>

      {/* Render EncodeCard or DecodeCard based on mode */}
      {mode === "encode" ? <EncodeCard /> : <DecodeCard />}
    </div>
  );
}

export default Toggle;
