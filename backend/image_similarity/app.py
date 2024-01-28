from flask import Flask, request
from numpy import round
from skimage import data, img_as_float
from skimage.metrics import structural_similarity as ssim
from skimage.metrics import mean_squared_error
from PIL import Image
from io import BytesIO
import json
import sys

from skimage.metrics import structural_similarity as ssim
from skimage.metrics import mean_squared_error

app = Flask(__name__)




@app.route("/hello_world", methods = ['GET'])
def helloWorld():
    return "Hello World", 200

@app.route("/getSimilarity" , methods = ['POST'])
def calculateSimilarity():
    args = request.args.to_dict()
    encodeImage = args['image']

    recImage = decode_image(encodeImage);

    
    m = mean_squared_error(recImage, image02) 
    s = ssim(recImage, image02)


    print(returnDict, file=sys.stderr)
    returnJson = json.dumps(returnDict)
    
    return returnJson


def decode_image(image_data):
    img = Image.open(BytesIO(image_data))
    # Now 'img' is a PIL Image object that you can use in your model
    return img


if __name__ == "__main__":
    app.run(host='0.0.0.0', port = 8080)