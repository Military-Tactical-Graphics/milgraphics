from subprocess import Popen, PIPE, call
import os
import base64

def createNoteAsFile(note):
    with open(f'./entityImages.js', 'a') as file:
        file.write(note)

def main():
    call('rm -rf ./entityImages.js', shell=True)
    createNoteAsFile("const entityImages = {\n")
    file_list = os.listdir("./entityImages")
    for file in file_list:
        with open(f'entityImages/{file}', "rb") as img_file:
            my_string = base64.b64encode(img_file.read())
            createNoteAsFile(f'["{file[:-4]}"]: "data:image/jpg;base64,{my_string.decode("utf-8")}",\n')
    
    createNoteAsFile("};\nexport default entityImages;")

if __name__ == '__main__':
    main()
