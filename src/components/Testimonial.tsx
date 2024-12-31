import TestimonialSlider from "./slider/TestimonialSlider";

export default function Testimonial() {
  return (
    <div className="py-24 bg-white">
      <div>
        <div className="flex mx-auto w-11/12 md:w-[720px] lg:w-[1000px] xl:w-[1200px]">
          <div className="w-full flex flex-col">
            <div>
              <div>
                <div className="text-center space-y-4 flex w-full flex-col items-center">
                  <h3 className="text-blacks uppercase lg:text-lg">
                    testimonial
                  </h3>
                  <h2 className="text-blacks text-2xl lg:text-5xl lg:w-[400px] font-extrabold">
                    Our Customers Speak for Us
                  </h2>
                  <p className="text-blacks md:w-[550px]">
                    We’re committed to delivering top-notch solutions that drive
                    results. Don’t just take our word for it—hear from the
                    businesses we've helped grow.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full mt-10">
              <div className="w-full">
                <div className="w-full">
                  <TestimonialSlider />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
