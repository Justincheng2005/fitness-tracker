import React from 'react'

export default function Header() {
  return (
    <div className='block bg-sky-700/75 overflow-hidden'>
        <a href="/" className='text-white float-left p-4 text-2xl'>
            <span className=' text-stone-300'>Fit</span>
            <span className='text-red-700'>Track</span>
        </a>
        <div className="flex float-right">
            <a href="/routine">
                <button className='py-5 px-4 hover:bg-black/5'>
                    <span className=' text-stone-300'>Routine</span>
                </button>
            </a>
            <a href="/meals">
                <button className='py-5 px-4 hover:bg-black/5'>
                    <span className=" text-stone-300">Meals/Eating Habits</span>
                </button>
            </a>
            <a href="/lifts">
                <button className='py-5 px-4 hover:bg-black/5'>
                    <span className=" text-stone-300">Lifts</span>
                </button>
            </a>
            <a href="/goals">
                <button className='py-5 px-4 hover:bg-black/5'>
                    <span className=" text-stone-300">Goals</span>
                </button>
            </a>
            <a href="/signin">
                <button className='py-5 px-4 hover:bg-black/5'>
                    <span className=" text-stone-300">Sign in</span>
                </button>
            </a>
        </div>
    </div>
  )
}