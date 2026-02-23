import { verifyWebhook } from "@clerk/express/webhooks";
import express from "express";
import { createOrUpdateUser, deleteUser } from "../controllers/user.js";
import { Router } from "express";

const router = Router();

router.post(
  "/",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    try {
      const evt = await verifyWebhook(req);

      // Do something with payload
      // For this guide, log payload to console
      const { id } = evt.data;
      const eventType = evt.type;

      console.log(
        `Received webhook with ID ${id} and event type of ${eventType}`,
      );
      console.log("Webhook payload:", evt.data);

      if (eventType === "user.created" || eventType === "user.updated") {
        // Handle user creation event
        const {
          id,
          first_name,
          last_name,
          image_url,
          email_addresses,
          username,
        } = evt?.data;
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
        // Handle user deletion event
        const { id } = evt?.data;
        try {
          await deleteUser(id);
          return res.status(200).send("User deleted successfully");
        } catch (error) {
          console.error("Error deleting user:", error);
          return res.status(400).send("Error deleting user");
        }
      }

      return res.send("Webhook received");
    } catch (err) {
      console.error("Error verifying webhook:", err);
      return res.status(400).send("Error verifying webhook");
    }
  },
);

export default router;
