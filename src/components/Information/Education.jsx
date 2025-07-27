import { useState } from "react";
import Input from "../Input";
import Box from "./Box";

function EducationalBackground({ educationList, setEducationList }) {
  function handleAddEducation() {
    setEducationList([
      ...educationList,
      { school: "", degree: "", from: "", to: "", location: "" },
    ]);
  }

  function handleOnChange(item, index, e) {
    const updatedList = educationList.map((edu, i) =>
      i === index ? { ...edu, [item]: e.target.value } : edu
    );
    setEducationList(updatedList);
  }

  function removeEducation(i) {
    const updatedList = educationList.filter((item, index) => index !== i);
    setEducationList(updatedList);
  }
  return (
    <Box title="Education">
      {educationList.map((item, index) => {
        return (
          <div
            className="border flex flex-col border-stone-300/40 bg-stone-100/10 p-4 rounded-md gap-2.5 relative"
            key={index}
          >
            <button
              onClick={() => removeEducation(index)}
              className="absolute top-0 right-0 my-2 mx-3 font-black cursor-pointer rounded-full border border-stone-400 px-2 py-0.5 hover:bg-sky-400 hover:text-white transition-all duration-200"
            >
              &times;
            </button>
            <Input
              label="School"
              id={`school${index}`}
              placeholder="Enter school name"
              value={item.school}
              onChange={(e) => handleOnChange("school", index, e)}
            />

            <Input
              label="Degree"
              id={`degree${index}`}
              placeholder="Enter degree"
              value={item.degree}
              onChange={(e) => handleOnChange("degree", index, e)}
            />

            <div className="flex justify-between items-center my-2">
              <div className="border-2 border-stone-300/40 py-2 px-3 rounded-md bg-white">
                <label htmlFor="from">From: </label>
                <input
                  id="from"
                  type="date"
                  value={item.from}
                  onChange={(e) => handleOnChange("from", index, e)}
                />
              </div>
              <span className="font-black">--</span>
              <div className="border-2 border-stone-300/40 py-2 px-3 rounded-md bg-white">
                <label htmlFor="to">To: </label>
                <input
                  type="date"
                  value={item.to}
                  onChange={(e) => handleOnChange("to", index, e)}
                />
              </div>
            </div>
            <Input
              label="Location"
              id={`location${index}`}
              value={item.location}
              placeholder="City, Country"
              onChange={(e) => handleOnChange("location", index, e)}
            />
          </div>
        );
      })}
      <button
        onClick={() => handleAddEducation()}
        className="bg-sky-500 mx-40 py-2 rounded-lg text-stone-50 cursor-pointer hover:bg-sky-600/80 transition-all duration-300"
      >
        + Add Education
      </button>
    </Box>
  );
}

export default EducationalBackground;
