import React, { useState } from "react";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";
import Title from "./components/Title";
import UploadForms from "./components/UploadForms";
import DarkTheme, { createTheme } from "react-dark-theme";
const lightTheme = {
  background: "white",
  text: "black",
};

const darkTheme = {
  background: "black",
  text: "white",
};

const myTheme = createTheme(darkTheme, lightTheme);
function App() {
  const [selected, setSelected] = useState(null);
  return (
    <div style={{ backgroundColor: myTheme.background, color: myTheme.text }}>
      <DarkTheme light={lightTheme} dark={darkTheme} />
      <div className="App">
        <Title />
        <UploadForms />
        <ImageGrid setSelected={setSelected} />
        {selected && <Modal selected={selected} setSelected={setSelected} />}
        <footer
          style={{
            textAlign: "center",
            backgroundColor: "DarkSalmon",
          }}
        >
          <p>
            Made By <a href="http://punitbatra.co/">Punit</a>
          </p>
          <p>
            View at
            <a href="https://github.com/PUNITBATRA/photo-gallery"> Github</a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
