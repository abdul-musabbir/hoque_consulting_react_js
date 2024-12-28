import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <div>
        <div className="w-11/12 flex mx-auto relative xl:w-[1200px]">
          <div className="w-full">
            <div className="w-full">
              <div>
                <div className="py-8 relative bg-[#1E2008] -top-32 left-0 right-0 rounded-xl xl:py-14">
                  <div className="flex flex-col items-center text-center px-5 gap-5">
                    <h2 className="font-extrabold text-2xl sm:text-3xl text-center xl:text-5xl w-[500px]">
                      Have a Project
                      <br />
                      in Mind?
                    </h2>

                    <p className="text-white text-opacity-80 sm:w-[300px] md:w-[550px]">
                      Ready to bring your vision to life? Join us today and
                      start requesting high-quality designs right away! Our team
                      is here to turn your ideas into powerful, impactful
                      solutions.
                    </p>

                    <div className="space-x-4 flex flex-col sm:flex-row items-center justify-center">
                      <button className="bg-greens px-6 py-2.5 rounded-xl text-blacks font-medium">
                        Book A Meeting
                      </button>
                      <button className="border border-greens px-6 py-2.5 rounded-xl text-white font-medium">
                        Get a Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div>
                  <div>
                    <div className="flex flex-col md:flex-row w-full items-start justify-between">
                      <div className="space-y-4">
                        <h2 className="text-2xl font-bold xl:text-3xl">
                          Hoque
                          <span className="text-greenss">Consulting&reg;</span>
                        </h2>
                        <p className="text-white text-opacity-80 w-[400px]">
                          Empowering your business with innovative,
                          cost-effective digital solutions.
                        </p>
                      </div>

                      <div className="mt-5">
                        <div className="space-y-3">
                          <div>
                            <div>
                              <p className="space-x-2 flex items-center">
                                <span>
                                  <Mail />
                                </span>
                                <a href="mailto:info@hoqueconsulting.com">
                                  info@hoqueconsulting.com
                                </a>
                              </p>
                            </div>
                          </div>

                          <div>
                            <div>
                              <p className="space-x-2 flex items-center">
                                <span>
                                  <Phone />
                                </span>
                                <a href="tel:123456789">+1 123 456 8909</a>
                              </p>
                            </div>
                          </div>

                          <div>
                            <div className="flex flex-row gap-3 text-xl">
                              <a href="#">
                                <i className="fa-brands fa-facebook text-[#B9FD50]"></i>
                              </a>
                              <a href="#">
                                <i className="fa-brands fa-instagram"></i>
                              </a>
                              <a href="#">
                                <i className="fa-brands fa-linkedin-in"></i>
                              </a>
                              <a href="#">
                                <i className="fa-brands fa-dribbble"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 py-6 block text-center border-t border-[#3d3d3d89]">
                      &copy; Hoque Consulting - All Right Reserved
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
