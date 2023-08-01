import React from 'react';

const Academic = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-5xl p-8 bg-white rounded-lg shadow-md w-full mt-8">
        <h1 className="text-3xl font-bold text-center mb-4">Academic Programs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-md p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">Undergraduate</h2>
            <p className="text-gray-700 mb-2">B. Tech</p>
            <p className="text-gray-700 mb-2">Duration: 4 years</p>
            <p className="text-gray-700 mb-2">Qualifying Test: IIT-JEE (Mains)</p>
          </div>
          <div className="bg-white rounded-md p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">Graduate</h2>
            <p className="text-gray-700 mb-2">M. Engineering</p>
            <p className="text-gray-700 mb-2">Duration: 3 years</p>
            <p className="text-gray-700 mb-2">Qualifying Test: GATE (Graduate Aptitude Test in Eng.)</p>
          </div>
          <div className="bg-white rounded-md p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">Graduate</h2>
            <p className="text-gray-700 mb-2">M.C.A</p>
            <p className="text-gray-700 mb-2">Duration: 3 years</p>
            <p className="text-gray-700 mb-2">Qualifying Test: Graduation State Merit List</p>
          </div>
          <div className="bg-white rounded-md p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">Postgraduate</h2>
            <p className="text-gray-700 mb-2">M. Sc</p>
            <p className="text-gray-700 mb-2">Duration: 2 years</p>
            <p className="text-gray-700 mb-2">Qualifying Test: On the basis of Percentage in B.Sc.</p>
          </div>
          <div className="bg-white rounded-md p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">Doctoral</h2>
            <p className="text-gray-700 mb-2">P.hd</p>
            <p className="text-gray-700 mb-2">Thesis duration: 3-5 years</p>
            <p className="text-gray-700 mb-2">Qualifying Test: GATE (Graduate Aptitude Test in Engineering)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academic;
