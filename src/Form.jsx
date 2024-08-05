import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Form = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, successMessage] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const closeModal = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);

  };

  const formHandler = (e) => {
    e.preventDefault();
    if (!username || !password) {
      toast.error("Required fields are missing");
    } else {
      toast.success('Successfully logged in');
      successMessage(true);
      closeModal(); // Close the modal on successful login
    }
  };

  useEffect(() => {
    const handleLoad = () => {
      setIsOpen(true);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      <div className={`w-full fixed top-0 transition-all bg-slate-400 h-screen ${isOpen ? 'block' : 'hidden'}`}></div>
      <div className='w-full flex flex-col items-center justify-center fixed top-40'>
        <div className={`bg-black gap-4 p-4 shadow-xl shadow-black absolute top-[-120%] sm:w-[350px] w-[300px] h-[300px] flex flex-col items-center transition-all ease-in-out duration-500 justify-around ${isOpen ? 'opacity-1 ' : 'opacity-0'} relative`}>
          <div onClick={closeModal} className='p-2 text-black text-4xl cursor-pointer font-extrabold bg-white absolute top-0 right-0'>
            <h1>&times;</h1>
          </div>
          <h1 className='text-white text-4xl font-bold'>Log in</h1>
          <div className='flex flex-col gap-4 text-black w-full'>
            <form onSubmit={formHandler} className='flex flex-col gap-6'>
              <input
                type="text"
                placeholder='Enter your username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className='focus:outline-none focus:shadow-outline bg-white p-2 rounded w-full border-none outline-0'
              />
              <input
                type="password"
                placeholder='Enter your password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='bg-white p-2 rounded border-none outline-0 focus:border-2 focus:border-blue-700 w-full focus:outline-none focus:shadow-outline'
              />
              <center><button type='submit' className='bg-black border w-24 p-2 rounded-full text-white font-bold text-[20px]'>Log in</button></center>
            </form>
          </div>
        </div>
      </div>

      <div className={`bg-green-400  w-full shadow-xl shadow-black p-3 text-4xl text-white ${message ? 'flex': 'hidden' }`}>
        <h1>{`Welcome back ${username} ` }</h1>
      </div>
    </>
  );
}

export default Form;


