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

// Move Forward
Blockly.Blocks['move_forward'] = {
    init: function() {
      this.appendValueInput("distance")
          .setCheck("Number")
          .appendField("Move Forward distance");
      this.appendDummyInput()
          .appendField("meters");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Move Spot forward by the specified distance");
      this.setHelpUrl("");
    }
};

// Move Backward
Blockly.Blocks['move_backward'] = {
    init: function() {
      this.appendValueInput("distance")
          .setCheck("Number")
          .appendField("Move Backward distance");
      this.appendDummyInput()
          .appendField("meters");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Move Spot backward by the specified distance");
      this.setHelpUrl("");
    }
};

Blockly.Blocks['stand'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Stand");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command Spot to stand");
      this.setHelpUrl("");
    }
};

Blockly.Blocks['sit'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Sit");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Command Spot to sit");
      this.setHelpUrl("");
    }
};

Blockly.Blocks['rotate_clockwise'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Rotate Clockwise");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(340);
        this.setTooltip("Rotate Spot in place, clockwise.");
    }
};

Blockly.Blocks['rotate_counterclockwise'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Rotate Clockwise");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(350);
        this.setTooltip("Rotate Spot in place, clockwise.");
    }
};


Blockly.Blocks['emergency_stop'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Emergency Stop");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(360);
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
        this.setColour(370);
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
        this.setColour(380);
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
        this.setColour(390);
        this.setTooltip("Conditional execution: if Spot detects an object, it will perform a designated action.");
    }
};

Blockly.Blocks['power_off'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Power Off Spot");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Power off Spot robot");
      this.setHelpUrl("");
    }
};

Blockly.Blocks['number_input'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldNumber(0), "NUMBER");
      this.setOutput(true, "Number");
      this.setColour(230);
      this.setTooltip("A changeable number input");
      this.setHelpUrl("");
    }
};


Blockly.Python['number_input'] = function(block) {
    var number = block.getFieldValue('NUMBER');
    return [number, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python['power_off'] = function(block) {
    var code = 'robot.power_off(cut_immediately=False)\n';
    return code;
};

Blockly.Python['move_forward'] = function(block) {
    // Generate Python code for moving forward.
    var distance = Blockly.Python.valueToCode(block, 'distance', Blockly.Python.ORDER_ATOMIC) || '0';
    var code = 'distance_forward = ' + distance + '\n';
    code += 'velocity_forward = 0.2  # Replace with your desired forward velocity\n';
    code += 'duration_forward = distance_forward / velocity_forward\n\n';
    code += 'cmd_forward = blocking_walk_velocity(velocity=velocity_forward, duration=duration_forward)\n';
    code += 'robot_command_client.robot_command(cmd_forward)\n';
    return code;
};

Blockly.Python['move_backward'] = function(block) {
    var distance = Blockly.Python.valueToCode(block, 'distance', Blockly.Python.ORDER_ATOMIC) || '0';
    var code = 'distance_backward = ' + distance + '\n';
    code += 'velocity_backward = -0.2  # Replace with your desired backward velocity\n';
    code += 'duration_backward = distance_backward / abs(velocity_backward)\n\n';
    code += 'cmd_backward = blocking_walk_velocity(velocity=velocity_backward, duration=duration_backward)\n';
    code += 'robot_command_client.robot_command(cmd_backward)\n';
    return code;
};

Blockly.Python['stand'] = function(block) {
    var code = 'cmd_stand = blocking_stand()\n';
    code += 'robot_command_client.robot_command(cmd_stand)\n';
    return code;
};

Blockly.Python['sit'] = function(block) {
    var code = 'cmd_sit = blocking_sit()\n';
    code += 'robot_command_client.robot_command(cmd_sit)\n';
    return code;
};


// Validate the generated Python code
Blockly.Python.validate = function(code) {
    var lines = code.split('\n');
    for (var i = 1; i < lines.length; i++) {
      var currentBlock = lines[i].trim();
      var previousBlock = lines[i - 1].trim();
  
      // Check if a 'sit' block is preceded by a 'stand' block
      if (currentBlock.startsWith('cmd_sit') && !previousBlock.startsWith('cmd_stand')) {
        return 'Sit block must be preceded by a Stand block.';
      }
    }
    return null;  // Code is valid
};