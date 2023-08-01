import React from 'react';

const Platinum = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="p-8 bg-white rounded-lg shadow-md w-full mt-8 m-2">
        <div className="md:flex">
          <div className="md:w-1/2 md:mr-4 mb-4">
            <img
              src="https://new-img.patrika.com/upload/2021/07/07/jpl.jpg"
              alt="Platinum Jubilee"
              className="h-96 w-full object-cover rounded-t-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold text-center mt-4">Platinum Jubilee Celebration</h1>
            <p className="text-gray-700 text-sm mt-4">
              Recently on 7th July 2021, JEC completed its glorious journey of 74 years. On this occasion,
              CM Mr. Shivraj Singh Chouhan ji inaugurated a year-long Amrit Mahotsav celebration. Here are
              some glimpses & announcements of the day:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-4">
              <li>
                On this day, Honorable CM Shivraj Singh Chauhan announced two more Degree courses Artificial
                intelligence & Mechatronics will be started from 2021-22.
              </li>
              <li>
                Honorable CM Shivraj Singh Chauhan met Defence Minister Mr. Rajnath Singh and acquainted him
                about the oldest Engineering college of MP, JEC Jabalpur, and requested him to start M. Tech
                courses with the help of DRDO.
              </li>
              <li>
                CEO of BrahMos & Honorable alumnus of JEC Mr. Sudhir Kumar Mishra announced that a real model
                of BrahMos missile & MIG 21 will be planted in the college campus, which will be helpful for students
                to study a real working model of these.
              </li>
            </ul>
            <p className="text-gray-700 text-sm mt-4">
              On the occasion of the Platinum Jubilee, CM Mr. Shivraj Singh Chauhan inaugurated the Incubation
              Center in college. Through the incubation center, students gain hands-on experience in innovation
              and entrepreneurship while being nurtured and encouraged by faculty, management, and industry
              experts. It hopes to bring forth a revolution in how and what students learn and achieve while in
              college. A startup incubator is a collaborative program for startup companies — usually physically
              located in one central workspace — designed to help startups in their infancy succeed by providing
              workspace, seed funding, mentoring, and training. You're invited to join a private network of CEOs.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-8">
          <div className="bg-white rounded-md overflow-hidden shadow-md">
            <img
              src="https://new-img.patrika.com/upload/2021/07/07/jpl.jpg"
              alt="Platinum Jubilee"
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="bg-white rounded-md overflow-hidden shadow-md">
            <img
              src="https://www.jecjabalpur.ac.in/images/pjs12.jpg"
              alt="Platinum Jubilee"
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="bg-white rounded-md overflow-hidden shadow-md">
            <img
              src="https://www.jecjabalpur.ac.in/images/pjs12.jpg"
              alt="Platinum Jubilee"
              className="w-full h-48 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platinum;
