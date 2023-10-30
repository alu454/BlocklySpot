<!-- contains a preliminary design of at least some of the blocks of the DSL together with their semantics (that is,  with a (possibly high-level) description of the code that will be executed when the block is called). -->
# Preliminary Design 
This document that contains a preliminary desgin of some of the blocks inside this DSL. This will contain their general description of what this block should do, and may contain pseudo code or code examples that the block should run when used. 

## Setup Block
**Description** This should install all nessecary packages and repositories needed to run the program. This should also set up the environment.

### Download Repositories
This should download the repos. Depending on how the DSL is installed, this may not be needed. This is one of the repos that we'd need.
`git clone https://github.com/boston-dynamics/spot-sdk.git`

### Import Packages
This should make sure that all the correct packages are imported



## Dog Instantiation Block
**Description** This should create a Dog item. This should contain an IP address on where the Dog is located on the network. 

### Ping Spot and Check if Reachable
This should ping Spot. An example would be:

`ping 192.168.80.3`

### Request Spot robot's ID
This should request for Spot's unique serial number, nickname, robot type, software version, and install date. This should be used for confirming the syntax of how the program should compile.
This is how it is defined within the SPOT API definition
`python3 -m bosdyn.client 192.168.80.3 id`



## Movement Blocks
These blocks should move Spot directions
### Move Left
**Description** This should move the dog left, this will be done by calling upon the Spot's API to move the arms/legs at the proper velocity/range.

### Move Right
**Description** This should move the dog right this will be done by calling upon the Spot's API to move the arms/legs at the proper velocity/range.

### Move Up 
**Description** This should move the dog up this will be done by calling upon the Spot's API to move the arms/legs at the proper velocity/range.

### Move Down
**Description** This should move the dog down this will be done by calling upon the Spot's API to move the arms/legs at the proper velocity/range.
