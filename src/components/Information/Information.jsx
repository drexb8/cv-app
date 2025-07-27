import EducationalBackground from "./Education";
import Experience from "./Experience";
import GeneralInformation from "./GeneralInformation";

function Information({
  personalDetails,
  setPersonalDetails,
  educationList,
  setEducationList,
  experienceList,
  setExperienceList,
}) {
  return (
    <div className="w-[600px] flex-none bg-stone-100 overflow-auto">
      <div className="flex flex-col px-5 py-7 gap-2 justify-center">
        <GeneralInformation
          personalDetails={personalDetails}
          setPersonalDetails={setPersonalDetails}
        />
        <EducationalBackground
          educationList={educationList}
          setEducationList={setEducationList}
        />
        <Experience
          experienceList={experienceList}
          setExperienceList={setExperienceList}
        />
      </div>
    </div>
  );
}

export default Information;
