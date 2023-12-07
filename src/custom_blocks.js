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

// PYTHON

Blockly.Blocks['stand'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Stand Up");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(642);
        this.setTooltip("Have spot stand up.");
    }
};

Blockly.Blocks['sit'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Sit Down");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(420);
        this.setTooltip("Have spot sit down.");
    }
};

Blockly.Blocks['twist'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Twist Torso by")
            .appendField(new Blockly.FieldTextInput('0', Blockly.FieldTextInput.numberValidator), 'ANGLE')
            .appendField("degrees");

        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(220);
        this.setTooltip("Twist Spot's torso in place by the specified angle.");
    }
};


Blockly.Blocks['roll'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Roll Torso by")
            .appendField(new Blockly.FieldTextInput('0', Blockly.FieldTextInput.numberValidator), 'ANGLE')
            .appendField("degrees");

        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(220);
        this.setTooltip("Roll Spot's torso in place by the specified angle.");
    }
};

Blockly.Blocks['tilt'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Tilt Torso by")
            .appendField(new Blockly.FieldTextInput('0', Blockly.FieldTextInput.numberValidator), 'ANGLE')
            .appendField("degrees");

        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("Tilt Spot's torso in place by the specified angle.");
    }
};

// Movement Blocks
Blockly.Blocks['move'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Move Spot ")
            .appendField(new Blockly.FieldTextInput('0', Blockly.FieldTextInput.numberValidator), 'X')
            .appendField("steps in X direction");

        this.appendDummyInput()
            .appendField("and ")
            .appendField(new Blockly.FieldTextInput('0', Blockly.FieldTextInput.numberValidator), 'Y')
            .appendField("steps in Y direction");

        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(90);
        this.setTooltip("Move spot by X and Y amounts.");
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
        this.setNextStatement(false);
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
        this.setColour(310);
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


Blockly.JavaScript['number_input'] = function(block) {
    var number = block.getFieldValue('NUM');
    return [number, Blockly.JavaScript.ORDER_ATOMIC];
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

// PYTHON
Blockly.JavaScript['stand'] = function(block) {
    // Generate Python code for standing up.
var code = String.raw`
        blocking_stand(command_client, timeout_sec=10)
        time.sleep(1)
`;
    return code;
};

Blockly.JavaScript['sit'] = function(block) {
    // Generate Python code for sitting down.
var code = String.raw`
        cmd = RobotCommandBuilder.synchro_sit_command()
        command_client.robot_command(cmd)
        time.sleep(1)
`;
    return code;
};

// movement
Blockly.JavaScript['move'] = function(block) {
    // Generate Python code for moving forward.
    var move_x = block.getFieldValue('X');
    var move_y = block.getFieldValue('Y');
var code = String.raw`
        robot_state = robot_state_client.get_robot_state()
        vision_T_body = get_vision_tform_body(
            robot_state.kinematic_state.transforms_snapshot
        )
        command = robot_command_pb2.RobotCommand()
        spot_x_position += ${move_y}
        spot_y_position -= ${move_x}
        seconds_body = _SECONDS_FULL / 1
        frame_name = VISION_FRAME_NAME
        x = _L_ROBOT_SQUARE * spot_x_position
        y = _L_ROBOT_SQUARE * spot_y_position
        x_ewrt_vision, y_ewrt_vision, z_ewrt_vision = vision_T_body.transform_point(
            x, y, 0
        )
        point = (
            command.synchronized_command.mobility_command.se2_trajectory_request.trajectory.points.add()
        )
        point.pose.position.x = x_ewrt_vision
        point.pose.position.y = y_ewrt_vision
        point.pose.angle = vision_T_body.rot.to_yaw()
        traj_time = (0 + 1) * seconds_body
        duration = seconds_to_duration(traj_time)
        point.time_since_reference.CopyFrom(duration)
        command.synchronized_command.mobility_command.se2_trajectory_request.se2_frame_name = (
            frame_name
        )
        speed_limit = SE2VelocityLimit(
            max_vel=SE2Velocity(linear=Vec2(x=2, y=2), angular=0),
            min_vel=SE2Velocity(linear=Vec2(x=-2, y=-2), angular=0),
        )
        mobility_params = spot_command_pb2.MobilityParams(vel_limit=speed_limit)
        command.synchronized_command.mobility_command.params.CopyFrom(
            RobotCommandBuilder._to_any(mobility_params)
        )
        robot.logger.info("Sending arm and body trajectory commands.")
        command_client.robot_command(command, end_time_secs=time.time() + _SECONDS_FULL)
        time.sleep(2)
`;
    return code;
};

Blockly.JavaScript['twist'] = function(block) {
    // Generate Python code for moving forward.
    var angle = block.getFieldValue('ANGLE');
    var scaledValue = angle / 10.0;
var code = String.raw`
        footprint_R_body = bosdyn.geometry.EulerZXY(yaw=${scaledValue}, roll=0.0, pitch=0.0)
        cmd = RobotCommandBuilder.synchro_stand_command(footprint_R_body=footprint_R_body)
        command_client.robot_command(cmd)
        time.sleep(1)
`;
    return code;
};

Blockly.JavaScript['roll'] = function(block) {
    // Generate Python code for moving forward.
    var angle = block.getFieldValue('ANGLE');
    var scaledValue = angle / 10.0;
var code = String.raw`
        footprint_R_body = bosdyn.geometry.EulerZXY(yaw=0.0, roll=${scaledValue}, pitch=0.0)
        cmd = RobotCommandBuilder.synchro_stand_command(footprint_R_body=footprint_R_body)
        command_client.robot_command(cmd)
        time.sleep(1)
`;
    return code;
};

Blockly.JavaScript['tilt'] = function(block) {
    // Generate Python code for moving forward.
    var angle = block.getFieldValue('ANGLE');
    var scaledValue = angle / 10.0;
var code = String.raw`
        footprint_R_body = bosdyn.geometry.EulerZXY(yaw=0.0, roll=0.0, pitch=${scaledValue})
        cmd = RobotCommandBuilder.synchro_stand_command(footprint_R_body=footprint_R_body)
        command_client.robot_command(cmd)
        time.sleep(1)
`;
    return code;
};

Blockly.JavaScript['power_on'] = function(block) {
    // Generate Python code for powering on.
var code = String.raw`
        robot.power_on(timeout_sec=20)
        assert robot.is_powered_on(), 'Robot power on failed.'
        robot.logger.info('Robot powered on.')
        robot.logger.info('Commanding robot to stand...')
        command_client = robot.ensure_client(RobotCommandClient.default_service_name)
        blocking_stand(command_client, timeout_sec=10)
        time.sleep(1)
`;
    return code;
};

Blockly.JavaScript['power_off'] = function(block) {
    // Generate Python code for powering off.
var code = String.raw`
        robot.power_off(cut_immediately=False, timeout_sec=20)
        assert not robot.is_powered_on(), 'Robot power off failed.'
`;
    return code;
};
  
Blockly.JavaScript['initialize'] = function(block) {
    // The prefix code
var prefixCode = String.raw`
import argparse
import os
import sys
import time
import math
import numpy as np

import bosdyn.client
import bosdyn.client.lease
import bosdyn.client.util
import bosdyn.geometry
from bosdyn.geometry import EulerZXY
from bosdyn.client.robot_command import RobotCommandBuilder
from bosdyn.api import trajectory_pb2, basic_command_pb2, robot_command_pb2
from bosdyn.api.spot import robot_command_pb2 as spot_command_pb2
from bosdyn.api.geometry_pb2 import SE2Velocity, SE2VelocityLimit, Vec2
from bosdyn.client import math_helpers
from bosdyn.client.frame_helpers import (
    GRAV_ALIGNED_BODY_FRAME_NAME,
    ODOM_FRAME_NAME,
    get_a_tform_b,
    VISION_FRAME_NAME,
    get_vision_tform_body,
)
from bosdyn.client.image import ImageClient
from bosdyn.client.robot_command import (
    RobotCommandBuilder,
    RobotCommandClient,
    blocking_stand,
)
from bosdyn.client.robot_state import RobotStateClient
from bosdyn.util import seconds_to_duration

_L_ROBOT_SQUARE = 1
_SECONDS_FULL = 15

def hello_spot(config):
    # world position X for spot
    spot_x_position = 0
    # world position Y for spot
    spot_y_position = 0
    bosdyn.client.util.setup_logging(config.verbose)
    sdk = bosdyn.client.create_standard_sdk("HelloSpotClient")
    robot = sdk.create_robot(config.hostname)
    bosdyn.client.util.authenticate(robot)
    robot.time_sync.wait_for_sync()
    assert not robot.is_estopped(), (
        "Robot is estopped. Please use an external E-Stop client, "
        "such as the estop SDK example, to configure E-Stop."
    )
    robot_state_client = robot.ensure_client(RobotStateClient.default_service_name)
    lease_client = robot.ensure_client(
        bosdyn.client.lease.LeaseClient.default_service_name
    )
    with bosdyn.client.lease.LeaseKeepAlive(
        lease_client, must_acquire=True, return_at_exit=True
    ):

`;

    // Extracting the statements inside the block
    var innerCode = Blockly.JavaScript.statementToCode(block, 'STATEMENTS');

    // The postfix code
var postfixCode = String.raw`

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
        logger.error("Hello, Spot! threw an exception: %r", exc)
        return False


if __name__ == "__main__":
    if not main(sys.argv[1:]):
        sys.exit(1)
`;

    // Combining all the sections together
    var code = prefixCode + innerCode + postfixCode;

    return code;
};

// PYTHON