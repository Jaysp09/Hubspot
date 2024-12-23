import cloudinary from "cloudinary";
import {CLOUDINARY_CLOUD_NAME,CLOUDINARY_API_KEY,CLOUDINARY_API_SECRET} from "./config.js"

// configuration
cloudinary.v2.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: "912346752545835",
    api_secret: "zV4_eJR_z7Paue5Q0axWM_kZHa0",
});

export default cloudinary.v2;
