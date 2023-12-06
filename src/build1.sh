# Check if "spot-sdk" directory exists, if not, clone the repository
if [ ! -d "spot-sdk" ]; then
    git clone https://github.com/boston-dynamics/spot-sdk.git
fi

# Check if BlocklySpotCode.py exists in the current directory
if [ -e BlocklySpotCode.py ]; then
    echo "File exists. Moving to spot-sdk/python/examples/hello_spot/"
    mv BlocklySpotCode.py spot-sdk/python/examples/hello_spot/
else
    echo "Error: BlocklySpotCode.py not found in the current directory."
    # Add error handling or exit the script if needed
fi

# Change directory to spot-sdk/python/examples/hello_spot
cd spot-sdk/python/examples/hello_spot

# Install dependencies using pip
python3 -m pip install -r requirements.txt

# Additional build or setup commands can go here if needed

echo "Build1 script completed."