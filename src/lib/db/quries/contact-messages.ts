import { db } from "../client";
import { contactMessages } from "../schemas/contact-messages";

export type NewMessageInfo = {
  name: string;
  email: string;
  message: string;
};

export async function registerMessage(messageInfo: NewMessageInfo) {
  const { name, email, message } = messageInfo;
  const result = await db
    .insert(contactMessages)
    .values({
      name: name,
      email: email,
      message: message,
    })
    .returning({
      id: contactMessages.id,
    });

  return result[0];
}
