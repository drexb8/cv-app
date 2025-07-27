import { useState } from "react";
import Header from "./components/Header";
import Information from "./components/Information/Information";
import Main from "./components/Main";

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });
  const [educationList, setEducationList] = useState([]);
  const [experienceList, setExperienceList] = useState([]);

  return (
    <>
      <Header />
      <div className="flex h-screen ">
        <Information
          personalDetails={personalDetails}
          setPersonalDetails={setPersonalDetails}
          educationList={educationList}
          setEducationList={setEducationList}
          experienceList={experienceList}
          setExperienceList={setExperienceList}
        />
        <Main
          personalDetails={personalDetails}
          educationList={educationList}
          experienceList={experienceList}
        />
      </div>
    </>
  );
}

export default App;
