import React from "react";

const Form = ({title, desc, setTitle, setDesc, handleSubmit}) => {


  return (
    <>
      <div className="p-2 md:p-5 ">
        <form className="flex justify-center md:gap-5 flex-wrap" onSubmit={handleSubmit}>
          <div className="md:w-1/3">
            <label htmlFor="title" className="text-gray-500 block font-semibold">
              Enter Title:
            </label>
            <input
              name="title"
              type="text"
              onChange={(e)=>setTitle(e.target.value)}
              value={title}
              className="border border-green-500 rounded h-8 focus:border-green-700 active:border-green-700 w-full"
            />
          </div>
          <div className="md:w-1/3">
            <label htmlFor="description" className="text-gray-500 block font-semibold">
              Enter Description:
            </label>
            <input
              name="description"
              className="border border-green-500 rounded h-8 focus:border-green-700 active:border-green-700 w-full"
              onChange={(e)=>setDesc(e.target.value)}
              value={desc}
            />
          </div>
          <div className="my-auto pt-4">
            <button className="bg-green-400 hover:bg-green-500 px-8 py-2 rounded text-white font-semibold" onClick={handleSubmit}>
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
