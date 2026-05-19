'use client'
import { useRouter } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';

const Register = () => {
  
    return (
        <div>
            <div className="hero bg-base-200  min-h-screen">
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-4xl font-bold">Sign Up!</h1>
    </div>
    <div className="card bg-base-100 min-w-100 max-w-sm shrink-0 shadow-2xl">
      <div  className="card-body">

        <form >
          <fieldset className="fieldset">
          <label className="label font-bold">Name</label>
          <input type="text" name='name' className="input" placeholder="Name" />

          <label className="label font-bold">Photo-url</label>
          <input type="text" name='photolink' className="input" placeholder="Photo-url" />

          <label className="label font-bold">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />

          <label className="label font-bold">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <button type='submit' className="btn bg-blue-600 hover:bg-blue-500 text-white duration-200 mt-4">Sign Up</button>
        </fieldset>
        </form>
        <p className='divider'>Or</p>
        <div  className="flex items-center gap-5 btn  "><FcGoogle></FcGoogle> Sign in with Google</div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;