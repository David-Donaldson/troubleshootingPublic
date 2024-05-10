
export const troubleshootingTree = {
  tv: {
    "No Audio": [
        "Check HDMI cord and replace it if damaged.",
        "Check to make sure power cord is plugged into a working outlet.",
        "Change your power adapter (if available).",
        "Check to ensure the cable connections (HDMI, RCA cable) between the set-top box and TV are properly connected.",
        "Check coax cable at the rear of the device and ensure it is securely attached.",
        "Check volume on the TV device itself and using the remote to make sure it is not turned down or on mute.",
        "Ensure the batteries are secured properly and working.",
        "Perform a remote test! Point your cellular phone towards the top of the remote >Press any of the buttons to see if there is a light showing on the phone (this will check the infrared sensor).",
        "Check if the issue persists on other channels, inputs, secondary remotes, or on a secondary set-top box (if available) to verify if it is a general issue.",
        "Complete a power cycle (power off then turn on)."
    ],
    'Set-Top Box Not Turning on': [
        "Check to make sure power cord is plugged into a working outlet.",
        "Change your power adapter (if available).",
        "Check to ensure the sensor is not blocked and that you are standing directly in front of the set-top box when using the remote.",
        "If the issue persists try using secondary remotes, or on a secondary set-top box (if available) to verify if it is a general issue."
    ],
    'Grainy, Pixelated': [
        "Check HDMI cord and replace it if damaged.",
        "Check to ensure the cable connections (HDMI, RCA cable) between the set-top box and TV are properly connected.",
        "Check coax cable at the rear of the device and ensure it is securely attached.",
        "Check if the issue persists on other channels to verify if it is a general issue."
    ],
    'Blank Screen': [
        "Check HDMI cord and replace it if damaged.",
        "Check to make sure power cord is plugged into a working outlet.",
        "Change your power adapter (if available).",
        "Check to ensure the cable connections (HDMI, RCA cable) between the set-top box and TV are properly connected.",
        "Check coax cable at the rear of the device and ensure it is securely attached.",
        "Complete a channel scan. Press Menu > scroll to across to configuration > scroll down to system settings > select channel installation > select manual channel installation > enter 555 start frequency / and 765 end frequency > Press start > once completed Press Save.",
        "Check if the issue persists on other channels, inputs, secondary remotes, or on a secondary set-top box (if available) to verify if it is a general issue.",
        "Complete a power cycle (power off then turn on)."
    ],
    'No Signal or Low Signal': [
        "Check HDMI cord and replace it if damaged.",
        "Check to make sure power cord is plugged into a working outlet.",
        "Change your power adapter (if available).",
        "Check to ensure the cable connections (HDMI, RCA cable) between the set-top box and TV are properly connected.",
        "Check coax cable at the rear of the device and ensure it is securely attached.",
        "Check volume on the TV device itself and using the remote to make sure it is not turned down or on mute.",
        "Ensure the batteries are secured properly and working.",
        "Perform a remote test! Point your cellular phone towards the top of the remote >Press any of the buttons to see if there is a light showing on the phone (this will check the infrared sensor).",
        "Check if the issue persists on other channels, inputs, secondary remotes, or on a secondary set-top box (if available) to verify if it is a general issue.",
        "Complete a power cycle (power off then turn on)."
    ],
    'Missing Channel(s)': [
        "Check to see if the channel is included in your subscription package.",
        "If channel related, complete a channel scan. Press Menu > scroll to across to configuration > scroll down to system settings > select channel installation > select manual channel installation > enter 555 start frequency / and 765 end frequency > Press start > once completed Press Save.",
        "If the issue persists try using secondary remotes, or on a secondary set-top box (if available) to verify if it is a general issue.",
        "Complete a power cycle (power off then turn on)."
    ],
    'Channels not Loading or Populating': [
        "Press the menu button on the remote ---> Go to Favorites option. There are three options available HDTV, TV and Radio ---> scroll and select TV access the guide there. All channels including SD and HD channels should now be populated.",
        "If the issue persists, complete a power cycle (power off then turn on)."
    ],
    'Channels Guide Grayed Out': [
        "Check if set top has an IP address via the Network Settings.",
        "Ensure that an Ethernet cable is not plugged in from modem to set top box as well.",
        "If no IP Address is present, complete a reset of the modem.",
        "Once the modem comes online completed a menu restart from the set top box. This is done by going to Menu>Configuration>System Settings>restart device. Once the set top box reboots an IP address and channel guide should be now be visible."
    ],
    'No Access ‘0’': [
        "Check HDMI cord and replace it if damaged.",
        "Check to ensure the cable connections (HDMI, RCA cable) between the set-top box and TV are properly connected.",
        "Check if set top has an IP address via the Network Settings.",
        "Ensure that an Ethernet cable is not plugged in from modem to set top box as well.",
        "If no IP Address is present, complete a reset of the modem.",
        "Once the modem comes online completed a menu restart from the set top box. This is done by going to Menu>Configuration>System Settings>restart device. Once the set top box reboots an IP address and channel guide should be now be visible."
    ]

  },
  phone: {
    'No Dial Tone' : [
        "Check that any cords are properly connected on both ends to the wall and phone",
        "If using a cordless phone, check if it is charged",
        "If the issue persists, try using a shorter cord between the wall jack and phone",
        "Reset the modem by pressing and holding down the reset button on the device for 20-30 seconds before releasing",
        "Try connecting to the secondary telephone port to the rear of the modem"
    ],
    'Cannot Hear': [
        "Check that any cords are properly connected on both ends to the wall and phone",
        "If using a cordless phone, check if it is charged",
        "Restart the phone by unplugging the base from the power outlet and plug it back in after 30 seconds",
        "Try placing a test call from the device",
        "If the issue persists, try using a shorter cord between the wall jack and phone"
    ],
    'Static or Irregular Noises on the Line': [
        "Check that any cords are properly connected on both ends to the wall and phone/ phone base",
        "If using a cordless phone, check if it is charged",
        "If using a corded phone, check for cracks and peeling of the plastic coating",
        "Check that the modem not located next to, beneath or on top of any other electronic devices or appliances",
        "If the issue persists, try using a shorter cord between the wall jack and phone"
    ],
    'Beeping on the line': [
        "Check your settings to see if the phone is set to “pulse”. If so, switch your settings to “tone”.",
        "If the issue persists, try unplugging the phone/ phone base from modem/wall outlet for 30 seconds before plugging it back in",
        "If available, try connecting a different phone.",
        "If the issue is resolved the first device is faulty and needs to be switched."

    ],
    'Unable to Receive Calls - Home Phone': [
        "Check your account to see if your bill is up to date. If not, your service is likely disconnected. Clear your balance and reconnect your account to resolve the issue.",
        "Verify that you can make calls by completing a test call",
        "If your account is up to date, and you can make but not receive calls, technical support is needed"
    ],
    'Unable to Make Calls - Home Phone':[
        "Check your account to see if your bill is up to date. If not, your service is likely disconnected. Clear your balance and reconnect your account to resolve the issue.",
        "Verify that you can receive calls by dialing your landline through a different device.",
        "If your account is up to date, and you can receive but not make calls, technical support is needed"
    ],
    'Caller ID not Displayed':[
        "Check to ensure you are subscribed to the caller ID feature",
        "Check that any cords are properly connected on both ends to the wall and phone/ phone base",
        "Check to ensure you have not activated the Call Forwarding feature"
    ]
  },
  mobile:{
    'Unable to Make Calls - Mobile': [
        "Verify that you are subscribed to the service you are trying to use (i.e. roaming plan, data plan).",
        "Make sure the mobile data feature on the device is turned on.",
        "Check to make sure Flow supports the action being requested.",
        "If the issue persists, turn on airplane mode for 15 seconds, then turn it back off.",
        "Perform a device restart.",
        "Remove SIM card from the device, wipe it with a dry cloth or pencil eraser, then reinsert and try again.",
        "Check to ensure you have Flow SIM card."
    ],
    'Unable to Browse - Mobile': [
        "Verify that you are subscribed to the service you are trying to use (i.e. roaming plan, data plan).",
        "Make sure the mobile data feature on the device is turned on.",
        "Check to make sure Flow supports the action being requested.",
        "If the issue persists, turn on airplane mode for 15 seconds, then turn it back off.",
        "Perform a device restart.",
        "Remove SIM card from the device, wipe it with a dry cloth or pencil eraser, then reinsert and try again.",
        "Check to ensure you have Flow SIM card."
    ],
    'Unable to Make and/or Receive Calls': [
        "Verify that you are subscribed to the service you are trying to use (i.e. roaming plan, data plan).",
        "Make sure the mobile data feature on the device is turned on.",
        "Check to make sure Flow supports the action being requested.",
        "If the issue persists, turn on airplane mode for 15 seconds, then turn it back off.",
        "Perform a device restart.",
        "Remove SIM card from the device, wipe it with a dry cloth or pencil eraser, then reinsert and try again.",
        "Check to ensure you have Flow SIM card."
    ],
    'Unable to Send and/or Receive SMS': [
        "Verify that you are subscribed to the service you are trying to use.",
        "Make sure the mobile data feature on the device is turned on.",
        "Check to make sure Flow supports the action being requested.",
        "If the issue persists, turn on airplane mode for 15 seconds, then turn it back off.",
        "Perform a device restart.",
        "Remove SIM card from the device, wipe it with a dry cloth or pencil eraser, then reinsert and try again.",
        "Check to ensure you have Flow SIM card."
    ],
    'Credit Not Showing Up': [

    ],
    'Unable to Receive Calls - Mobile': [

    ],
    'Activating Roaming': [

    ],
    'Mobile Data Not Working': [

    ],
    'General Mobile Tips': [

    ]
  },
  internet: {
        'No lights on the Modem': [
            "Check the power adapter and confirm if it is plugged into the power outlet.",
            "Make sure the power is turned on for the device.",
            "Try connecting another device to the power outlet (to see if outlet itself is working).",
            "Check to ensure the coaxial connection is secured at the rear of the device."
        ],
        'No power': [
            "Check the power adapter and confirm if it is plugged into the power outlet.",
            "Make sure the power is turned on for the device.",
            "Try connecting another device to the power outlet (to see if outlet itself is working).",
            "Check to ensure the coaxial connection is secured at the rear of the device."
        ],
        'No DS Light on Modem': [
            "Check the power adapter and confirm if it is plugged into the power outlet.",
            "Make sure the power is turned on for the device.",
            "Try connecting another device to the power outlet (to see if outlet itself is working).",
            "Check to ensure the coaxial connection is secured at the rear of the device."
        ],
        'Poor Wi-Fi Range': [
            "Check the modem’s location for obstructions that are physical or electronic such as microwaves and toaster ovens.",
            "Ensure the modem is in an elevated position that is at least a foot off the ground.",
            "Ensure there is clear line of sight between wireless range extenders.",
            "Try connecting another personal device (laptop, cellphone, or tablet).",
            "Turn off devices connected to Wi-Fi and not in use.",
            "Try browsing using other webpages.",
            "Try browsing using a different device.",
            "Close some of your apps you are running on the device.",
            "Verify that your network is not open to the public. If so, make your network private.",
            "Check if you are connected to the network at home.",
            "Check connected device settings such as airplane mode or hotspot.",
            "Ensure you are using the correct password and check for caps and lowercase.",
            "Ensure you are connecting to the correct network address.",
            "Check for damage on the outlet and device.",
            "Restart the modem."
        ],
        'Slow Speed': [
            "Check the modem’s location for obstructions that are physical or electronic such as microwaves and toaster ovens.",
            "Ensure the modem is in an elevated position that is at least a foot off the ground.",
            "Ensure there is clear line of sight between wireless range extenders.",
            "Try connecting another personal device (laptop, cellphone, or tablet).",
            "Turn off devices connected to Wi-Fi and not in use.",
            "Try browsing using other webpages.",
            "Try browsing using a different device.",
            "Close some of your apps you are running on the device.",
            "Verify that your network is not open to the public. If so, make your network private.",
            "Check if you are connected to the network at home.",
            "Check connected device settings such as airplane mode or hotspot.",
            "Ensure you are using the correct password and check for caps and lowercase.",
            "Ensure you are connecting to the correct network address.",
            "Check for damage on the outlet and device.",
            "Restart the modem."
        ],
        'Unable to Browse - Home Internet': [
            "Check the modem’s location for obstructions that are physical or electronic such as microwaves and toaster ovens.",
            "Ensure the modem is in an elevated position that is at least a foot off the ground.",
            "Ensure there is clear line of sight between wireless range extenders.",
            "Try connecting another personal device (laptop, cellphone, or tablet).",
            "Turn off devices connected to Wi-Fi and not in use.",
            "Try browsing using other webpages.",
            "Try browsing using a different device.",
            "Close some of your apps you are running on the device.",
            "Verify that your network is not open to the public. If so, make your network private.",
            "Check if you are connected to the network at home.",
            "Check connected device settings such as airplane mode or hotspot.",
            "Ensure you are using the correct password and check for caps and lowercase.",
            "Ensure you are connecting to the correct network address.",
            "Check for damage on the outlet and device.",
            "Restart the modem."
        ],
        'Unable to Connect to Wi-Fi': [
            "Check the modem’s location for obstructions that are physical or electronic such as microwaves and toaster ovens.",
            "Ensure the modem is in an elevated position that is at least a foot off the ground.",
            "Ensure there is clear line of sight between wireless range extenders.",
            "Try connecting another personal device (laptop, cellphone, or tablet).",
            "Turn off devices connected to Wi-Fi and not in use.",
            "Try browsing using other webpages.",
            "Try browsing using a different device.",
            "Close some of your apps you are running on the device.",
            "Verify that your network is not open to the public. If so, make your network private.",
            "Check if you are connected to the network at home.",
            "Check connected device settings such as airplane mode or hotspot.",
            "Ensure you are using the correct password and check for caps and lowercase.",
            "Ensure you are connecting to the correct network address.",
            "Check for damage on the outlet and device.",
            "Restart the modem."
        ],
        'Intermittent Connection': [
            "Check the modem’s location for obstructions that are physical or electronic such as microwaves and toaster ovens.",
            "Ensure the modem is in an elevated position that is at least a foot off the ground.",
            "Ensure there is clear line of sight between wireless range extenders.",
            "Try connecting another personal device (laptop, cellphone, or tablet).",
            "Turn off devices connected to Wi-Fi and not in use.",
            "Try browsing using other webpages.",
            "Try browsing using a different device.",
            "Close some of your apps you are running on the device.",
            "Verify that your network is not open to the public. If so, make your network private.",
            "Check if you are connected to the network at home.",
            "Check connected device settings such as airplane mode or hotspot.",
            "Ensure you are using the correct password and check for caps and lowercase.",
            "Ensure you are connecting to the correct network address.",
            "Check for damage on the outlet and device.",
            "Restart the modem.",
        ],
        'General Data Tips':[
            {
                0: [
                    "Ensure you devices such as laptops are not kept in a hibernated state.",
                    "Ensure there are no obstruction or obstacles that can interfere with the signal.",
                    "Do not place modem/ router on beds or soft surfaces.",
                    "Elevate modem and or routers – “the higher the better”.",
                    "Disconnect unnecessary users connected to the network.",
                    "High bandwidth consumption applications are to be disconnected/ stopped when not in use.",
                    "Avoid torrenting."
                ],
                1: [
                    "Having strong Wi-Fi connectivity throughout your home is important for you to enjoy uninterrupted streaming and gaming sessions, ensuring you are in tune with all the happening on social media or simply just browsing the web. A Wi-Fi range extender or Booster allows for the optimal digital experience."
                ]
            }
        ]

  }
}
