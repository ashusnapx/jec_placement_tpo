import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4">
        <div className="mb-4">
          <h1 className="text-2xl font-bold">Contact Us</h1>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-lg font-semibold mb-4">Location</h2>
          <p>
            Jabalpur Engineering College
            <br />
            Gokalpur, Jabalpur,
            <br />
            Madhya Pradesh, India - 482005
          </p>

          <h2 className="text-lg font-semibold mt-8 mb-4">Contact Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p>
                Principal: P. K. JHINGE
                <br />
                Ph: +91-761-2331953
                <br />
                Email: prinjec.jbp@mp.gov.in
              </p>
            </div>
            <div>
              <p>
                Vice-Principal
                <br />
                Ph: +91-761-2330507
              </p>
            </div>
            <div>
              <p>
                Training and Placement Officer
                <br />
                Ph: +91-761-2431953
                <br />
                Email: tpo@jec-jabalpur.org, tpojecjabalpur@gmail.com
              </p>
            </div>
            <div>
              <p>
                D.D.O.
                <br />
                Ph: +91-761-2331152
              </p>
            </div>
            <div>
              <p>
                Registrar Academic
                <br />
                Ph: +91-761-2330643
                <br />
                Email: registrar_acad@jecjabalpur.ac.in
              </p>
            </div>
            <div>
              <p>
                Examination Section
                <br />
                Ph: +91-761-2433404
                <br />
                Email id: coe@jecjabalpur.ac.in
              </p>
            </div>
            <div>
              <p>
                Library
                <br />
                Ph: +91-761-2332243
              </p>
            </div>
            <div>
              <p>
                Nodal Centre
                <br />
                Ph: +91-761-2334800
              </p>
            </div>
            <div>
              <p>
                TIFAC-CORE
                <br />
                Ph: +91-761-2330285
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
