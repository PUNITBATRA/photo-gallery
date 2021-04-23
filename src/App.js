import React, { useState } from "react";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";
import Title from "./components/Title";
import UploadForms from "./components/UploadForms";

function App() {
  const [selected, setSelected] = useState(null);
  return (
    <div className="App">
      <Title />
      <UploadForms />
      <ImageGrid setSelected={setSelected} />
      {selected && <Modal selected={selected} setSelected={setSelected} />}
      <footer
        style={{
          textAlign: "center",
          backgroundColor: "DarkSalmon",
          color: "white",
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
  );
}

export default App;
