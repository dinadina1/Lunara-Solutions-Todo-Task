import React from 'react'

const Todo = ({data, handleRemove, handleUpdate}) => {
    
    
  return (
    <>
    <section className='p-2 w-full md:w-1/3'>
    <article className= {`container border border-gray-400 rounded p-5 ${data?.completed ? 'bg-green-100': 'bg-gray-200'}`}>
        <p className='text-gray-500 p-0.5'><span className='font-bold me-2'>Title:</span>{data?.title}</p>
        <p className='text-gray-500 p-0.5'><span className='font-bold me-2'>Description:</span>{data?.desc}</p>
        <p className='text-gray-500 p-0.5'><span className='font-bold me-2'>Status:</span>{data?.completed ? <span className='text-green-500'>Completed</span> : <span className='text-red-500'>Incompleted</span>}</p>
        <div className='flex justify-between flex-wrap px-0.5'>
        <div>
            <input name='status' type="checkbox" checked={data?.completed?true:false} onChange={()=>handleUpdate(data.id)}/>
            <label htmlFor='status' className='ms-2 text-gray-500 font-semibold'>Change status</label>
        </div>
        <button className='bg-red-500 my-2 md:my-0 hover:bg-red-600 font-semibold px-5 py-1 rounded text-white' onClick={() => handleRemove(data.id)}>Remove</button>
        </div>
    </article>
    </section>
    </>
  )
}

export default Todo