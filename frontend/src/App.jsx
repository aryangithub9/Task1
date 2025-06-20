import React from "react";
import paperPlane from "./assets/message.svg";

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 m-2" >
      <div className="w-[440px] h-[400px] bg-white shadow-lg flex flex-col items-center justify-center p-6 rounded-xl">
        <img src={paperPlane} alt="Paper Plane Logo" className="w-16 h-16 mb-4" />
        <h1 className="text-2xl font-semibold text-gray-800 mb-2" > Message Sent</h1>
        <p className="text-center text-gray-700 mb-4 font-semibold">
          Your message has successfully sent and you will get a notification on WhatsApp once the partner replies or you can login in panel to check their response.
        </p>
        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Close</button>
      </div>
    </div>
  );
};

export default App;
