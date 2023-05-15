import React from "react";
import { ArrowRight } from "./icons";
import { motion } from "framer-motion";
import Countdown from "./Countdown";
import Link from "next/link";

const openingTime = 1684166400000;
const currentTime = Date.parse(String(new Date()));
// export  const isOpened = true;
export const isOpened = currentTime > openingTime;
const TopHeader = () => {
  return (
    <div className="flex py-4 flex-col items-center justify-center text-center bg-base dark:bg-primary ">
      <div className="px-5 mr-4 text-sm font-normal text-white font-secondary">
        Registration for the cohort IX
        {isOpened ? (
          <span className="relative md:inline block ">
            {" "}
            currently ongoing
            <span className="ml-1 underline text-white10 block mt-2 md:inline md:mt-0">
              Apply 🎉
              <Link href="/trainings">
                <a className=" inline-flex ">
                  {" "}
                  here
                  <motion.span
                    animate={{ x: -10 }}
                    transition={{ yoyo: Infinity, duration: 1 }}
                    className=" ml-3 "
                  >
                    <ArrowRight />
                  </motion.span>
                </a>
              </Link>
            </span>
          </span>
        ) : (
          <span> Starts In</span>
        )}
      </div>

      {!isOpened && (
        <div>
          <Countdown timestamp={1684166400000} />
        </div>
      )}
    </div>
  );
};

export default TopHeader;
