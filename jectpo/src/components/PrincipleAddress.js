import React from 'react';

const PrincipleAddress = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl p-8 bg-white rounded-lg shadow-md w-full">
        <div className="flex justify-center">
          <img
            src="https://www.jecjabalpur.ac.in/images/principal_img_big.jpeg"
            alt="Principal"
            className="w-48 h-48 rounded-full"
          />
        </div>
        <h1 className="text-3xl font-bold text-center mt-4">Principal's Address</h1>
        <p className="text-gray-700 text-sm mt-4">
          Jabalpur Engineering College in its 73 years of glorious existence has carved a unique niche for
          itself in the annals of technical education in M.P. The college since its inception has a well-
          equipped High Voltage Laboratory and several other well-advanced Laboratories. Since then the
          college has achieved several milestones living up to its motto ‘onwards on wings’. Very recently
          the institution has proved its mettle by becoming a Lead Institution under Technical Education
          Quality improvement program (TEQIP). We have added one more feather in our cap by achieving
          Academic Autonomy.
        </p>
        <p className="text-gray-700 text-sm mt-4">
          I am confident that the graduating engineers will strive to build India a nation which will be
          proud of her independence, powerful in her defense, self-reliant in industry and technology. I
          close my message with a saying from Theodore Roosevelt: “The best prize that life offers is the
          chance of working hard at work, worth doing."
        </p>
        <p className="text-right mt-4 text-sm font-bold">- Principal</p>
        <p className="text-right text-sm">Dr. PK Jhinge</p>
      </div>
    </div>
  );
};

export default PrincipleAddress;
