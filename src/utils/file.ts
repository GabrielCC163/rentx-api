import fs from 'fs';

export const deleteFile = async (filename: string) => {
  try {
    // check if file exists
    await fs.promises.stat(filename);
  } catch {
    return;
  }

  // remove file
  await fs.promises.unlink(filename);
};
