'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';

const SignInPage = () => {
  const handleLogin = async(e) =>{
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const userData = Object.fromEntries(formData.entries())
    console.log('form data', userData);
    const {data, error} = await authClient.signIn.email({
      email: userData.email,
      password: userData.password,
      callbackURL: '/'
    })

    if(error){
      toast.error('Log in Error:' + error.message, {
position: "top-center",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
});
    } else if(data){
      console.log();
      toast.success('Log In Successful ', {
position: "top-center",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
});
    
      
    }

  }

  const handleGoogleLogIn = async() => {
    const data = await authClient.signIn.social({
      provider: 'google',
    })
  }



    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-4xl font-bold">Login now!</h1>
    </div>
    <div className="card bg-base-100 min-w-100 max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleLogin}>
          <fieldset className="fieldset">
          <label className="label font-bold">Email</label>
          <input type="email" name='email' className="input" required placeholder="Email" />
          <label className="label font-bold">Password</label>
          <input type="password" name='password' className="input" required placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn bg-blue-600 hover:bg-blue-500 duration-200 text-white mt-4">Login</button>
        </fieldset>
        </form>
        <p>Don't have any account? <Link href={'/register'}  className='text-blue-600 font-bold link-hover' >Register</Link></p>
        <p className='divider'>Or</p>
        <div  onClick={handleGoogleLogIn} className="flex items-center gap-5 btn"><FcGoogle /> Sign in with Google</div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignInPage;