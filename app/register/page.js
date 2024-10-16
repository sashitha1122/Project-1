"use client";
import Image from 'next/image';
import { useState } from 'react';
export default function RegisterPage() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   return(
  <section className="mt-8">
   <h1 className="text-center text-emerald-600 text-4xl mb-4" > 
     Register
   </h1>
   <form className="block max-w-xs mx-auto">
      <input type="email" placeholder="email"/>
      <input type="password" placeholder="password"/>
      <button type="submit">Register</button>
      <div className="my-4 text-center text-gray-500">
         or login with provider
      </div>
      <button className="flex gap-4 justify-center">
         <Image src={'/Google.webp'} alt={''} width="24" height="24" />
         Login with google
      </button>
   </form>
</section>
 );
}