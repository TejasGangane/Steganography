import { useState } from "react";
import "../style/encodeCard.css";

function EncodeCard() {
  const [message, setMessage] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [encodedImageURL, setEncodedImageURL] = useState("");

  const handleEncode = async () => {
    if (!message || !imageFile) {
      alert("Please enter a message and select an image.");
      return;
    }

    const reader = new FileReader();
    reader.onload = async (e) => {
      const image = new Image();
      image.src = e.target.result;

      image.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0);

        // Convert message to binary
        const messageBinary =
          message
            .split("")
            .map((c) => c.charCodeAt(0).toString(2).padStart(8, "0"))
            .join("") + "00000000"; // end marker

        let i = 0;
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        while (i < messageBinary.length && i < imageData.data.length / 4) {
          const bit = parseInt(messageBinary[i], 10);
          imageData.data[i * 4] = (imageData.data[i * 4] & 0xfe) | bit; // encode in red channel LSB
          i++;
        }

        ctx.putImageData(imageData, 0, 0);
        const encodedURL = canvas.toDataURL("image/png");
        setEncodedImageURL(encodedURL);
        alert("Encoding successful!");
      };
    };

    reader.readAsDataURL(imageFile);
  };

  return (
    <div className="card">
      <h3>Encode Message</h3>
      <textarea
        placeholder="Enter your secret message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImageFile(e.target.files[0])}
        required
      />
      <button onClick={handleEncode}>Encode</button>

      {encodedImageURL && (
        <div className="download-section">
          <p>Download your encoded image:</p>
          <a href={encodedImageURL} download="encoded-image.png">
            Download Image
          </a>
        </div>
      )}
    </div>
  );
}

export default EncodeCard;
