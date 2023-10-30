# Preliminary Design 
This document contains a preliminary design of some of the blocks inside this DSL. It will detail their semantics, a general description of their intended functions, and the code that should be executed when each block is called. 

## Setup Block
**Description:** This block will install all necessary packages and repositories needed to run the program. It will also configure the appropriate environment.

### Download Repositories
Download the required repositories. Depending on the DSL's installation process, this may be optional. Below is an example repository that might be necessary:
```
git clone https://github.com/boston-dynamics/spot-sdk.git
```

### Import Packages
Ensure all the appropriate packages are imported for functionality.

## Dog Instantiation Block
**Description:** Initialize a Dog instance. This should contain the IP address of the Dog's location on the network. 

### Ping Spot and Check if Reachable
Check Spot's network connectivity. Example:
```
ping 192.168.80.3
```

### Request Spot robot's ID
Request Spot's distinctive attributes such as its serial number, nickname, robot type, software version, and installation date. This will validate the compilation syntax. As defined within the SPOT API:
```
python3 -m bosdyn.client 192.168.80.3 id
```


## Movement Blocks
Direct Spot's movement in various directions:

### Move Left
**Description:** Instruct Spot to move to the left. This calls the Spot API, directing limbs to move at the necessary speed and range.
```
EXECUTE Spot.move_left()
```

### Move Right
**Description:** Instruct Spot to move to the right by calling the Spot API to adjust its limbs.
```
EECUTE Spot.move_right()
```

### Move Forwards
**Description:** Instruct Spot to move forwards. This calls the Spot API, directing limbs to move at the necessary speed and range.
```
EXECUTE Spot.move_forwards()
```

### Move Backwards
**Description:** Instruct Spot to move backwards by calling the Spot API to adjust its limbs.
```
EXECUTE Spot.move_backwards()
```

### Move Up 
**Description:** Command Spot to rise or elevate itself, using the Spot API to guide the limbs.
```
EXECUTE Spot.move_up()
```

### Move Down
**Description:** Direct Spot to lower itself or crouch by calling the Spot API.
```
EXECUTE Spot.move_down()

```


## Environment Interaction Blocks
Facilitate Spot's interaction with its surroundings:

### Object Detection
**Description:** Detect any objects within a specified distance in front of Spot using its built-in sensors or cameras.
```
IF Spot.detect_object() == TRUE THEN
    EXECUTE encapsulated block(s)
END IF
```


### Pick Up Object
**Description:** Command Spot to pick up an object with its mechanical arm.
```
EXECUTE Spot.pick_up_object()
```

### Drop Object
**Description:** Instruct Spot to release any object it's holding.
```
EXECUTE Spot.drop_object()
```

### Scan Area
**Description:** Make Spot perform a comprehensive 360° scan of its surroundings.
```
EXECUTE Spot.scan_area()
```

## Advanced Movement Blocks
Enhance Spot's movement capabilities:

### Rotate Clockwise/Anticlockwise
**Description:** Rotate Spot in place, either clockwise or anticlockwise.
```
EXECUTE Spot.rotate_clockwise()

EXECUTE Spot.rotate_anticlockwise()
```

### Walk Forward/Backward by X Steps
**Description:** Command Spot to walk forward or backward by a set number of steps.
```
EXECUTE Spot.walk_forward(X)

EXECUTE Spot.walk_backward(X)
```

## Utility Blocks
Miscellaneous functions to aid in Spot's operation:

### Emergency Stop
**Description:** An immediate command to halt all of Spot's ongoing actions.
```
estop_endpoint = bosdyn.client.estop.EstopEndpoint(client=estop_client, name='my_estop', estop_timeout=9.0)
estop_endpoint.force_simple_setup()
```

### Play Sound/Message
**Description:** Direct Spot to play a predetermined sound or message.
```
EXECUTE Spot.play_sound("sound.wav")

EXECUTE Spot.play_message("message.wav")
```

## Loop and Control Blocks
Introduce conditional and repetitive operations:

### Repeat X Times
**Description:** Command Spot to repeat a series of actions a specified number of times.
```
FOR i = 1 TO X DO
    EXECUTE encapsulated block(s)
END FOR
```

### If Object Detected, Then...
**Description:** Conditional execution: if Spot detects an object, it will perform a designated action.
```
IF Spot.detect_object() == TRUE THEN
    EXECUTE encapsulated block(s)
END IF
```

### Wait for X Seconds
**Description:** Command Spot to pause its operations for a set duration.
```SLEEP FOR X seconds```