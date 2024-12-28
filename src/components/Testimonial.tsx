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
                    Customer is Our Top Priority
                  </h2>
                  <p className="text-blacks">
                    We survey all of our clients, the results of which go
                    directly to our CEO.
                  </p>

                  <h2>
                    Ideapeel is the best digital agency i have ever seen! Highly
                    Recommended!
                  </h2>
                </div>
              </div>
            </div>

            <div className="w-full">
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
