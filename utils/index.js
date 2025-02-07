export const checkImageURL = (url) => {
  if (!url) return false;
  else {
    const pattern = new RegExp(
      "^https?:\\/\\/.+\\.(pngjpgjpeg\bmpgifwebp)$",
      "i"
    );
    return pattern.test(url);
  }
};
