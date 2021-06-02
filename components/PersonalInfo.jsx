import React from "react";

const personalInfo = {
  "Full Name": "Dhruvil",
  Age: "22 Years",
  Degree: "B.Tech (Information Technology)",
  Nationality: "Indian",
  Languages: "English, Hindi, Gujarati",
  Address: "Ahmedabad, Gujarat, India",
  Freelance: "Available",
};

const PersonalInfo = () => {
  return <div>{Object.entries(personalInfo.map((p) => console.log(p)))}</div>;
};

export default PersonalInfo;
