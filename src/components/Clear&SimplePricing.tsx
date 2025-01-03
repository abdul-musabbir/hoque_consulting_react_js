import { BookACallDialog } from "@/dialog/BookACallDialog";
import { DialogDemo } from "@/dialog/DialogDemo";
import { cn } from "@/lib/utils";
import { fadeIn } from "@/utils/variants";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useState } from "react";
export default function ClearSimplePricing() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [bookACallDialogIsOpen, setBookACallDialogIsOpen] =
    useState<boolean>(false);

  const [selectedPriceData, setSelectedPriceData] =
    useState<PriceDataProps | null>(null);

  const [selectedBookACall, setSelectedBookAcall] =
    useState<PriceDataProps | null>();

  interface PriceDataProps {
    pricingTitle: string;
    pricingSubtitle: string;
    pricingPrice: string;
    pricingDescription: string;
    pricingSubDescription: string;
    pricingFeatures: string[];
  }

  const pricingData: PriceDataProps[] = [
    {
      pricingTitle: "Basic",
      pricingSubtitle: "Most Popular",
      pricingPrice: "$899.00",
      pricingDescription:
        "Perfect for small businesses or professionals to establish a strong online presence.",
      pricingSubDescription: "Pause or cancel anytime",
      pricingFeatures: [
        "4 Pages Responsive Design",
        "1 year Free .com Domain",
        "1 Months Free Hosting",
        "1 Months Free Maintenance",
        "1 Months Free Marketing tool",
        "Speed Optimization",
        "Search Console Setup",
        "SEO-Friendly Content",
        "E-commerce Intergration",
        "Payment Integration",
        "Social Media Wall Integration",
        "Live Chat",
        "Booking Setup",
      ],
    },
    {
      pricingTitle: "Advance",
      pricingSubtitle: "Best value",
      pricingPrice: "$1,299.00",
      pricingDescription:
        "Designed for businesses ready to enhance their online impact with advanced features.",
      pricingSubDescription: "Pause or cancel anytime",
      pricingFeatures: [
        "7 Pages Responsive Design",
        "1 year Free .com Domain",
        "3 Months Free Hosting",
        "3 Months Free Maintenance",
        "1 Month Free Marketing tool",
        "Speed Optimization",
        "Search Console Setup",
        "SEO-Friendly Content",
        "E-commerce Integration",
        "Payment Integration",
        "Social Media Wall Integration",
        "Live Chat",
        "Booking Setup",
      ],
    },
    {
      pricingTitle: "Premium",
      pricingSubtitle: "Weekly",
      pricingPrice: "$1,599.00",
      pricingDescription:
        "For businesses ready to scale, with custom design, e-commerce, and premium support",
      pricingSubDescription: "Pause or cancel anytime",
      pricingFeatures: [
        "10 Pages Responsive Design",
        "1 year Free .com Domain",
        "3 Months Free Hosting",
        "3 Months Free Maintenance",
        "1 Months Free Marketing tool",
        "Advanced Speed Optimization",
        "Search Console Setup",
        "SEO-Friendly Content",
        "E-commerce Intergration",
        "Payment Integration",
        "Social Media Wall Integration",
        "Live Chat",
        "Booking Setup",
      ],
    },
  ];

  const handleBuyNowClick = (singPriceing: PriceDataProps) => {
    setSelectedPriceData(singPriceing);
    setIsOpen((prev) => !prev);
  };

  const handleBookACall = (bookACall: PriceDataProps) => {
    setBookACallDialogIsOpen((prev) => !prev);
    setSelectedBookAcall(bookACall);
  };

  return (
    <motion.div className="py-24 xl:py-40">
      <div>
        <div className="flex mx-auto w-11/12 flex-col gap-20 md:w-[720px] lg:w-[1000px] xl:w-[1200px]">
          <div className="w-full flex flex-col gap-16">
            <motion.div className="w-full">
              <motion.div className="w-full flex">
                <motion.div
                  variants={fadeIn("left", 0.2)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  className="text-center mx-auto inline-block space-y-3 xl:justify-center xl:items-center xl:flex xl:flex-col"
                >
                  <h3 className="uppercase text-greenss xl:text-lg">
                    Clear & Simple Pricing
                  </h3>
                  <h2 className="font-semibold text-white text-2xl xl:text-4xl xl:w-[400px]">
                    Simple pricing to level up your brand.
                  </h2>
                  <p className="text-white text-opacity-80 xl:w-[650px] xl:text-lg">
                    Choose a plan that aligns with your goals. From startups to
                    enterprises, our pricing is tailored to deliver value and
                    help your business thrive. Let’s empower your growth with
                    scalable, impactful solutions designed just for you.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div className="">
              <div>
                <div>
                  <div className="sm:grid md:grid-cols-2 xl:grid-cols-3 xl:gap-5 flex flex-col gap-5">
                    {pricingData.map((singPriceing, index) => (
                      <motion.div
                        variants={fadeIn("right", 0.2 + 0.2 * index)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0 }}
                        key={index}
                      >
                        <div
                          className={cn("bg-[#222222] rounded-2xl ", {
                            " border-[#b8fd50df] border-2": index === 1,
                          })}
                        >
                          <div className="p-8">
                            <div>
                              <div className="space-y-5 border-b border-[#5654548e] pb-6">
                                <div className="flex items-center gap-3">
                                  <div>
                                    <h2 className="font-semibold text-2xl xl:text-3xl">
                                      {singPriceing?.pricingTitle}
                                    </h2>
                                  </div>
                                  <div>
                                    <span className="bg-white text-blacks px-6 py-2 rounded-xl">
                                      {singPriceing?.pricingSubtitle}
                                    </span>
                                  </div>
                                </div>

                                <div>
                                  <p className="text-white text-opacity-80 text-xs xl:text-base">
                                    {singPriceing?.pricingDescription}
                                  </p>
                                </div>
                              </div>

                              <div className="py-6 border-b border-[#5654548e]">
                                <div>
                                  <div>
                                    <h2 className="text-4xl font-bold text-greenss">
                                      {singPriceing?.pricingPrice}
                                    </h2>
                                    <p className="text-white text-opacity-80 text-xs xl:text-base">
                                      {singPriceing?.pricingSubDescription}
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div className="pt-6">
                                <div className="flex flex-col gap-8">
                                  <div className="">
                                    <div>
                                      <ul className="flex flex-col gap-4 xl:gap-3">
                                        {singPriceing?.pricingFeatures?.map(
                                          (singFeature, indexs: number) => (
                                            <li
                                              key={indexs}
                                              className="flex gap-4 text-lg items-center"
                                            >
                                              <span>
                                                {index === 0 ? (
                                                  [0, 1, 2, 3, 5, 6].includes(
                                                    indexs
                                                  ) ? (
                                                    <Check
                                                      className="text-greens w-6"
                                                      strokeWidth={3}
                                                    />
                                                  ) : (
                                                    <X
                                                      className="text-greens w-6"
                                                      strokeWidth={3}
                                                    />
                                                  )
                                                ) : index === 1 ? (
                                                  [
                                                    0, 1, 2, 3, 4, 5, 6, 9, 12,
                                                  ].includes(indexs) ? (
                                                    <Check
                                                      className="text-greens w-6"
                                                      strokeWidth={3}
                                                    />
                                                  ) : (
                                                    <X
                                                      className="text-greens w-6"
                                                      strokeWidth={3}
                                                    />
                                                  )
                                                ) : index === 2 ? (
                                                  <Check
                                                    className="text-greens w-6"
                                                    strokeWidth={3}
                                                  />
                                                ) : (
                                                  ""
                                                )}
                                              </span>
                                              <span className="text-white">
                                                {singFeature}
                                              </span>
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    </div>
                                  </div>

                                  <div>
                                    <div className="flex flex-col gap-4">
                                      <button
                                        onClick={() => {
                                          handleBookACall(singPriceing);
                                        }}
                                        className="border border-[#b8fd50d7] py-3 rounded-xl"
                                      >
                                        Book A Call
                                      </button>
                                      <button
                                        onClick={() =>
                                          handleBuyNowClick(singPriceing)
                                        }
                                        className="bg-greens py-3 rounded-xl text-blacks font-medium"
                                      >
                                        Click to buy
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <DialogDemo
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        data={selectedPriceData}
      />

      <BookACallDialog
        isOpen={bookACallDialogIsOpen}
        setIsOpen={setBookACallDialogIsOpen}
        data={selectedBookACall}
      />
    </motion.div>
  );
}
