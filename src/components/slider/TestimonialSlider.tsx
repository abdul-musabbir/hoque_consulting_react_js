// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import Quote from "../../assets/icons/quote.png";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

interface TestimonialProps {
  client_name: string;
  client_details: string;
  client_company_logo: string;
  client_comment: string;
}

export default function TestimonialSlider() {
  const testimonials: TestimonialProps[] = [
    {
      client_name: "Jane Smith",
      client_details: "CEO / ABC Tech",
      client_company_logo: "",
      client_comment:
        "Working with Hoque Consulting has been a great experience. They’ve helped our business grow with tailored digital solutions.",
    },
    {
      client_name: "Michael Johnson",
      client_details: "Founder / InnoTech Solutions",
      client_company_logo: "",
      client_comment:
        "The web design and digital marketing services from Hoque Consulting helped us increase sales by 30%. Their team is top-notch!",
    },
    {
      client_name: "Sara Lee",
      client_details: "Digital Strategy Lead / TechNow",
      client_company_logo: "",
      client_comment:
        "Hoque Consulting exceeded our expectations with their web development skills. We highly recommend their services!",
    },
    {
      client_name: "James Clark",
      client_details: "Brand Manager / NextGen Enterprises",
      client_company_logo: "",
      client_comment:
        "Thanks to Hoque Consulting’s digital marketing strategies, our brand visibility and engagement have greatly improved!",
    },
    {
      client_name: "Emily Davis",
      client_details: "Marketing Director / GlobalTech Co.",
      client_company_logo: "",
      client_comment:
        "Hoque Consulting has been a game-changer for our brand. Their creative solutions have helped us stand out in the market.",
    },
    {
      client_name: "David White",
      client_details: "Chief Executive Officer / WebLink Solutions",
      client_company_logo: "",
      client_comment:
        "The team at Hoque Consulting helped us with branding and digital ads, boosting our conversion rates and visibility online.",
    },
    {
      client_name: "Paul Kiwanian",
      client_details: "Founder / Bulklcdparts",
      client_company_logo: "",
      client_comment:
        "Hoque Consulting’s web design services were exceptional, helping us create a user-friendly experience for our customers.",
    },
    {
      client_name: "Ntombi Malatsi",
      client_details: "Founder / LearnFXTrading",
      client_company_logo: "",
      client_comment:
        "Hoque Consulting transformed our digital strategy. The team is creative, professional, and very responsive. Highly recommended!",
    },
  ];

  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        navigation={true}
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {testimonials.map((testimonial, index: number) => (
          <SwiperSlide key={index}>
            <div className="rounded-xl overflow-hidden relative w-full bg-white border select-none">
              <div className="p-8 flex w-full h-full">
                <div className="absolute -top-4 right-28">
                  <img className="w-20" src={Quote} alt="" />
                </div>
                <div className="flex flex-col gap-3 justify-between h-full w-full">
                  <div>
                    <div>
                      <img
                        className="w-28"
                        src={
                          testimonial?.client_company_logo ||
                          "https://hoqueconsulting.com/wp-content/uploads/2024/11/learnfxtrading.png"
                        }
                        alt=""
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div>
                    <div>
                      <p className="text-base text-[#4F4F55] pr-6">
                        {testimonial?.client_comment}
                      </p>
                    </div>
                  </div>

                  <div className="pt-5 border-t-2">
                    <div>
                      <div className="flex items-start">
                        <div className=" text-start">
                          <h3 className="text-xl text-[#26262c] font-semibold">
                            {testimonial?.client_name}
                          </h3>
                          <p className="text-base text-[#4f4f55]">
                            {testimonial?.client_details}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
