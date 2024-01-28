const { Storage } = require("@google-cloud/storage");
const bucketName = "nomad_posts";
projectid = "cum-sluts";
keyfilePath = "./cum-sluts-2b7dc8063bc5.json";

//uploadpost
const uploadPost = async (imagename) => {
  const storage = new Storage({
    keyFilename: keyFilePath,
  });
 
  const bucket = storage.bucket(bucketName);

  filePathForImage = "./images/" + imagename;
  //finish here

  //creating unique name
  const currentTime = new Date();
  const uniqueFilename = `${currentTime.getTime()}_${imagename}`;
  const file = bucket.file(uniqueFilename);
  await file.upload(filePathForImage, {
    destination: uniqueFilename,
  });

  console.log(`Image uploaded to ${bucketName}/${uniqueFilename}`);
  try {
    // Get the public URL of the uploaded file
    const [url] = await file.getSignedUrl({
      action: "read",
      expires: "01-01-2030", // Set an expiration date for the URL
    });

    console.log(`Public URL: ${url}`);

    return url; // Return the public URL for further use if needed
  } catch (error) {
    console.error("Error uploading image", error);
    throw error;
  }
};

// const bucketName = "slutty-whores";
// projectid = "cum-sluts";
// path = require("path");
// keyFilePath = "./cum-sluts-2b7dc8063bc5.json";

// const checkIfFolderExists = async (userName, country, mm, yyyy) => {
//   const storage = new Storage({
//     keyFilename: keyFilePath,
//   });
//   console.log("checking if it exists");
//   const bucket = storage.bucket(bucketName);
//   const options = {
//     prefix: userName + "/"
//   };

// };
// const getImageName = async (userName, country, mm, yyyy) => {
//   const storage = new Storage({
//     keyFilename: keyFilePath,
//   });
//   console.log("uploading image");
//   const bucket = storage.bucket(bucketName);
//   let fileCount = 0;
//   const options = {
//     prefix: userName + "/" + country + mm + yyyy + "/",
//   };
//   try {
//     const [files] = await bucket.getFiles(options);
//     fileCount = files.length;

//     console.log("there are " + fileCount + " files ");
//     return fileCount;
//   } catch (error) {
//     console.error("Error counting files", error);
//     throw error;
//   }
// };
// const uploadImage = async (userName, country, mm, yyyy, link) => {
//   const storage = new Storage({
//     keyFilename: keyFilePath,
//   });
//   console.log("uploading image");
//   const bucket = storage.bucket(bucketName);
//   const name = await getImageName(userName, country, mm, yyyy);

//   const fileName = userName + "/" + country + mm + yyyy + "/" + name;
//   //given the link to an image stored locally upload it to the cloud under the name fileCount
//   const file = bucket.file(fileName);
//   try {
//     await file.save(link);
//   } catch (error) {
//     console.error("Error uploading file", error);
//     throw error;
//   }
// };
