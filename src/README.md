## Cloning the BlocklySpot Repo to Use or Update the code

- Step 1: git clone [this repo](https://github.com/alu454/BlocklySpot).

- Step 2: Open the [design-blocks.html](design-blocks.html) file with a live server.

- Step 3: Utilize the blockly interface to create a movement sequence for the dog.

- Step 4: Press the "Save Code to File" button to export the code to a python file.

- Step 5: Update the [custom_blocks.js](custom_blocks.js) file with new block functions and code generation functions. Then add your new blocks to the [design-blocks.html](design-blocks.html) file and open the file with a live server to see your changes!

## How to Run with a Spot Robot:

- Step 1:
  Use the [BlocklySpot Web Application](https://alu454.github.io/BlocklySpot/src/design-blocks.html) to create a custom movement sequence for Spot with the blocks available. Make sure you press the "Generate Python" button followed by the "Save Code to File" button to download a Python file with your custom movements. It will be called "BlocklySpotCode.py", do not change the name (if you have made multiple files, ensure the one you want to test has that exact name).

- Step 2:
  Ensure that you are in a folder that contains the downloaded "BlocklySpotCode.py" file from using the BlocklySpot website. If you have already installed the [spot-sdk repo](https://github.com/boston-dynamics/spot-sdk), run [build1.sh](build1.sh) outside of that folder, otherwise run it where you would like to clone the spot-sdk repo ensuring that you are still in a folder with "BlocklySpotCode.py".

  - Note:
    You will need to have access to the username and password credentials for the specific Spot you are trying to work with. We will not provide these credentials pubicly and you would need to get permission from administrators in the Chapman Makerspace if you wish to interact with the Spot on campus.

- Step 2:
  Open a new terminal and run [build2.sh](build2.sh) from outside of the spot-sdk folder to begin the estop which will need to remain on while interacting with Spot.

- Step 4:
  In a new terminal, run [build3.sh](build3.sh) from outside of the spot-sdk folder to run the custom "BlocklySpotCode.py" file that you have generated. This will connect with Spot and run your custom commands!
