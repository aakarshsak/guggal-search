import React from "react";
import { Blocks } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <Blocks
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />
    </div>
  );
};

export default Loading;
