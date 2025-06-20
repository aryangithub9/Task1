import React from 'react';

const BusinessModelCanvas = () => {
  return (
    <div className="max-w-7xl mx-auto font-sans p-4">
      <div className="flex items-center mb-4">
        <div className="border-l-4 border-black h-10"></div>
        <h1 className="text-4xl font-bold ml-2">BUSINESS MODEL CANVAS -
          <span className="font-serif ml-2">BIZOWL</span>
        </h1>
      </div>

      <div className="grid grid-cols-5 border border-black">
        {/* Row 1 */}
        <div className="border border-black p-4 relative">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-[#1C6ED0] rounded-full mr-1"></div>
            <h2 className="text-sm font-bold">KEY PARTNERS</h2>
          </div>
          <div className="flex justify-center items-center h-40">
            <div className="w-16 h-16 bg-[#1C6ED0] rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold">8</span>
            </div>
          </div>
        </div>

        <div className="border border-black p-4 relative">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-[#1C6ED0] rounded-full mr-1"></div>
            <h2 className="text-sm font-bold">KEY ACTIVITIES</h2>
          </div>
          <div className="flex justify-center items-center h-40">
            <div className="w-16 h-16 bg-[#1C6ED0] rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold">7</span>
            </div>
          </div>
        </div>

        <div className="border border-black p-4 relative">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-[#1C6ED0] rounded-full mr-1"></div>
            <h2 className="text-sm font-bold">VALUE PROPOSITIONS</h2>
          </div>
          <div className="flex justify-center items-center h-40">
            <div className="w-16 h-16 bg-[#1C6ED0] rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold">2</span>
            </div>
          </div>
        </div>

        <div className="border border-black p-4 relative">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-[#1C6ED0] rounded-full mr-1"></div>
            <h2 className="text-sm font-bold">CUSTOMER RELATIONSHIPS</h2>
          </div>
          <div className="flex justify-center items-center h-40">
            <div className="w-16 h-16 bg-[#1C6ED0] rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold">4</span>
            </div>
          </div>
        </div>

        <div className="border border-black p-4 relative">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-[#1C6ED0] rounded-full mr-1"></div>
            <h2 className="text-sm font-bold">CUSTOMER SEGMENTS</h2>
          </div>
          <div className="flex justify-center items-center h-40">
            <div className="w-16 h-16 bg-[#1C6ED0] rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold">1</span>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="border border-black p-4 relative col-span-1"></div>

        <div className="border border-black p-4 relative">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-[#1C6ED0] rounded-full mr-1"></div>
            <h2 className="text-sm font-bold">KEY RESOURCES</h2>
          </div>
          <div className="flex justify-center items-center h-40">
            <div className="w-16 h-16 bg-[#1C6ED0] rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold">6</span>
            </div>
          </div>
        </div>

        <div className="border border-black p-4 relative col-span-1"></div>

        <div className="border border-black p-4 relative">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-[#1C6ED0] rounded-full mr-1"></div>
            <h2 className="text-sm font-bold">CHANNELS</h2>
          </div>
          <div className="flex justify-center items-center h-40">
            <div className="w-16 h-16 bg-[#1C6ED0] rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold">3</span>
            </div>
          </div>
        </div>

        <div className="border border-black p-4 relative col-span-1"></div>

        {/* Row 3 */}
        <div className="border border-black p-4 relative col-span-2">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-[#1C6ED0] rounded-full mr-1"></div>
            <h2 className="text-sm font-bold">COST</h2>
          </div>
          <div className="flex justify-center items-center h-32">
            <div className="w-16 h-16 bg-[#1C6ED0] rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold">9</span>
            </div>
          </div>
        </div>

        <div className="border border-black p-4 relative col-span-3">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-[#1C6ED0] rounded-full mr-1"></div>
            <h2 className="text-sm font-bold">REVENUE STREAMS</h2>
          </div>
          <div className="flex justify-center items-center h-32">
            <div className="w-16 h-16 bg-[#1C6ED0] rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold">5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessModelCanvas;
