// Setup Block
Blockly.Blocks['setup'] = {
    init: function() {
        this.appendDummyInput().appendField("Setup Environment");
        this.setColour(230);
        this.setTooltip("Install necessary packages and set up the environment.");
        this.setHelpUrl("");
    }
};

// Download Repositories Block
Blockly.Blocks['download_repos'] = {
    init: function() {
        this.appendDummyInput().appendField("Download Repositories");
        this.setColour(240);
        this.setTooltip("Download the required repositories.");
        this.setHelpUrl("");
    }
};

// Import Packages Block
Blockly.Blocks['import_packages'] = {
    init: function() {
        this.appendDummyInput().appendField("Import Packages");
        this.setColour(250);
        this.setTooltip("Ensure the necessary packages are imported.");
        this.setHelpUrl("");
    }
};

// Dog Instantiation Block
Blockly.Blocks['dog_instantiate'] = {
    init: function() {
        this.appendValueInput("IP_ADDRESS")
            .setCheck("String")
            .appendField("Instantiate Dog at IP");
        this.setOutput(true, "Dog");
        this.setColour(260);
        this.setTooltip("Create an instance of the Dog using its IP address.");
        this.setHelpUrl("");
    }
};

// Ping Spot Block
Blockly.Blocks['ping_spot'] = {
    init: function() {
        this.appendValueInput("IP_ADDRESS")
            .setCheck("String")
            .appendField("Ping Spot at IP");
        this.setColour(270);
        this.setTooltip("Ping Spot to check its availability.");
        this.setHelpUrl("");
    }
};

// Request Spot's ID Block
Blockly.Blocks['request_spot_id'] = {
    init: function() {
        this.appendValueInput("IP_ADDRESS")
            .setCheck("String")
            .appendField("Request Spot ID at IP");
        this.setOutput(true, "SpotID");
        this.setColour(280);
        this.setTooltip("Request unique details of Spot.");
        this.setHelpUrl("");
    }
};

// Movement Blocks
// Move Left
Blockly.Blocks['move_left'] = {
    init: function() {
        this.appendDummyInput().appendField("Move Left");
        this.setColour(290);
        this.setTooltip("Make the dog move to the left.");
        this.setHelpUrl("");
    }
};

// Move Right
Blockly.Blocks['move_right'] = {
    init: function() {
        this.appendDummyInput().appendField("Move Right");
        this.setColour(300);
        this.setTooltip("Make the dog move to the right.");
        this.setHelpUrl("");
    }
};

// Move Up
Blockly.Blocks['move_up'] = {
    init: function() {
        this.appendDummyInput().appendField("Move Up");
        this.setColour(310);
        this.setTooltip("Make the dog move upwards.");
        this.setHelpUrl("");
    }
};

// Move Down
Blockly.Blocks['move_down'] = {
    init: function() {
        this.appendDummyInput().appendField("Move Down");
        this.setColour(320);
        this.setTooltip("Make the dog move downwards.");
        this.setHelpUrl("");
    }
};

// PYTHON

Blockly.Blocks['stand'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Stand Up");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(300);
        this.setTooltip("Have spot stand up.");
    }
};

Blockly.Blocks['sit'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Sit Down");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(350);
        this.setTooltip("Have spot sit down.");
    }
};

Blockly.Blocks['twist'] = {
    init: function() {
        this.appendValueInput('ANGLE')
            .setCheck('Number')  // Specify that the input should be a number
            .appendField("Twist Torso by");
        this.appendDummyInput()
            .appendField("degrees");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(210);
        this.setTooltip("Twist Spot's torso in place by the specified angle.");
    }
};

Blockly.Blocks['roll'] = {
    init: function() {
        this.appendValueInput('ANGLE')
            .setCheck('Number')  // Specify that the input should be a number
            .appendField("Roll Torso by");
        this.appendDummyInput()
            .appendField("degrees");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(220);
        this.setTooltip("Roll Spot's torso in place by the specified angle.");
    }
};

