import { fadeIn } from "@/utils/variants";
import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";
import WhyChoosePhoto from "../assets/icons/whychooseus.jpg";
const WhyChooseUs: React.FC = () => {
  return (
    <motion.div className="py-24">
      <div>
        <div className="flex mx-auto w-11/12 md:w-[720px] lg:w-[1000px] xl:w-[1200px]">
          <div className="w-full">
            <div className="w-full">
              <div className="flex flex-col gap-16 md:grid md:grid-cols-2 md:gap-5 lg:gap-24">
                <motion.div
                  variants={fadeIn("right", 0.3)}
                  initial="hidden"
                  whileInView={"visible"}
                  viewport={{ once: true, amount: 0.2 }}
                  className="order-1 md:order-2 flex items-center justify-center"
                >
                  <div>
                    <img className="rounded-xl" src={WhyChoosePhoto} alt="" />
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeIn("left", 0.3)}
                  initial="hidden"
                  whileInView={"visible"}
                  viewport={{ once: true, amount: 0.2 }}
                  className="order-2 md:order-1"
                >
                  <div className="space-y-5">
                    <div>
                      <h2 className="text-3xl lg:text-4xl text-white font-bold">
                        Why Choose Us?
                      </h2>
                    </div>

                    <div className="text-white space-y-5">
                      <p className="text-xl font-semibold">
                        Empowering Your Success, Together
                      </p>

                      <p className="text-base">
                        Choosing <strong>Hoque Consulting</strong> means gaining
                        a partner committed to driving your growth with
                        innovative strategies and unmatched expertise.
                      </p>

                      <div className="space-y-3 py-4">
                        <p className="text-base">
                          <strong>Innovative Solutions:</strong> Cutting-edge
                          strategies that deliver results.
                        </p>
                        <p className="text-base">
                          <strong>Client-Centric Approach:</strong> Your goals
                          are our focus, driving personalized solutions.
                        </p>

                        <p className="text-base">
                          <strong>Proven Expertise:</strong> A trusted history
                          of success across industries.
                        </p>

                        <p className="text-base">
                          <strong>Transparent Collaboration: </strong> Clear
                          communication to keep you involved every step.
                        </p>

                        <p className="text-base">
                          Experience the difference with a partner dedicated to
                          your success.
                        </p>
                        <p className="pt-4">
                          <NavLink
                            to={"/"}
                            className="bg-greens text-blacks px-6 py-3 rounded-xl lg:text-lg"
                          >
                            Get a Quote
                          </NavLink>
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WhyChooseUs;
