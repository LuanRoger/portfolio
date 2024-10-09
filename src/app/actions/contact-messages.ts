"use server";

import { registerMessage } from "@/lib/db/quries/contact-messages";
import { contactFormSchema } from "@/lib/types/forms/contact-form-schema";
import { checkRateLimitAction } from "./ratelimit";

export async function sendMessageAction(formData: FormData) {
  const rateLimitSuccess = await checkRateLimitAction();
  if (!rateLimitSuccess) {
    return null;
  }

  const { data, success } = await contactFormSchema.safeParseAsync({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });
  if (!success) {
    return null;
  }

  try {
    const { id } = await registerMessage(data);
    return id;
  } catch (error) {
    return null;
  }
}
