import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import {ShopContext} from '../context/ShopContext.jsx';


export default function SignInPage() {
   const [name,setName] = useState('');
   const [password,setPassword] = useState('');
   const [email,setEmail] = useState('');
   const [currentState, setCurrentState] = useState('SignInPage');
   const { navigate} = useContext(ShopContext);

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log('handleSubmit', e);
   }
   return (
      <div>
         <h2>SignInPage</h2>
      </div>

   );
}