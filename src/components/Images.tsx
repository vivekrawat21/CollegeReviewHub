import React from 'react'
import Student from "@/Assets/college.jpg"
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {}

const Images = (props: Props) => {
  return (
    <motion.div className="lg:w-1/2 px-4 hidden lg:block"
    whileHover={{ scale: 0.98 }}
    >
    <Image
    src={Student}
     alt="Student"
     height={500}
     width={500}
     className="rounded-lg shadow-md
     hover:shadow-xl transition duration-150 ease-in-out"
     />
     
   </motion.div>
  )
}

export default Images