"use server";

import { registerMessage } from "@/lib/db/quries/contact-messages";
import { contactFormSchema } from "@/lib/types/forms/contact-form-schema";

export async function sendMessageAction(formData: FormData) {
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
