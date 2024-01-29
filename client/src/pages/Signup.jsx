import { useState } from 'react';

export default function Signup() {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.id]:e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/server/auth/signup', 
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data);
  };
  console.log(formData);

  return (
    <div>
      <div className='bg-sky-700/75 h-16 w-full'>{/* header*/}
        <a href="/" className='font-semibold float-left p-4 text-2xl'>
          <span className=' text-stone-300'>Fit</span>
          <span className='text-red-700'>Track</span>
        </a>
      </div>
      <form onSubmit={handleSubmit} className='border-2 border-sky-700/75 rounded-lg shadow-xl w-96 max-w-m my-20 m-auto appearance-none'>
        <div className='flex flex-col p-8 gap-1'>
          <div className='text-3xl p-4 w-min  font-semibold self-center'>
            <span className=' text-stone-300'>Fit</span>
            <span className='text-red-700'>Track</span>
          </div>
          <div>
            <label className='text-slate-400 text-xl font-semibold w-min float-start' htmlFor='email'>
            Email
            </label>
            <span className="text-red-600" aria-hidden="true">*</span>
          </div>
          <input className='peer shadow-md text-lg rounded-lg w-full border-2 p-2 mt-1 active:border-sky-700/75' id='email' type='email' placeholder='email' onChange={handleChange} />
          <span className='text-red-600 text-sm pb-1 invisible peer-invalid:visible'>
            Invalid email format(person@example.com)
          </span>
          <div>
            <label className='text-slate-400 text-xl font-semibold w-min float-start' htmlFor='username'>
            Username
            </label>
            <span className="text-red-600" aria-hidden="true">*</span>
          </div>
          <input className='peer shadow-md text-lg rounded-lg w-full border-2 p-2 mb-3 mt-1 active:border-sky-700/75' id='username' type='text' placeholder='username' onChange={handleChange} />
          <div>
            <label className='text-slate-400 text-xl font-semibold w-min float-start' htmlFor='password'>
              Password
            </label>
            <span className="text-red-600" aria-hidden="true">*</span>
          </div>
          <input className='shadow-md text-lg rounded-lg w-full border-2 p-2 mb-1 mt-1 active:border-sky-700/75 ' id='password' type='text' placeholder='password' onChange={handleChange} />
          <button className= 'bg-sky-700/75 text-stone-300 text-xl rounded-2xl w-full p-2 my-5'>
            Sign Up
          </button>
          <span className='text-slate-400 text-xl self-center'>
            OR
          </span>
          <button>
            Google authenticator
          </button>
          <div className='text-sm text-slate-400 mt-4'>
            <span>
              Already have an account? 
            </span>
            <a href='/signin' className='ml-1 underline '>
              Sign in here
            </a>
          </div>
        </div>
      </form>
    </div>
  )
}
