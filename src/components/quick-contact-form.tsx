"use client";

import {
  contactFormSchema,
  ContactFormValues,
} from "@/lib/types/forms/contact-form-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import LoadingButton from "./loading-button";
import HoverTooltip from "./hover-tooltip";
import { IconQuestionMark } from "@tabler/icons-react";

export default function QuickContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  return (
    <Form {...form}>
      <form className="flex flex-col gap-2">
        <div className="inline-flex gap-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="inline-flex items-center gap-1">
                  Email{" "}
                  <HoverTooltip
                    text="This information it's just to contact you back if I needed
                    to. It won't be shared with anyone."
                  >
                    <IconQuestionMark size={16} />
                  </HoverTooltip>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea placeholder="Message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <LoadingButton className="self-end" text="Send message" />
      </form>
    </Form>
  );
}
