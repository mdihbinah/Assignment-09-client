'use client'
// import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';

const SignInPage = () => {
  



    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-4xl font-bold">Login now!</h1>
    </div>
    <div className="card bg-base-100 w-80 max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form >
          <fieldset className="fieldset">
          <label className="label font-extrabold">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label font-extrabold">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn bg-blue-600 hover:bg-blue-500 text-white mt-4">Login</button>
        </fieldset>
        </form>
        <p>Don't have any account? <Link href={'/register'}  className='text-blue-600 font-bold link-hover' >Register</Link></p>
        <p className='divider'>Or</p>
        <div   className="flex items-center gap-5 btn"><FcGoogle /> Sign in with Google</div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignInPage;