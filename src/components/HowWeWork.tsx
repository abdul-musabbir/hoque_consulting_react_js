import { slideInFromLeft } from "@/utils/motion";
import { fadeIn } from "@/utils/variants";
import { motion } from "framer-motion";
import Arrow from "../assets/logos/arrow.svg";
const HowWeWork: React.FC = () => {
  return (
    <motion.div className="py-24">
      <div>
        <div className="flex mx-auto w-11/12 md:w-[720px] lg:w-[1000px] xl:w-[1200px]">
          <div>
            <div className="space-y-10 xl:space-y-20">
              <motion.div>
                <div>
                  <motion.div
                    variants={slideInFromLeft(0.3)}
                    initial="hidden"
                    whileInView={"visible"}
                    viewport={{ once: false, amount: 0.2 }}
                  >
                    <h3 className="text-greenss text-md uppercase">
                      how we work
                    </h3>
                  </motion.div>
                  <div>
                    <div className="flex flex-col gap-4 xl:grid grid-cols-2 xl:gap-10">
                      <motion.div
                        variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        whileInView={"visible"}
                        viewport={{ once: false, amount: 0.2 }}
                        className="pr-20"
                      >
                        <h2 className="text-4xl font-semibold">
                          Get a dedicated design team at fraction of the cost.
                        </h2>
                      </motion.div>

                      <motion.div
                        variants={fadeIn("left", 0.3)}
                        initial="hidden"
                        whileInView={"visible"}
                        viewport={{ once: false, amount: 0.2 }}
                        className=""
                      >
                        <div className="space-y-4">
                          <p className="text-white text-opacity-80 font-light xl:text-xl">
                            At Hoque Consulting, we focus on quality and
                            precision at every step. From initial consultation
                            to final delivery, we ensure that every project is
                            handled with the utmost care and professionalism.
                            Our goal is to build long-term partnerships by
                            delivering results that exceed expectations.
                          </p>
                          <button className="bg-greens text-blacks font-medium px-6 py-2 rounded-xl cursor-pointer">
                            Get A Quote
                          </button>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: false, amount: 0.2 }}
              >
                <div className="flex flex-col gap-10 md:grid md:grid-cols-2 xl:grid xl:grid-cols-3 xl:gap-20">
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <div className="bg-greens flex items-center justify-center size-20 rounded-full">
                        <h4 className="text-3xl text-blacks font-semibold">
                          1
                        </h4>
                      </div>

                      <div className="-z-0 -translate-x-2.5">
                        <img className="w-64 h-10" src={Arrow} alt="" />
                      </div>
                    </div>

                    <div className="space-y-4 mt-10">
                      <h3 className="font-medium text-2xl">
                        Discovery & Consultation
                      </h3>
                      <p className="text-white text-opacity-80 xl:text-lg">
                        Every successful project starts with understanding. We
                        take the time to meet with you, learn about your goals,
                        challenges, and vision to create a tailored strategy
                        that aligns with your business objectives.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <div className="bg-greens flex items-center justify-center size-20 rounded-full">
                        <h4 className="text-3xl text-blacks font-semibold">
                          2
                        </h4>
                      </div>

                      <div className="-z-0 -translate-x-2.5">
                        <img className="w-64 h-10" src={Arrow} alt="" />
                      </div>
                    </div>

                    <div className="space-y-4 mt-10">
                      <h3 className="font-medium text-2xl">
                        Strategic Planning
                      </h3>
                      <p className="text-white text-opacity-80 xl:text-lg">
                        Once we’ve understood your needs, our team develops a
                        roadmap for success. We craft a customized plan that
                        prioritizes your goals, incorporates your feedback, and
                        sets a clear direction for the entire project, ensuring
                        smooth progress
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <div className="bg-greens flex items-center justify-center size-20 rounded-full">
                        <h4 className="text-3xl text-blacks font-semibold">
                          3
                        </h4>
                      </div>

                      <div className="-z-0 -translate-x-2.5">
                        <img className="w-64 h-10" src={Arrow} alt="" />
                      </div>
                    </div>

                    <div className="space-y-4 mt-10">
                      <h3 className="font-medium text-2xl">
                        Design & Development
                      </h3>
                      <p className="text-white text-opacity-80 text-lg">
                        Our design and development teams collaborate to bring
                        your vision to life. We build user-friendly, responsive,
                        and optimized solutions, ensuring everything functions
                        seamlessly and meets your expectations.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HowWeWork;
