import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { motion } from "framer-motion";
import MicrosoftPatnerLogo from "../assets/logos/microsoft-partner-logo.svg";
import Star from "../assets/logos/star.svg";
import LogoSlider from "./slider/LogoSlider";
export default function HeroSection() {
  return (
    <motion.div className="min-h-screen flex items-center justify-center relative">
      <div className="w-full h-full flex items-center justify-center">
        <div className="absolute top-24 right-14">
          <img className="w-28 opacity-25" src={Star} alt="" />
        </div>

        <div className="flex mx-auto w-11/12 md:w-[720px] lg:w-[1000px] xl:w-[1200px]">
          <div className="w-full h-full flex items-center justify-center">
            <div className="lg:mt-28">
              <div className="flex flex-col gap-16 lg:gap-20">
                <div className="flex flex-col items-center gap-8 lg:gap-12 relative">
                  <motion.div
                    variants={slideInFromLeft(0.5)}
                    initial="hidden"
                    animate="visible"
                    className="text-center relative flex flex-col items-center justify-center"
                  >
                    <h3 className="text-white font-bold text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] leading-relaxed">
                      Simplify Technology,
                    </h3>
                    <h3 className="text-white font-bold text-4xl sm:text-5xl md:text-7xl lg:text-[6rem]">
                      Accelerate
                      <span className="text-greens italic">Growth</span>
                    </h3>

                    <div className="absolute size-28 lg:size-60 lg:blur-[8rem] bg-greens blur-3xl -z-10"></div>
                  </motion.div>

                  <motion.div
                    variants={slideInFromRight(0.5)}
                    initial="hidden"
                    animate="visible"
                  >
                    <p className="text-white text-opacity-80 text-center font-normal xl:px-56 lg:px-44 xl:text-lg px-80 sm:px-60">
                      Hoque Consulting LLC is a Minnesota based premiere
                      consulting firm that provides cost effective solutions
                      through our hybrid solution. We can get involved in any
                      phase of the project and provide you with very economical
                      top quality service. Please Contact Us for a specific
                      quote or with any questions.
                    </p>
                  </motion.div>

                  <div className="flex gap-4 flex-col relative">
                    <div className="order-2">
                      <img
                        className="w-60 opacity-80"
                        src={MicrosoftPatnerLogo}
                        alt=""
                      />
                    </div>
                    <div className="flex gap-4 order-1">
                      <button className="bg-greens text-blacks px-4 py-3 rounded-xl font-medium">
                        Book A Meeting
                      </button>

                      <button className="bg-blacks border border-[#B9FD50] text-white px-4 py-3 rounded-xl font-medium">
                        Get a Quote
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-6 xl:gap-8">
                  <div className="xl:w-full xl:flex xl:items-center xl:justify-center">
                    <div className="xl:flex items-center justify-center flex">
                      <h3 className="text-white text-center styles text-sm sm:text-base md:text-base lg:text-lg xl:text-xl">
                        TRUSTED BY AMAZING BRANDS
                      </h3>
                    </div>
                  </div>

                  <div>
                    <div>
                      <div className="bg-[#222] bg-opacity-100 w-full h-20 rounded-xl flex items-center px-4 justify-between md:h-28 xl:px-10">
                        <LogoSlider />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
