import React from "react";

const AddNames = ({ setUsers }) => {
  let names = [];

  const handleSubmit = (e) => {
    e.preventDefault();

    //Read form data
    const form = e.target;
    const formData = new FormData(form);

    //Pass data to object
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);

    //Split by line-break
    let split = formJson.names.split("\n");
    setUsers(split);
    console.log("SPLIT", split);

    //CLear state
  };

  return (
    <div className="namesInput">
      <form method="post" onSubmit={handleSubmit}>
        <label>
          Names:
          <textarea name="names" rows={10} cols={40} />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddNames;
