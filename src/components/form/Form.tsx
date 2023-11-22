import { FC, useState } from 'react'

const Form:FC<{title: string, handle:()=>void}> = ( {title, handle} ) => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

  return (
    <form className='flex flex-col border-[5px] w-[350px] p-[20px]'>
        <input 
            type="email"
            value={email}
            placeholder='email'
            onChange={(e)=>setEmail(e.target.value)} 
            className='my-[10px] p-[5px] border border-black border-[3px] rounded'
        />
        <input 
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder='password'
            className='my-[10px] p-[5px] border border-black border-[3px] rounded'
        />
        <button onClick={()=>handle()}>
            {title}
        </button>
    </form>
  )
}

export default Form