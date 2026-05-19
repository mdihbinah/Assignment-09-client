'use client'
import { useRouter } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';

const SignUP = () => {
  const router = useRouter()
  const handleRegister = async(e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries())
    // console.log('Form submitted with:', userData);
    const {data, error} = await authClient.signUp.email({
      name: userData.name,
      image: userData.photolink,
      email: userData.email,
      password: userData.password,
      callbackURL: '/login'
    })
    // console.log('Sign up response:', {data, error});
    
    if(error){
        toast.error('Error sign up:' + error.message, {
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
      router.push('/login')
      toast.success('sign up successful! Check your Email.', {
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
    <div className="card bg-base-100 min-w-100 max-w-sm shrink-0 shadow-2xl">
      <div  className="card-body">

        <form onSubmit={handleRegister} >
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
        <div onClick={handleGoogleSignUp} className="flex items-center gap-5 btn  "><FcGoogle></FcGoogle> Sign in with Google</div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignUP;