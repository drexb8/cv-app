import Box from "./Box";
import Input from "../Input";
import Textarea from "../Textarea";

function Experience({ experienceList, setExperienceList }) {
  console.log(experienceList);
  function handleAddExperience() {
    setExperienceList([
      ...experienceList,
      {
        company: "",
        position: "",
        from: "",
        to: "",
        location: "",
        description: "",
      },
    ]);
  }
  function handleOnChange(e, experienceItem, index) {
    const updatedList = experienceList.map((item, i) =>
      i === index ? { ...item, [experienceItem]: e.target.value } : item
    );
    setExperienceList(updatedList);
  }
  return (
    <Box title="Experience">
      {experienceList.map((experience, index) => {
        return (
          <div
            className="border flex flex-col border-stone-300/40 bg-stone-100/10 p-4 rounded-md gap-2.5 relative"
            key={index}
          >
            <Input
              label="Company name"
              id={`company${index}`}
              placeholder="Enter school name"
              value={experience.company}
              onChange={(e) => handleOnChange(e, "company", index)}
            />
            <Input
              label="Position"
              id={`position${index}`}
              placeholder="Enter position"
              value={experience.position}
              onChange={(e) => handleOnChange(e, "position", index)}
            />
            <div className="flex justify-between items-center my-2">
              <div className="border-2 border-stone-300/40 py-2 px-3 rounded-md bg-white">
                <label htmlFor="from">From: </label>
                <input
                  id="from"
                  type="date"
                  value={experience.from}
                  onChange={(e) => handleOnChange(e, "from", index)}
                />
              </div>
              <span className="font-black">--</span>
              <div className="border-2 border-stone-300/40 py-2 px-3 rounded-md bg-white">
                <label htmlFor="to">To: </label>
                <input
                  type="date"
                  value={experience.to}
                  onChange={(e) => handleOnChange(e, "to", index)}
                />
              </div>
            </div>
            <Input
              label="Location"
              id={`location${index}`}
              placeholder="City, Country"
              value={experience.location}
              onChange={(e) => handleOnChange(e, "location", index)}
            />
            <Textarea
              label="Description"
              id={`description${index}`}
              placeholder="Enter description"
              value={experience.description}
              onChange={(e) => handleOnChange(e, "description", index)}
            />
          </div>
        );
      })}

      <button
        className="bg-sky-500 mx-40 py-2 rounded-lg text-stone-50 cursor-pointer hover:bg-sky-600/80 transition-all duration-300"
        onClick={handleAddExperience}
      >
        + Add Experience
      </button>
    </Box>
  );
}

export default Experience;
