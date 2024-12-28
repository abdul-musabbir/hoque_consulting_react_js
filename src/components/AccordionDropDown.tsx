import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AccordionDropDownProps {
  data: { title: string; des: string }[];
}

export default function AccordionDropDown({ data }: AccordionDropDownProps) {
  return (
    <div>
      <Accordion className="space-y-3" type="single" collapsible>
        {data.map((item, index: number) => (
          <AccordionItem
            key={index}
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
        ))}
      </Accordion>
    </div>
  );
}
