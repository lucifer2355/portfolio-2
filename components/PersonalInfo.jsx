import React from "react";

const personalInfo = {
  "Full Name": "Dhruvil Gajjar",
  Age: "22 Years",
  Degree: "B.Tech (Information Technology)",
  Nationality: "Indian",
  Languages: "English, Hindi, Gujarati",
  Address: "Ahmedabad, Gujarat, India",
  Freelance: "Available",
};

const PersonalInfo = () => {
  return (
    <div className='mt-4'>
      {Object.keys(personalInfo).map(function(key, index) {
        return (
          <div key={index} className='text-gray-400 flex'>
            <span className='flex w-24 justify-between'>
              {key} <span>:</span>
            </span>
            <span className='ml-2'>{personalInfo[key]}</span>
          </div>
        );
      })}
    </div>
  );
};

export default PersonalInfo;
