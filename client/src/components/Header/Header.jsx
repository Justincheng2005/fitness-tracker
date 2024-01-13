import React from 'react'

export default function Header() {
  return (
    <div class='block bg-sky-700/75 overflow-hidden'>
        <a href="/" class='text-white float-left p-4 text-2xl'>
        <span class=' text-stone-300'>Fit</span>
        <span class='text-red-700'>Track</span>
        </a>
        <div class="flex float-right">
            <a href="/routine">
                <button class='py-5 px-4 hover:bg-black/5'>
                    <span class=' text-stone-300'>Routine</span>
                </button>
            </a>
            <a href="/meals">
                <button class='py-5 px-4 hover:bg-black/5'>
                    <span class=" text-stone-300">Meals/Eating Habits</span>
                </button>
            </a>
            <a href="/lifts">
                <button class='py-5 px-4 hover:bg-black/5'>
                    <span class=" text-stone-300">Lifts</span>
                </button>
            </a>
            <a href="/goals">
                <button class='py-5 px-4 hover:bg-black/5'>
                    <span class=" text-stone-300">Goals</span>
                </button>
            </a>
            <a href="/signin">
                <button class='py-5 px-4 hover:bg-black/5'>
                    <span class=" text-stone-300">Sign in/Sign up</span>
                </button>
            </a>
        </div>
    </div>
  )
}