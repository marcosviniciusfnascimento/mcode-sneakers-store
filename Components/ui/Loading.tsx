import { BeatLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="top-0 left-0 right-0 mt-0 mb-0 md:mb-16 md:mt-16 bg-transparent bottom-0 fixed flex items-center justify-center backdrop-blur-3xl">
      <BeatLoader color={"rgba(59,7,100)"} />
    </div>
  );
}
