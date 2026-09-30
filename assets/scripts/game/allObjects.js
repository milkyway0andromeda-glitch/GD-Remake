// Web Dashers historical object set: Geometry Dash Update 1.6 / Electroman Adventures.
// Object IDs 198+ were introduced after this cutoff and are intentionally unavailable.
window.allobjects = function() {
  return {
  "0": {
    "can_color": true,
    "default_base_color_channel": 1004,
    "frame": null,
    "glow_frame": "none",
    "gridH": 1,
    "gridW": 1,
    "spritesheet": "player_04-uhd",
    "type": "solid",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "1": {
    "can_color": false,
    "type": "solid",
    "frame": "square_01_001.png",
    "gridW": 1,
    "gridH": 1,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "2": {
    "can_color": false,
    "type": "solid",
    "frame": "square_02_001.png",
    "gridW": 1,
    "gridH": 1,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "3": {
    "can_color": false,
    "type": "solid",
    "frame": "square_03_001.png",
    "gridW": 1,
    "gridH": 1,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "4": {
    "can_color": false,
    "type": "solid",
    "frame": "square_04_001.png",
    "gridW": 1,
    "gridH": 1,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "5": {
    "type": "soliddeco",
    "frame": "square_05_001.png",
    "gridW": 1,
    "gridH": 1,
    "default_detail_color_channel": -1,
    "default_z_layer": 1,
    "default_z_order": -7
  },
  "6": {
    "can_color": false,
    "type": "solid",
    "frame": "square_06_001.png",
    "gridW": 1,
    "gridH": 1,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "7": {
    "can_color": false,
    "type": "solid",
    "frame": "square_07_001.png",
    "gridW": 1,
    "gridH": 1,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "8": {
    "can_color": false,
    "type": "hazard",
    "frame": "spike_01_001.png",
    "gridW": 1,
    "gridH": 1,
    "spriteW": 30,
    "spriteH": 30,
    "hitboxScaleX": 0.2,
    "hitboxScaleY": 0.4,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "9": {
    "type": "hazard",
    "frame": "pit_01_001.png",
    "gridW": 0,
    "gridH": 0,
    "black": true,
    "can_color": false,
    "spriteW": 30,
    "spriteH": 27,
    "hitboxScaleX": 0.3,
    "hitboxScaleY": 0.4,
    "randomFrames": [
      "pit_01_001.png",
      "pit_02_001.png",
      "pit_03_001.png"
    ],
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2,
    "editorOffsetY": -13
  },
  "10": {
    "type": "portal",
    "frame": "portal_01_front_001.png",
    "gridW": 0.8333333134651184,
    "gridH": 2.5,
    "sub": "gravity_flip",
    "portalParticle": true,
    "portalParticleColor": 2736127,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 10,
    "children": [
      {
        "frame": "portal_01_extra_001.png",
        "z": 0,
        "localDx": 28,
        "portalGuide": true,
        "_portalFront": true
      },
      {
        "frame": "portal_01_extra_2_001.png",
        "z": 0,
        "localDx": 24,
        "portalGuide": true,
        "_portalFront": true
      }
    ]
  },
  "11": {
    "type": "portal",
    "frame": "portal_02_front_001.png",
    "gridW": 0.8333333134651184,
    "gridH": 2.5,
    "sub": "gravity_normal",
    "portalParticle": true,
    "portalParticleColor": 15462948,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 10,
    "children": [
      {
        "frame": "portal_02_extra_001.png",
        "z": 0,
        "localDx": 28,
        "portalGuide": true,
        "_portalFront": true
      },
      {
        "frame": "portal_02_extra_2_001.png",
        "z": 0,
        "localDx": 24,
        "portalGuide": true,
        "_portalFront": true
      }
    ]
  },
  "12": {
    "type": "portal",
    "frame": "portal_03_front_001.png",
    "gridW": 1,
    "gridH": 3,
    "sub": "cube",
    "portalParticle": true,
    "portalParticleColor": 5111552,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 10,
    "children": [
      {
        "frame": "portal_03_extra_001.png",
        "z": 0,
        "localDx": 22,
        "portalGuide": true,
        "_portalFront": true
      },
      {
        "frame": "portal_03_extra_2_001.png",
        "z": 0,
        "localDx": 18,
        "portalGuide": true,
        "_portalFront": true
      }
    ]
  },
  "13": {
    "type": "portal",
    "frame": "portal_04_front_001.png",
    "gridW": 1,
    "gridH": 3,
    "sub": "fly",
    "portalParticle": true,
    "portalParticleColor": 16711935,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 10,
    "children": [
      {
        "frame": "portal_04_extra_001.png",
        "z": 0,
        "localDx": 22,
        "portalGuide": true,
        "_portalFront": true
      },
      {
        "frame": "portal_04_extra_2_001.png",
        "z": 0,
        "localDx": 18,
        "portalGuide": true,
        "_portalFront": true
      }
    ]
  },
  "15": {
    "type": "deco",
    "frame": "rod_01_001.png",
    "gridW": 0,
    "gridH": 0,
    "z": -6,
    "children": [
      {
        "frame": "rod_ball_01_001.png",
        "localDy": -62,
        "blend": "additive",
        "tint": 327424,
        "z": 1,
        "audioScale": true
      }
    ],
    "default_detail_color_channel": -1,
    "default_z_layer": 1,
    "default_z_order": -6,
    "editorOffsetY": 6
  },
  "16": {
    "type": "deco",
    "frame": "rod_02_001.png",
    "gridW": 0,
    "gridH": 0,
    "z": -6,
    "children": [
      {
        "frame": "rod_ball_01_001.png",
        "localDy": -46.5,
        "blend": "additive",
        "tint": 327424,
        "z": 1,
        "audioScale": true
      }
    ],
    "default_detail_color_channel": -1,
    "default_z_layer": 1,
    "default_z_order": -6,
    "editorOffsetY": -1.8
  },
  "17": {
    "type": "deco",
    "frame": "rod_03_001.png",
    "gridW": 0,
    "gridH": 0,
    "z": -6,
    "children": [
      {
        "frame": "rod_ball_01_001.png",
        "localDy": -32.5,
        "blend": "additive",
        "tint": 327424,
        "z": 1,
        "audioScale": true
      }
    ],
    "default_detail_color_channel": -1,
    "default_z_layer": 1,
    "default_z_order": -6,
    "editorOffsetY": -8.85
  },
  "18": {
    "type": "deco",
    "frame": "d_spikes_01_001.png",
    "gridW": 0,
    "gridH": 0,
    "blend": "additive",
    "can_color": true,
    "default_base_color_channel": 1,
    "default_detail_color_channel": 1,
    "default_z_layer": 3,
    "default_z_order": 9
  },
  "19": {
    "type": "deco",
    "frame": "d_spikes_02_001.png",
    "gridW": 0,
    "gridH": 0,
    "blend": "additive",
    "can_color": true,
    "default_base_color_channel": 1,
    "default_detail_color_channel": 1,
    "default_z_layer": 3,
    "default_z_order": 9
  },
  "20": {
    "type": "deco",
    "frame": "d_spikes_03_001.png",
    "gridW": 0,
    "gridH": 0,
    "blend": "additive",
    "tint": 327424,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 9
  },
  "21": {
    "type": "deco",
    "frame": "d_spikes_04_001.png",
    "gridW": 0,
    "gridH": 0,
    "blend": "additive",
    "tint": 327424,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 9
  },
  "22": {
    "type": "trigger",
    "frame": "edit_eeNoneBtn_001.png",
    "gridW": 1,
    "gridH": 1,
    "enterEffect": 0,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2,
    "editorFrame": "edit_eeNoneBtn_001.png",
    "spritesheet": "GJ_GameSheet02-uhd",
    "can_color": false,
    "default_base_color_channel": 0,
    "glow_frame": "none",
    "z": 2
  },
  "23": {
    "type": "trigger",
    "frame": "edit_eeFBBtn_001.png",
    "gridW": 1,
    "gridH": 1,
    "enterEffect": 1,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2,
    "editorFrame": "edit_eeFBBtn_001.png",
    "spritesheet": "GJ_GameSheet02-uhd",
    "can_color": false,
    "default_base_color_channel": 0,
    "glow_frame": "none",
    "z": 2
  },
  "24": {
    "type": "trigger",
    "frame": "edit_eeFTBtn_001.png",
    "gridW": 1,
    "gridH": 1,
    "enterEffect": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2,
    "editorFrame": "edit_eeFTBtn_001.png",
    "spritesheet": "GJ_GameSheet02-uhd",
    "can_color": false,
    "default_base_color_channel": 0,
    "glow_frame": "none",
    "z": 2
  },
  "25": {
    "type": "trigger",
    "frame": "edit_eeFLBtn_001.png",
    "gridW": 1,
    "gridH": 1,
    "enterEffect": 3,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2,
    "editorFrame": "edit_eeFLBtn_001.png",
    "spritesheet": "GJ_GameSheet02-uhd",
    "can_color": false,
    "default_base_color_channel": 0,
    "glow_frame": "none",
    "z": 2
  },
  "26": {
    "type": "trigger",
    "frame": "edit_eeFRBtn_001.png",
    "gridW": 1,
    "gridH": 1,
    "enterEffect": 4,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2,
    "editorFrame": "edit_eeFRBtn_001.png",
    "spritesheet": "GJ_GameSheet02-uhd",
    "can_color": false,
    "default_base_color_channel": 0,
    "glow_frame": "none",
    "z": 2
  },
  "27": {
    "type": "trigger",
    "frame": "edit_eeSUBtn_001.png",
    "gridW": 1,
    "gridH": 1,
    "enterEffect": 5,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2,
    "editorFrame": "edit_eeSUBtn_001.png",
    "spritesheet": "GJ_GameSheet02-uhd",
    "can_color": false,
    "default_base_color_channel": 0,
    "glow_frame": "none",
    "z": 2
  },
  "28": {
    "type": "trigger",
    "frame": "edit_eeSDBtn_001.png",
    "gridW": 1,
    "gridH": 1,
    "enterEffect": 6,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2,
    "editorFrame": "edit_eeSDBtn_001.png",
    "spritesheet": "GJ_GameSheet02-uhd",
    "can_color": false,
    "default_base_color_channel": 0,
    "glow_frame": "none",
    "z": 2
  },
  "29": {
    "type": "trigger",
    "frame": "edit_eTintCol01Btn_001.png",
    "gridW": 1,
    "gridH": 1,
    "colorIdx": 1000,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2,
    "editorFrame": "edit_eTintCol01Btn_001.png",
    "spritesheet": "GJ_GameSheet02-uhd",
    "can_color": false,
    "default_base_color_channel": 0,
    "glow_frame": "none",
    "z": 2
  },
  "30": {
    "type": "trigger",
    "frame": "edit_eTintCol01Btn_001.png",
    "gridW": 1,
    "gridH": 1,
    "colorIdx": 1001,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2,
    "editorFrame": "edit_eTintCol01Btn_001.png",
    "spritesheet": "GJ_GameSheet02-uhd",
    "can_color": false,
    "default_base_color_channel": 0,
    "glow_frame": "none",
    "z": 2
  },
  "31": {
    "can_color": false,
    "default_base_color_channel": 0,
    "frame": "edit_eStartPosBtn_001.png",
    "glow_frame": "none",
    "gridH": 1,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet02-uhd",
    "type": "trigger",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2,
    "editorFrame": "edit_eStartPosBtn_001.png"
  },
  "32": {
    "type": "trigger",
    "frame": "edit_eGhostEBtn_001.png",
    "gridW": 1,
    "gridH": 1,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2,
    "editorFrame": "edit_eGhostEBtn_001.png",
    "spritesheet": "GJ_GameSheet02-uhd",
    "can_color": false,
    "default_base_color_channel": 0,
    "glow_frame": "none",
    "z": 2
  },
  "33": {
    "type": "trigger",
    "frame": "edit_eGhostDBtn_001.png",
    "gridW": 1,
    "gridH": 1,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2,
    "editorFrame": "edit_eGhostDBtn_001.png",
    "spritesheet": "GJ_GameSheet02-uhd",
    "can_color": false,
    "default_base_color_channel": 0,
    "glow_frame": "none",
    "z": 2
  },
  "34": {
    "can_color": false,
    "default_base_color_channel": 0,
    "frame": "edit_eStartPosBtn_001.png",
    "glow_frame": "none",
    "gridH": 0.7666666507720947,
    "gridW": 1.2333333492279053,
    "spritesheet": "GJ_GameSheet02-uhd",
    "type": "trigger",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2,
    "editorFrame": "edit_eStartPosBtn_001.png"
  },
  "35": {
    "can_color": false,
    "type": "pad",
    "frame": "bump_01_001.png",
    "gridH": 0.13333334028720856,
    "gridW": 0.8333333134651184,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 12,
    "editorOffsetY": -13
  },
  "36": {
    "can_color": false,
    "type": "ring",
    "frame": "ring_01_001.png",
    "gridW": 1.2,
    "gridH": 1.2,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 12
  },
  "39": {
    "can_color": false,
    "type": "hazard",
    "frame": "spike_02_001.png",
    "gridW": 1,
    "gridH": 1,
    "spriteW": 30,
    "spriteH": 14,
    "hitboxScaleX": 0.2,
    "hitboxScaleY": 0.4,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2,
    "editorOffsetY": -8.2
  },
  "40": {
    "type": "solid",
    "frame": "plank_01_001.png",
    "can_color": false,
    "gridW": 1,
    "gridH": 0.5,
    "editorOffsetY": 8.15,
    "children": [
      {
        "frame": "plank_01_color_001.png",
        "tint": 0
      }
    ],
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "41": {
    "can_color": false,
    "type": "deco",
    "frame": "chain_01_001.png",
    "gridW": 0,
    "gridH": 0,
    "blend": "additive",
    "default_base_color_channel": 1,
    "default_z_layer": 3,
    "default_z_order": 9,
    "editorOffsetY": 20
  },
  "44": {
    "type": "deco",
    "frame": null,
    "gridW": 0,
    "gridH": 0
  },
  "45": {
    "type": "portal",
    "frame": "portal_05_front_001.png",
    "gridW": 1,
    "gridH": 3,
    "sub": "mirrora",
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 10,
    "portalParticle": true,
    "portalParticleColor": 16753920,
    "children": [
      {
        "frame": "portal_05_extra_001.png",
        "z": 0,
        "localDx": 22,
        "portalGuide": true,
        "_portalFront": true
      },
      {
        "frame": "portal_05_extra_2_001.png",
        "z": 0,
        "localDx": 18,
        "portalGuide": true,
        "_portalFront": true
      }
    ]
  },
  "46": {
    "type": "portal",
    "frame": "portal_06_front_001.png",
    "gridW": 1,
    "gridH": 3,
    "sub": "mirrorb",
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 10,
    "portalParticle": true,
    "portalParticleColor": 65535,
    "children": [
      {
        "frame": "portal_06_extra_001.png",
        "z": 0,
        "localDx": 22,
        "portalGuide": true,
        "_portalFront": true
      },
      {
        "frame": "portal_06_extra_2_001.png",
        "z": 0,
        "localDx": 18,
        "portalGuide": true,
        "_portalFront": true
      }
    ]
  },
  "47": {
    "type": "portal",
    "frame": "portal_07_front_001.png",
    "gridW": 1,
    "gridH": 3,
    "sub": "ball",
    "portalParticle": true,
    "portalParticleColor": 16711680,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 10,
    "children": [
      {
        "frame": "portal_07_extra_001.png",
        "z": 0,
        "localDx": 22,
        "portalGuide": true,
        "_portalFront": true
      },
      {
        "frame": "portal_07_extra_2_001.png",
        "z": 0,
        "localDx": 18,
        "portalGuide": true,
        "_portalFront": true
      }
    ]
  },
  "48": {
    "type": "deco",
    "frame": "d_cloud_01_001.png",
    "gridW": 0,
    "gridH": 0,
    "blend": "additive",
    "tint": 64511,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 9
  },
  "49": {
    "type": "deco",
    "frame": "d_cloud_02_001.png",
    "gridW": 0,
    "gridH": 0,
    "blend": "additive",
    "tint": 64511,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 9
  },
  "50": {
    "type": "deco",
    "frame": "none",
    "gridW": 0,
    "gridH": 0,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 9,
    "children": [
      {
        "frame": "rod_ball_01_001.png",
        "z": 1,
        "audioScale": true
      }
    ]
  },
  "51": {
    "type": "deco",
    "frame": "none",
    "gridW": 0,
    "gridH": 0,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 9,
    "children": [
      {
        "frame": "rod_ball_02_001.png",
        "z": 1,
        "audioScale": true
      }
    ]
  },
  "52": {
    "type": "deco",
    "frame": "none",
    "gridW": 0,
    "gridH": 0,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 9,
    "children": [
      {
        "frame": "rod_ball_03_001.png",
        "z": 1,
        "audioScale": true
      }
    ]
  },
  "53": {
    "type": "deco",
    "frame": "none",
    "gridW": 0,
    "gridH": 0,
    "blend": "additive",
    "tint": 64511,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 9,
    "children": [
      {
        "frame": "d_ball_04_001.png",
        "z": 1,
        "audioScale": true
      }
    ]
  },
  "54": {
    "can_color": true,
    "default_base_color_channel": 1006,
    "frame": "none",
    "gridH": 0.949999988079071,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "deco",
    "z": 9,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 9,
    "children": [
      {
        "frame": "d_ball_05_001.png",
        "z": 1,
        "audioScale": true
      }
    ]
  },
  "55": {
    "type": "trigger",
    "frame": "edit_eeFABtn_001.png",
    "gridW": 1,
    "gridH": 1,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2,
    "editorFrame": "edit_eeFABtn_001.png",
    "spritesheet": "GJ_GameSheet02-uhd",
    "can_color": false,
    "default_base_color_channel": 0,
    "glow_frame": "none",
    "z": 2,
    "enterEffect": 7
  },
  "56": {
    "type": "trigger",
    "frame": "edit_eeFALBtn_001.png",
    "gridW": 1,
    "gridH": 1,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2,
    "editorFrame": "edit_eeFALBtn_001.png",
    "spritesheet": "GJ_GameSheet02-uhd",
    "can_color": false,
    "default_base_color_channel": 0,
    "glow_frame": "none",
    "z": 2,
    "enterEffect": 8
  },
  "57": {
    "type": "trigger",
    "frame": "edit_eeFARBtn_001.png",
    "gridW": 1,
    "gridH": 1,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2,
    "editorFrame": "edit_eeFARBtn_001.png",
    "spritesheet": "GJ_GameSheet02-uhd",
    "can_color": false,
    "default_base_color_channel": 0,
    "glow_frame": "none",
    "z": 2,
    "enterEffect": 9
  },
  "58": {
    "type": "trigger",
    "frame": "edit_eeFRHBtn_001.png",
    "gridW": 1,
    "gridH": 1,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2,
    "editorFrame": "edit_eeFRHBtn_001.png",
    "spritesheet": "GJ_GameSheet02-uhd",
    "can_color": false,
    "default_base_color_channel": 0,
    "glow_frame": "none",
    "z": 2,
    "enterEffect": 10
  },
  "59": {
    "type": "trigger",
    "frame": "edit_eeFRHInvBtn_001.png",
    "gridW": 1,
    "gridH": 1,
    "glow": true,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2,
    "editorFrame": "edit_eeFRHInvBtn_001.png",
    "spritesheet": "GJ_GameSheet02-uhd",
    "can_color": false,
    "default_base_color_channel": 0,
    "glow_frame": "none",
    "z": 2,
    "enterEffect": 11
  },
  "60": {
    "type": "deco",
    "frame": "none",
    "gridW": 0,
    "gridH": 0,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 9,
    "children": [
      {
        "frame": "d_ball_06_001.png",
        "z": 1,
        "audioScale": true
      }
    ]
  },
  "61": {
    "type": "hazard",
    "frame": "pit_04_001.png",
    "gridW": 0,
    "gridH": 0,
    "black": true,
    "can_color": false,
    "spriteW": 30,
    "spriteH": 18,
    "hitboxScaleX": 0.3,
    "hitboxScaleY": 0.4,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2,
    "editorOffsetY": -15
  },
  "62": {
    "type": "solid",
    "frame": "square_b_01_001.png",
    "can_color": false,
    "black": true,
    "gridW": 1,
    "gridH": 0.5,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2,
    "editorOffsetY": 7
  },
  "63": {
    "type": "solid",
    "frame": "square_b_02_001.png",
    "can_color": false,
    "black": true,
    "gridW": 1,
    "gridH": 0.5,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "64": {
    "type": "solid",
    "frame": "square_b_03_001.png",
    "can_color": false,
    "black": true,
    "gridW": 1,
    "gridH": 0.5,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2,
    "editorOffsetY": 8.15,
    "editorOffsetX": -7.95
  },
  "65": {
    "type": "solid",
    "frame": "square_b_04_001.png",
    "can_color": false,
    "black": true,
    "gridW": 1,
    "gridH": 0.5,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2,
    "editorOffsetY": 7
  },
  "66": {
    "type": "solid",
    "frame": "square_b_05_001.png",
    "can_color": false,
    "black": true,
    "gridW": 1,
    "gridH": 0.5,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2,
    "editorOffsetY": 7
  },
  "67": {
    "type": "pad",
    "frame": "gravbump_01_001.png",
    "gridH": 0.20000000298023224,
    "gridW": 0.8333333134651184,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 12,
    "editorOffsetY": -12
  },
  "68": {
    "type": "solid",
    "frame": "square_b_06_001.png",
    "can_color": false,
    "black": true,
    "gridW": 1,
    "gridH": 0.5,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2,
    "editorOffsetY": 7.1
  },
  "69": {
    "can_color": false,
    "type": "solid",
    "frame": "blockOutline_01_001.png",
    "gridW": 1,
    "gridH": 1,
    "glow": true,
    "children": [
      {
        "frame": "square_c_05_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1
      }
    ],
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "70": {
    "can_color": false,
    "type": "solid",
    "frame": "lightsquare_01_02_001.png",
    "gridW": 1,
    "gridH": 1,
    "glow": true,
    "children": [
      {
        "frame": "square_c_05_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1
      }
    ],
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "71": {
    "can_color": false,
    "type": "solid",
    "frame": "blockOutline_03_001.png",
    "gridW": 1,
    "gridH": 1,
    "glow": true,
    "children": [
      {
        "frame": "square_c_05_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1
      }
    ],
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "72": {
    "can_color": false,
    "type": "solid",
    "frame": "blockOutline_06_001.png",
    "gridW": 1,
    "gridH": 1,
    "glow": true,
    "children": [
      {
        "frame": "square_c_05_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1
      }
    ],
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "73": {
    "can_color": false,
    "type": "soliddeco",
    "frame": "square_c_05_001.png",
    "gridW": 1,
    "gridH": 1,
    "default_detail_color_channel": -1,
    "default_z_layer": 1,
    "default_z_order": -7
  },
  "74": {
    "can_color": false,
    "type": "solid",
    "frame": "blockOutline_04_001.png",
    "gridW": 1,
    "gridH": 1,
    "glow": true,
    "children": [
      {
        "frame": "square_c_05_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1
      }
    ],
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "75": {
    "can_color": false,
    "type": "solid",
    "frame": "blockOutline_05_001.png",
    "gridW": 1,
    "gridH": 1,
    "glow": true,
    "children": [
      {
        "frame": "square_c_05_001.png",
        "localDy": 0,
        "z": -1
      },
      {
        "frame": "blockOutline_05_001.png",
        "localDy": 0,
        "z": 1,
        "rot": 180
      }
    ],
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "76": {
    "can_color": false,
    "children": [
      {
        "frame": "square_d_05_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1
      },
      {
        "frame": "lightsquare_04_02_001.png",
        "localDy": 0,
        "z": 1,
        "rot": 270
      },
      {
        "frame": "lightsquare_04_02_001.png",
        "localDy": 0,
        "z": 1,
        "rot": 180
      },
      {
        "frame": "lightsquare_04_02_001.png",
        "localDy": 0,
        "z": 1,
        "rot": 90
      }
    ],
    "default_base_color_channel": 1004,
    "frame": "lightsquare_04_02_001.png",
    "glow_frame": "lightsquare_04_02_glow_001.png",
    "gridH": 1,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "solid",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "77": {
    "can_color": false,
    "children": [
      {
        "frame": "square_d_05_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1
      }
    ],
    "default_base_color_channel": 1004,
    "frame": "lightsquare_04_02_001.png",
    "glow_frame": "lightsquare_04_02_glow_001.png",
    "gridH": 1,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "solid",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "78": {
    "can_color": false,
    "children": [
      {
        "frame": "square_d_05_001.png",
        "localDy": 0,
        "z": -1
      },
      {
        "frame": "lightsquare_04_02_001.png",
        "localDy": 0,
        "z": 1,
        "rot": 270
      }
    ],
    "default_base_color_channel": 1004,
    "frame": "lightsquare_04_02_001.png",
    "glow_frame": "lightsquare_04_02_glow_001.png",
    "gridH": 1,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "solid",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "80": {
    "can_color": false,
    "default_base_color_channel": 1004,
    "frame": "square_d_05_001.png",
    "glow_frame": "square_d_05_glow_001.png",
    "gridH": 1,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "soliddeco",
    "z": -7,
    "default_detail_color_channel": -1,
    "default_z_layer": 1,
    "default_z_order": -7
  },
  "81": {
    "can_color": false,
    "children": [
      {
        "frame": "square_d_05_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1
      },
      {
        "frame": "lightsquare_04_02_001.png",
        "localDy": 0,
        "z": 1,
        "rot": 90
      },
      {
        "frame": "lightsquare_04_02_001.png",
        "localDy": 0,
        "z": 1,
        "rot": 270
      }
    ],
    "default_base_color_channel": 1004,
    "frame": "lightsquare_04_02_001.png",
    "glow_frame": "lightsquare_04_02_glow_001.png",
    "gridH": 1,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "solid",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "82": {
    "can_color": false,
    "children": [
      {
        "frame": "square_d_05_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1
      },
      {
        "frame": "lightsquare_04_02_001.png",
        "localDy": 0,
        "z": 1,
        "rot": 90
      },
      {
        "frame": "lightsquare_04_02_001.png",
        "localDy": 0,
        "z": 1,
        "rot": 270
      }
    ],
    "default_base_color_channel": 1004,
    "frame": "none",
    "glow_frame": "lightsquare_04_sideLine_glow_001.png",
    "gridH": 1,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "solid",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "83": {
    "can_color": false,
    "type": "solid",
    "frame": "square_08_001.png",
    "gridW": 1,
    "gridH": 1,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "84": {
    "can_color": false,
    "type": "ring",
    "frame": "gravring_01_001.png",
    "gridW": 1.2,
    "gridH": 1.2,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 12,
    "children": [
      {
        "type": "ring",
        "frame": "gravring_01_extra_001.png",
        "z": 0,
        "orbGuide": true
      }
    ]
  },
  "85": {
    "can_color": true,
    "children": [
      {
        "frame": "d_cogwheel_01_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1,
        "rot": 90
      },
      {
        "frame": "d_cogwheel_01_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": 1,
        "rot": 180
      },
      {
        "frame": "d_cogwheel_01_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": 1,
        "rot": 270
      }
    ],
    "default_base_color_channel": 1005,
    "frame": "d_cogwheel_01_001.png",
    "glow_frame": "d_cogwheel_01_glow_001.png",
    "gridH": 1.1833332777023315,
    "gridW": 1.1833332777023315,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "deco",
    "z": 9,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 9
  },
  "86": {
    "can_color": true,
    "default_base_color_channel": 1005,
    "frame": "d_cogwheel_02_001.png",
    "glow_frame": "d_cogwheel_02_glow_001.png",
    "gridH": 1.8166667222976685,
    "gridW": 1.7833333015441895,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "deco",
    "z": 9,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 9
  },
  "87": {
    "can_color": true,
    "default_base_color_channel": 1005,
    "frame": "d_cogwheel_03_001.png",
    "glow_frame": "d_cogwheel_03_glow_001.png",
    "gridH": 1.25,
    "gridW": 1.25,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "deco",
    "z": 9,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 9
  },
  "88": {
    "type": "hazard",
    "frame": "sawblade_01_001.png",
    "gridW": 1,
    "gridH": 1,
    "hitbox_radius": 32.29999923706055,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "89": {
    "type": "hazard",
    "frame": "sawblade_02_001.png",
    "gridW": 2,
    "gridH": 2,
    "hitbox_radius": 21.600000381469727,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "90": {
    "can_color": false,
    "children": [
      {
        "frame": "block005b_05_001.png",
        "localDy": 0,
        "tint": 0,
        "z": -1
      }
    ],
    "default_base_color_channel": 1004,
    "frame": "blockOutline_01_001.png",
    "glow_frame": "blockOutline_01_glow_001.png",
    "gridH": 1,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "solid",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "91": {
    "can_color": false,
    "children": [
      {
        "frame": "block005b_05_001.png",
        "localDy": 0,
        "tint": 0,
        "z": -1
      }
    ],
    "default_base_color_channel": 1004,
    "frame": "lightsquare_01_02_001.png",
    "glow_frame": "block008_topcolor_15_glow_001.png",
    "gridH": 1,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "solid",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "92": {
    "can_color": false,
    "children": [
      {
        "frame": "block005b_05_001.png",
        "localDy": 0,
        "tint": 0,
        "z": -1
      }
    ],
    "default_base_color_channel": 1004,
    "frame": "blockOutline_03_001.png",
    "glow_frame": "blockOutline_03_glow_001.png",
    "gridH": 1,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "solid",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "93": {
    "can_color": false,
    "children": [
      {
        "frame": "block005b_05_001.png",
        "localDy": 0,
        "tint": 0,
        "z": -1
      }
    ],
    "default_base_color_channel": 1004,
    "frame": "blockOutline_06_001.png",
    "glow_frame": "blockOutline_06_glow_001.png",
    "gridH": 1,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "solid",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "94": {
    "type": "solid",
    "frame": "block005b_05_001.png",
    "can_color": false,
    "gridW": 1,
    "gridH": 1,
    "glow": true,
    "black": true,
    "z": 1,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "95": {
    "can_color": false,
    "children": [
      {
        "frame": "block005b_05_001.png",
        "localDy": 0,
        "tint": 0,
        "z": -1
      }
    ],
    "default_base_color_channel": 1004,
    "frame": "blockOutline_04_001.png",
    "glow_frame": "blockOutline_04_glow_001.png",
    "gridH": 1,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "solid",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "96": {
    "can_color": false,
    "children": [
      {
        "frame": "block005b_05_001.png",
        "localDy": 0,
        "tint": 0,
        "z": -1
      },
      {
        "frame": "blockOutline_05_001.png",
        "localDy": 0,
        "z": 1,
        "rot": 180
      }
    ],
    "default_base_color_channel": 1004,
    "frame": "blockOutline_05_001.png",
    "glow_frame": "blockOutline_05_glow_001.png",
    "gridH": 1,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "solid",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "97": {
    "can_color": true,
    "default_base_color_channel": 1005,
    "frame": "d_cogwheel_04_001.png",
    "glow_frame": "d_cogwheel_04_glow_001.png",
    "gridH": 0.8500000238418579,
    "gridW": 0.8333333134651184,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "deco",
    "z": 9,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 9
  },
  "98": {
    "type": "hazard",
    "frame": "sawblade_03_001.png",
    "gridW": 3,
    "gridH": 3,
    "hitbox_radius": 11.77500057220459,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "99": {
    "type": "portal",
    "frame": "portal_08_front_001.png",
    "gridW": 1,
    "gridH": 3,
    "sub": "grow",
    "portalParticle": true,
    "portalParticleColor": 5111552,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 10
  },
  "101": {
    "can_color": false,
    "default_base_color_channel": 0,
    "frame": "portal_09_front_001.png",
    "glow_frame": "portal_09_front_glow_001.png",
    "gridH": 3,
    "gridW": 1.0333333015441895,
    "spritesheet": "GJ_GameSheet02-uhd",
    "type": "portal",
    "sub": "shrink",
    "z": 10,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 10,
    "portalParticle": true,
    "portalParticleColor": 16711935
  },
  "103": {
    "can_color": false,
    "type": "hazard",
    "frame": "spike_03_001.png",
    "gridW": 0.5,
    "gridH": 0.5,
    "spriteW": 20,
    "spriteH": 19,
    "hitboxScaleX": 0.2,
    "hitboxScaleY": 0.4,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2,
    "editorOffsetY": -5.8
  },
  "104": {
    "type": "trigger",
    "frame": "edit_eOptionsBtn_001.png",
    "gridW": 1,
    "gridH": 1,
    "editorFrame": "edit_eOptionsBtn_001.png",
    "spritesheet": "GJ_GameSheet02-uhd",
    "can_color": false,
    "default_base_color_channel": 0,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "105": {
    "type": "trigger",
    "frame": "edit_eTintCol01Btn_001.png",
    "gridW": 1,
    "gridH": 1,
    "colorIdx": 1,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2,
    "editorFrame": "edit_eTintCol01Btn_001.png",
    "spritesheet": "GJ_GameSheet02-uhd",
    "can_color": false,
    "default_base_color_channel": 0,
    "glow_frame": "none",
    "z": 2
  },
  "106": {
    "can_color": true,
    "default_base_color_channel": 1006,
    "frame": "d_02_chain_01_001.png",
    "glow_frame": "d_02_chain_01_glow_001.png",
    "gridH": 2.183333396911621,
    "gridW": 0.8999999761581421,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "deco",
    "z": 9,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 9
  },
  "107": {
    "can_color": true,
    "default_base_color_channel": 1006,
    "frame": "d_02_chain_02_001.png",
    "glow_frame": "d_02_chain_02_glow_001.png",
    "gridH": 1.2666666507720947,
    "gridW": 0.8999999761581421,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "deco",
    "z": 9,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 9
  },
  "110": {
    "can_color": true,
    "default_base_color_channel": 1005,
    "frame": "d_chain_02_001.png",
    "glow_frame": "d_chain_02_glow_001.png",
    "gridH": 1.1333333253860474,
    "gridW": 0.6499999761581421,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "deco",
    "z": 9,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 9,
    "editorOffsetY": 2.15
  },
  "111": {
    "can_color": false,
    "default_base_color_channel": 0,
    "frame": "portal_10_front_001.png",
    "glow_frame": "portal_10_front_glow_001.png",
    "gridH": 2.866666555404663,
    "gridW": 1.1333333253860474,
    "spritesheet": "GJ_GameSheet02-uhd",
    "type": "portal",
    "z": 10,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 10,
    "portalParticle": true,
    "portalParticleColor": 16753920,
    "children": [
      {
        "frame": "portal_10_extra_001.png",
        "z": 0,
        "localDx": 22,
        "portalGuide": true,
        "_portalFront": true
      },
      {
        "frame": "portal_10_extra_2_001.png",
        "z": 0,
        "localDx": 18,
        "portalGuide": true,
        "_portalFront": true
      }
    ]
  },
  "113": {
    "can_color": true,
    "default_base_color_channel": 1005,
    "frame": "d_brick_01_001.png",
    "glow_frame": "d_brick_01_glow_001.png",
    "gridH": 1.3166667222976685,
    "gridW": 4.150000095367432,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "deco",
    "blend": "additive",
    "tint": 327424,
    "z": 9,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 9
  },
  "114": {
    "can_color": true,
    "default_base_color_channel": 1005,
    "frame": "d_brick_02_001.png",
    "glow_frame": "d_brick_02_glow_001.png",
    "gridH": 1.1166666746139526,
    "gridW": 2.866666555404663,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "deco",
    "z": 9,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 9
  },
  "115": {
    "can_color": true,
    "default_base_color_channel": 1005,
    "frame": "d_brick_03_001.png",
    "glow_frame": "d_brick_03_glow_001.png",
    "gridH": 0.8833333253860474,
    "gridW": 1.850000023841858,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "deco",
    "z": 9,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 9
  },
  "116": {
    "type": "solid",
    "frame": "square_f_01_001.png",
    "gridW": 1,
    "gridH": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "117": {
    "type": "solid",
    "frame": "square_f_02_001.png",
    "gridW": 1,
    "gridH": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "118": {
    "type": "solid",
    "frame": "square_f_03_001.png",
    "gridW": 1,
    "gridH": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "119": {
    "type": "solid",
    "frame": "blockOutline_06_001.png",
    "gridW": 1,
    "gridH": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2,
    "children": [
      {
        "frame": "square_f_05_001.png",
        "localDy": 0,
        "z": -1
      }
    ]
  },
  "120": {
    "type": "soliddeco",
    "frame": "square_f_05_001.png",
    "gridW": 0,
    "gridH": 0,
    "spritesheet": "GJ_GameSheet-uhd",
    "default_detail_color_channel": -1,
    "default_z_layer": 1,
    "default_z_order": -7
  },
  "121": {
    "type": "solid",
    "frame": "square_f_06_001.png",
    "gridW": 1,
    "gridH": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "122": {
    "type": "solid",
    "frame": "square_f_07_001.png",
    "gridW": 1,
    "gridH": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "123": {
    "type": "deco",
    "frame": "d_thorn_01_001.png",
    "gridW": 0,
    "gridH": 0,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 1
  },
  "124": {
    "type": "deco",
    "frame": "d_thorn_02_001.png",
    "gridW": 0,
    "gridH": 0,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 1
  },
  "125": {
    "type": "deco",
    "frame": "d_smallBall_01_001.png",
    "gridW": 0,
    "gridH": 0,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 1
  },
  "126": {
    "type": "deco",
    "frame": "d_smallBall_02_001.png",
    "gridW": 0,
    "gridH": 0,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 1
  },
  "127": {
    "type": "deco",
    "frame": "d_smallBall_03_001.png",
    "gridW": 0,
    "gridH": 0,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 1
  },
  "128": {
    "type": "deco",
    "frame": "d_smallBall_04_001.png",
    "gridW": 0,
    "gridH": 0,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 1
  },
  "129": {
    "type": "deco",
    "frame": "d_cloud_03_001.png",
    "gridW": 0,
    "gridH": 0,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 9
  },
  "130": {
    "type": "deco",
    "frame": "d_cloud_04_001.png",
    "gridW": 0,
    "gridH": 0,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 9
  },
  "131": {
    "type": "deco",
    "frame": "d_cloud_05_001.png",
    "gridW": 0,
    "gridH": 0,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 9
  },
  "132": {
    "type": "deco",
    "frame": "d_arrow_01_001.png",
    "gridW": 0,
    "gridH": 0,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 10
  },
  "133": {
    "type": "deco",
    "frame": "d_exmark_01_001.png",
    "gridW": 0,
    "gridH": 0,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 10
  },
  "134": {
    "type": "deco",
    "frame": "d_art_01_001.png",
    "gridW": 0.46666666865348816,
    "gridH": 1.0333333015441895,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 9
  },
  "135": {
    "type": "deco",
    "frame": "fakeSpike_01_001.png",
    "gridW": 0,
    "gridH": 0,
    "black": true,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "136": {
    "type": "deco",
    "frame": "d_qmark_01_001.png",
    "gridW": 0,
    "gridH": 0,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 10
  },
  "137": {
    "type": "deco",
    "frame": "d_wheel_01_001.png",
    "gridW": 1.350000023841858,
    "gridH": 2.6666667461395264,
    "children": [
      {
        "frame": "d_wheel_01_001.png",
        "localDy": 0,
        "rot": 180,
        "z": -1
      }
    ],
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 9
  },
  "138": {
    "type": "deco",
    "frame": "d_wheel_02_001.png",
    "gridW": 1.7000000476837158,
    "gridH": 1.7000000476837158,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 9
  },
  "139": {
    "type": "deco",
    "frame": "d_wheel_03_001.png",
    "gridW": 0,
    "gridH": 0,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 9
  },
  "140": {
    "type": "pad",
    "frame": "bump_03_001.png",
    "gridH": 0.1666666716337204,
    "gridW": 0.8333333134651184,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 12,
    "editorOffsetY": -12.7
  },
  "141": {
    "type": "ring",
    "frame": "ring_03_001.png",
    "gridW": 1.2,
    "gridH": 1.2,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 12
  },
  "142": {
    "type": "coin",
    "frame": "secretCoin_01_001.png",
    "gridW": 1,
    "gridH": 1,
    "animFrames": [
      "secretCoin_01_001.png",
      "secretCoin_01_002.png",
      "secretCoin_01_003.png",
      "secretCoin_01_004.png"
    ],
    "animInterval": 100
  },
  "143": {
    "can_color": false,
    "default_base_color_channel": 1004,
    "frame": "brick_02_001.png",
    "glow_frame": "brick_02_glow_001.png",
    "gridH": 1,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "solid",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "144": {
    "can_color": false,
    "type": "hazard",
    "frame": "invis_spike_01_glow_001.png",
    "gridW": 1,
    "gridH": 1,
    "spriteW": 30,
    "spriteH": 30,
    "hitboxScaleX": 0.2,
    "hitboxScaleY": 0.4,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "145": {
    "can_color": false,
    "type": "hazard",
    "frame": "invis_spike_03_glow_001.png",
    "gridW": 0.5,
    "gridH": 0.5,
    "spriteW": 20,
    "spriteH": 19,
    "hitboxScaleX": 0.2,
    "hitboxScaleY": 0.4,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "146": {
    "type": "solid",
    "frame": "invis_square_01_001.png",
    "gridW": 1,
    "gridH": 1,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "147": {
    "can_color": true,
    "default_base_color_channel": 1004,
    "frame": "invis_plank_01_001.png",
    "glow_frame": "invis_plank_01_glow_001.png",
    "gridH": 0.46666666865348816,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "solid",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2,
    "editorOffsetY": 8.15
  },
  "148": {
    "can_color": true,
    "default_base_color_channel": 1006,
    "frame": "none",
    "gridH": 0.9166666865348816,
    "gridW": 0.9166666865348816,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "deco",
    "z": 9,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 9,
    "children": [
      {
        "frame": "d_ball_07_001.png",
        "z": 1,
        "audioScale": true
      }
    ]
  },
  "149": {
    "can_color": true,
    "default_base_color_channel": 1006,
    "frame": "noen",
    "gridH": 1,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "deco",
    "z": 9,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 9,
    "children": [
      {
        "frame": "d_ball_08_001.png",
        "z": 1,
        "audioScale": true
      }
    ]
  },
  "150": {
    "type": "deco",
    "frame": "d_cross_01_001.png",
    "gridW": 0,
    "gridH": 0,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 10
  },
  "151": {
    "type": "deco",
    "frame": "d_spikeart_01_001.png",
    "gridW": 0,
    "gridH": 0,
    "blend": "additive",
    "tint": 65280,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 9
  },
  "152": {
    "type": "deco",
    "frame": "d_spikeart_02_001.png",
    "gridW": 0,
    "gridH": 0,
    "blend": "additive",
    "tint": 65280,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 9
  },
  "153": {
    "type": "deco",
    "frame": "d_spikeart_03_001.png",
    "gridW": 0,
    "gridH": 0,
    "blend": "additive",
    "tint": 65280,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 9
  },
  "154": {
    "can_color": true,
    "children": [
      {
        "frame": "d_spikewheel_01_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1,
        "rot": 90
      },
      {
        "frame": "d_spikewheel_01_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": 1,
        "rot": 180
      },
      {
        "frame": "d_spikewheel_01_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": 1,
        "rot": 270
      }
    ],
    "default_base_color_channel": 1005,
    "frame": "d_spikewheel_01_001.png",
    "glow_frame": "d_spikewheel_01_glow_001.png",
    "gridH": 1.1666666269302368,
    "gridW": 1.1666666269302368,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "deco",
    "z": 9,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 9
  },
  "155": {
    "can_color": true,
    "default_base_color_channel": 1005,
    "frame": "d_spikewheel_02_001.png",
    "glow_frame": "d_spikewheel_02_glow_001.png",
    "gridH": 1.3666666746139526,
    "gridW": 1.5666667222976685,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "deco",
    "z": 9,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 9
  },
  "156": {
    "can_color": true,
    "default_base_color_channel": 1005,
    "frame": "d_spikewheel_03_001.png",
    "glow_frame": "d_spikewheel_03_glow_001.png",
    "gridH": 1.2999999523162842,
    "gridW": 0.3166666626930237,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "deco",
    "z": 9,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 9
  },
  "157": {
    "type": "deco",
    "frame": "d_wave_01_001.png",
    "gridW": 0,
    "gridH": 0,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 9
  },
  "158": {
    "type": "deco",
    "frame": "d_wave_02_001.png",
    "gridW": 0,
    "gridH": 0,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 9
  },
  "159": {
    "type": "deco",
    "frame": "d_wave_03_001.png",
    "gridW": 0,
    "gridH": 0,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 9
  },
  "160": {
    "can_color": true,
    "children": [
      {
        "frame": "square_g_05_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1
      }
    ],
    "default_base_color_channel": 1004,
    "frame": "blockOutline_01_001.png",
    "glow_frame": "blockOutline_01_glow_001.png",
    "gridH": 1,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "solid",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "161": {
    "can_color": true,
    "children": [
      {
        "frame": "square_g_05_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1
      }
    ],
    "default_base_color_channel": 1004,
    "frame": "lightsquare_01_02_001.png",
    "glow_frame": "lightsquare_01_02_glow_001.png",
    "gridH": 1,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "solid",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "162": {
    "type": "solid",
    "frame": "blockOutline_03_001.png",
    "gridW": 1,
    "gridH": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2,
    "children": [
      {
        "frame": "square_g_03_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1
      }
    ]
  },
  "163": {
    "can_color": true,
    "children": [
      {
        "frame": "square_g_04_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1
      }
    ],
    "default_base_color_channel": 1004,
    "frame": "blockOutline_06_001.png",
    "glow_frame": "blockOutline_06_glow_001.png",
    "gridH": 1,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "solid",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "164": {
    "can_color": true,
    "default_base_color_channel": 1004,
    "frame": "square_g_05_001.png",
    "glow_frame": "square_g_05_glow_001.png",
    "gridH": 1,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "deco",
    "z": -7,
    "default_detail_color_channel": -1,
    "default_z_layer": 1,
    "default_z_order": -7
  },
  "165": {
    "type": "solid",
    "frame": "blockOutline_04_001.png",
    "gridW": 1,
    "gridH": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2,
    "children": [
      {
        "frame": "square_g_06_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1
      }
    ]
  },
  "166": {
    "can_color": true,
    "children": [
      {
        "frame": "square_g_07_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1
      },
      {
        "frame": "blockOutline_05_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": 1,
        "rot": 180
      }
    ],
    "default_base_color_channel": 1004,
    "frame": "blockOutline_05_001.png",
    "glow_frame": "blockOutline_05_glow_001.png",
    "gridH": 1,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "solid",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "167": {
    "can_color": true,
    "children": [
      {
        "frame": "square_g_08_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1
      },
      {
        "frame": "blockOutline_06_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": 1
      }
    ],
    "default_base_color_channel": 1004,
    "frame": "blockOutline_06_001.png",
    "glow_frame": "blockOutline_06_glow_001.png",
    "gridH": 1,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "solid",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "168": {
    "can_color": true,
    "children": [
      {
        "frame": "square_g_09_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1
      }
    ],
    "default_base_color_channel": 1004,
    "frame": "blockOutline_01_001.png",
    "glow_frame": "blockOutline_01_glow_001.png",
    "gridH": 1,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "solid",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "169": {
    "can_color": true,
    "children": [
      {
        "frame": "square_g_10_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1
      }
    ],
    "default_base_color_channel": 1004,
    "frame": "blockOutline_01_001.png",
    "glow_frame": "blockOutline_01_glow_001.png",
    "gridH": 1,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "solid",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "170": {
    "can_color": true,
    "default_base_color_channel": 1004,
    "frame": "square_h_01_001.png",
    "glow_frame": "square_h_01_glow_001.png",
    "gridH": 0.699999988079071,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "solid",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2,
    "editorOffsetY": 4.35
  },
  "171": {
    "can_color": true,
    "default_base_color_channel": 1004,
    "frame": "square_h_02_001.png",
    "glow_frame": "square_h_02_glow_001.png",
    "gridH": 0.699999988079071,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "solid",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2,
    "editorOffsetY": 4.35
  },
  "172": {
    "can_color": true,
    "default_base_color_channel": 1004,
    "frame": "square_h_03_001.png",
    "glow_frame": "square_h_03_glow_001.png",
    "gridH": 0.699999988079071,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "solid",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2,
    "editorOffsetY": 4.35
  },
  "173": {
    "can_color": true,
    "default_base_color_channel": 1004,
    "frame": "square_h_04_001.png",
    "glow_frame": "square_h_04_glow_001.png",
    "gridH": 1,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "solid",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "174": {
    "can_color": true,
    "default_base_color_channel": 1004,
    "frame": "square_h_05_001.png",
    "glow_frame": "square_h_05_glow_001.png",
    "gridH": 0.699999988079071,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "solid",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2,
    "editorOffsetY": 4.35
  },
  "175": {
    "can_color": true,
    "default_base_color_channel": 1004,
    "frame": "square_h_06_001.png",
    "glow_frame": "square_h_06_glow_001.png",
    "gridH": 1,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "solid",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "176": {
    "can_color": true,
    "default_base_color_channel": 1004,
    "frame": "square_h_07_001.png",
    "glow_frame": "square_h_07_glow_001.png",
    "gridH": 0.699999988079071,
    "gridW": 0.46666666865348816,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "solid",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2,
    "editorOffsetY": 4.35
  },
  "177": {
    "can_color": false,
    "default_base_color_channel": 1004,
    "frame": "iceSpike_01_001.png",
    "glow_frame": "iceSpike_01_glow_001.png",
    "gridH": 1,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "178": {
    "can_color": false,
    "default_base_color_channel": 1004,
    "frame": "iceSpike_02_001.png",
    "glow_frame": "iceSpike_02_glow_001.png",
    "gridH": 0.5333333611488342,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2,
    "editorOffsetY": -7.6
  },
  "179": {
    "can_color": false,
    "default_base_color_channel": 1004,
    "frame": "iceSpike_03_001.png",
    "glow_frame": "iceSpike_03_glow_001.png",
    "gridH": 0.6666666865348816,
    "gridW": 0.6666666865348816,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2,
    "editorOffsetY": -5.8
  },
  "180": {
    "can_color": true,
    "children": [
      {
        "frame": "d_cartwheel_01_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1,
        "rot": 90
      },
      {
        "frame": "d_cartwheel_01_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": 1,
        "rot": 180
      },
      {
        "frame": "d_cartwheel_01_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": 1,
        "rot": 270
      }
    ],
    "default_base_color_channel": 1006,
    "frame": "d_cartwheel_01_001.png",
    "glow_frame": "d_cartwheel_01_glow_001.png",
    "gridH": 0.9083333611488342,
    "gridW": 0.9083333611488342,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "deco",
    "z": 9,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 9
  },
  "181": {
    "can_color": true,
    "default_base_color_channel": 1006,
    "frame": "d_cartwheel_02_001.png",
    "glow_frame": "d_cartwheel_02_glow_001.png",
    "gridH": 1.2000000476837158,
    "gridW": 1.2083333730697632,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "deco",
    "z": 9,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 9
  },
  "182": {
    "can_color": true,
    "default_base_color_channel": 1006,
    "frame": "d_cartwheel_03_001.png",
    "glow_frame": "d_cartwheel_03_glow_001.png",
    "gridH": 0.8166666626930237,
    "gridW": 0.8166666626930237,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "deco",
    "z": 9,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 9
  },
  "183": {
    "can_color": true,
    "children": [
      {
        "frame": "blade_b_01_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1,
        "rot": 90
      },
      {
        "frame": "blade_b_01_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": 1,
        "rot": 180
      },
      {
        "frame": "blade_b_01_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": 1,
        "rot": 270
      }
    ],
    "default_base_color_channel": 1004,
    "frame": "blade_b_01_001.png",
    "glow_frame": "blade_b_01_glow_001.png",
    "gridH": 1.4333332777023315,
    "gridW": 1.4333332777023315,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "hitbox_radius": 15.300000190734863,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "184": {
    "can_color": true,
    "children": [
      {
        "frame": "blade_b_02_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1
      }
    ],
    "default_base_color_channel": 1004,
    "frame": "blade_b_02_001.png",
    "glow_frame": "blade_b_02_glow_001.png",
    "gridH": 1.7666666507720947,
    "gridW": 2,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "hitbox_radius": 20.399999618530273,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "185": {
    "can_color": true,
    "children": [
      {
        "frame": "blade_b_03_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1
      }
    ],
    "default_base_color_channel": 1004,
    "frame": "blade_b_03_001.png",
    "glow_frame": "blade_b_03_glow_001.png",
    "gridH": 1.3333333730697632,
    "gridW": 0.3333333432674408,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "hitbox_radius": 2.8500001430511475,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "186": {
    "can_color": true,
    "children": [
      {
        "frame": "blade_01_001.png",
        "glow_frame": "blade_01_glow_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1,
        "rot": 90
      },
      {
        "frame": "blade_01_001.png",
        "glow_frame": "blade_01_glow_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": 1,
        "rot": 180
      },
      {
        "frame": "blade_01_001.png",
        "glow_frame": "blade_01_glow_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": 1,
        "rot": 270
      }
    ],
    "default_base_color_channel": 1004,
    "frame": "blade_01_001.png",
    "glow_frame": "blade_01_glow_001.png",
    "gridH": 1.4333332777023315,
    "gridW": 1.4333332777023315,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "hitbox_radius": 32.29999923706055,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "187": {
    "can_color": true,
    "children": [
      {
        "frame": "blade_02_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1
      }
    ],
    "default_base_color_channel": 1004,
    "frame": "blade_02_001.png",
    "glow_frame": "blade_02_glow_001.png",
    "gridH": 2.0333333015441895,
    "gridW": 2.0333333015441895,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "hitbox_radius": 21.8700008392334,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "188": {
    "can_color": true,
    "children": [
      {
        "frame": "blade_03_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1
      }
    ],
    "default_base_color_channel": 1004,
    "frame": "blade_03_001.png",
    "glow_frame": "blade_03_glow_001.png",
    "gridH": 1.399999976158142,
    "gridW": 1.399999976158142,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "hitbox_radius": 12.600000381469727,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "190": {
    "can_color": true,
    "default_base_color_channel": 1006,
    "frame": "d_art_02_001.png",
    "glow_frame": "d_art_02_glow_001.png",
    "gridH": 1.6333333253860474,
    "gridW": 0.46666666865348816,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "deco",
    "z": 9,
    "default_detail_color_channel": -1,
    "default_z_layer": 3,
    "default_z_order": 9
  },
  "191": {
    "black": true,
    "can_color": true,
    "color_channel": "black",
    "default_base_color_channel": 1004,
    "frame": "fakeSpike_01_001.png",
    "glow_frame": "fakeSpike_01_glow_001.png",
    "gridH": 1,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "deco",
    "z": -4,
    "default_detail_color_channel": -1,
    "default_z_layer": 1,
    "default_z_order": -4
  },
  "192": {
    "can_color": true,
    "default_base_color_channel": 1004,
    "frame": "square_h_08_001.png",
    "glow_frame": "square_h_08_glow_001.png",
    "gridH": 0.699999988079071,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "solid",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2,
    "editorOffsetY": 4.35
  },
  "193": {
    "type": "soliddeco",
    "frame": "square_g_11_001.png",
    "gridH": 1,
    "gridW": 1,
    "default_detail_color_channel": -1,
    "default_z_layer": 1,
    "default_z_order": -7
  },
  "194": {
    "can_color": true,
    "default_base_color_channel": 1004,
    "frame": "square_h_09_001.png",
    "glow_frame": "square_h_09_glow_001.png",
    "gridH": 0.699999988079071,
    "gridW": 0.699999988079071,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "solid",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2,
    "editorOffsetY": 4.35
  },
  "195": {
    "type": "solid",
    "frame": "square_01_001.png",
    "gridW": 0.5,
    "gridH": 0.5,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "196": {
    "type": "solid",
    "frame": "plank_01_001.png",
    "gridW": 0.5,
    "gridH": 0.25,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2,
    "editorOffsetY": 8.15
  },
  "197": {
    "can_color": true,
    "default_base_color_channel": 1004,
    "frame": "square_h_10_001.png",
    "glow_frame": "square_h_10_glow_001.png",
    "gridH": 0.699999988079071,
    "gridW": 0.7333333492279053,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "solid",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2,
    "editorOffsetY": 4.35
  }
};
};
