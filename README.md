# Boston_Dynamics_Dog_API

[View Our Project](https://kango20.github.io/BlocklySpot)


**Group Members:** 
Drew Bozarth, Alan Lu, Karen Ngo, Thomas Ogawa

**Motivation and Description:**
The purpose of the project is to develop a domain specific language (DSL) using Blockly. The focus is to develop skills such as parsing, interpreation/compilation, and verification central to the course Programming Languages. Our aim is to create a high-level, user-friendly, visual programming language using the Blockly API to control the Boston Dynamic Dogs. Our goal is to eliminate the barriers associated with traditional programming languages, making the Boston Dynamic Dogs more accessible to students, researchers, and staff who may not have programming/technical expertise. This would allow for a more versatile use of the Boston Dynamic Dogs ranging from research experiments to campus applications. We will be focusing on creating and refining our Blockly block set and designing the user interface. Our Blockly blocks would cover movement, navigation, and interaction with the environment, making it easy for non-programmers to utilize the Boston Dynamic Dogs. 

In the context of creating a DSL using Blockly, parsing involves the translation of user interactions with the visual blocks into a formal representation that can be understood by the underlying system. When a user arranges blocks to form a program, these blocks need to be converted into a syntax tree or some other internal representation, which is a fundamental parsing operation. Following parsing, the interpretation or compilation phase takes over. This involves convertin the parsed representation into API calls that the Boston Dynamics Dogs (SPOT) can execute. Since Blockly can generate code in Python, the same language as SPOT's API, the interpreted code will serve as the instruction set for the robotic dogs. At the end of compilation, there should be verification that ensures that the generated commands are safe and within the operational parameters of SPOT. In this section, syntax checking and logic verification should see if the commands will actually do what the user intends, without causing any errors.
