import React from "react";
import { HashLoader } from 'react-spinners';

const LoadingSpiner = () => {
  return (
    <div>
      <div className="h-screen flex justify-center items-center">
        <HashLoader/>
      </div>
    </div>
  );
};

export default LoadingSpiner;
