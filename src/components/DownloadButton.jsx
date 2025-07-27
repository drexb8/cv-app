function DownloadButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="py-2 px-3 float-right mx-5 my-7 border rounded-xl border-sky-500 bg-sky-500 cursor-pointer text-stone-50 hover:bg-sky-700/90 transition-all duration-200"
    >
      Download as PDF
    </button>
  );
}

export default DownloadButton;
