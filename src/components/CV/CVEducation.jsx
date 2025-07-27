function CVEducation({ educationList }) {
  const hasEducationList = educationList.length > 0;

  return (
    <>
      <div className="mt-12">
        <h2 className="font-serif font-semibold text-4xl border-b-2 pb-3">
          Education
        </h2>
      </div>
      {educationList.map((item) => {
        const { school, degree, from, to, location } = item;

        return (
          <>
            <div className="flex mt-3 justify-between">
              <h3 className="text-xl">
                {hasEducationList && school === "" ? "School" : school}
              </h3>
              <p className="text-xl">
                {hasEducationList && from === "" && to === ""
                  ? "Start date - End date"
                  : `${from} - ${to}`}
              </p>
            </div>
            <div className="flex justify-between mb-9">
              <h3 className="text-[#78716C] italic text-lg">
                {hasEducationList && degree === "" ? "Degree" : degree}
              </h3>
              <p className="text-[#78716C] text-lg">
                {hasEducationList && location === "" ? "Location" : location}
              </p>
            </div>
          </>
        );
      })}
    </>
  );
}

export default CVEducation;
