# BlocklySpot

[View Our Project!](https://alu454.github.io/BlocklySpot/src/design-blocks.html)

[How To Use Our Project](https://github.com/alu454/BlocklySpot/blob/main/src/README.md)

[About Our Project Video](https://drive.google.com/file/d/1kx3D54Kb6ScGtKKuLNZiiKoPzSICsBUm/view)

### Project Videos

| [About Our Project](https://drive.google.com/file/d/1kx3D54Kb6ScGtKKuLNZiiKoPzSICsBUm/view) | [Technical Introduction/Demo]() |
| ------------------------------------------------------------------------------------------- | ------------------------------- |

## Group Members:

- **Drew Bozarth**
- **Alan Lu**
- **Karen Ngo**
- **Thomas Ogawa**

## Motivation and Description:

The purpose of the project is to develop a domain specific language (DSL) using Blockly. The focus is to develop skills such as parsing, interpreation/compilation, and verification central to the course Programming Languages. Our aim is to create a high-level, user-friendly, visual programming language using the Blockly API to control the Boston Dynamic Dogs. Our goal is to eliminate the barriers associated with traditional programming languages, making the Boston Dynamic Dogs more accessible to students, researchers, and staff who may not have programming/technical expertise. This would allow for a more versatile use of the Boston Dynamic Dogs ranging from research experiments to campus applications. We will be focusing on creating and refining our Blockly block set and designing the user interface. Our Blockly blocks would cover movement, navigation, and interaction with the environment, making it easy for non-programmers to utilize the Boston Dynamic Dogs.

In the context of creating a DSL using Blockly, parsing involves the translation of user interactions with the visual blocks into a formal representation that can be understood by the underlying system. When a user arranges blocks to form a program, these blocks need to be converted into a syntax tree or some other internal representation, which is a fundamental parsing operation. Following parsing, the interpretation or compilation phase takes over. This involves convertin the parsed representation into API calls that the Boston Dynamics Dogs (SPOT) can execute. Since Blockly can generate code in Python, the same language as SPOT's API, the interpreted code will serve as the instruction set for the robotic dogs. At the end of compilation, there should be verification that ensures that the generated commands are safe and within the operational parameters of SPOT. In this section, syntax checking and logic verification should see if the commands will actually do what the user intends, without causing any errors.

## Future Work:

1.  **Expand Blockly Block Set:**

    - Introduce additional Blockly blocks to cover more commands and functionalities that SPOT can perform. This may include more advanced movements, sensor interactions, and arm capabilities.

2.  **Error Handling and Feedback:**

    - Implement a robust error-handling mechanism to provide meaningful feedback to users when they create programs with syntax errors or potential issues. This will enhance the user experience and help in debugging.

3.  **Simulation and Testing Environment:**

    - Develop a simulation or testing environment that allows users to preview and test their programs before deploying them to SPOT. This can help users verify the behavior of their programs without physical access to the robotic dogs.

4.  **Community Contributions and Extensions:**

    - Encourage and facilitate contributions from the community by providing documentation and guidelines for creating custom Blockly blocks or extending the existing functionality. This could lead to a more diverse set of features and blocks.

5.  **Real-Time Monitoring:**

    - Implement a real-time monitoring feature that allows users to observe the execution of their programs on SPOT in real-time. This can aid in debugging and understanding the robot's behavior during program execution.

6.  **Optimization and Performance Improvements:**

    - Continuously optimize the generated code and underlying processes to improve the overall performance and efficiency of the Blockly DSL, ensuring smooth interactions with SPOT.

## Contributions:

- **Drew Bozarth:**
  - Worked on integrating [Spot SDK](https://github.com/boston-dynamics/spot-sdk) with our project and developing the framework code to interact with spot.
  - Created the custom blocks for torso rotation, standing/sitting, and returning Spot to start.
  - Created 3 build shells scripts to streamline the process of sending the code developed on our Blockly site to Spot for command execution.
  - Implemented a set of default blocks for the website to provide an example to the users of how to create a successful Spot program.
- ## **Alan Lu:**
- ## **Karen Ngo:**
- ## **Thomas Ogawa:**
