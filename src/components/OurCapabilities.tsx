import AppStoreIos from "../assets/icons/app-store-ios.svg";
import CareerGrowth from "../assets/icons/career-growth.svg";
import Flim from "../assets/icons/film.svg";
import Megaphone from "../assets/icons/megaphone.svg";
import PencilPaintbrush from "../assets/icons/pencil-paintbrush.svg";
import SquareCode from "../assets/icons/square-code.svg";
import { cn } from "../lib/utils";

interface Service {
  title?: string;
  des?: string;
  url?: string;
}

export default function OurCapabilities() {
  const ourCapabilitiesArr: string[] = [
    "Web design & UI",
    "Social Media visuals",
    "Infographics",
    "Design system",
    "Email design",
    "Stationery",
    "Icons",
    "Packaging",
    "Signage",
    "Brochures",
    "Logos & Branding",
    "Digital ads",
    "wireframes",
  ];

  const arr: Service[] = [
    {
      title: "Web Development",
      des: "We develop high-performance, custom websites tailored to your business needs. With a focus on responsive design, SEO-friendly structures, and optimized security, our websites deliver exceptional user experiences while driving traffic and conversions.",
      url: SquareCode,
    },
    {
      title: "App Architecture & Development",
      des: "Build scalable, user-friendly mobile apps with our app development services. We specialize in creating custom applications compatible with both iOS and Android, integrating unique features that align with your business goals for long-term growth.",
      url: AppStoreIos,
    },
    {
      title: "Graphic Design",
      des: "Our graphic design services bring your brand’s vision to life with visually stunning and memorable designs. From creating unique brand identities and logos to crafting social media assets, we ensure your visuals resonate with your audience and reinforce your brand image.",
      url: PencilPaintbrush,
    },
    {
      title: "Video Editing",
      des: "Elevate your brand storytelling with professional video editing. Our team delivers high-quality videos enhanced with custom transitions, animations, and effects to capture your audience's attention and communicate your message effectively.",
      url: Flim,
    },
    {
      title: "Digital Marketing",
      des: "Our digital marketing solutions are designed to increase your brand’s reach and engagement. From social media marketing to content campaigns, we create comprehensive strategies that connect with your audience and drive measurable results.",
      url: Megaphone,
    },
    {
      title: "Search Engine Optimization (SEO)",
      des: "Boost your visibility on search engines with our expert SEO services. We enhance your website’s performance with keyword optimization, on-page and off-page SEO, and competitive analysis to drive organic traffic and improve rankings.",
      url: CareerGrowth,
    },
  ];

  return (
    <div className="pb-24 lg:pt-24">
      <div>
        <div className="flex mx-auto w-11/12 flex-col gap-20 md:w-[720px] lg:w-[1000px] xl:w-[1200px]">
          <div className="w-full space-y-8">
            <div className="w-full">
              <div className="w-full flex">
                <div className="text-center mx-auto inline-block">
                  <h3 className="uppercase text-greenss xl:text-xl">
                    Our capabilities
                  </h3>
                  <h2 className="font-semibold text-white text-2xl xl:text-4xl">
                    We can help you with...
                  </h2>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 items-center justify-center">
              {ourCapabilitiesArr.map((capability, index) => (
                <div
                  key={index}
                  className="bg-greens text-blacks text-lg px-5 py-1.5 rounded-xl"
                >
                  {capability}
                </div>
              ))}
            </div>

            <div className="w-full flex items-center justify-center">
              <div>
                <h4 className="text-white text-opacity-80 font-light text-center">
                  Load More
                </h4>
              </div>
            </div>
          </div>

          <div className="space-y-20">
            <div>
              <h3 className="text-greenss text-md uppercase xl:text-lg">
                Benefits
              </h3>
              <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-10">
                <div className="xl:pr-20">
                  <h2 className="text-4xl font-semibold">
                    Empowering Your Brand with Comprehensive Digital Solutions
                  </h2>
                </div>
                <div>
                  <div className="space-y-4">
                    <p className="text-white text-opacity-80 font-light xl:text-xl">
                      At Hoque Consulting, we provide end-to-end digital
                      solutions to help businesses thrive in an ever-changing
                      online landscape. Our expertise spans across web
                      development, app creation, graphic design, video editing,
                      digital marketing, and SEO—ensuring every aspect of your
                      digital presence is optimized for success. With a focus on
                      strategy, creativity, and measurable results, we empower
                      your brand to stand out and grow.
                    </p>
                    <button className="border-greens border text-white font-medium px-6 py-2 rounded-xl cursor-pointer">
                      Get a Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-10 px-5 md:grid-cols-2 md:grid-rows-3 md:gap-0 lg:grid-rows-2 lg:grid-cols-3 lg:gap-0 lg:p-0">
              {arr.map((item, index) => (
                <div key={index} className="w-full h-full flex sectionssss">
                  <div
                    className={cn(
                      "w-full h-full pb-5 border-[#2d2d2d8e] lg:border-b lg:border-l",
                      {
                        "lg:border-l-0": [0, 3].includes(index),
                        "lg:border-b-0 lg:py-10": [3, 4, 5].includes(index),
                        "lg:py-10": [0, 1, 2].includes(index),
                        "md:border-b md:border-l": true,
                        "md:border-l-0 md:pl-0 md:pr-3": [0, 2, 4].includes(
                          index
                        ),
                        "md:border-b-0": [4, 5].includes(index),
                        "md:py-8": [2, 3, 4, 5].includes(index),
                        "lg:pl-10": [1, 2, 4, 5].includes(index),
                        "lg:pr-3": [1, 3, 4].includes(index),
                        "md:pl-10": [1, 3, 5].includes(index),
                        "lg:pl-0": [3].includes(index),
                        "border-b": true,
                      }
                    )}
                  >
                    <div className="flex flex-col gap-4">
                      <div>
                        <img className="w-14" src={item.url} alt={item.title} />
                      </div>
                      <div className="space-y-2">
                        <h3 className="lg:text-xl">{item.title}</h3>
                        <p className="text-[#9593A4] font-normal sm:w-72 lg:text-lg md:w-auto">
                          {item.des}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
