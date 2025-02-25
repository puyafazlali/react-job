import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "100px auto",
};

const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      color="#4338ca"
      loading={loading}
      size={150}
      cssOverride={override}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Spinner;
