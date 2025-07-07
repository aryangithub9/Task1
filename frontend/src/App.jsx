import React from 'react';
import File from './File';
import Navigation from './Navigation';
import AnalyticsTracker from './AnalyticsTracker';

function App() {
  return (
    <>
      <AnalyticsTracker /> 
      <div className="flex justify-center items-center">
        <Navigation />
      </div>
      <div className="text-center text-2xl">
        <File />
      </div>
    </>
  );
}

export default App;