Blockly.Blocks['tilt'] = {
    init: function() {
        this.appendValueInput('ANGLE')
            .setCheck('Number')  // Specify that the input should be a number
            .appendField("Tilt Torso by");
        this.appendDummyInput()
            .appendField("degrees");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("Tilt Spot's torso in place by the specified angle.");
    }
};

Blockly.Blocks['power_on'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Power On");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(390);
        this.setTooltip("Turn Spot on.");
    }
};

Blockly.Blocks['power_off'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Power Off");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(800);
        this.setTooltip("Turn Spot off.");
    }
};

Blockly.Blocks['initialize'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Initialize dog");
      this.appendStatementInput("STATEMENTS")
          .setCheck(null);
      this.appendDummyInput()
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };


// END PYTHON


Blockly.Blocks['emergency_stop'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Emergency Stop");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(460);
        this.setTooltip("An immediate command to halt all of Spot's ongoing actions.");
    }
};

Blockly.Blocks['play_sound'] = {
    init: function() {
        this.appendValueInput("SOUND_FILE")
            .setCheck("String")
            .appendField("Play sound");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(470);
        this.setTooltip("Direct Spot to play a predetermined sound.");
    }
};

Blockly.Blocks['repeat_x_times'] = {
    init: function() {
        this.appendValueInput("TIMES")
            .setCheck("Number")
            .appendField("Repeat");
        this.appendDummyInput()
            .appendField("times");
        this.appendStatementInput("DO")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(480);
        this.setTooltip("Command Spot to repeat a series of actions a specified number of times.");
    }
};

Blockly.Blocks['if_object_detected'] = {
    init: function() {
        this.appendStatementInput("DO")
            .setCheck(null)
            .appendField("If object detected");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(490);
        this.setTooltip("Conditional execution: if Spot detects an object, it will perform a designated action.");
    }
};




