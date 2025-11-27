'use client'
import { useState } from 'react'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen.toString()}
      </button>

      <div className="flex flex-col border border-white-500 p-4 rounded-lg">
        <div className="flex flex-col font-bold border-t border-gray-500 p-4 m-2">
          What is a hackathon?
          
          <div className="font-thin">
            {isOpen && "It is open"}
          </div>
        </div>
        
        <div className="flex flex-col font-bold border-t border-gray-500 p-4 m-2">
          Is there a theme?
          
          <div className="font-thin">
            {isOpen && "It is open"}
          </div>
        </div>

        <div className="flex flex-col font-bold border-t border-gray-500 p-4 m-2">
          How many people can be in a group?
          
          <div className="font-thin">
            {isOpen && "It is open"}
          </div>
        </div>
      </div>
    </>
  );
}