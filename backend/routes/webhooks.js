import { verifyWebhook } from "@clerk/express/webhooks";
import express, { Router } from "express";
import { createOrUpdateUser, deleteUser } from "../controllers/user.js";

const router = Router();

router.post(
  "/",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    try {
      const evt = await verifyWebhook(req);

      const { id } = evt.data;
      const eventType = evt.type;

      console.log(
        `Received webhook with ID ${id} and event type of ${eventType}`,
      );
      console.log("Webhook payload:", evt.data);

      if (eventType === "user.created" || eventType === "user.updated") {
        const {
          id,
          first_name,
          last_name,
          image_url,
          email_addresses,
          username,
        } = evt.data;

        try {
          await createOrUpdateUser(
            id,
            first_name,
            last_name,
            image_url,
            email_addresses,
            username,
          );
          return res.status(200).send("User created/updated successfully");
        } catch (error) {
          console.error("Error creating/updating user:", error);
          return res.status(400).send("Error creating/updating user");
        }
      }

      if (eventType === "user.deleted") {
        const { id } = evt.data;
        try {
          await deleteUser(id);
          return res.status(200).send("User deleted successfully");
        } catch (error) {
          console.error("Error deleting user:", error);
          return res.status(400).send("Error deleting user");
        }
      }

      return res.status(200).send("Webhook received");
    } catch (err) {
      console.error("Error verifying webhook:", err);
      return res.status(400).send("Error verifying webhook");
    }
  },
);

export default router;
