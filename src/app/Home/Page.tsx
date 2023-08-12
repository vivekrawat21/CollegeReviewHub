"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@/components/LoadingSpinner";

type Props = {};

const Home = (props: Props) => {
  const [token, setToken] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleReview = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      router.push("/Reviews");
      router.refresh();
    }, 1500);
  };

  useEffect(() => {
    const currentToken = localStorage.getItem("token");
    setToken(currentToken);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.2 },
    },
  };

  return (
    <motion.div
      className="flex flex-col items-center lg:flex-row lg:justify-between lg:h-[80vh] lg:mt-16 px-4  md:px-16 lg:px-24 mt-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="lg:w-1/2 lg:flex lg:flex-col lg:items-start lg:justify-center lg:pr-8">
        <h1 className="text-4xl font-bold mb-4 sm:mb-6">
          Welcome to
          <span className="pl-3 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            CollegeReviewHub
          </span>
        </h1>
        <p className="text-lg mb-10 font-normal">
          Share and read honest reviews about colleges from students like you
          Make informed decisions about your educational future
        </p>

        {token ? (
          <>
            {!loading ? (
              <motion.button
                className="bg-slate-950 text-white px-6 py-3 rounded-lg font-bold hover:bg-slate-700 mb-6"
                variants={buttonVariants}
                onClick={handleReview}
              >
                Reviews
              </motion.button>
            ) : (
              <LoadingSpinner />
            )}
          </>
        ) : (
          <Link href="/Signup">
            <motion.button
              className="bg-slate-950 text-white px-6 py-3 rounded-lg font-bold hover:bg-slate-700 mb-6"
              variants={buttonVariants}
            >
              Get Started
            </motion.button>
          </Link>
        )}
      </div>

      <div className="lg:w-1/2">
        <motion.img
          src="https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1400&q=60"
          alt="College"
          className="w-full h-auto rounded-lg"
          variants={imageVariants}
        />
      </div>
    </motion.div>
  );
};

export default Home;
