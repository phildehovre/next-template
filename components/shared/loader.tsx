import { CircleDashed } from "lucide-react";
import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center mt-24">
      <CircleDashed
        size={64}
        className="rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 animate-spin"
      />
    </div>
  );
};

export default Loader;
