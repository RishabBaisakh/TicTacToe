import React from "react";

function Input(props) {
  const { name, onNameChange } = props;

  return (
    <>
      <div className="form-group">
        <label>Name</label>
        <input
          className="form-control"
          type="text"
          value={name}
          onChange={onNameChange}
        />
      </div>
    </>
  );
}

export default Input;
