import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createMapActions } from "../../store/CreateMapSlice";

const initialName = localStorage.getItem("createdName") || "";
const initialDescription = localStorage.getItem("createdDescription") || "";

export default function MapForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState(initialName);
  const [description, setDescription] = useState(initialDescription);

  console.log(localStorage.getItem("createdName"));

  useEffect(() => {
    let timeout = setTimeout(() => {
      localStorage.setItem("createdName", name);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [name]);

  useEffect(() => {
    let timeout = setTimeout(() => {
      localStorage.setItem("createdDescription", description);
    });
    return () => {
      clearTimeout(timeout);
    };
  }, [description]);

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleCancel = (event) => {
    event.preventDefault();
    dispatch(createMapActions.clearData());
    setName("");
    setDescription("");
    localStorage.removeItem("createdName");
    localStorage.removeItem("createdDescription");
  };

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Map name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={name}
          onChange={handleName}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          type="text"
          className="form-control"
          id="description"
          rows={3}
          name="description"
          value={description}
          onChange={handleDescription}
        />
      </div>
      <div className="d-flex">
        <button type="submit" className="btn btn-primary me-2 flex-fill">
          Save
        </button>
        <button className="btn btn-danger flex-fill" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}
