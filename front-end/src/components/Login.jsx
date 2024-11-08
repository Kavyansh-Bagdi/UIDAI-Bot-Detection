import React, { useState } from 'react';

const Login = () => {
  const [aadhar, setAadhar] = useState({aadharno:""});
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOTP] = useState("");
  const [isValidAadhar, setIsValidAadhar] = useState(false);

  const changeHandler = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 12) {
      setAadhar({...aadhar, [e.target.name]: value})
    }
  }

  const validateAadhar = () => {
    const aadharNumber = parseInt(aadhar.aadharno);
    if (isNaN(aadharNumber)) {
      alert("Please enter a valid Aadhar number");
      return false;
    }
    if (aadharNumber < 100000000000 || aadharNumber > 999999999999) {
      alert("Aadhar number must be 12 digits and start with a non-zero digit");
      return false;
    }
    return true;
  };

  // Mouse and keyboard tracking
  let mouse_interaction = [];
  let keystroke_interaction = [];
  let typing_interaction = [];
  let latestPosition = { clientX: 0, clientY: 0 };
  let currentKey = null;
  let startTime = 0;
  let keystrokes = 0;
  let lastWpm = 0;

  // Track mouse movement
  React.useEffect(() => {
    const handleMouseMove = (event) => {
      latestPosition = { clientX: event.clientX, clientY: event.clientY };
    };

    const handleKeyUp = (event) => {
      currentKey = event.key;
      if (document.activeElement === document.querySelector("#aadharno")) {
        keystrokes++;
      }
    };

    // Set up event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('keyup', handleKeyUp);

    // Data collection interval
    const intervalId = setInterval(() => {
      mouse_interaction.push({ ...latestPosition });
      keystroke_interaction.push({ key: currentKey });

      if (document.activeElement === document.querySelector("#aadharno")) {
        if (!startTime) {
          startTime = Date.now();
        }

        const timePassedInMinutes = (Date.now() - startTime) / 60000;
        lastWpm = (keystrokes / 5) / timePassedInMinutes;

        typing_interaction.push({
          wpm: lastWpm.toFixed(2),
          time: Date.now() - startTime
        });
      }
    }, 100);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('keyup', handleKeyUp);
      clearInterval(intervalId);
    };
  }, []);

  const sendData = () => {
    const data = {
      aadharno: aadhar.aadharno,
      mouse_interaction: mouse_interaction,
      keystroke_interaction: keystroke_interaction,
      typing_interaction: typing_interaction
    };

    fetch('http://127.0.0.1:5000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Data sent successfully:', data);
        if (data.isValid) {
          setIsValidAadhar(true);
          setShowOTP(true);
        } else {
          alert("Invalid Aadhar number!");
        }
      })
      .catch(error => {
        console.error('Error sending data:', error);
      });
  };

  const handleOTPChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 6) {
      setOTP(value);
    }
  };

  const verifyOTP = () => {
    const otpData = {
      aadharno: aadhar.aadharno,
      otp: otp,
      mouse_interaction: mouse_interaction,
      keystroke_interaction: keystroke_interaction,
      typing_interaction: typing_interaction
    };

    fetch('http://127.0.0.1:5000/verify-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(otpData)
    })
      .then(response => response.json())
      .then(data => {
        if (data.isValid) {
          window.location.href = '/dashboard';
        } else {
          alert("Invalid OTP!");
        }
      })
      .catch(error => {
        console.error('Error verifying OTP:', error);
      });
  };

  return (
    <div className='border-b-2 w-full min-h-screen border-[#020b50] relative'>
      <header className='flex gap-4 items-center justify-between w-[1170px] py-4 mx-auto'>
        <img src="src/assets/loginlogo.svg" alt="" width={275} height={50} className='bg-cover'/>
        <img src="src/assets/Page-1.svg" alt="" width={80} height={60} className='bg-cover'/>
      </header>

      <form action="" method="post" className='w-full mt-5 bg-white p-4 rounded-md'>
        <h1 className='font-bold text-[#020b50] text-center text-xl'>Login to Aadhaar via OTP</h1>
        <div className='gap-4 p-6 w-1/3 shadow-lg flex flex-col items-center justify-center h-auto min-h-[14rem] mx-auto mt-5' 
             style={{borderTop: '4px solid', borderImage: 'linear-gradient(to right, #020b50, #2C3A8F) 1'}}>
          <input 
            required 
            type="text"
            name="aadharno" 
            value={aadhar.aadharno} 
            onChange={changeHandler}
            id="aadharno" 
            placeholder='Enter your Aadhaar Number' 
            className='w-full p-3 rounded-md text-xl outline-none border-b-2 border-black -mt-9 mb-7'
          />
          
          {showOTP && (
            <input 
              required 
              type="text"
              value={otp}
              onChange={handleOTPChange}
              placeholder='Enter OTP'
              className='w-full p-3 rounded-md text-xl outline-none border-b-2 border-black mb-7'
            />
          )}

          {!showOTP ? (
            <button 
              className='bg-gray-400 hover:bg-blue-900 hover:scale-105 transition-all duration-300 text-white p-2 rounded-md w-full' 
              type="button" 
              onClick={() => {
                if(validateAadhar()) {
                  sendData();
                }
              }}
            >
              Login With OTP
            </button>
          ) : (
            <button 
              className='bg-gray-400 hover:bg-blue-900 hover:scale-105 transition-all duration-300 text-white p-2 rounded-md w-full' 
              type="button" 
              onClick={verifyOTP}
            >
              Verify OTP
            </button>
          )}
        </div>
      </form>

      <footer className='absolute bottom-0 w-full flex justify-center items-center h-16 bg-[#020b50] text-white'>
        Copyright © 2024 Unique Identification Authority of India All Rights Reserved
      </footer>
    </div>
  );
};

export default Login;