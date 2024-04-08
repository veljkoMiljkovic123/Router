import React from 'react'

function NavbarComponent() {

    let routers = ['Products','About','Contact'];
    let pathname = window.location.pathname.slice(1);

  return (
    <div className='container mx-auto flex justify-between items-center h-[120px]'>
        <h1>WithoutRouter</h1>

        <ul className='flex gap-7 cursor-pointer'>
            {routers.map((el,i)=>{
                return <li key={i}>
                    <a href={`/${el.toLowerCase()}`}
                    className={pathname === el.toLowerCase()?'active':""}>{el}</a>
                    </li>
            })}
        </ul>

    </div>
  )
}

export default NavbarComponent