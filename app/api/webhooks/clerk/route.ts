import {
  createUser,
  updateUser,
  deleteUser,
} from "@/sanity/lib/actions/userActions";
import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req);

    // Do something with payload
    // For this guide, log payload to console
    const { id } = evt.data;
    const eventType = evt.type;
    console.log(
      `Received webhook with ID ${id} and event type of ${eventType}`
    );
    console.log("Webhook payload:", evt.data);

    if (evt.type === "user.created") {
      console.log("userId:", evt.data.id);
      try {
        await createUser({
          id: evt.data.id,
          email: evt.data.email_addresses[0].email_address,
          firstName: evt.data.first_name || "",
          lastName: evt.data.last_name || "",
          imageUrl: evt.data.image_url,
          createdAt: evt.data.created_at,
          role: "student",
        });
      } catch (error) {
        console.error(`Error creating user document: ${error}`);
      }
    } else if (evt.type === "user.updated") {
      try {
        await updateUser({
          id: evt.data.id,
          email: evt.data.email_addresses[0].email_address,
          firstName: evt.data.first_name || "",
          lastName: evt.data.last_name || "",
          imageUrl: evt.data.image_url,
          createdAt: evt.data.created_at,
          role: "student",
        });
      } catch (error) {
        console.error(`Error deleting user: ${error}`);
      }
    } else if (evt.type == "user.deleted") {
      try {
        await deleteUser(evt.data.id);
      } catch (error) {
        console.error(`Error deleting user: ${error}`);
      }
    } else {
      console.log("unhandled event type: ", evt);
    }

    return new Response("Webhook received", { status: 200 });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error verifying webhook", { status: 400 });
  }
}
