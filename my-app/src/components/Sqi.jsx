import React from "react";

const Sqi = ({ matricNo, showAlert }) => {
  //   let matric = props.matricNo;
  //   let showAlert = props.showAlert;

  //   const { matricNo, showAlert } = props;
  return (
    <div>
      <h1>Welcome to SQI College of ICT</h1>
      <h3>Matric Number: {matricNo}</h3>
      <button onClick={showAlert}>Click Me</button>
    </div>
  );
};

export default Sqi;
