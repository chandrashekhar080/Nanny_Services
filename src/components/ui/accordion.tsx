import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusIcon, XIcon } from "lucide-react";
import * as React from "react";
import { cn } from "../../lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b border-[#E5E5E5]", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex w-full">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "group flex flex-1 items-center justify-between py-4 text-base font-medium text-left transition-all duration-200 hover:no-underline focus:outline-none",
        className
      )}
      {...props}
    >
      <span>{children}</span>

      {/* ✅ Icon container — uses group state to switch icons */}
      <div className="ml-3 relative flex items-center justify-center">
        {/* Plus Icon (visible when closed) */}
        <PlusIcon className="h-5 w-5 text-gray-400 transition-opacity duration-200 group-data-[state=open]:opacity-0" />
        {/* X Icon (visible when open) */}
        <XIcon className="h-5 w-5 text-primary-11 absolute opacity-0 transition-opacity duration-200 group-data-[state=open]:opacity-100" />
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden text-sm transition-all duration-200 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className
    )}
    {...props}
  >
    <div className="pb-4 pt-0">{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
