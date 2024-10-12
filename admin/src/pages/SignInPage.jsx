import axios from 'axios';
import React, {useState} from 'react';

export default function SignInPage() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');


   const handleSubmit = async (e) => {
      e.preventDefault();
      console.log('handleSubmit', e);
   }


   return (
      <div className='min-h-screen flex items-center justify-center w-full'>
         <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
            <h1 className='text-xl font-semibold text-center uppercase mb-4'>Admin Panel Sign In</h1>
            <form onSubmit={handleSubmit}>
               <div className='mb-3 min-w-72'>
                  <p className='text-sm font-medium text-gray-700 mb-2'>Email
                     Address</p>
                  <input onChange={(e) => setEmail(e.target.value)} value={email}
                         className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none'
                         type="email" placeholder='Email' required/>
               </div>
               <div className='mb-3 min-w-72'>
                  <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
                  <input onChange={(e) => setPassword(e.target.value)}
                         value={password}
                         className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none'
                         type="password" placeholder='Password' required/>
               </div>
               <button
                  className='mt-2 w-full py-2 px-4 rounded-md uppercase bg-black text-white'
                  type="submit"> Sign In
               </button>
            </form>
         </div>
      </div>

   );
}