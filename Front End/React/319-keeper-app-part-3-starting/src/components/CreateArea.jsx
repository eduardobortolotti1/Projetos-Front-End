import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState(
    {
      title: "",
      content: "",
    }
  );

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((oldNote) => {
      return ({ ...oldNote, [name]: value });
    })
  }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" value={note.title} onChange={handleChange} />
        <textarea name="content" placeholder="Take a note..." rows="3" value={note.content} onChange={handleChange} />
        <button onClick={(event) => {
          props.onAdd(note)
          event.preventDefault();
          setNote({
            title: "",
            content: "",
          })
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
