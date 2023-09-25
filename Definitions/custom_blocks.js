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
