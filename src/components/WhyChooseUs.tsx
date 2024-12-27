import React from "react";
import { NavLink } from "react-router-dom";

const WhyChooseUs: React.FC = () => {
  return (
    <div className="py-24">
      <div>
        <div className="flex mx-auto w-11/12 md:w-[720px] lg:w-[1000px] xl:w-[1200px]">
          <div className="w-full">
            <div className="w-full">
              <div className="flex flex-col gap-16 md:grid md:grid-cols-2 md:gap-5 lg:gap-24">
                <div className="order-1 md:order-2 flex items-center justify-center">
                  <div>
                    <img
                      className="rounded-xl"
                      src="https://hoqueconsulting.com/wp-content/themes/hoque-consulting/assets/images/02.jpg"
                      alt=""
                    />
                  </div>
                </div>

                <div className="order-2 md:order-1">
                  <div className="space-y-5">
                    <div>
                      <h2 className="text-3xl lg:text-4xl text-white font-bold">
                        Why Choose Us?
                      </h2>
                    </div>

                    <div className="text-white space-y-5">
                      <p className="text-xl font-semibold">
                        Your Growth is Our Priority
                      </p>

                      <p className="text-base">
                        Choosing <strong>Hoque Consulting</strong> means
                        partnering with a team that’s dedicated to your success.
                      </p>

                      <div className="space-y-3 py-4">
                        <p className="text-base">
                          <strong>Innovative Solutions:</strong> means
                          partnering with a team that’s dedicated to your
                          success.
                        </p>
                        <p className="text-base">
                          <strong>Client-Centric Approach:</strong> Your goals
                          are our priority, and we tailor solutions to meet
                          them.
                        </p>

                        <p className="text-base">
                          <strong>Proven Expertise:</strong>A track record of
                          driving results for businesses across diverse
                          industries.
                        </p>

                        <p className="text-base">
                          <strong>Transparent Collaboration: </strong> means
                          partnering with a team that’s dedicated to your
                          success.
                        </p>

                        <p className="text-base">
                          Don’t just take our word for it—experience the
                          difference for yourself.
                        </p>
                        <p className="pt-4">
                          <NavLink
                            to={"/"}
                            className="bg-greens text-blacks px-6 py-3 rounded-xl lg:text-lg"
                          >
                            Get more traffic
                          </NavLink>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
