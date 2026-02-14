import cloudinary from "cloudinary";

export default function connectCloudinary() {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    console.log("✅ Cloudinary Connected");

    // Test connection
    cloudinary.api
      .ping()
      .then((result) => console.log("📸 Cloudinary API is working"))
      .catch((err) =>
        console.error("⚠️ Cloudinary API test failed:", err.message),
      );
  } catch (error) {
    console.error("❌ Cloudinary Connection Failed:", error.message);
  }
}
