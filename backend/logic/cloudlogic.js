const { Storage } = require("@google-cloud/storage");
const bucketName = "nomad_posts";
const projectid = "cum-sluts";
const keyfilePath = "./cum-sluts-2b7dc8063bc5.json";


//uploadpost
const uploadPost = async (imagename) => {
  const storage = new Storage({
    keyFilename: keyfilePath,
  });
  const Bucket = storage.bucket(bucketName);

  filePathForImage = "../assets/" + imagename;
  //finish here

  //creating unique name
  const currentTime = new Date();
  const uniqueFilename = `${currentTime.getTime()}_${imagename}`;
  Bucket.upload(
    filePathForImage,
    {
      destination: uniqueFilename + "_" +user,
    },
    function (err, file) {
      if (err) {
        console.error(`Error uploading image image_to_upload.jpeg: ${err}`);
      } else {
        console.log(`Image image_to_upload.jpeg uploaded to ${bucketName}.`);
      }
    }
  );
};
const retrievePost = (imageName) => {
  const storage = new Storage({
    projectId: projectid,
    keyFilename: keyfilePath,
  });

  const bucket = storage.bucket(bucketName);
  const file = bucket.file(imageName);
  file.getSignedUrl(
    {
      action: "read",
      expires: Date.now() + 15 * 60 * 1000, // 15 minutes
    },
    (err, url) => {
      if (err) {
        console.error(`Error generating signed URL for ${imageName}: ${err}`);
      } else {
        console.log(`Public URL for ${imageName}: ${url}`);
      }
    }
  );
};
exports.uploadPost = uploadPost;
exports.retrievePost = retrievePost;
uploadPost("test.png");
retrievePost("test");

