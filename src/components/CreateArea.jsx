import React from "react";

function CreateArea(props) {
  const [text, setText] = React.useState({
    title: "",
    content: "",
  });

  function handleTitle(event) {
    const { name, value } = event.target;
    setText((text) => {
      return {
        ...text,
        [name]: value,
      };
    });
  }

  function submitted(event) {
    props.clicked(text);
    setText(() => {
      return {
        title: "",
        content: "",
      };
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleTitle}
          value={text.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleTitle}
          value={text.content}
        />
        <button onClick={submitted}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
