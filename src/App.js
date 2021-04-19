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
    </div>
  );
}

export default App;
