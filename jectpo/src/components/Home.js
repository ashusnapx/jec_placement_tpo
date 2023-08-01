import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Jabalpur Engineering College</h1>
        <p className="text-xl text-gray-600">Empowering Minds, Shaping Futures</p>
      </header>

      <section className="my-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Latest Updates</h2>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Replace the content below with actual latest updates from the website */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-bold mb-2">RESULT DECLARED APRIL 2023</h3>
            <p className="text-gray-600">
              B.TECH.PTDC (AICTE) 1st To 6th SEMESTER & M.E. GRADING 2nd SEMESTER REVALUATION & RE TOTAL APPLY DATE
              03-08-2023 (WITHOUT LATE FEE) & 05-08-2023 (WITH LATE FEE).
            </p>
            {/* Add links here */}
          </div>
          {/* Add more update cards here */}
        </div>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Gallery</h2>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Replace the content below with actual images from the website */}
          <img
            src="https://www.jecjabalpur.ac.in/images/slide20.png"
            alt="Jabalpur Engineering College Image 1"
            className="w-full h-96 rounded-lg shadow-md object-cover "
          />
          <img
            src="https://www.jecjabalpur.ac.in/images/slide20.png"
            alt="Jabalpur Engineering College Image 1"
            className="w-full h-96 rounded-lg shadow-md object-cover "
          />
          <img
            src="https://www.jecjabalpur.ac.in/images/slide20.png"
            alt="Jabalpur Engineering College Image 1"
            className="w-full h-96 rounded-lg shadow-md object-cover "
          />
          {/* Add more gallery images here */}
        </div>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Courses & Admissions</h2>
        <p className="text-gray-600">
          At Jabalpur Engineering College, we offer a wide range of courses in various disciplines. Our admissions for the
          academic year 2023-2024 are now open. Explore our courses and apply now to secure your future.
        </p>
        {/* Add links to courses and admission details here */}
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">About Us</h2>
        <p className="text-gray-600">
          Jabalpur Engineering College is a premier institute of technical education in Jabalpur, Madhya Pradesh. Since its
          establishment in 1947, we have been committed to delivering quality education and producing skilled engineers who
          contribute to the nation's development.
        </p>
        {/* Add more information about the college here */}
      </section>
    </div>
  );
};

export default Home;
