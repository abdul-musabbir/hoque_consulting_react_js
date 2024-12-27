import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const [isOpen, setIsOpen] = useState<number | null>(2);

  interface FaqDataType {
    title: string;
    des: string;
  }
  const faqData: FaqDataType[] = [
    {
      title: "What services does Hoque Consulting offer?",
      des: "Hoque Consulting provides a wide range of digital solutions to help your business succeed. We specialize in web development, offering high-performance, customized websites; app architecture and development with scalable solutions for both iOS and Android; graphic design to elevate your brand identity; professional video editing for compelling storytelling; comprehensive digital marketing strategies to increase brand engagement; and search engine optimization (SEO) services to enhance your search engine visibility and drive organic traffic.",
    },
    {
      title: "How can Hoque Consulting help my business grow?",
      des: "At Hoque Consulting, we create tailored strategies to support your business growth. Whether you're looking to improve your online presence, build a new website, develop an app, or boost your digital marketing efforts, we focus on delivering measurable results that will drive long-term success for your brand.",
    },
    {
      title: "What makes Hoque Consulting different from other agencies?",
      des: "With over 20 years of experience, Hoque Consulting takes a client-first approach. We prioritize innovation, transparency, and collaboration, ensuring that every solution we provide is tailored to your specific needs. Our team has proven expertise in diverse industries, with a track record of delivering successful projects that help businesses thrive in the digital world.",
    },
    {
      title: "How do I get started with a project?",
      des: "Getting started with a project is easy. Simply book a free consultation with us. During this session, we’ll learn about your goals and challenges, discuss your vision, and create a tailored strategy for your project. We’ll guide you through the entire process, from the initial idea to the final delivery.",
    },
    {
      title: "What industries do you work with?",
      des: "We work with businesses across a wide variety of industries, including technology, retail, healthcare, real estate, and more. Whether you're a startup or an established brand, we have the expertise to help you succeed.",
    },
  ];

  const openDialog = (index: number) => {
    setIsOpen(index);
  };

  return (
    <div className="py-24 bg-white pb-60">
      <div>
        <div className="flex mx-auto w-11/12 xl:max-w-2xl">
          <div className="w-full">
            <div className="w-full">
              <div className="w-full">
                <div className="w-full">
                  <div className="text-center">
                    <h2 className="uppercase text-blacks font-semibold text-2xl text-center xl:text-4xl">
                      faq'<span className="lowercase">s</span>
                    </h2>
                    <p className="text-black opacity-60 xl:text-lg">
                      Providing answers to your questions
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div>
                  <div className="flex flex-col gap-8">
                    <div id="faq-sections" className="flex flex-col gap-4">
                      {faqData.map((item, index: number) => {
                        return (
                          <div
                            key={index}
                            className="bg-blacks px-6 overflow-hidden rounded-xl"
                          >
                            <button
                              onClick={() => openDialog(index)}
                              className="w-full h-20 flex items-center justify-between cursor-pointer"
                            >
                              <p className="select-none">{item.title}</p>
                              <div className="size-8 bg-greens rounded-full text-blacks flex items-center justify-center text-2xl">
                                {isOpen === index ? (
                                  <ChevronUp />
                                ) : (
                                  <ChevronDown />
                                )}
                              </div>
                            </button>

                            {isOpen === index && (
                              <div className="px-4 pb-4 mt-3">
                                <p>{item.des}</p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    <div>
                      <form action="" className="flex flex-col gap-4">
                        <textarea
                          className="w-full border rounded-xl p-4 text-blacks outline-none"
                          name=""
                          rows={5}
                          id=""
                          placeholder="Ask us what you want to know.."
                        ></textarea>

                        <input
                          type="submit"
                          value="Send"
                          className="bg-greens text-blacks px-6 py-2 rounded-xl"
                        />
                      </form>
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
}
