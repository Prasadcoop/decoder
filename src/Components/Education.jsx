import React from 'react';
import EducationPng from "../assets/education.png";
// import EducationPng from "../assets/education.jpg";
// import EducationPng from "../assets/education1.jpg";




const Education = () => {
  const educationData = [
    {
      institution: 'Savitribai Phule Pune University',
      degree: 'Bachelor of Electronics & Telecommunications Engineering',
      year: '2019 - 2023',
      description: ' Achieved a CGPA of 8.5. Focused on software development, algorithms, and data structures.',
    },
    {
      institution: 'University Of Mumbai',
      degree: 'HSC',
      year: '2018 - 2019',
      description: 'Achieved 65% marks while studying with honors and participating in various sports.',
    },
    {
      institution: 'University Of Mumbai',
      degree: 'SSC',
      year: '2016 - 2017',
      description: 'Achieved 84% percentage',
    },
  
  ];

  return (

    <div name='education' className='w-full min-h-screen bg-[#0a192f] text-gray-300 pt-20'> 
      <div className='flex flex-col justify-center items-center w-full min-h-screen'>
        <span className='sm:text-right pb-8 pl-4'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
            My Education
          </p>
        </span>
        <div className='max-w-[1000px] w-full h-full grid sm:grid-cols-2 gap-8 px-4 '>
          <div className='sm:text-right text-4xl font-bold'>
            <img className="w-full h-full  mx-auto" src={EducationPng} alt="education" />
            {/* <p>Hi. I'm Hanzla Sibghat, nice to meet you. Please take a look around.</p> */}
          </div>
          <div className="space-y-6">
            {educationData.map((item, index) => (
              <div key={index} className="bg-white p-3 rounded shadow-md">
                <h3 className="text-xl font-semibold">{item.degree}</h3>
                <p className="text-md text-gray-600">{item.institution}</p>
                <p className="text-sm text-gray-500">{item.year}</p>
                <p className="mt-2 text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
