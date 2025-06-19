import Image from 'next/image'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='h-full w-[15rem] border-x-2 border-border flex-divide'>
      <header className='flex-start h-[10vh] w-full gap-2'>
        <Image src= '/icon.png' height={50} width={50} alt='Zapmail' className='p-0'/>
        <h1 className='text-30-extrabold !text-blue-900'>Zapmail</h1>
      </header>
      <section></section>
      <footer></footer>
    </div>
  )
}

export default Sidebar