Blockly.Blocks['LEG_HIND_RIGHT'] = {
    init: function() {
        this.setOutput(true, "LegType");
        this.appendDummyInput()
            .appendField("Hind Right Leg");
        this.setColour(500);
        this.setTooltip("Represents the hind right leg.");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['LEG_HIND_LEFT'] = {
    init: function() {
        this.setOutput(true, "LegType");
        this.appendDummyInput()
            .appendField("Hind Left Leg");
        this.setColour(510);
        this.setTooltip("Represents the hind left leg.");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['LEG_NO_LEG'] = {
    init: function() {
        this.setOutput(true, "LegType");
        this.appendDummyInput()
            .appendField("No Leg");
        this.setColour(520);
        this.setTooltip("No specific leg.");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['LEG_FRONT_RIGHT'] = {
    init: function() {
        this.setOutput(true, "LegType");
        this.appendDummyInput()
            .appendField("Front Right Leg");
        this.setColour(530);
        this.setTooltip("Represents the front right leg.");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['LEG_FRONT_LEFT'] = {
    init: function() {
        this.setOutput(true, "LegType");
        this.appendDummyInput()
            .appendField("Front Left Leg");
        this.setColour(540);
        this.setTooltip("Represents the front left leg.");
        this.setHelpUrl("");
    }
};




Blockly.Blocks['move'] = {
    init: function() {
        this.appendValueInput("Leg")
            .setCheck("LegType")
            .appendField("Move");
        this.appendValueInput("ValueX")
            .setCheck("Number")
            .appendField("by X:");
        this.appendValueInput("ValueY")
            .setCheck("Number")
            .appendField("by Y:");
        this.appendValueInput("StartSlice")
            .setCheck("Number")
            .appendField("Start Slice:");
        this.appendValueInput("RequestedSlices")
            .setCheck("Number")
            .appendField("Requested Slices:");
        this.appendValueInput("SecondFoot")
            .setCheck("LegType")
            .appendField("Second Foot:");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(550);
        this.setTooltip("Move a specific leg by the given X and Y values.");
        this.setHelpUrl("");
    }
};


Blockly.JavaScript['number_input'] = function(block) {
    var number = block.getFieldValue('NUM');
    return [number, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['LEG_HIND_RIGHT'] = function(block) {
    return ['LEG_HIND_RIGHT', Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['LEG_HIND_LEFT'] = function(block) {
    return ['LEG_HIND_LEFT', Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['LEG_NO_LEG'] = function(block) {
    return ['LEG_NO_LEG', Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['LEG_FRONT_RIGHT'] = function(block) {
    return ['LEG_FRONT_RIGHT', Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['LEG_FRONT_LEFT'] = function(block) {
    return ['LEG_FRONT_LEFT', Blockly.JavaScript.ORDER_ATOMIC];
};



Blockly.Blocks['number_input'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldNumber(0), "NUM");
        this.setOutput(true, "Number");
        this.setColour(460);
        this.setTooltip("Input a number.");
        this.setHelpUrl("");
    }
};


Blockly.JavaScript['move'] = function(block) {
    var leg = Blockly.JavaScript.valueToCode(block, 'Leg', Blockly.JavaScript.ORDER_ATOMIC);
    var valueX = Blockly.JavaScript.valueToCode(block, 'ValueX', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var valueY = Blockly.JavaScript.valueToCode(block, 'ValueY', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var startSlice = Blockly.JavaScript.valueToCode(block, 'StartSlice', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var requestedSlices = Blockly.JavaScript.valueToCode(block, 'RequestedSlices', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var secondFoot = Blockly.JavaScript.valueToCode(block, 'SecondFoot', Blockly.JavaScript.ORDER_ATOMIC);
    
    var code = `
moves {
  type: "step"
  start_slice: ${startSlice}
  requested_slices: ${requestedSlices}
  step_params {
    foot: ${leg}
    offset {
      x {
        value: ${valueX}
      }
      y {
        value: ${valueY}
      }
    }
    second_foot: ${secondFoot}
    mirror_x {
    }
    swing_waypoint {
      x {
      }
      y {
      }
      z {
      }
    }
    swing_height {
    }
    liftoff_velocity {
    }
    touchdown_velocity {
    }
  }
}
    `;
    return code;
};

// PYTHON
Blockly.JavaScript['stand'] = function(block) {
    // Generate Python code for standing up.
    var code = 'blocking_stand(command_client, timeout_sec=10)\n';
    code += 'time.sleep(2)\n';
    return code;
};

Blockly.JavaScript['sit'] = function(block) {
    // Generate Python code for sitting down.
    var code = 'cmd = RobotCommandBuilder.synchro_sit_command()\n';
    code += 'command_client.robot_command(cmd)\n';
    code += 'time.sleep(2)\n';
    return code;
};

Blockly.JavaScript['twist'] = function(block) {
    // Generate Python code for moving forward.
    var angle = Blockly.Python.valueToCode(block, 'ANGLE', Blockly.Python.ORDER_ATOMIC) || '0';
    var scaledValue = angle / 10.0;
    var code = "footprint_R_body = bosdyn.geometry.EulerZXY(yaw=" + scaledValue + ", roll=0.0, pitch=0.0)\n";
    code += "cmd = RobotCommandBuilder.synchro_stand_command(footprint_R_body=footprint_R_body)\n";
    code += "command_client.robot_command(cmd)\n";
    code += "time.sleep(2)\n";
    return code;
};

Blockly.JavaScript['roll'] = function(block) {
    // Generate Python code for moving forward.
    var angle = Blockly.JavaScript.valueToCode(block, 'ANGLE', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var scaledValue = angle / 10.0;
    var code = "footprint_R_body = bosdyn.geometry.EulerZXY(yaw=0.0, roll=" + scaledValue + ", pitch=0.0)\n";
    code += 'cmd = RobotCommandBuilder.synchro_stand_command(footprint_R_body=footprint_R_body)\n';
    code += 'command_client.robot_command(cmd)\n';
    code += 'time.sleep(2)\n';
    return code;
};

Blockly.JavaScript['tilt'] = function(block) {
    // Generate Python code for moving forward.
    var angle = Blockly.JavaScript.valueToCode(block, 'ANGLE', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var scaledValue = angle / 10.0;
    var code = "footprint_R_body = bosdyn.geometry.EulerZXY(yaw=0.0, roll=0.0, pitch=" + scaledValue + ")\n";
    code += 'cmd = RobotCommandBuilder.synchro_stand_command(footprint_R_body=footprint_R_body)\n';
    code += 'command_client.robot_command(cmd)\n';
    code += 'time.sleep(2)\n';
    return code;
};

Blockly.JavaScript['power_on'] = function(block) {
    // Generate Python code for powering on.
    var code = "robot.power_on(timeout_sec=20)\n";
    code += "assert robot.is_powered_on(), 'Robot power on failed.'\n";
    code += "robot.logger.info('Robot powered on.')\n";
    code += "robot.logger.info('Commanding robot to stand...')\n";
    code += "command_client = robot.ensure_client(RobotCommandClient.default_service_name)\n";
    code += "blocking_stand(command_client, timeout_sec=10)\n";
    code += "time.sleep(2)\n";
    return code;
};

Blockly.JavaScript['power_off'] = function(block) {
    // Generate Python code for powering off.
    var code = "robot.power_off(cut_immediately=False, timeout_sec=20)\n";
    code += "assert not robot.is_powered_on(), 'Robot power off failed.'\n";
    return code;
};
  
Blockly.JavaScript['initialize'] = function(block) {
    // The prefix code
    var prefixCode = `
import argparse
import os
import sys
import time

import bosdyn.client
import bosdyn.client.lease
import bosdyn.client.util
import bosdyn.geometry
from bosdyn.geometry import EulerZXY
from bosdyn.client.robot_command import RobotCommandBuilder
from bosdyn.api import trajectory_pb2
from bosdyn.api.spot import robot_command_pb2 as spot_command_pb2
from bosdyn.client import math_helpers
from bosdyn.client.frame_helpers import GRAV_ALIGNED_BODY_FRAME_NAME, ODOM_FRAME_NAME, get_a_tform_b
from bosdyn.client.image import ImageClient
from bosdyn.client.robot_command import RobotCommandBuilder, RobotCommandClient, blocking_stand
from bosdyn.client.robot_state import RobotStateClient
from bosdyn.util import seconds_to_duration

def hello_spot(config):
    bosdyn.client.util.setup_logging(config.verbose)
    sdk = bosdyn.client.create_standard_sdk('HelloSpotClient')
    robot = sdk.create_robot(config.hostname)
    bosdyn.client.util.authenticate(robot)
    robot.time_sync.wait_for_sync()
    assert not robot.is_estopped(), 'Robot is estopped. Please use an external E-Stop client, ' \
                                    'such as the estop SDK example, to configure E-Stop.'
    robot_state_client = robot.ensure_client(RobotStateClient.default_service_name)
    lease_client = robot.ensure_client(bosdyn.client.lease.LeaseClient.default_service_name)
    with bosdyn.client.lease.LeaseKeepAlive(lease_client, must_acquire=True, return_at_exit=True):\n
    
    `;

    // Extracting the statements inside the block
    var innerCode = Blockly.JavaScript.statementToCode(block, 'STATEMENTS');

    // The postfix code
    var postfixCode = `\n
def main(argv):
    """Command line interface."""
    parser = argparse.ArgumentParser()
    bosdyn.client.util.add_base_arguments(parser)
    options = parser.parse_args(argv)
    try:
        hello_spot(options)
        return True
    except Exception as exc:
        logger = bosdyn.client.util.get_logger()
        logger.error('Hello, Spot! threw an exception: %r', exc)
        return False

if __name__ == '__main__':
    if not main(sys.argv[1:]):
        sys.exit(1)
`;

    // Combining all the sections together
    var code = prefixCode + innerCode + postfixCode;

    return code;
};

// PYTHON