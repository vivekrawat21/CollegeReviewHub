import React from "react";
import Link from "next/link";
import { motion } from "framer-motion"; 
import { FiArrowLeft } from "react-icons/fi";

type Props = {
  link: string;
};
const BackButton = ({ link }: Props) => {
  const iconVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.1 } },
  };

  return (
    <div className="absolute top-0 left-0 mt-4 ml-4">
      <Link href={link}>
        <motion.button
          className="font-light py-2 px-4 rounded flex items-center"
          type="button"
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
        >
          <motion.span variants={iconVariants}>
            <FiArrowLeft className="mr-2" />
          </motion.span>
          Back
        </motion.button>
      </Link>
    </div>
  );
};

export default BackButton;
