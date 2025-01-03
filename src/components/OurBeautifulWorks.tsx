import { fadeIn } from "@/utils/variants";
import { motion } from "framer-motion";
import BlackFridaySocialMediaBanner from "../assets/portfolio/Black-Friday-Social-media-banner.png";
import BulkLcdParts from "../assets/portfolio/bulklcdparts.png";
import DigitalPlanner from "../assets/portfolio/Digital-Planner.jpg";
import ECommerceWebDesign from "../assets/portfolio/eCommerce-web-design.jpg";
import InvoiceDesign from "../assets/portfolio/Invoice-Design.jpg";
import KIconicLogo from "../assets/portfolio/K-iconic-Logo.jpg";
import MonthlyBudgetTracker from "../assets/portfolio/Monthly-Budget-tracker.jpg";
import RealEstateWebsite from "../assets/portfolio/real-estate-website.jpeg";
const OurBeautifulWorks: React.FC = () => {
  const portfolioImageData = [
    BlackFridaySocialMediaBanner,
    BulkLcdParts,
    DigitalPlanner,
    ECommerceWebDesign,
    InvoiceDesign,
    KIconicLogo,
    MonthlyBudgetTracker,
    RealEstateWebsite,
  ];
  return (
    <motion.div className="py-24 bg-white">
      <div>
        <div className="flex mx-auto w-11/12 md:w-[720px] lg:w-[1000px] xl:w-[1200px]">
          <div className="w-full">
            <div className="w-full">
              <div className="flex flex-col gap-16">
                <motion.div
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView={"visible"}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <h2 className="text-blacks font-bold text-2xl xl:text-4xl">
                      Our Beautiful Works
                    </h2>
                    <p className="text-blacks text-opacity-80 font-normal md:w-[550px]">
                      Explore a selection of our beautiful and impactful
                      projects. We pride ourselves on delivering top-quality
                      results, whether it's a small task or a complex solution.
                      Every project is approached with the same level of
                      professionalism and care to help our clients succeed.
                    </p>
                  </div>
                </motion.div>

                <motion.div>
                  <div>
                    <div>
                      <div>
                        <motion.div className="space-y-3 coulmnss w-full">
                          {portfolioImageData.map((image, index: number) => (
                            <motion.img
                              variants={fadeIn("down", 0.2 + 0.1 * index)}
                              initial="hidden"
                              whileInView={"visible"}
                              viewport={{
                                once: true,
                                amount: 0,
                              }}
                              key={index}
                              className="w-full xl:w-[400px] rounded-2xl"
                              src={image}
                              alt=""
                            />
                          ))}
                        </motion.div>
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

export default OurBeautifulWorks;
