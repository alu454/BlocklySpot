# Check if "spot-sdk" directory exists, if not, clone the repository
if [ ! -d "spot-sdk" ]; then
    git clone https://github.com/boston-dynamics/spot-sdk.git
fi

# Move BlocklySpotCode.py to spot-sdk/python/examples/hello_spot
mv BlocklySpotCode.py spot-sdk/python/examples/hello_spot/

# Change directory to spot-sdk/python/examples/hello_spot
cd spot-sdk/python/examples/hello_spot

# Install dependencies using pip
python3 -m pip install -r requirements.txt

# SENSITIVE: insert credentials
export BOSDYN_CLIENT_USERNAME=user
export BOSDYN_CLIENT_PASSWORD=password

# Additional build or setup commands can go here if needed

echo "Build1 script completed."