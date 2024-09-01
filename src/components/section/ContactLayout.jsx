import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowUpRight } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
const ContactLayout = () => {
  return (
    <div className="flex h-full w-full items-end justify-center border border-orange-500">
      <form
        action=""
        className="redd mb-5 flex flex-col items-center justify-between px-5 desktop:h-[45rem] desktop:w-[50rem]"
      >
        <div className="gnn flex items-start justify-between  h-96 w-full  flex-col">
          <Label htmlFor="name" className="pl-2 text-2xl">
            Name
          </Label>
          <Input id="name"></Input>
          <Label htmlFor="email" className="pl-2 text-2xl">
            Email
          </Label>
          <Input id="email"></Input>
          <Label htmlFor="company" className="pl-2 text-2xl">
            Company
          </Label>
          <Input id="company"></Input>
          <div className="redd my-2 w-full h-14 flex items-center justify-center">
            <Select>
              <SelectTrigger className="w-full h-full text-2xl text-yourMaker">
                <SelectValue placeholder="Select a service you want" />
              </SelectTrigger>
              <SelectContent className="bg-black  text-white">
                {/* <SelectGroup> */}
                {/* <SelectLabel>Fruits</SelectLabel> */}
                <SelectItem value="digital">Digital Marketing</SelectItem>
                <SelectItem value="product">Product Photography</SelectItem>
                <SelectItem value="graphics">Graphic Design</SelectItem>
                <SelectItem value="web">
                  Website Design & Development
                </SelectItem>
                {/* <SelectItem value="pineapple">Pineapple</SelectItem> */}
                {/* </SelectGroup> */}
                
              </SelectContent>
            </Select>
          </div>
        </div>
        <Textarea placeholder="Type your message here." />
        <Button
          type="submit"
          size={"lg"}
          variant={"secondary"}
          className="w-full text-2xl"
        >
          Send <ArrowUpRight />
        </Button>
      </form>
    </div>
  );
};

export default ContactLayout;
