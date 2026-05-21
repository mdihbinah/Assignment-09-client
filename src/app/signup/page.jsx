'use client'
import { authClient } from '@/lib/auth-client';
import { Description, FieldError, Input, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';

const SignUP = () => {
  const router = useRouter()

  const handleSignUp = async(e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries())
    console.log('Form submitted with:', userData);

    const {data, error} = await authClient.signUp.email({
      name: userData.name,
      image: userData.photolink,
      email: userData.email,
      password: userData.password,
      callbackURL: '/signin'
    })
    console.log('Sign up response:', {data, error});
    
    if(error){
        toast.error('Error Sign Up:' + error.message, {
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
    if(data){
      router.push('/signin')
    }
  }

  const handleGoogleSignUp = async() => {
    const data = await authClient.signIn.social({
      provider: 'google',
    })
  }
    return (
        <div>
            <div className="hero bg-base-200  min-h-screen">
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-4xl font-bold">Sign Up!</h1>
    </div>
    <div className="card bg-base-100 min-w-70 md:min-w-90 max-w-sm shrink-0 shadow-2xl">
      <div  className="card-body">

        <form onSubmit={handleSignUp} >
          <fieldset className="fieldset">
          <label className="label font-bold">Name</label>
          <input type="text" name='name' className="input" placeholder="Name" />

          <label className="label font-bold">Photo-url</label>
          <input type="text" name='photolink' className="input" placeholder="Photo-url" />

          <label className="label font-bold">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />

          {/* <label className="label font-bold">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" /> */}


          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
            <FieldError />
          </TextField>

          <button type='submit' className="btn bg-blue-600 hover:bg-blue-500 text-white duration-200 mt-4">Sign Up</button>
        </fieldset>
        </form>
        <p className='text-center'>Do you have any account? <Link href={'/signin'}  className='text-blue-600 font-bold link-hover' >Sign In</Link></p>
        <p className='divider'>Or</p>
        <div onClick={handleGoogleSignUp} className="flex items-center gap-5 btn  "><FcGoogle></FcGoogle> Sign in with Google</div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignUP;