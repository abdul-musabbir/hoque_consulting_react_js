import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import axios from "axios";
import { useState } from "react";

interface DialogProps {
  data: {
    pricingTitle: string;
    pricingSubtitle: string;
    pricingPrice: string;
    pricingDescription: string;
    pricingSubDescription: string;
    pricingFeatures: string[];
  } | null; // Allow null value
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function DialogDemo({ isOpen, setIsOpen, data }: DialogProps) {
  if (!data) return null; // If there's no data, return null (or you can show a default message)
  const [formData, setFormData] = useState<{
    pricingType: string;
    price: string;
    name: string;
    phone: string;
    email: string;
    address: string;
    projectBrief: string;
  }>({
    pricingType: "",
    price: "",
    name: "",
    phone: "",
    email: "",
    address: "",
    projectBrief: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      pricingType: data.pricingTitle || "",
      price: data.pricingPrice || "",
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (
      formData.name &&
      formData.phone &&
      formData.email &&
      formData.address &&
      formData.projectBrief
    ) {
      setFormData((prev) => ({
        ...prev,
        pricingType: data.pricingTitle,
        price: data.pricingPrice,
      }));

      console.log(formData);
      axios
        .post("", formData, {
          headers: { "Content-Type": "application/json" },
        })
        .then((resp) => {
          console.log(resp);
        })
        .catch((err) => console.log(err));
      // Handle form submission here, e.g., send data to the server
      // console.log("Form data submitted:", formData);
      toast({
        title: "Form submitted.",
        description: "Your form has been submitted successfully.",
        variant: "default",
      });
    } else {
      toast({
        title: "Fill all the fields.",
        description: "Please fill in all the required fields.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px] bg-white border-none text-blacks">
        <DialogHeader>
          <DialogTitle className="text-2xl">{data?.pricingTitle}</DialogTitle>
          <DialogTitle className="text-2xl">{data?.pricingPrice}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="w-full flex flex-col gap-2">
            <Label>Your Name:</Label>
            <Input
              className=""
              onChange={handleInputChange}
              value={formData?.name}
              name="name"
              placeholder="type your name here. . ."
            />
          </div>

          <div className="w-full flex flex-col gap-2">
            <Label>Phone Number:</Label>
            <Input
              className=""
              type="number"
              onChange={handleInputChange}
              value={formData?.phone}
              name="phone"
              placeholder="type your phone number here. . ."
            />
          </div>

          <div className="w-full flex flex-col gap-2">
            <Label>Your Email:</Label>
            <Input
              className=""
              type="email"
              onChange={handleInputChange}
              value={formData?.email}
              name="email"
              placeholder="type your email here. . ."
            />
          </div>

          <div className="w-full flex flex-col gap-2">
            <Label>Your Address:</Label>
            <Input
              className=""
              type="text"
              onChange={handleInputChange}
              value={formData?.address}
              name="address"
              placeholder="type your address here. . ."
            />
          </div>

          <div className="w-full flex flex-col gap-2">
            <Label>Project Brief:</Label>
            <Input
              className=""
              type="text"
              onChange={handleInputChange}
              value={formData?.projectBrief}
              name="projectBrief"
              placeholder="project brief.."
            />
          </div>
        </div>
        <DialogFooter className="">
          <Button
            className="mt-2 sm:mt-0"
            onClick={() => {
              setIsOpen((prev) => !prev);
              setFormData({
                pricingType: "",
                price: "",
                name: "",
                phone: "",
                email: "",
                address: "",
                projectBrief: "",
              });
            }}
          >
            Close
          </Button>
          <Button
            onClick={handleSubmit}
            className="bg-greens text-blacks font-normal hover:bg-greens/90"
            type="submit"
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
