import os

filepath = r'e:\CV\RobotWar05-Premium-App\components\home.html'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Helper function to wrap images in a carousel
def carousel(images):
    return '<div class=\"proj-img-carousel\">\n' + '\n'.join([f'\t\t\t\t\t\t\t\t{img}' for img in images]) + '\n\t\t\t\t\t\t\t</div>'

replacements = {
    '<img src=\"pictures/PickPilot/1_arm.JPEG\" alt=\"PickPilot\"/>': carousel([
        '<img src=\"pictures/PickPilot/1_arm.JPEG\" alt=\"PickPilot\" style=\"object-position: center bottom;\"/>'
    ]),
    '<img src=\"pictures/Vin_University/1.JPEG\" alt=\"AI in Action\"/>': carousel([
        '<img src=\"pictures/Vin_University/1.JPEG\" alt=\"AI in Action\" style=\"object-position: center top;\"/>'
    ]),
    '<img src=\"pictures/BallAndBeam/Beam-real.png\" alt=\"Ball and Beam\"/>': carousel([
        '<img src=\"pictures/BallAndBeam/Beam-real.png\" alt=\"Ball and Beam\"/>',
        '<img src=\"pictures/BallAndBeam/Beam-3D-SolidWorks.png\" alt=\"Ball and Beam 3D\"/>',
        '<img src=\"pictures/BallAndBeam/schematic.png\" alt=\"Ball and Beam Schematic\"/>'
    ]),
    '<img src=\"pictures/HMI_Lvgl/1.JPEG\" alt=\"LVGL HMI\"/>': carousel([
        '<img src=\"pictures/HMI_Lvgl/1.JPEG\" alt=\"LVGL HMI\" style=\"object-position: center top;\"/>',
        '<img src=\"pictures/HMI_Lvgl/2.JPEG\" alt=\"LVGL HMI\" style=\"object-position: center top;\"/>'
    ]),
    '<img src=\"pictures/WebServer_controller_robot/1.JPEG\" alt=\"ESP32 Webserver Robot\"/>': carousel([
        '<img src=\"pictures/WebServer_controller_robot/1.JPEG\" alt=\"Robot 1\"/>',
        '<img src=\"pictures/WebServer_controller_robot/2.JPEG\" alt=\"Robot 2\"/>',
        '<img src=\"pictures/WebServer_controller_robot/3_dashboard.JPEG\" alt=\"Dashboard\"/>',
        '<img src=\"pictures/WebServer_controller_robot/4_schematic.JPEG\" alt=\"Schematic\"/>'
    ]),
    '<img src=\"pictures/ESP32_now/remote_with_car.JPEG\" alt=\"ESP-NOW Car\"/>': carousel([
        '<img src=\"pictures/ESP32_now/remote_with_car.JPEG\" alt=\"Car and Remote\"/>',
        '<img src=\"pictures/ESP32_now/car.JPEG\" alt=\"Car\"/>',
        '<img src=\"pictures/ESP32_now/remote_controller.JPEG\" alt=\"Remote\"/>',
        '<img src=\"pictures/ESP32_now/protocol_esp32_now.png\" alt=\"Protocol\"/>',
        '<img src=\"pictures/ESP32_now/schematic_tay c?m_joystick.png\" alt=\"Joystick Schematic\"/>'
    ]),
    '<img src=\"pictures/Smart Parking/1.JPEG\" alt=\"Smart Parking\"/>': carousel([
        '<img src=\"pictures/Smart Parking/1.JPEG\" alt=\"Smart Parking 1\"/>',
        '<img src=\"pictures/Smart Parking/2.JPEG\" alt=\"Smart Parking 2\"/>',
        '<img src=\"pictures/Smart Parking/3.JPEG\" alt=\"Smart Parking 3\"/>'
    ]),
    '<img src=\"pictures/Pic_controller_nema_stepper_with_a4988/1.JPEG\" alt=\"PIC Stepper Control\"/>': carousel([
        '<img src=\"pictures/Pic_controller_nema_stepper_with_a4988/1.JPEG\" alt=\"PIC Stepper Control\"/>'
    ]),
    '<img src=\"pictures/ESP32_car_sr04/1.JPEG\" alt=\"Obstacle Avoidance Robot\"/>': carousel([
        '<img src=\"pictures/ESP32_car_sr04/1.JPEG\" alt=\"Robot 1\"/>',
        '<img src=\"pictures/ESP32_car_sr04/2.JPEG\" alt=\"Robot 2\"/>'
    ]),
    '<img src=\"pictures/ESP32_node/1.JPEG\" alt=\"Smart Node\"/>': carousel([
        '<img src=\"pictures/ESP32_node/1.JPEG\" alt=\"Node 1\"/>',
        '<img src=\"pictures/ESP32_node/3.JPEG\" alt=\"Node 2\"/>'
    ]),
    '<img src=\"pictures/PIC/PCB/1.JPEG\" alt=\"PIC Boards\"/>': carousel([
        '<img src=\"pictures/PIC/PCB/1.JPEG\" alt=\"PCB 1\"/>',
        '<img src=\"pictures/PIC/PCB/2.JPEG\" alt=\"PCB 2\"/>',
        '<img src=\"pictures/PIC/PCB/3.JPEG\" alt=\"PCB 3\"/>',
        '<img src=\"pictures/PIC/PCB/4.JPEG\" alt=\"PCB 4\"/>'
    ]),
    '<img src=\"pictures/PIC/NRF24l01/1.PNG\" alt=\"nRF24L01\"/>': carousel([
        '<img src=\"pictures/PIC/NRF24l01/1.PNG\" alt=\"nRF24L01\"/>'
    ]),
    '<img src=\"pictures/Leanbot/1.JPEG\" alt=\"Leanbot\"/>': carousel([
        '<img src=\"pictures/Leanbot/1.JPEG\" alt=\"Leanbot\"/>',
        '<img src=\"pictures/Leanbot/map.jpg\" alt=\"Map\"/>'
    ])
}

for target, repl in replacements.items():
    content = content.replace(target, repl)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print('Success')
