import "../style/about.css";

function About() {
  return (
    <main className="aboutContainer">
      <section className="introSection">
        <h1>
          About <span className="highlight">SteganoCrypt</span>
        </h1>
        <p className="subtitle">
          A modern approach to digital steganography, hiding secrets in plain
          sight.
        </p>
      </section>

      <section className="whatIsSteganography">
        <h2>What is Steganography?</h2>
        <p>
          Steganography is the practice of concealing information within other
          non-secret data or media. Unlike cryptography, which scrambles data to
          make it unreadable, steganography hides the very existence of the
          secret message.
        </p>
        <p>
          In digital images, we can hide text by slightly modifying the least
          significant bits of pixel values. These changes are imperceptible to
          the human eye but can store substantial amounts of hidden information.
        </p>
      </section>

      <section className="howItWorks">
        <h2>How It Works</h2>
        <div className="processContainer">
          <div className="processBlock">
            <h3>Encoding Process</h3>
            <ol>
              <li>Convert your secret message to binary</li>
              <li>Extract pixel data from the cover image</li>
              <li>Modify the least significant bits of RGB values</li>
              <li>Embed the binary message data</li>
              <li>Generate the steganographic image</li>
            </ol>
          </div>
          <div className="processBlock">
            <h3>Decoding Process</h3>
            <ol>
              <li>Extract pixel data from the steganographic image</li>
              <li>Read the least significant bits</li>
              <li>Reconstruct the binary message</li>
              <li>Convert binary back to readable text</li>
              <li>Display the hidden message</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Key Features</h2>
        <ul className="featureList">
          <li>
            🔒 <strong>Secure Encoding</strong> — Uses LSB (Least Significant
            Bit) steganography
          </li>
          <li>
            👁️ <strong>Invisible Changes</strong> — Changes not visible to the
            human eye
          </li>
          <li>
            🖼️ <strong>Format Support</strong> — Supports PNG, JPG, and JPEG
          </li>
          <li>
            ⚡ <strong>Fast Processing</strong> — Real-time encoding and
            decoding
          </li>
        </ul>
      </section>

      <section className="useCases">
        <h2>Use Cases</h2>
        <ul className="useCaseList">
          <li>
            🔐 <strong>Digital Watermarking</strong> — Protect your creative
            works
          </li>
          <li>
            💬 <strong>Covert Communication</strong> — Send private messages
            securely
          </li>
          <li>
            🏛️ <strong>Digital Forensics</strong> — Investigate and analyze
            evidence
          </li>
        </ul>
      </section>
    </main>
  );
}

export default About;
