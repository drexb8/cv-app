function Input({ label, id, value, onChange, placeholder }) {
  return (
    <>
      <label htmlFor={`${id}`}>{label}</label>
      <input
        className="border-2 py-1.5 px-4 bg-white border-stone-300/50 rounded-lg focus:border-sky-400 focus:outline-1 focus:outline-sky-400"
        type="text"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default Input;
