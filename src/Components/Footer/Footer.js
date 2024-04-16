import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-powderblue text-rgb(69, 121, 167) relative bottom-0 left-0 right-0 text-center">
      <div className='bg-blue-400'>
      <a href="#" className="flex items-center">
            {/* <img src="http://www.interswitchgroup.com/assets/images/home/interswitch_logo.svg" style={{ width: '150px' }} alt="interswitch Logo" /> */}
          <span className='flex flex-col justify-center mx-auto text-xl mr-auto'>
            <h4 className="text-center">About Us</h4>
            <p>At Safe Gate, our mission is to provide innovative solutions for managing blacklisted 
              items, ensuring security and efficiency for businesses worldwide. 
              With a dedicated team of experts, we strive to deliver cutting-edge technologies that streamline the process of identifying and handling blacklisted items.</p>
        <a href='#' className="text-center">Terms & Condition</a><br />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a class="hover:underline"> Interswitch Group 2.™</a>. All Rights Reserved.</span>
        </span>
          </a>
      </div>
    </footer>
    


// <footer class="w-full bg-powderblue rounded-lg shadow dark:bg-gray-900 m-4">
//     <div class="max-w-screen-xl mx-auto p-4 md:py-8">
//         <div class="sm:flex sm:items-center sm:justify-between">
            
//         <a href="#" className="flex items-center"/>
//           <span className='flex flex-col justify-center mx-auto text-xl mr-auto'>
//             <h4 className="text-center">About Us</h4>
//             <p>At Safe Gate, our mission is to provide innovative solutions for managing blacklisted 
//               items, ensuring security and efficiency for businesses worldwide. 
//               With a dedicated team of experts, we strive to deliver cutting-edge technologies that streamline the process of identifying and handling blacklisted items.</p>
//         <a href='#' className="text-center">Terms & Condition</a><br />
//         </span>
//         <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
//         <div>
//         <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 All Rights Reserved.</span>
//         </div>
//     </div>
//     </div>
// </footer>



  );
};

export default Footer;
