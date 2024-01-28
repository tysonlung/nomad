import functions_framework
from google.cloud import storage

from geopy.geocoders import Nominatim

# Triggered by a change in a storage bucket
@functions_framework.cloud_event
def hello_gcs(cloud_event):
    data = cloud_event.data

    event_id = cloud_event["id"]
    event_type = cloud_event["type"]

    bucket = data["bucket"]
    name = data["name"]
    metageneration = data["metageneration"]
    timeCreated = data["timeCreated"]
    updated = data["updated"]

    timeSplitted = timeCreated.split('-')
    year = timeSplitted[0]
    month = timeSplitted[1]
    splitted = name.split('-')
    #how do we want to name this
    newFilename =""
    geoCoords = []
    userName = ""
    for x in splitted:
        if "user" in x:
            userName = x
        elif "geo" in x:
            geoCoords.append(x.split("_")[1])
            #/.../userName-geo_latitude-geo_longitude
        else: 
            newFilename += x
    if(folder_exists(userName)):
        country = get_country_name(geoCoords[0],geoCoords[1])
        loc_time_fold = country + year + month
        if(folder_exists(loc_time_fold)):
            rename_and_move_file()
        else:
            create_folder(userName + "/" + loc_time_fold)
    else:
        loc_time_fold = country + year + month
        create_folder(userName +"/")
        create_folder(userName + "/" + loc_time_fold)

    print(f"Event ID: {event_id}")
    print(f"Event type: {event_type}")
    print(f"Bucket: {bucket}")
    print(f"File: {name}")
    print(f"Metageneration: {metageneration}")
    print(f"Created: {timeCreated}")
    print(f"Updated: {updated}")


def folder_exists(folder_name):
    # Replace 'your-project-id', 'your-bucket-name', and 'your-folder-name' with your actual values
    project_id = 'cum-sluts'
    bucket_name = 'slutty-whores'
  

    client = storage.Client(project=project_id)
    bucket = client.bucket(bucket_name)

    # List objects with the specified prefix (folder)
    blobs = list(bucket.list_blobs(prefix=folder_name))

    return len(blobs) > 0

def create_folder(folder_name):
    # Replace 'your-project-id' and 'your-bucket-name' with your actual values
    project_id = 'cum-sluts'
    bucket_name = 'slutty-whores'

    client = storage.Client(project=project_id)
    bucket = client.bucket(bucket_name)

    # Create a blob with an object inside the "folder"
    blob = bucket.blob(folder_name + 'dummy.txt')
    blob.upload_from_string('This is a dummy file.')

    print(f'Folder "{folder_name}" created successfully.')

def rename_and_move_file(old_file_name,new_file_name):
    # Replace 'your-project-id', 'your-bucket-name', 'folder/oldFilename.txt', and 'newFolder/newFilename.txt' with your actual values
    project_id = 'cum-sluts'
    bucket_name = 'slutty-whores'
    

    client = storage.Client(project=project_id)
    bucket = client.bucket(bucket_name)

    # Copy the file to the new location
    new_blob = bucket.copy_blob(bucket.blob(old_file_name), bucket, new_file_name)

    # Delete the original file if needed
    bucket.blob(old_file_name).delete()

    print('File renamed and moved successfully.')



def get_country_name(latitude, longitude):
    geolocator = Nominatim(user_agent="your_app_name")  # Replace "your_app_name" with your application name

    location = geolocator.reverse((latitude, longitude), language='en')
    country = location.raw.get('address', {}).get('country', 'Unknown')

    return country