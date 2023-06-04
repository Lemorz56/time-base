const { randomBytes } = await import("node:crypto");

export const serializeNonPOJOs = (obj: any) => {
  return structuredClone(obj);
};

export const generateUsername = (name: string) => {
  const id = randomBytes(2).toString("hex");
  return `${name.slice(0, 5)}${id}`;
};

export const getImageUrl = (
  collectionId: string,
  recordId: string,
  fileName: string,
  size = "0x0"
) => {
  return `http://127.0.0.1:8090/api/files/${collectionId}/${recordId}/${fileName}?thumb=${size}`;
};
