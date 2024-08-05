import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
let menu = ['Home','About','Services','Contact'];
import { FaBarsStaggered } from "react-icons/fa6";
function Navbar1() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>


<div className='bg-black w-full flex justify-between items-center text-white p-4 relative'>
        
        <div>
            <h1 className='text-[20px] font-[600]'>Muhammad Subhan.</h1>
        </div>

      
       { /* mobile sidebar menu
         <div className='fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0'>
         <div className='bg-white flex-col absolute left-0 top-0 h-screen p-8 z-50'>

         </div>
         </div>*/}
        <div>
            <ul className=' sm:gap-6 sm:text-[18px] font-[600] font-sans md:flex hidden'>
                {menu.map((items,index)=>( <li key={index} className='cursor-pointer hover:border-b-2 hover:-translate-y-2 transition-all duration-300 ease-in-out'>{items}</li> ))}
            </ul>
        </div>
         <Button className='float-right m-2 sm:hidden flex text-white !bg-transparent text-2xl font-extralight ' variant="primary" onClick={handleShow}>
         <FaBarsStaggered className=''/>
      </Button>
        
    </div>
     

      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> <h1 className='font-extrabold text-[25px]'>Muhammad Subhan</h1></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className=' justify-center items-center flex-col gap-4 text-2xl font-bold mt-12 flex'>
            <li className='cursor-pointer hover:text-gray-400 transition-all'>Home</li>
            <li className='cursor-pointer hover:text-gray-400 transition-all'>About</li>
            <li className='cursor-pointer hover:text-gray-400 transition-all'>Services</li>
            <li className='cursor-pointer hover:text-gray-400 transition-all'>Contact</li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Navbar1;