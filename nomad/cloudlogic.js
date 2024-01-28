
const { Storage } = require("@google-cloud/storage");
const bucketName = "slutty-whores";
projectid = "cum-sluts";
path = require("path");
keyFilePath = "./cum-sluts-2b7dc8063bc5.json";


const getImageName = async(userName, country, mm, yyyy) =>{
    const storage = new Storage({
        keyFilename: keyFilePath,
      });
  console.log("uploading image");
  const bucket = storage.bucket(bucketName);
  let fileCount = 0;
  const options = {
    prefix: userName + "/" + country + mm + yyyy + "/",
  };
  try {
    const [files] = await bucket.getFiles(options);
    fileCount = files.length;

    console.log("there are " + fileCount + " files ");
    return fileCount;
  } catch (error) {
    console.error("Error counting files", error);
    throw error;
  }
}
const uploadImage = async (userName, country, mm, yyyy, link) => {
    const storage = new Storage({
        keyFilename: keyFilePath,
      });
  console.log("uploading image");
  const bucket = storage.bucket(bucketName);
  const name = await getImageName(userName, country, mm, yyyy)

  const fileName = userName + "/" + country + mm + yyyy + "/" + name;
  //given the link to an image stored locally upload it to the cloud under the name fileCount
  const file = bucket.file(fileName);
  try {
    await file.save(link);
  } catch (error) {
    console.error("Error uploading file", error);
    throw error;
  }
};


