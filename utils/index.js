export const checkImageURL = (url) => {
  if (!url) return false;

  const pattern = new RegExp(
    '^https?:\\/\\/.*(\\.(png|jpg|jpeg|bmp|gif|webp)(\\?.*)?$|\\b(images|img|photo|media)\\b|[?&]q=tbn:)',
    'i'
  );

  return pattern.test(url);
};
