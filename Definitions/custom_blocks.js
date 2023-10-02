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




Blockly.Blocks['LEG_HIND_RIGHT'] = {
    init: function() {
        this.setOutput(true, "LegType");
        this.appendDummyInput()
            .appendField("Hind Right Leg");
        this.setColour(400);
        this.setTooltip("Represents the hind right leg.");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['LEG_HIND_LEFT'] = {
    init: function() {
        this.setOutput(true, "LegType");
        this.appendDummyInput()
            .appendField("Hind Left Leg");
        this.setColour(410);
        this.setTooltip("Represents the hind left leg.");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['LEG_NO_LEG'] = {
    init: function() {
        this.setOutput(true, "LegType");
        this.appendDummyInput()
            .appendField("No Leg");
        this.setColour(420);
        this.setTooltip("No specific leg.");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['LEG_FRONT_RIGHT'] = {
    init: function() {
        this.setOutput(true, "LegType");
        this.appendDummyInput()
            .appendField("Front Right Leg");
        this.setColour(430);
        this.setTooltip("Represents the front right leg.");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['LEG_FRONT_LEFT'] = {
    init: function() {
        this.setOutput(true, "LegType");
        this.appendDummyInput()
            .appendField("Front Left Leg");
        this.setColour(440);
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
        this.setColour(450);
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
