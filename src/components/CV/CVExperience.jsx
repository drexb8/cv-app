function CVExperience({ experienceList }) {
  const hasExperienceList = experienceList.length > 0;

  return (
    <>
      <div className="mt-12">
        <h2 className="font-serif font-semibold text-4xl border-b-2 pb-3">
          Experience
        </h2>
      </div>
      {experienceList.map((item) => {
        const { company, position, from, to, location, description } = item;

        return (
          <>
            <div className="flex mt-3 justify-between">
              <h3 className="text-xl">
                {hasExperienceList && company === "" ? "Company" : company}
              </h3>
              <p className="text-xl">
                {hasExperienceList && from === "" && to === ""
                  ? "Start date - End date"
                  : `${from} - ${to}`}
              </p>
            </div>
            <div className="flex justify-between ">
              <h3 className="text-[#78716C] italic text-lg">
                {hasExperienceList && position === "" ? "Position" : position}
              </h3>
              <p className="text-[#78716C] text-lg">
                {hasExperienceList && location === "" ? "Location" : location}
              </p>
            </div>
            <div className="mb-9 mt-2 w-full">
              <p className="whitespace-normal break-words text-lg">
                {hasExperienceList && description === ""
                  ? "Description"
                  : description}
              </p>
            </div>
          </>
        );
      })}
    </>
  );
}

export default CVExperience;
