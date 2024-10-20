import React from 'react'
import { Link } from 'react-router-dom'

function Layout({children}) {
  return (
    <div>
    
    <header>
<div className='w-full flex items-center justify-end gap-10 px-20 bg-slate-800 h-12 text-xl font-medium'>
<a href="#">Sign in / Guest </a>
<a href="#">Create account</a>

</div>
<div className='w-full bg-slate-200 flex justify-between  px-24 items-center  py-2'>
<button className='btn px-4 border-none bg-blue-700 text-white text-xl text-center'>C</button>


<div className='flex gap-5'>
  <Link className=  ' text-black  bg-inherit hover:bg-slate-500  p-2 rounded-md' to={'/'}>Home</Link>
  <Link className=' text-black  bg-inherit hover:bg-slate-500  p-2 rounded-md'  to={'/about'}>About</Link>
  <Link className='text-black  bg-inherit hover:bg-slate-500  p-2 rounded-md'  to={'/products'}>Products</Link>
  <Link className='text-black  bg-inherit hover:bg-slate-500  p-2 rounded-md'  to={'/cart'}>Cart</Link>


</div>
<div className='flex gap-4'>
  <p>theme</p>
  <p>cart</p>
</div>
</div>

    </header>

        {
            children 
        }
    </div>
  )
}

export default Layout