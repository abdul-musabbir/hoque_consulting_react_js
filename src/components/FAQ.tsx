import axios from "axios";
import { ChangeEvent, useState } from "react";

import { useToast } from "@/hooks/use-toast";
import AccordionDropDown from "./AccordionDropDown";

export default function FAQ() {
  const [loading, setLoading] = useState<boolean>(false);
  const { toast } = useToast();
  interface InputData {
    fullname: string;
    email: string;
    subject: string;
    message: string;
  }

  const [inputData, setInputData] = useState<InputData>({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });

  const faqData = [
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

  const inputHandle = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !inputData.fullname ||
      !inputData.email ||
      !inputData.subject ||
      !inputData.message
    ) {
      toast({
        title: "Please fill in all fields.",
      });
      return;
    }

    setLoading(true);

    axios
      .post(import.meta.env.VITE_HTTP_EMAIL_SEND_URL, inputData)
      .then((resp) => {
        if (resp.status === 200 && resp.statusText === "OK") {
          toast({
            title: "Email sent successfully.",
          });
          setInputData({
            fullname: "",
            email: "",
            subject: "",
            message: "",
          });
        } else {
          alert("Failed to send email.");
        }
      })

      .catch((error) => {
        console.error("Error sending email:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="py-24 bg-white pb-60">
      <div>
        <div className="flex mx-auto w-11/12 xl:max-w-2xl">
          <div className="w-full">
            <div className="text-center">
              <h2 className="uppercase text-blacks font-semibold text-2xl xl:text-4xl">
                faq'<span className="lowercase">s</span>
              </h2>
              <p className="text-black opacity-60 xl:text-lg">
                Providing answers to your questions
              </p>
            </div>

            <div className="mt-8">
              <div className="flex flex-col gap-8">
                <div id="faq-sections" className="flex flex-col gap-4">
                  <AccordionDropDown data={faqData} />
                </div>

                <div className="mt-14">
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                      onChange={inputHandle}
                      value={inputData.fullname}
                      type="text"
                      name="fullname"
                      placeholder="Your Name"
                      className="w-full border rounded-xl p-4 text-blacks outline-none"
                    />
                    <input
                      onChange={inputHandle}
                      value={inputData.email}
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full border rounded-xl p-4 text-blacks outline-none"
                    />
                    <input
                      onChange={inputHandle}
                      value={inputData.subject}
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className="w-full border rounded-xl p-4 text-blacks outline-none"
                    />
                    <textarea
                      onChange={inputHandle}
                      value={inputData.message}
                      name="message"
                      rows={3}
                      placeholder="Ask us what you want to know.."
                      className="w-full border rounded-xl p-4 text-blacks outline-none resize-none"
                    />

                    <button
                      type="submit"
                      className="bg-greens font-bold cursor-pointer text-blacks px-6 py-2 rounded-xl"
                    >
                      {loading ? "Sending..." : "Send"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
