import React from 'react';

const AadharCard = ({ name, dob, gender, idNumber }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="relative h-12 bg-gradient-to-r from-orange-400 via-white to-green-400">
        <div className="absolute left-2 top-1">
          <img 
            src="src\assets\Emblem_of_India.svg.png"
            alt="Government emblem"
            className="h-8 w-8"
          />
        </div>
        <div className="text-center pt-2 font-semibold">
          <div className="text-xs">भारत सरकार</div>
          <div className="text-xs">GOVERNMENT OF INDIA</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 flex">
        {/* Photo Section */}
        <div className="mr-4">
          <div className="w-24 h-32 bg-gray-200 border border-gray-300 bg-cover">
            <img 
              src="src\assets\OIP.png"
              alt="ID photo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Details Section */}
        <div className="flex-1">
          <div className="space-y-2">
              <div className="text-sm">Name</div>
            <div>
              <div className="text-sm">DoB: 1/1/2000</div>
            </div>
            <div>
              <div className="text-sm">Male</div>
            </div>
            <div>
              <div className="text-sm">Aadhar Number</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200">
        <div className="p-4">
          <div className="text-lg font-mono text-center">{idNumber}</div>
        </div>
        <div className="bg-red-600 h-2"></div>
        <div className="p-2 text-center text-xs text-gray-600">
          Mera Aadhaar, Meri Pehchaan
        </div>
      </div>
    </div>
  );
};

export default AadharCard;