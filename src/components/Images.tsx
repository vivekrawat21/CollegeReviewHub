import React from 'react'
import Student from "@/Assets/college.jpg"
import Image from "next/image";

type Props = {}

const Images = (props: Props) => {
  return (
    <div className="lg:w-1/2 px-4 hidden lg:block  ">
    <Image
    src={Student}
     alt="Student"
     height={500}
     width={500}
     className="rounded-lg shadow-md
     hover:shadow-xl transition duration-150 ease-in-out"
     />
     
   </div>
  )
}

export default Images