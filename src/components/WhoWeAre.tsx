import { fadeIn } from "@/utils/variants";
import { motion } from "framer-motion";
import WhoWePhoto from "../assets/icons/whoweare.jpg";
export default function WhoWeAre() {
  return (
    <div className="py-24 bg-white">
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
                >
                  <div>
                    <img className="rounded-xl" src={WhoWePhoto} alt="" />
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeIn("left", 0.3)}
                  initial="hidden"
                  whileInView={"visible"}
                  viewport={{ once: true, amount: 0.2 }}
                  className="lg:py-10 md:flex md:items-center md:justify-center"
                >
                  <div className="space-y-5 lg:space-y-10">
                    <div>
                      <h2 className="text-3xl lg:text-4xl text-blacks font-bold">
                        Who We Are
                      </h2>
                    </div>

                    <div className="text-blacks space-y-5">
                      <p className="text-base lg:text-lg">
                        At <strong>Hoque Consulting,</strong> we bring over 20
                        years of expertise in creating innovative solutions that
                        help businesses succeed. Our team specializes in
                        strategies that deliver measurable results, from web
                        development to SEO, app development, and marketing.
                      </p>

                      <p className="text-base lg:text-lg">
                        Our mission is to transform your ideas into impactful,
                        scalable solutions. We combine creativity, technology,
                        and strategy to help your brand thrive in a competitive
                        digital world.
                      </p>

                      <p className="py-4">
                        <a
                          href="#"
                          className="bg-greens text-blacks px-6 py-3 rounded-xl lg:text-lg"
                        >
                          Get a Quote
                        </a>
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
