const CLOUD_NAME = "dfzbvujo5";

export function getCloudinaryUrl(publicId, width = 900) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,w_${width}/${publicId}`;
}
