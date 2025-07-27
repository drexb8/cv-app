import CVEducation from "./CVEducation";
import CVExperience from "./CVExperience";
import CVPersonal from "./CVPersonal";

function CV({ personalDetails, educationList, experienceList }) {
  return (
    <div className="bg-[#FFF] w-[1200px] px-20 py-10">
      <CVPersonal personalDetails={personalDetails} />
      <CVEducation educationList={educationList} />
      <CVExperience experienceList={experienceList} />
    </div>
  );
}

export default CV;
