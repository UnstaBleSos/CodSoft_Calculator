import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');

  return (
    <>
      <div className='bg-white p-6 max-w-sm mx-auto mt-20 shadow-lg rounded-lg'>
        <form>
          <div className='mb-4'>
            <input
              type="text"
              className='w-full p-4 text-right text-2xl border border-gray-300 rounded-lg bg-gray-100 focus:outline-none'
              value={value}
              readOnly
            />
          </div>
          <div className='grid grid-cols-4 gap-4'>
          <input
              type="button"
              value="AC"
              className='p-4 bg-red-500 text-white text-xl rounded-lg hover:bg-red-600 cursor-pointer'
              onClick={() => setValue('')}
            />
             <input
              type="button"
              value="Del"
              className='p-4 bg-yellow-500 text-white text-xl rounded-lg hover:bg-yellow-600 cursor-pointer'
              onClick={() => setValue(value.slice(0, -1))}
            />
             <input
              type="button"
              value="+"
              className='p-4 bg-blue-500 text-white text-xl rounded-lg hover:bg-blue-600 cursor-pointer'
              onClick={(e) => setValue(value + e.target.value)}
            />
             <input
              type="button"
              value="-"
              className='p-4 bg-blue-500 text-white text-xl rounded-lg hover:bg-blue-600 cursor-pointer'
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="7"
              className='p-4 bg-gray-200 text-xl rounded-lg hover:bg-gray-300 cursor-pointer'
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="8"
              className='p-4 bg-gray-200 text-xl rounded-lg hover:bg-gray-300 cursor-pointer'
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="9"
              className='p-4 bg-gray-200 text-xl rounded-lg hover:bg-gray-300 cursor-pointer'
              onClick={(e) => setValue(value + e.target.value)}
            />
             <input
              type="button"
              value="/"
              className='p-4 bg-blue-500 text-white text-xl rounded-lg hover:bg-blue-600 cursor-pointer'
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="4"
              className='p-4 bg-gray-200 text-xl rounded-lg hover:bg-gray-300 cursor-pointer'
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="5"
              className='p-4 bg-gray-200 text-xl rounded-lg hover:bg-gray-300 cursor-pointer'
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="6"
              className='p-4 bg-gray-200 text-xl rounded-lg hover:bg-gray-300 cursor-pointer'
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="*"
              className='p-4 bg-blue-500 text-white text-xl rounded-lg hover:bg-blue-600 cursor-pointer'
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="1"
              className='p-4 bg-gray-200 text-xl rounded-lg hover:bg-gray-300 cursor-pointer'
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="2"
              className='p-4 bg-gray-200 text-xl rounded-lg hover:bg-gray-300 cursor-pointer'
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="3"
              className='p-4 bg-gray-200 text-xl rounded-lg hover:bg-gray-300 cursor-pointer'
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
            type="button"
            value="."
            className='p-4 bg-blue-500 text-white text-xl rounded-lg hover:bg-blue-600 cursor-pointer'
            onClick={(e) => setValue(value + e.target.value)}
          />
            <input
              type="button"
              value="0"
              className='p-4 bg-gray-200 text-xl rounded-lg hover:bg-gray-300 cursor-pointer col-span-2'
              onClick={(e) => setValue(value + e.target.value)}
            />
           
          
            <input
              type="button"
              value="="
              className='p-4 bg-green-500 text-white text-xl rounded-lg hover:bg-green-600 cursor-pointer col-span-2'
              onClick={(e) => setValue(eval(value))}
            />
           
           
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
