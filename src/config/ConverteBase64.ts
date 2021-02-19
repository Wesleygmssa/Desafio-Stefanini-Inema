// transformando base imageBase64
const toBase64 = (files: never) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(files);
  reader.onload = () => resolve(reader.result);
  reader.onerror = (error) => reject(error);
});

export default toBase64;
