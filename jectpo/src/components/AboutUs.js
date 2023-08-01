import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-blue-100 min-h-screen">
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-center mb-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Jabalpur_Engineering_College_%28JEC%29%27s_administrative_building.jpg/900px-Jabalpur_Engineering_College_%28JEC%29%27s_administrative_building.jpg"
            alt="JEC Campus"
            className="h-96 w-full object-cover rounded-md"
          />
        </div>
        <h1 className="text-3xl font-bold text-center mb-4">About Us</h1>
        <div className="bg-white rounded-lg p-4 shadow-md">
          <div>
            <h2 className="text-lg font-semibold mb-2">Our Vision</h2>
            <p className="text-sm">
              To be a front runner in Technical Education providing academic excellence satisfying global needs.
            </p>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2">Our Mission</h2>
            <p className="text-sm">
              To develop world-class infrastructure and knowledge empowerment mechanism for carving out graduates and postgraduates of high level of competence embedded with wisdom; and dedicated to ethics and values.
              <br />
              To conduct research in the frontier areas and to develop innovative and creative problem-solving skills.
              <br />
              To establish strong linkages with technical institutions, industries, R&D organisations and community.
            </p>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2">List of JEC Principals</h2>
            <table className="w-full text-sm">
              {/* Add the list of JEC Principals here */}
            </table>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2">Achievements</h2>
            <ul className="list-disc list-inside">
              {/* Add the list of achievements here */}
            </ul>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2">Glorious Past</h2>
            <p className="text-sm">
              Jabalpur Engineering College, Jabalpur was established on 7 July, 1947 when the entire global chess board was witnessing a dramatic change. It was born just a few months before India broke the shackles of British slavery. This illustrious Institution got the distinction of being the Second Engineering College in India and is the premier institution of Engineering Education in Central India. Thanks to the inspired vision of the great pioneering Principal Dr. S.P. Chakravarti. From a very small room in old Robertson College, this tiny icon has grown into a mighty oak tree, which is now 75 years old and celebrated 2021-22 as Amrit Mahotsav which started from 07/07/2021.
              <br />
              World class teaching standards and labs has paid off on many occasions in the past and it still continues to glorify the name and the legacy of a prestigious institute such as this. As a result, we have alumni placed and settled not only in every part of India but also around the globe. As they say…
              <br />
              “OUR STRENGTH 76 BATCHES FORMING”
              <br />
              Your Intelligence is my common sense
              <br />
              Presently, JEC offers B.Tech degree in Nine disciplines and nine postgraduate courses in various fields; three PG courses in Applied Science and MCA. The college is now declared Autonomous by the Government of Madhya Pradesh.
              <br />
              Sufficient facilities are available for the teachers and students of Applied Sciences and various engineering disciplines for doing their research work and their PhD and D Sc. Degrees. About sixty teachers/students have been awarded Ph.D. degree from this college. To keep in consonance with the fast-emerging technologies, JEC is taking a lot of initiatives by revitalizing its courses and taking many projects in the thrust area of engineering and technologies.
              <br />
              Apart from the academic excellence the college provides, the college has a legacy linked with its name. It is because of the untiring efforts of the faculty, staff, and the students that JEC has maintained a respectable rank and enjoys a position of Pride and Prestige.
            </p>
          </div>
          <div className="mt-4">
            <p className="text-sm">
              For more details, you can refer to the{' '}
              <a
                href="https://www.jecjabalpur.ac.in/pdf/faculties_email.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold underline"
              >
                Institutional Directory
              </a>
              .
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Jabalpur_Engineering_College_%28JEC%29%27s_Jashan_Auditorium.jpg/1024px-Jabalpur_Engineering_College_%28JEC%29%27s_Jashan_Auditorium.jpg"
            alt="Jashan Auditorium"
            className="h-96 w-full rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
