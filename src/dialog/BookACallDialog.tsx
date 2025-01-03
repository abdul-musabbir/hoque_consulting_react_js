import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import axios from "axios";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";

interface DialogProps {
  data: {
    pricingName: string;
    pricingPrice: string;
  } | null; // Allow null value
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function BookACallDialog({ isOpen, setIsOpen, data }: DialogProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<{
    pricingType: string | undefined;
    price: string | undefined;
    name: string;
    phone: string;
    email: string;
    call_time: string;
  }>({
    pricingType: data?.pricingName,
    price: data?.pricingPrice,
    name: "",
    phone: "",
    email: "",
    call_time: "",
  });
  if (!data) return null; // If there's no data, return null (or you can show a default message)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (
      formData?.name &&
      formData?.phone &&
      formData?.email &&
      formData?.call_time
    ) {
      console.log(formData);
      setLoading(true);
      axios
        .post("/", formData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          if (res.status === 200) {
            console.log(res.data);
            setIsOpen(false);
            toast({
              title: "Success!",
              description: "Your call has been booked successfully.",
            });
          }
        })
        .catch((err) => {
          if (err.response.status === 404) {
            console.log(err.message);
            toast({
              title: "Error!",
              description: err.response.data.message,
              variant: "destructive",
            });
          }
        })
        .finally(() => setLoading(false));
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px] bg-white border-none text-blacks">
        <DialogHeader>
          <DialogTitle className="text-2xl">{data?.pricingName}</DialogTitle>
          <DialogTitle className="text-2xl">{data?.pricingPrice}</DialogTitle>
          <DialogDescription>
            ðŸ“… Book a call with our expert to discuss your project and get a
            quote.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="w-full flex flex-col gap-2">
            <Label>Full Name:</Label>
            <Input
              className=""
              onChange={handleInputChange}
              value={formData?.name}
              name="name"
              placeholder="enter your fullname"
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
              placeholder="enter your phone number"
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
            <Label>Project Brief:</Label>
            <Input
              className=""
              type="datetime-local"
              onChange={handleInputChange}
              value={formData?.call_time}
              name="call_time"
              placeholder="project brief.."
            />
          </div>
        </div>
        <DialogFooter className="">
          <Button
            className="mt-2 sm:mt-0"
            onClick={() => {
              setIsOpen((prev) => !prev);
              setFormData((prev) => ({
                ...prev,
                name: "",
                phone: "",
                email: "",
                address: "",
                projectBrief: "",
              }));
            }}
          >
            Close
          </Button>
          <Button
            onClick={handleSubmit}
            className="bg-greens text-blacks font-normal hover:bg-greens/90"
            type="submit"
          >
            {loading ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              "Save changes"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
