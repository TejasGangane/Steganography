import "../style/homepage.css";
import Toggle from "./toggle";

function Home() {
  return (
    <section className="homeHeader">
      <h1 className="mainTitle">Hide Messages in Images</h1>
      <p className="subtitle">
        Secure steganography tool for encoding and decoding hidden messages
      </p>
      <Toggle />
    </section>
  );
}

export default Home;
