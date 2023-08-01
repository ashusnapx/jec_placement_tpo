import React from 'react';

const Faculty = () => {
  const departmentsData = [
    {
      name: 'Department of MCA',
      description: 'Description for Department of MCA',
      imageSrc: 'URL_TO_MCA_IMAGE',
    },
    {
      name: 'Department of MCA',
      description: 'Description for Department of MCA',
      imageSrc: 'URL_TO_MCA_IMAGE',
    },
    {
      name: 'Department of MCA',
      description: 'Description for Department of MCA',
      imageSrc: 'URL_TO_MCA_IMAGE',
    },
    {
      name: 'Department of MCA',
      description: 'Description for Department of MCA',
      imageSrc: 'URL_TO_MCA_IMAGE',
    },
    {
      name: 'Department of MCA',
      description: 'Description for Department of MCA',
      imageSrc: 'URL_TO_MCA_IMAGE',
    },
    {
      name: 'Department of MCA',
      description: 'Description for Department of MCA',
      imageSrc: 'URL_TO_MCA_IMAGE',
    },
    {
      name: 'Department of MCA',
      description: 'Description for Department of MCA',
      imageSrc: 'URL_TO_MCA_IMAGE',
    },
    {
      name: 'Department of MCA',
      description: 'Description for Department of MCA',
      imageSrc: 'URL_TO_MCA_IMAGE',
    },
    {
      name: 'Department of MCA',
      description: 'Description for Department of MCA',
      imageSrc: 'URL_TO_MCA_IMAGE',
    },
    {
      name: 'Department of MCA',
      description: 'Description for Department of MCA',
      imageSrc: 'URL_TO_MCA_IMAGE',
    },
    {
      name: 'Department of MCA',
      description: 'Description for Department of MCA',
      imageSrc: 'URL_TO_MCA_IMAGE',
    },
    {
      name: 'Department of MCA',
      description: 'Description for Department of MCA',
      imageSrc: 'URL_TO_MCA_IMAGE',
    },
    {
      name: 'Department of MCA',
      description: 'Description for Department of MCA',
      imageSrc: 'URL_TO_MCA_IMAGE',
    },
    {
      name: 'Department of MCA',
      description: 'Description for Department of MCA',
      imageSrc: 'URL_TO_MCA_IMAGE',
    },
    // Add other departments with descriptions and images
  ];

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Departments at Jabalpur Engineering College</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {departmentsData.map( ( department, index ) => (
            <div
              key={index}
              className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer transform transition-transform hover:scale-105"
            >
              <img src={department.imageSrc} alt={department.name} className="h-40 w-full object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{department.name}</h2>
                <p className="text-gray-700 text-sm">{department.description}</p>
              </div>
            </div>
          ) )}
        </div>
      </div>
    </div>
  );
};

export default Faculty;
