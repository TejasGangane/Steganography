import { useState } from "react";
import "../style/decodeCard.css"; // Reuse same styles

function DecodeCard() {
  const [imageFile, setImageFile] = useState(null);
  const [decodedMessage, setDecodedMessage] = useState("");

  const handleDecode = () => { 
    if (!imageFile) {
      alert("Please upload an image first.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target.result;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        let binary = "";
        let i = 0;

        while (true) {
          const byte = (imageData.data[i * 4] & 1).toString(); // Get LSB of red channel
          binary += byte;
          i++;

          // Stop if 8 zero bits are found (end marker)
          if (binary.endsWith("00000000")) break;
          if (i * 4 >= imageData.data.length) break;
        }

        // Remove the 8-bit end marker
        binary = binary.slice(0, -8);

        // Convert binary to string
        const message = binary
          .match(/.{1,8}/g)
          .map((byte) => String.fromCharCode(parseInt(byte, 2)))
          .join("");

        setDecodedMessage(message);
        alert("Decoding complete!");
      };
    };

    reader.readAsDataURL(imageFile);
  };

  return (
    <div className="card">
      <h3>Decode Message</h3>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImageFile(e.target.files[0])}
        required
      />
      <button onClick={handleDecode}>Decode</button>

      {decodedMessage && (
        <div className="decoded-message">
          <h4>Decoded Message:</h4>
          <p>{decodedMessage}</p>
        </div>
      )}
    </div>
  );
}

export default DecodeCard;
