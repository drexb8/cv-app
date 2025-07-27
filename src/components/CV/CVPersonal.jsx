function CVPersonal({ personalDetails }) {
  const { fullName, email, phoneNumber, address } = personalDetails;

  return (
    <>
      <div>
        <h1 className=" text-center text-5xl font-serif font-semibold">
          {fullName === "" ? "Full name" : fullName}
        </h1>
        <div className="flex justify-center mt-5 ">
          <p className="text-2xl">{`${email || "Email"} | ${
            phoneNumber || "Phone number"
          } | ${address || "Address"}`}</p>
        </div>
      </div>
    </>
  );
}

export default CVPersonal;
