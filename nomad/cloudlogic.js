const { Storage } = require("@google-cloud/storage");
const bucketName = "slutty-whores";

//function for adding images
const uploadImage = async (folderName, country, mm, yyyy) => {
  const bucket = storage.bucket(bucketName);
  let fileCount = 0
  const options = {
    prefix: folderName + "/" + country + mm + yyyy + "/",
  };
  try {
    const [files] = await bucket.getFiles(options);
    fileCount = files.length;
    console.log("there are " + fileCount  + " files " )
  } catch (error) {
    console.error("Error counting files", error);
    throw error;
  }
  

};
