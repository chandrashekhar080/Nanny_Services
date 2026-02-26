import React from "react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { Textarea } from "../../../components/ui/textarea";

const contactInfoItems = [
  {
    icon: "/assets/img/frame-1171275986-2.svg",
    text: "+91-12345-67890",
  },
  {
    icon: "/assets/img/frame-1171275986-1.svg",
    text: "test@mail.com",
  },
  {
    icon: "/assets/img/frame-1171275986.svg",
    text: "Mon–Sat, 10:00 AM – 6:00 PM",
  },
];

export const ContactForm = (): JSX.Element => {
  return (
    <div className="flex flex-col lg:flex-row w-full max-w-[1280px] mx-auto px-4 sm:px-6 mt-[60px] items-start justify-between gap-10 relative">
      {/* LEFT SIDE */}
      <div className="flex flex-col items-start gap-10 lg:gap-[70px] w-full lg:w-1/2">
        {/* Title & Description */}
        <div className="flex flex-col w-full items-start gap-2">
          <h1 className="font-semibold text-black text-2xl md:text-[28px] leading-[normal]">
            Get in Touch With Us
          </h1>
          <p className="font-normal text-description text-sm md:text-base leading-[1.6]">
            Have questions, need assistance, or want to learn more about our
            services? Our team is here to help you every step of the way.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col w-full max-w-[400px] items-start gap-4 sm:gap-5">
          {contactInfoItems.map((item, index) => (
            <Card
              key={index}
              className="flex items-center gap-4 sm:gap-5 p-2.5 w-full bg-white rounded-[14px] shadow-[0px_0px_6px_-2px_#00000014] border border-[#f3f1f1]"
            >
              <CardContent className="flex items-center gap-4 sm:gap-5 p-0 w-full">
                <img
                  src={item.icon}
                  alt="Contact icon"
                  className="w-6 h-6 sm:w-auto sm:h-auto"
                />
                <div className="font-medium text-black text-sm sm:text-base">
                  {item.text}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE - FORM */}
      <Card className="flex flex-col items-start gap-5 p-6 sm:p-8 lg:p-10 bg-white rounded-[22px] shadow-[0px_0px_8px_-2px_#00000080] border-0 w-full lg:w-[600px]">
        <CardContent className="flex flex-col items-start gap-5 p-0 w-full">
          <h2 className="font-bold text-heading text-lg sm:text-xl">
            Contact Us
          </h2>

          <form className="flex flex-col gap-5 w-full">
            {/* Subject */}
            <div className="flex flex-col w-full gap-1.5">
              <Label
                htmlFor="subject"
                className="font-medium text-sub-heading text-base w-full"
              >
                Subject
              </Label>
              <Select>
                <SelectTrigger
                  id="subject"
                  className="w-full bg-white rounded-lg border border-[#cfd4dc] px-4 py-3 shadow-shadow-xs"
                >
                  <SelectValue placeholder="Select subject of your inquiry"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Inquiry</SelectItem>
                  <SelectItem value="support">Support</SelectItem>
                  <SelectItem value="feedback">Feedback</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Full Name */}
            <div className="flex flex-col w-full gap-1.5">
              <Label
                htmlFor="fullname"
                className="font-medium text-sub-heading text-base w-full"
              >
                Full Name
              </Label>
              <Input
                id="fullname"
                type="text"
                placeholder="Enter your full name"
                className="w-full bg-white rounded-lg border border-[#cfd4dc] px-4 py-3 shadow-shadow-xs"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col w-full gap-1.5">
              <Label
                htmlFor="email"
                className="font-medium text-sub-heading text-base w-full"
              >
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-white rounded-lg border border-[#cfd4dc] px-4 py-3 shadow-shadow-xs"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col w-full gap-1.5">
              <Label
                htmlFor="phone"
                className="font-medium text-sub-heading text-base w-full"
              >
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+91-12345-67890"
                className="w-full bg-white rounded-lg border border-[#cfd4dc] px-4 py-3 shadow-shadow-xs"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col w-full gap-1.5">
              <Label
                htmlFor="message"
                className="font-medium text-sub-heading text-base w-full"
              >
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Write your message here…"
                className="w-full h-[120px] bg-white rounded-lg border border-[#cfd4dc] px-4 py-3 shadow-shadow-xs resize-none"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-primary-1 rounded-xl py-3 hover:bg-primary-1/90 transition-colors"
            >
              <span className="font-medium text-white text-base">
                Submit Message
              </span>
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
