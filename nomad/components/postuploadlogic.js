const { Storage } = require("@google-cloud/storage");
const bucketName = "nomad_posts";
const projectid = "cum-sluts";
const keyfilePath = "./cum-sluts-2b7dc8063bc5.json";

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
        return url;
      }
    }
  );
};
const savePostToDB = async (user, description, uniqueFilename, location) => {

  const body = {
    user: user,
    description: description,
    imageNameInGCB: uniqueFilename,
    location: location,
  };
  try {
    const response = await axios.post("http://localhost:4000/post", body, {
      // Add any additional configuration options if needed
      headers: {
        "Content-Type": "application/json", // Specify the content type
      },
    });

    // Handle the response as needed
    console.log("Post saved successfully:", response.data);
  } catch (error) {
    // Handle errors
    console.error(
      "Error saving post:",
      error.response ? error.response.data : error.message
    );
  }
};
//uploadpost
const uploadPost = async (user, imagename, description) => {
  const storage = new Storage({
    keyFilename: keyfilePath,
  });
  const Bucket = storage.bucket(bucketName);

  filePathForImage = "../assets/" + imagename;
  //finish here

  //creating unique name
  const currentTime = new Date();
  const uniqueFilename = `${user}_${currentTime.getTime()}_${imagename}`;
  Bucket.upload(
    filePathForImage,
    {
      destination: uniqueFilename,
    },
    function (err, file) {
      if (err) {
        console.error(`Error uploading image image_to_upload.jpeg: ${err}`);
      } else {
        console.log(`Image image_to_upload.jpeg uploaded to ${bucketName}.`);
        return uniqueFilename
      }
    }
  );
};

exports.uploadPost = uploadPost;
exports.retrievePost = retrievePost;
