#!/bin/bash

hciconfig hci0 up
/usr/bin/node /home/poppy/Poppy_BLE_Server/poppy.js
