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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import LoadingButton from "./loading-button";
import HoverTooltip from "./hover-tooltip";
import { IconQuestionMark } from "@tabler/icons-react";
import { sendMessageAction } from "@/app/actions/contact-messages";
import { useState, useTransition } from "react";

export default function QuickContactForm() {
  //TODO: migrato to React 19
  const [isPending, doAction] = useTransition();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });
  const [sendSucess, setSendSucess] = useState<boolean | undefined>(undefined);

  async function executeAction(formData: FormData) {
    const result = await sendMessageAction(formData);
    const sucess = result !== null;
    if (sucess) {
      form.reset();
    }

    setSendSucess(sucess);
  }

  async function handleSubmit(formData: FormData) {
    await doAction(async () => executeAction(formData));
  }

  return (
    <Form {...form}>
      {sendSucess !== undefined &&
        (sendSucess ? (
          <p className="text-green-400">Your message was sent!</p>
        ) : (
          <p className="text-red-400">
            There was an error sending your message. Please try again later.
          </p>
        ))}
      <form className="flex flex-col gap-2" action={handleSubmit}>
        <div className="inline-flex gap-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" required {...field} />
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
                  <Input placeholder="Email" required {...field} />
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
                <Textarea placeholder="Message" required {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <LoadingButton
          pending={isPending}
          className="self-end"
          text="Send message"
        />
      </form>
    </Form>
  );
}
