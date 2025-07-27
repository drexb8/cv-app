import Box from "./Box";
import Input from "../Input";

function GeneralInformation({ personalDetails, setPersonalDetails }) {
  const { fullName, email, phoneNumber, address } = personalDetails;

  function handleChangeInfo(info, e) {
    setPersonalDetails({
      ...personalDetails,
      [info]: e.target.value,
    });
  }
  return (
    <Box title="Personal Details">
      <div className="flex flex-col gap-2">
        <Input
          label="Full name"
          id="fullname"
          placeholder="Enter full name"
          value={fullName}
          onChange={(e) => handleChangeInfo("fullName", e)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Input
          label="Email"
          id="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => handleChangeInfo("email", e)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Input
          label="Phone number"
          id="phoneNumber"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={(e) => handleChangeInfo("phoneNumber", e)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Input
          label="Address"
          id="address"
          placeholder="Enter address"
          value={address}
          onChange={(e) => handleChangeInfo("address", e)}
        />
      </div>
    </Box>
  );
}

export default GeneralInformation;
