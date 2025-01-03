import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fadeIn } from "@/utils/variants";
import { motion } from "framer-motion";
interface AccordionDropDownProps {
  data: { title: string; des: string }[];
}

export default function AccordionDropDown({ data }: AccordionDropDownProps) {
  return (
    <motion.div>
      <Accordion className="space-y-3" type="single" collapsible>
        {data.map((item, index: number) => (
          <motion.div
            variants={fadeIn("right", 0.2 + 0.1 * index)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{
              once: true,
              amount: 0,
            }}
            key={index}
          >
            <AccordionItem
              className="bg-blacks px-6 overflow-hidden rounded-xl"
              value={"item" + index}
            >
              <AccordionTrigger className="w-full h-20 flex items-center justify-between cursor-pointer">
                {item?.title}
              </AccordionTrigger>
              <AccordionContent className="text-white">
                {item?.des}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </motion.div>
  );
}
