import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [textArray, setTextArray] = React.useState([]);

  function addNote(note) {
    setTextArray((textArray) => {
      return [...textArray, note];
    });
  }

  function deleteNote(id) {
    setTextArray((textArray) => {
      return textArray.filter((item, index) => {
        return id !== index;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea clicked={addNote} />
      {textArray.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            delete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
