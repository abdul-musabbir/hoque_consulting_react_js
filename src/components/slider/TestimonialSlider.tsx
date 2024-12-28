// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import Quote from "../../assets/icons/quote.png";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function App() {
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
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {[1, 2, 3, 4, 5, 6, 7].map((item: number) => (
          <SwiperSlide key={item}>
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
                        src="https://hoqueconsulting.com/wp-content/uploads/2024/11/learnfxtrading.png"
                        alt=""
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div>
                    <div>
                      <p className="text-base text-[#4F4F55] pr-10">
                        “I don’t see anyone else in this space providing the
                        level of insight brings to the table. They understand
                        data beyond the vanity metrics often provided – true
                        impactful results.”
                      </p>
                    </div>
                  </div>

                  <div className="pt-5 border-t-2">
                    <div>
                      <div className="flex items-center gap-5">
                        <div>
                          <img
                            className="size-12 object-cover object-center rounded-full"
                            src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-501272-1222271.jpg&fm=jpg"
                            alt=""
                            loading="lazy"
                          />
                        </div>

                        <div className="">
                          <h3 className="text-xl text-[#26262c] font-semibold">
                            Keaton Stancato
                          </h3>
                          <p className="text-base text-[#4f4f55]">
                            Founder/CEO at Fluxi Digital
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
