import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Note from "./Note.js";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((item) => (
        <Note key={item.key} title={item.title} content={item.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
