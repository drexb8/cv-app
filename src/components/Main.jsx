import { usePDF } from "react-to-pdf";
import CV from "./CV/CV";
import DownloadButton from "./DownloadButton";

function Main({ personalDetails, educationList, experienceList }) {
  const { toPDF, targetRef } = usePDF({
    filename: "react_cv.pdf",
    page: {
      format: "A4",
      margin: 0, // Remove default margins
    },
    canvas: {
      scale: 2, // Ensure no scaling down occurs
      width: 700, // Pixel width for A4 at 96dpi (210mm)
      windowWidth: 794, // Match canvas width
    },
  });
  return (
    <div className="flex-1 bg-stone-200 relative">
      <div className="flex justify-center mt-8" ref={targetRef}>
        <CV
          personalDetails={personalDetails}
          educationList={educationList}
          experienceList={experienceList}
        />
      </div>
      <DownloadButton onClick={() => toPDF()} />
    </div>
  );
}

export default Main;
