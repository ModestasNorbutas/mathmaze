import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createMapActions } from "../../store/CreateMapSlice";

const initialName = localStorage.getItem("createdName") || "";
const initialDescription = localStorage.getItem("createdDescription") || "";

export default function MapForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState(initialName);
  const [description, setDescription] = useState(initialDescription);

  const mapData = useSelector((state) => state.createMap.mapData);
  const unitPosition = useSelector((state) => state.createMap.unitPosition);

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
    event?.preventDefault();
    dispatch(createMapActions.clearData());
    setName("");
    setDescription("");
    localStorage.removeItem("createdName");
    localStorage.removeItem("createdDescription");
  };

  const countMath = (array) => {
    let count = 0;
    array.forEach((element) => {
      element.forEach((value) => {
        if (value === 3) {
          count++;
        }
      });
    });
    return count;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // FORM VALIDATION GOES HERE
    // CHECK FOR DUPLICATES IN FIREBASE
    // INITIALIZE "LOADING"

    const mathCount = countMath(mapData);

    const body = {
      name: name,
      description: description,
      size: [11, 11],
      mapData: mapData,
      unitPosition: unitPosition,
      mathCount: mathCount,
    };

    fetch(
      "https://math-maze-a939f-default-rtdb.europe-west1.firebasedatabase.app/maps.json",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    )
      .then((response) => {
        if (response.ok) {
          alert("Map saved successfully"); // CREATE AND USE MODAL
          handleCancel();
        } else {
          alert("Something went wrong..."); //  CREATE AND USE MODAL
        }
      })
      .catch((error) => alert("Error: " + error?.message)); // CREATE AND USE MODAL
  };

  return (
    <form onSubmit={handleSubmit}>
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
