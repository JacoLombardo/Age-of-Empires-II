let technologiesdata = {
    "technologies": [
        {
            "id": 1,
            "name": "Crossbowman",
            "description": "Upgrade to Crossbowman",
            "expansion": "Age of Kings",
            "age": "Castle",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/archery_range",
            "cost": {
                "Food": 125,
                "Gold": 75
            },
            "build_time": 35,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/archer"
            ]
        },
        {
            "id": 2,
            "name": "Thumb Ring",
            "description": "Faster reload time (10-20%) and 100% accuracy",
            "expansion": "Age of Kings",
            "age": "Castle",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/archery_range",
            "cost": {
                "Food": 300,
                "Wood": 250
            },
            "build_time": 45,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/archer",
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/cavalry_archer"
            ]
        },
        {
            "id": 3,
            "name": "Arbalest",
            "description": "Upgrade to Arbalest",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/archery_range",
            "cost": {
                "Food": 350,
                "Gold": 300
            },
            "build_time": 50,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/crossbowman"
            ]
        },
        {
            "id": 4,
            "name": "Elite Skirmisher",
            "description": "Upgrade to Elite Skirmisher",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/archery_range",
            "cost": {
                "Wood": 250,
                "Gold": 160
            },
            "build_time": 50,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/skirmisher"
            ]
        },
        {
            "id": 5,
            "name": "Heavy Cavalry Archer",
            "description": "Upgrade to Cavalry Archer",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/archery_range",
            "cost": {
                "Food": 900,
                "Gold": 500
            },
            "build_time": 50,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/cavalry_archer"
            ]
        },
        {
            "id": 6,
            "name": "Parthian Tactics",
            "description": "+1/+2 AR and Cavalry Archer +4 and Mangudai +2 agains pikeman",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/archery_range",
            "cost": {
                "Food": 200,
                "Gold": 250
            },
            "build_time": 65,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/cavalry_archer",
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/mangudai"
            ]
        },
        {
            "id": 7,
            "name": "Man At Arms",
            "description": "Upgrade to Man at Arms",
            "expansion": "Age of Kings",
            "age": "Feudal",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/barracks",
            "cost": {
                "Food": 40,
                "Gold": 40
            },
            "build_time": 40,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/militia"
            ]
        },
        {
            "id": 8,
            "name": "Tracking",
            "description": "+2 Line of Sight and +2 Search Radius",
            "expansion": "Age of Kings",
            "age": "Feudal",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/barracks",
            "cost": {
                "Food": 75
            },
            "build_time": 35,
            "applies_to": [
                "Infantry"
            ]
        },
        {
            "id": 9,
            "name": "Long Swordman",
            "description": "Upgrade to Long Swordman",
            "expansion": "Age of Kings",
            "age": "Castle",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/barracks",
            "cost": {
                "Food": 200,
                "Gold": 65
            },
            "build_time": 45,
            "applies_to": [
                "Man At Arms"
            ]
        },
        {
            "id": 10,
            "name": "Pikeman",
            "description": "Upgrade to Spearman",
            "expansion": "Age of Kings",
            "age": "Castle",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/barracks",
            "cost": {
                "Food": 215,
                "Gold": 90
            },
            "build_time": 45,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/spearman"
            ]
        },
        {
            "id": 11,
            "name": "Squires",
            "description": "Movement Rate * 1.1",
            "expansion": "Age of Kings",
            "age": "Castle",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/barracks",
            "cost": {
                "Food": 200
            },
            "build_time": 40,
            "applies_to": [
                "Infantry"
            ]
        },
        {
            "id": 12,
            "name": "Champion",
            "description": "Upgrade to Champion",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/barracks",
            "cost": {
                "Food": 750,
                "Gold": 350
            },
            "build_time": 100,
            "applies_to": [
                "Two Handed Swordsman"
            ]
        },
        {
            "id": 13,
            "name": "Elite Eagle Warrior",
            "description": "Upgrade to Elite Eagle Warrior",
            "expansion": "The Conquerors",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/barracks",
            "cost": {
                "Food": 800,
                "Gold": 500
            },
            "build_time": 40,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/eagle_warrior"
            ]
        },
        {
            "id": 14,
            "name": "Halberdier",
            "description": "Upgrade to Halberdier",
            "expansion": "The Conquerors",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/barracks",
            "cost": {
                "Food": 300,
                "Gold": 600
            },
            "build_time": 50,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/pikeman"
            ]
        },
        {
            "id": 15,
            "name": "Two Handed Swordsman",
            "description": "Upgrade to Long Swordsman",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/barracks",
            "cost": {
                "Food": 300,
                "Gold": 100
            },
            "build_time": 75,
            "applies_to": [
                "Long Swordman"
            ]
        },
        {
            "id": 16,
            "name": "Fletching",
            "description": "+1 attack +1 range +1 Line of sight +1 search radius",
            "expansion": "Age of Kings",
            "age": "Feudal",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/blacksmith",
            "cost": {
                "Food": 100,
                "Gold": 50
            },
            "build_time": 30,
            "applies_to": [
                "Arrow shooting units and structures"
            ]
        },
        {
            "id": 17,
            "name": "Forging",
            "description": "+1 attack",
            "expansion": "Age of Kings",
            "age": "Feudal",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/blacksmith",
            "cost": {
                "Food": 150
            },
            "build_time": 50,
            "applies_to": [
                "Infantry",
                "Cavalry"
            ]
        },
        {
            "id": 18,
            "name": "Padded Archer Armor",
            "description": "+1/+1 armor",
            "expansion": "Age of Kings",
            "age": "Feudal",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/blacksmith",
            "cost": {
                "Food": 100
            },
            "build_time": 40,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/archer",
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/cavalry_archer",
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/skirmisher",
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/hand_cannoneer",
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/conquistador"
            ]
        },
        {
            "id": 19,
            "name": "Scale Barding Armor",
            "description": "+1/+1 armor",
            "expansion": "Age of Kings",
            "age": "Feudal",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/blacksmith",
            "cost": {
                "Food": 150
            },
            "build_time": 45,
            "applies_to": [
                "Cavalry"
            ]
        },
        {
            "id": 20,
            "name": "Scale Mail Armor",
            "description": "+1/+1 armor",
            "expansion": "Age of Kings",
            "age": "Feudal",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/blacksmith",
            "cost": {
                "Food": 100
            },
            "build_time": 40,
            "applies_to": [
                "Infantry"
            ]
        },
        {
            "id": 21,
            "name": "Bodkin Arrow",
            "description": "+1 attack +1 range +1 Line of sight +1 search radius",
            "expansion": "Age of Kings",
            "age": "Castle",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/blacksmith",
            "cost": {
                "Food": 200,
                "Gold": 100
            },
            "build_time": 35,
            "applies_to": [
                "Arrow shooting units and structures"
            ]
        },
        {
            "id": 22,
            "name": "Chain Barding Armor",
            "description": "+1/+1 armor",
            "expansion": "Age of Kings",
            "age": "Castle",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/blacksmith",
            "cost": {
                "Food": 250,
                "Gold": 150
            },
            "build_time": 60,
            "applies_to": [
                "Cavalry"
            ]
        },
        {
            "id": 23,
            "name": "Chain Mail Armor",
            "description": "+1/+1 armor",
            "expansion": "Age of Kings",
            "age": "Castle",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/blacksmith",
            "cost": {
                "Food": 300,
                "Gold": 100
            },
            "build_time": 55,
            "applies_to": [
                "Infantry"
            ]
        },
        {
            "id": 24,
            "name": "Iron Casting",
            "description": "+1 attack",
            "expansion": "Age of Kings",
            "age": "Castle",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/blacksmith",
            "cost": {
                "Food": 220,
                "Gold": 120
            },
            "build_time": 70,
            "applies_to": [
                "Infantry",
                "Cavalry"
            ]
        },
        {
            "id": 25,
            "name": "Leather Archer Armor",
            "description": "+1/+1 armor",
            "expansion": "Age of Kings",
            "age": "Castle",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/blacksmith",
            "cost": {
                "Food": 150,
                "Gold": 150
            },
            "build_time": 55,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/archer",
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/cavalry_archer",
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/skirmisher",
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/hand_cannoneer",
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/conquistador"
            ]
        },
        {
            "id": 26,
            "name": "Blast Furnace",
            "description": "+2 attack",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/blacksmith",
            "cost": {
                "Food": 275,
                "Gold": 225
            },
            "build_time": 100,
            "applies_to": [
                "Infantry",
                "Cavalry"
            ]
        },
        {
            "id": 27,
            "name": "Bracer",
            "description": "+1 attack +1 range +1 Line of sight +1 search radius",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/blacksmith",
            "cost": {
                "Food": 300,
                "Gold": 200
            },
            "build_time": 40,
            "applies_to": [
                "Arrow shooting units and structures"
            ]
        },
        {
            "id": 28,
            "name": "Plate Barding Armor",
            "description": "+1/+2 armor",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/blacksmith",
            "cost": {
                "Food": 350,
                "Gold": 200
            },
            "build_time": 75,
            "applies_to": [
                "Cavalry"
            ]
        },
        {
            "id": 29,
            "name": "Plate Mail Armor",
            "description": "+1/+2 armor",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/blacksmith",
            "cost": {
                "Food": 300,
                "Gold": 150
            },
            "build_time": 70,
            "applies_to": [
                "Infantry"
            ]
        },
        {
            "id": 30,
            "name": "Ring Archer Armor",
            "description": "+1/+2 armor",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/blacksmith",
            "cost": {
                "Food": 250,
                "Gold": 250
            },
            "build_time": 70,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/archer",
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/cavalry_archer",
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/skirmisher",
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/hand_cannoneer",
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/conquistador"
            ]
        },
        {
            "id": 31,
            "name": "Conscription",
            "description": "Work Rate * 1.33 (Units created 25% faster)",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/castle",
            "cost": {
                "Food": 150,
                "Gold": 150
            },
            "build_time": 60,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/barracks",
                "Archer Range",
                "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/stable",
                "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/castle"
            ]
        },
        {
            "id": 32,
            "name": "Hoardings",
            "description": "+21% HP (HP*1.21 - 5808 HP)",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/castle",
            "cost": {
                "Food": 400,
                "Gold": 400
            },
            "build_time": 75,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/castle"
            ]
        },
        {
            "id": 33,
            "name": "Sappers",
            "description": "+15 attack vs buildings and stone defenses",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/castle",
            "cost": {
                "Food": 400,
                "Gold": 200
            },
            "build_time": 10,
            "applies_to": [
                "Villagers"
            ]
        },
        {
            "id": 34,
            "name": "Spies",
            "description": "Show enemy line of sight",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/castle",
            "cost": {
                "Gold": 200,
                "Enemy Villager": 1
            },
            "build_time": 1,
            "applies_to": [
                "Random map games"
            ]
        },
        {
            "id": 35,
            "name": "Treason",
            "description": "Glare enemy king's location for a few seconds",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/castle",
            "cost": {
                "Gold": 400
            },
            "build_time": 1,
            "applies_to": [
                "Regicide games"
            ]
        },
        {
            "id": 36,
            "name": "Careening",
            "description": "+0/+1 armor also transport ships carry +5 units",
            "expansion": "Age of Kings",
            "age": "Castle",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/dock",
            "cost": {
                "Food": 250,
                "Gold": 150
            },
            "build_time": 50,
            "applies_to": [
                "Ships"
            ]
        },
        {
            "id": 37,
            "name": "War Galley",
            "description": "Upgrade to War Galley",
            "expansion": "Age of Kings",
            "age": "Castle",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/dock",
            "cost": {
                "Food": 230,
                "Gold": 100
            },
            "build_time": 50,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/galley"
            ]
        },
        {
            "id": 38,
            "name": "Cannon Galleon",
            "description": "Allows creation of Cannon Galleons",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/dock",
            "cost": {
                "Food": 400,
                "Wood": 500
            },
            "build_time": 50,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/cannon_galleon"
            ]
        },
        {
            "id": 39,
            "name": "Dry Dock",
            "description": "Movement rate * 1.15 (+15%) and transport ships carry +10 units",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/dock",
            "cost": {
                "Food": 600,
                "Gold": 400
            },
            "build_time": 60,
            "applies_to": [
                "Ships"
            ]
        },
        {
            "id": 40,
            "name": "Elite Cannon Galleon",
            "description": "Upgrade to Elite Cannon Galleon",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/dock",
            "cost": {
                "Wood": 525,
                "Gold": 500
            },
            "build_time": 30,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/cannon_galleon"
            ]
        },
        {
            "id": 41,
            "name": "Elite Longboat",
            "description": "Upgrade to Elite Longboat",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/dock",
            "cost": {
                "Food": 750,
                "Gold": 475
            },
            "build_time": 60,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/longboat"
            ]
        },
        {
            "id": 42,
            "name": "Elite Turtle Ship",
            "description": "Upgrade to Elite Turtle Ship",
            "expansion": "The Conquerors",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/dock",
            "cost": {
                "Food": 1000,
                "Gold": 800
            },
            "build_time": 65,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/turtle_ship"
            ]
        },
        {
            "id": 43,
            "name": "Fast Fire Ship",
            "description": "Upgrade to Fast Fire Ship",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/dock",
            "cost": {
                "Wood": 280,
                "Gold": 250
            },
            "build_time": 50,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/fire_ship"
            ]
        },
        {
            "id": 44,
            "name": "Galleon",
            "description": "Upgrade to Galleon",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/dock",
            "cost": {
                "Food": 400,
                "Wood": 315
            },
            "build_time": 65,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/war_galley"
            ]
        },
        {
            "id": 45,
            "name": "Heavy Demolition Ship",
            "description": "Upgrade to Heavy Demolition Ship",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/dock",
            "cost": {
                "Wood": 200,
                "Gold": 300
            },
            "build_time": 50,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/demolition_ship"
            ]
        },
        {
            "id": 46,
            "name": "Shipwright",
            "description": "Wood cost * 0.8 (-20%) and build time * 0.65 (-35%)",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/dock",
            "cost": {
                "Wood": 200,
                "Food": 1000
            },
            "build_time": 60,
            "applies_to": [
                "Ships"
            ]
        },
        {
            "id": 47,
            "name": "Double Bit Axe",
            "description": "Work Rate x 1.2 (20% faster)",
            "expansion": "Age of Kings",
            "age": "Feudal",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/lumber_camp",
            "cost": {
                "Wood": 50,
                "Food": 100
            },
            "build_time": 25,
            "applies_to": [
                "Wood Chopper"
            ]
        },
        {
            "id": 48,
            "name": "Bow Saw",
            "description": "Work Rate x 1.2 (20% faster) which stacks with Double Bit Axe",
            "expansion": "Age of Kings",
            "age": "Castle",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/lumber_camp",
            "cost": {
                "Wood": 100,
                "Food": 150
            },
            "build_time": 50,
            "applies_to": [
                "Wood Chopper"
            ]
        },
        {
            "id": 49,
            "name": "Two Man Saw",
            "description": "Work Rate x 1.1 (10% faster) which stacks with Bow Saw",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/lumber_camp",
            "cost": {
                "Wood": 200,
                "Food": 300
            },
            "build_time": 100,
            "applies_to": [
                "Wood Chopper"
            ]
        },
        {
            "id": 50,
            "name": "Cartography",
            "description": "See ally line of sight",
            "expansion": "Age of Kings",
            "age": "Feudal",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/market",
            "cost": {
                "Food": 100,
                "Gold": 100
            },
            "build_time": 60
        },
        {
            "id": 51,
            "name": "Coinage",
            "description": "Tribute inefficiency - 0.2 (20% tribute fee from 30%)",
            "expansion": "Age of Kings",
            "age": "Feudal",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/market",
            "cost": {
                "Food": 150,
                "Gold": 50
            },
            "build_time": 50
        },
        {
            "id": 52,
            "name": "Banking",
            "description": "Tribute inefficiency - 0 (0% tribute fee from 20% coinage)",
            "expansion": "Age of Kings",
            "age": "Castle",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/market",
            "cost": {
                "Food": 200,
                "Gold": 100
            },
            "build_time": 50
        },
        {
            "id": 53,
            "name": "Caravan",
            "description": "Movement rate * 1.5 (50% faster)",
            "expansion": "Age of Kings",
            "age": "Castle",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/market",
            "cost": {
                "Food": 200,
                "Gold": 200
            },
            "build_time": 40,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/trade_cart",
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/trade_cog"
            ]
        },
        {
            "id": 54,
            "name": "Guilds",
            "description": "Commodity trading fee - 15% (from 30%)",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/market",
            "cost": {
                "Food": 300,
                "Gold": 200
            },
            "build_time": 50
        },
        {
            "id": 55,
            "name": "Horse Collar",
            "description": "Food amount +75",
            "expansion": "Age of Kings",
            "age": "Feudal",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/mill",
            "cost": {
                "Food": 75,
                "Wood": 75
            },
            "build_time": 20,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/farm"
            ]
        },
        {
            "id": 56,
            "name": "Heavy Plow",
            "description": "Food amount +75 and Farmers carry +1 food",
            "expansion": "Age of Kings",
            "age": "Castle",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/mill",
            "cost": {
                "Food": 125,
                "Wood": 125
            },
            "build_time": 40,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/farm",
                "Farmers"
            ]
        },
        {
            "id": 57,
            "name": "Crop Rotation",
            "description": "Food amount +175",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/mill",
            "cost": {
                "Food": 250,
                "Wood": 250
            },
            "build_time": 70,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/farm"
            ]
        },
        {
            "id": 58,
            "name": "Gold Mining",
            "description": "Work rate * 1.15 (15% faster)",
            "expansion": "Age of Kings",
            "age": "Feudal",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/mining_camp",
            "cost": {
                "Food": 100,
                "Wood": 75
            },
            "build_time": 30,
            "applies_to": [
                "Gold Miners"
            ]
        },
        {
            "id": 59,
            "name": "Stone Mining",
            "description": "Work rate * 1.15 (15% faster)",
            "expansion": "Age of Kings",
            "age": "Feudal",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/mining_camp",
            "cost": {
                "Food": 100,
                "Wood": 75
            },
            "build_time": 30,
            "applies_to": [
                "Stone Miners"
            ]
        },
        {
            "id": 60,
            "name": "Gold Shaft Mining",
            "description": "Work rate * 1.15 (15% faster) which stacks with Gold Mining",
            "expansion": "Age of Kings",
            "age": "Castle",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/mining_camp",
            "cost": {
                "Food": 200,
                "Wood": 150
            },
            "build_time": 75,
            "applies_to": [
                "Gold Miners"
            ]
        },
        {
            "id": 61,
            "name": "Stone Shaft Mining",
            "description": "Work rate * 1.15 (15% faster) which stacks with Stone Mining",
            "expansion": "Age of Kings",
            "age": "Castle",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/mining_camp",
            "cost": {
                "Food": 200,
                "Wood": 150
            },
            "build_time": 75,
            "applies_to": [
                "Stone Miners"
            ]
        },
        {
            "id": 62,
            "name": "Atonement",
            "description": "Monks convert enemy monks",
            "expansion": "Age of Kings",
            "age": "Castle",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/monastery",
            "cost": {
                "Gold": 325
            },
            "build_time": 40,
            "applies_to": [
                "Monks"
            ]
        },
        {
            "id": 63,
            "name": "Fervor",
            "description": "Monks have +15% speed carrying relics",
            "expansion": "Age of Kings",
            "age": "Castle",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/monastery",
            "cost": {
                "Gold": 140
            },
            "build_time": 50,
            "applies_to": [
                "Monks"
            ]
        },
        {
            "id": 64,
            "name": "Herbal Medicine",
            "description": "Garrisoned Units 4x healing speed",
            "expansion": "Age of Kings",
            "age": "Castle",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/monastery",
            "cost": {
                "Gold": 350
            },
            "build_time": 35,
            "applies_to": [
                "Garrisoned Units"
            ]
        },
        {
            "id": 65,
            "name": "Heresy",
            "description": "Converted units die",
            "expansion": "Age of Kings",
            "age": "Castle",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/monastery",
            "cost": {
                "Gold": 1000
            },
            "build_time": 60,
            "applies_to": [
                "Monks"
            ]
        },
        {
            "id": 66,
            "name": "Redemption",
            "description": "convert siege units and buildings",
            "expansion": "Age of Kings",
            "age": "Castle",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/monastery",
            "cost": {
                "Gold": 475
            },
            "build_time": 50,
            "applies_to": [
                "Monks"
            ]
        },
        {
            "id": 67,
            "name": "Sanctity",
            "description": "+15 health points",
            "expansion": "Age of Kings",
            "age": "Castle",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/monastery",
            "cost": {
                "Gold": 120
            },
            "build_time": 60,
            "applies_to": [
                "Monks"
            ]
        },
        {
            "id": 68,
            "name": "Block Printing",
            "description": "+3 range",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/monastery",
            "cost": {
                "Gold": 200
            },
            "build_time": 55,
            "applies_to": [
                "Monks"
            ]
        },
        {
            "id": 69,
            "name": "Faith",
            "description": "Units are harder to convert",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/monastery",
            "cost": {
                "Food": 750,
                "Gold": 1000
            },
            "build_time": 60,
            "applies_to": [
                "All units"
            ]
        },
        {
            "id": 70,
            "name": "Illumination",
            "description": "Faith regain 50% faster",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/monastery",
            "cost": {
                "Gold": 120
            },
            "build_time": 65,
            "applies_to": [
                "Monks"
            ]
        },
        {
            "id": 71,
            "name": "Theocracy",
            "description": "Only one monk needs to rest in a group",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/monastery",
            "cost": {
                "Gold": 200
            },
            "build_time": 75,
            "applies_to": [
                "Monks"
            ]
        },
        {
            "id": 72,
            "name": "Capped Ram",
            "description": "Upgrade to Capped Ram",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/siege_workshop",
            "cost": {
                "Food": 300
            },
            "build_time": 50,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/battering_ram"
            ]
        },
        {
            "id": 73,
            "name": "Heavy Scorpion",
            "description": "Upgrade to Heavy Scorpion",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/siege_workshop",
            "cost": {
                "Food": 1000,
                "Wood": 1100
            },
            "build_time": 50,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/scorpion"
            ]
        },
        {
            "id": 74,
            "name": "Onager",
            "description": "Upgrade to Onager",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/siege_workshop",
            "cost": {
                "Food": 800,
                "Gold": 500
            },
            "build_time": 75,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/mangonel"
            ]
        },
        {
            "id": 75,
            "name": "Siege Onager",
            "description": "Upgrade to Siege Onager",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/siege_workshop",
            "cost": {
                "Food": 1450,
                "Gold": 1000
            },
            "build_time": 150,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/onager"
            ]
        },
        {
            "id": 76,
            "name": "Siege Ram",
            "description": "Upgrade to Siege Ram",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/siege_workshop",
            "cost": {
                "Food": 1000
            },
            "build_time": 75,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/capped_ram"
            ]
        },
        {
            "id": 77,
            "name": "Bloodlines",
            "description": "+20 hit points",
            "expansion": "Age of Kings",
            "age": "Feudal",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/stable",
            "cost": {
                "Food": 150,
                "Gold": 100
            },
            "build_time": 50,
            "applies_to": [
                "Cavalry",
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/cavalry_archer",
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/conquistador"
            ]
        },
        {
            "id": 78,
            "name": "Husbandry",
            "description": "Movement rate * 1.1",
            "expansion": "Age of Kings",
            "age": "Castle",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/stable",
            "cost": {
                "Food": 250
            },
            "build_time": 50,
            "applies_to": [
                "Cavalry",
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/cavalry_archer",
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/conquistador"
            ]
        },
        {
            "id": 79,
            "name": "Ligth Cavalry",
            "description": "Upgrade to Light Cavalry",
            "expansion": "Age of Kings",
            "age": "Castle",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/stable",
            "cost": {
                "Food": 150,
                "Gold": 50
            },
            "build_time": 45,
            "applies_to": [
                "Scout"
            ]
        },
        {
            "id": 80,
            "name": "Cavalier",
            "description": "Upgrade to Cavalier",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/stable",
            "cost": {
                "Food": 300,
                "Gold": 300
            },
            "build_time": 100,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/knight"
            ]
        },
        {
            "id": 81,
            "name": "Heavy Camel",
            "description": "Upgrade to Heavy Camel",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/stable",
            "cost": {
                "Food": 325,
                "Gold": 360
            },
            "build_time": 125,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/camel"
            ]
        },
        {
            "id": 82,
            "name": "Hussar",
            "description": "Upgrade to Hussar",
            "expansion": "The Conquerors",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/stable",
            "cost": {
                "Food": 500,
                "Gold": 600
            },
            "build_time": 50,
            "applies_to": [
                "Ligth Cavalry"
            ]
        },
        {
            "id": 83,
            "name": "Paladin",
            "description": "Upgrade to Paladin",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/stable",
            "cost": {
                "Food": 1300,
                "Gold": 750
            },
            "build_time": 170,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/cavalier"
            ]
        },
        {
            "id": 84,
            "name": "Feudal Age",
            "description": "Advance to the Feudal Age",
            "expansion": "Age of Kings",
            "age": "Dark",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/town_center",
            "cost": {
                "Food": 500
            },
            "build_time": 130
        },
        {
            "id": 85,
            "name": "Loom",
            "description": "+15 hit points +1/+2 armor",
            "expansion": "Age of Kings",
            "age": "Dark",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/town_center",
            "cost": {
                "Gold": 50
            },
            "build_time": 25,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/villager"
            ]
        },
        {
            "id": 86,
            "name": "Castle Age",
            "description": "Advance to the Castle Age",
            "expansion": "Age of Kings",
            "age": "Feudal",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/town_center",
            "cost": {
                "Food": 800,
                "Gold": 200
            },
            "build_time": 160
        },
        {
            "id": 87,
            "name": "Town Watch",
            "description": "+4 Line of sight",
            "expansion": "Age of Kings",
            "age": "Feudal",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/town_center",
            "cost": {
                "Food": 75
            },
            "build_time": 25,
            "applies_to": [
                "Buildings",
                "Towers"
            ]
        },
        {
            "id": 88,
            "name": "Wheelbarrow",
            "description": "Movement rate * 1.1 and carrying capacity * 1.25",
            "expansion": "Age of Kings",
            "age": "Feudal",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/town_center",
            "cost": {
                "Food": 175,
                "Wood": 50
            },
            "build_time": 75,
            "applies_to": [
                "Villagers"
            ]
        },
        {
            "id": 89,
            "name": "Hand Cart",
            "description": "Movement rate * 1.1 and carrying capacity * 1.5",
            "expansion": "Age of Kings",
            "age": "Castle",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/town_center",
            "cost": {
                "Food": 305,
                "Wood": 200
            },
            "build_time": 55,
            "applies_to": [
                "Villagers"
            ]
        },
        {
            "id": 90,
            "name": "Imperial Age",
            "description": "Advance to the Imperial Age",
            "expansion": "Age of Kings",
            "age": "Castle",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/town_center",
            "cost": {
                "Food": 1000,
                "Gold": 800
            },
            "build_time": 190
        },
        {
            "id": 91,
            "name": "Town Patrol",
            "description": "+4 Line of sight",
            "expansion": "Age of Kings",
            "age": "Castle",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/town_center",
            "cost": {
                "Food": 300,
                "Gold": 200
            },
            "build_time": 40,
            "applies_to": [
                "Buildings",
                "Towers"
            ]
        },
        {
            "id": 92,
            "name": "Ballistics",
            "description": "Aim at the spot an enemy unit is moving towards instead of where it currently is",
            "expansion": "Age of Kings",
            "age": "Castle",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/university",
            "cost": {
                "Wood": 300,
                "Gold": 175
            },
            "build_time": 60,
            "applies_to": [
                "Arrow/Bolt-firing units",
                "Buildings",
                "Bombard Towers"
            ]
        },
        {
            "id": 93,
            "name": "Fortified Wall",
            "description": "Fortified Wall 3000 HP 12/12 armor 24 building armor and Gate 4000 HP 6/6 armor 20 building armor",
            "expansion": "Age of Kings",
            "age": "Castle",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/university",
            "cost": {
                "Wood": 100,
                "Food": 200
            },
            "build_time": 50,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/stone_wall",
                " Gate"
            ]
        },
        {
            "id": 94,
            "name": "Guard Tower",
            "description": "Upgrade to Guard Tower",
            "expansion": "Age of Kings",
            "age": "Castle",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/university",
            "cost": {
                "Food": 100,
                "Wood": 250
            },
            "build_time": 30,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/watch_tower"
            ]
        },
        {
            "id": 95,
            "name": "Heated Shot",
            "description": "Towers do 2.25 * attack bonus vs ships/camels and Castles do +4 damage against ships/camels",
            "expansion": "Age of Kings",
            "age": "Castle",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/university",
            "cost": {
                "Food": 350,
                "Gold": 100
            },
            "build_time": 30,
            "applies_to": [
                "Tower",
                "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/castle"
            ]
        },
        {
            "id": 96,
            "name": "Masonry",
            "description": "Hit points * 1.1 and +1/+1 armor and +3 building armor ",
            "expansion": "Age of Kings",
            "age": "Castle",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/university",
            "cost": {
                "Food": 150,
                "Wood": 175
            },
            "build_time": 50,
            "applies_to": [
                "Buildings",
                "Tower"
            ]
        },
        {
            "id": 97,
            "name": "Murder Holes",
            "description": "Towers and Castles minimum range removed",
            "expansion": "Age of Kings",
            "age": "Castle",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/university",
            "cost": {
                "Food": 200,
                "Stone": 200
            },
            "build_time": 60,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/castle",
                "Tower"
            ]
        },
        {
            "id": 98,
            "name": "Treadmill Crane",
            "description": "Builders work rate x 1.2 (20% faster builders - building get built 17% faster)",
            "expansion": "Age of Kings",
            "age": "Castle",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/university",
            "cost": {
                "Food": 300,
                "Wood": 200
            },
            "build_time": 40,
            "applies_to": [
                "Builder"
            ]
        },
        {
            "id": 99,
            "name": "Architecture",
            "description": "Hit points * 1.1 and +1/+1 armor and +3 building armor",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/university",
            "cost": {
                "Food": 300,
                "Wood": 200
            },
            "build_time": 70,
            "applies_to": [
                "Buildings",
                "Tower"
            ]
        },
        {
            "id": 100,
            "name": "Bombard Tower",
            "description": "Allow creation of Bombard Tower",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/university",
            "cost": {
                "Food": 800,
                "Wood": 400
            },
            "build_time": 60
        },
        {
            "id": 101,
            "name": "Chemistry",
            "description": "+1 pierce damage and projectile speed reduced from 3.5 MR to 2.9 MR for mangonels",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/university",
            "cost": {
                "Food": 300,
                "Gold": 200
            },
            "build_time": 100,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/archer",
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/skirmisher",
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/cavalry_archer",
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/galley",
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/longboat",
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/scorpion",
                "Tower"
            ]
        },
        {
            "id": 102,
            "name": "Keep",
            "description": "Upgrade to Keep",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/university",
            "cost": {
                "Food": 500,
                "Wood": 350
            },
            "build_time": 75,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/guard_tower"
            ]
        },
        {
            "id": 103,
            "name": "Siege Engineers",
            "description": "Siege weapons do 1.2 * damage vs buildings and +1 range for ranged siege",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/university",
            "cost": {
                "Food": 500,
                "Wood": 600
            },
            "build_time": 45,
            "applies_to": [
                "Siege Weapons"
            ]
        },
        {
            "id": 104,
            "name": "Anarchy",
            "description": "Allow the creation of Huskarls in barracks",
            "expansion": "Age of Kings",
            "age": "Castle",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/castle",
            "cost": {
                "Food": 450,
                "Gold": 250
            },
            "build_time": 60,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/goths"
            ]
        },
        {
            "id": 105,
            "name": "Artillery",
            "description": "Bombard units +2 range",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/castle",
            "cost": {
                "Food": 500,
                "Gold": 450
            },
            "build_time": 40,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/turks",
                "Tower",
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/galleon",
                "Cannon"
            ]
        },
        {
            "id": 106,
            "name": "Atheism",
            "description": "+100 years Wonder/Relic victory time and -50% Spies/Treason cost",
            "expansion": "The Conquerors",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/castle",
            "cost": {
                "Food": 500,
                "Gold": 500
            },
            "build_time": 60,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/huns"
            ]
        },
        {
            "id": 107,
            "name": "Bearded Axe",
            "description": "+1 range +1 Line of sight",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/castle",
            "cost": {
                "Food": 400,
                "Gold": 400
            },
            "build_time": 60,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/franks",
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/throwing_axeman"
            ]
        },
        {
            "id": 108,
            "name": "Berserkergang",
            "description": "Berserks regenerate 2x faster - 2 HP every 3 seconds",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/castle",
            "cost": {
                "Food": 500,
                "Gold": 850
            },
            "build_time": 40,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/vikings",
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/berserk"
            ]
        },
        {
            "id": 109,
            "name": "Crenellations",
            "description": "+3 range and garrisoned infantry fires arrows",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/castle",
            "cost": {
                "Food": 600,
                "Gold": 400
            },
            "build_time": 60,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/teutons",
                "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/castle"
            ]
        },
        {
            "id": 110,
            "name": "Drill",
            "description": "Siege Workshop units Movement Rate*1.5",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/castle",
            "cost": {
                "Food": 500,
                "Gold": 450
            },
            "build_time": 60,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/mongols"
            ]
        },
        {
            "id": 111,
            "name": "El Dorado",
            "description": "+40 Hit points",
            "expansion": "The Conquerors",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/castle",
            "cost": {
                "Food": 750,
                "Gold": 450
            },
            "build_time": 50,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/mayans",
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/eagle_warrior"
            ]
        },
        {
            "id": 112,
            "name": "Furor Celtica",
            "description": "Siege Workshop Units HP*1.5 (50% extra HP)",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/castle",
            "cost": {
                "Food": 750,
                "Gold": 450
            },
            "build_time": 50,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/celts"
            ]
        },
        {
            "id": 113,
            "name": "Garland Wars",
            "description": "Infantry +4 attack",
            "expansion": "The Conquerors",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/castle",
            "cost": {
                "Food": 450,
                "Gold": 750
            },
            "build_time": 60,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/aztecs"
            ]
        },
        {
            "id": 114,
            "name": "Kataparuto",
            "description": "Trebuchets RT * 0.75 (25% faster reload time and practically 33% faster firing) and also (un)pack 4x faster",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/castle",
            "cost": {
                "Food": 750,
                "Gold": 400
            },
            "build_time": 60,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/japanese",
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/trebuchet"
            ]
        },
        {
            "id": 115,
            "name": "Logistica",
            "description": "Cataphract +0.5 blast radius - trample damage (5 damage) and +6 attack against infantry",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/castle",
            "cost": {
                "Food": 1000,
                "Gold": 600
            },
            "build_time": 50,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/byzantines",
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/cataphract"
            ]
        },
        {
            "id": 116,
            "name": "Mahouts",
            "description": "War Elephant Movement Rate * 1.3 = 0.78",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/castle",
            "cost": {
                "Food": 300,
                "Gold": 300
            },
            "build_time": 50,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/persians",
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/war_elephant"
            ]
        },
        {
            "id": 117,
            "name": "Perfusion",
            "description": "Barracks working rate * 2 (unit creation time halved)",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/castle",
            "cost": {
                "Food": 400,
                "Gold": 600
            },
            "build_time": 40,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/goths",
                "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/barracks"
            ]
        },
        {
            "id": 118,
            "name": "Rocketry",
            "description": "Chu Ko Nu +2 pierce damage and Scorpion +4 pierce",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/castle",
            "cost": {
                "Food": 600,
                "Gold": 600
            },
            "build_time": 60,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/chinese",
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/chu_ko_nu",
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/scorpion"
            ]
        },
        {
            "id": 119,
            "name": "Shinkichon",
            "description": "Mangonel line +1 range",
            "expansion": "The Conquerors",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/castle",
            "cost": {
                "Food": 800,
                "Gold": 500
            },
            "build_time": 60,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/koreans",
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/mangonel"
            ]
        },
        {
            "id": 120,
            "name": "Supremacy",
            "description": "Villagers +6 attack and +40 hit points and +2/+2 armor / with loom: 80HP 9 attack 3/4 armor",
            "expansion": "The Conquerors",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/castle",
            "cost": {
                "Food": 400,
                "Gold": 250
            },
            "build_time": 60,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/spanish",
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/villager"
            ]
        },
        {
            "id": 121,
            "name": "Yeomen",
            "description": "Foot archers and skirmishers +1 range +1 line of sight and Towers +2 attack",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/castle",
            "cost": {
                "Food": 750,
                "Gold": 450
            },
            "build_time": 60,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/britons",
                "Foot Archer",
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/skirmisher",
                "Tower"
            ]
        },
        {
            "id": 122,
            "name": "Zealotry",
            "description": "Mameluke and Camels +30 HP",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/castle",
            "cost": {
                "Food": 750,
                "Gold": 800
            },
            "build_time": 50,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/saracens",
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/mameluke",
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/camel"
            ]
        },
        {
            "id": 123,
            "name": "Elite Berserk",
            "description": "Upgrade to Elite Berserk",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/castle",
            "cost": {
                "Food": 1300,
                "Gold": 550
            },
            "build_time": 45,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/berserk"
            ]
        },
        {
            "id": 124,
            "name": "Elite Cataphract",
            "description": "Upgrade to Elite Cataphract",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/castle",
            "cost": {
                "Food": 1600,
                "Gold": 800
            },
            "build_time": 50,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/cataphract"
            ]
        },
        {
            "id": 125,
            "name": "Elite Chu Ko Nu",
            "description": "Upgrade to Elite Chu Ko Nu",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/castle",
            "cost": {
                "Food": 760,
                "Gold": 760
            },
            "build_time": 50,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/chu_ko_nu"
            ]
        },
        {
            "id": 126,
            "name": "Elite Conquistador",
            "description": "Upgrade to Elite Conquistador",
            "expansion": "The Conquerors",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/castle",
            "cost": {
                "Food": 1200,
                "Gold": 600
            },
            "build_time": 60,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/conquistador"
            ]
        },
        {
            "id": 127,
            "name": "Elite Huskarl",
            "description": "Upgrade to Elite Huskarl",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/castle",
            "cost": {
                "Food": 1200,
                "Gold": 550
            },
            "build_time": 40,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/huskarl"
            ]
        },
        {
            "id": 128,
            "name": "Elite Jaguar Warrior",
            "description": "Upgrade to Elite Jaguar Warrior",
            "expansion": "The Conquerors",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/castle",
            "cost": {
                "Food": 1000,
                "Gold": 500
            },
            "build_time": 45,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/jaguar_warrior"
            ]
        },
        {
            "id": 129,
            "name": "Elite Janissary",
            "description": "Upgrade to Elite Janissary",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/castle",
            "cost": {
                "Food": 850,
                "Gold": 750
            },
            "build_time": 55,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/janissary"
            ]
        },
        {
            "id": 130,
            "name": "Elite Longbowman",
            "description": "Upgrade to Elite Longbowman",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/castle",
            "cost": {
                "Food": 850,
                "Gold": 850
            },
            "build_time": 60,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/longbowman"
            ]
        },
        {
            "id": 131,
            "name": "Elite Mameluke",
            "description": "Upgrade to Elite Mameluke",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/castle",
            "cost": {
                "Food": 600,
                "Gold": 500
            },
            "build_time": 50,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/mameluke"
            ]
        },
        {
            "id": 132,
            "name": "Elite Mangudai",
            "description": "Upgrade to Elite Mangudai",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/castle",
            "cost": {
                "Food": 1100,
                "Gold": 675
            },
            "build_time": 50,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/mangudai"
            ]
        },
        {
            "id": 133,
            "name": "Elite Plumed Archer",
            "description": "Upgrade to Elite Plumed Archer",
            "expansion": "The Conquerors",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/castle",
            "cost": {
                "Wood": 1000,
                "Food": 500
            },
            "build_time": 45,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/plumed_archer"
            ]
        },
        {
            "id": 134,
            "name": "Elite Samurai",
            "description": "Upgrade to Elite Samurai",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/castle",
            "cost": {
                "Food": 950,
                "Gold": 875
            },
            "build_time": 60,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/samurai"
            ]
        },
        {
            "id": 135,
            "name": "Elite Tarkan",
            "description": "Upgrade to Elite Tarkan",
            "expansion": "The Conquerors",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/castle",
            "cost": {
                "Food": 1000,
                "Gold": 500
            },
            "build_time": 45,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/tarkan"
            ]
        },
        {
            "id": 136,
            "name": "Elite Teutonic Knight",
            "description": "Upgrade to Elite Teutonic Knight",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/castle",
            "cost": {
                "Food": 1200,
                "Gold": 600
            },
            "build_time": 50,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/teutonic_knight"
            ]
        },
        {
            "id": 137,
            "name": "Elite Throwing Axeman",
            "description": "Upgrade to Elite Throwing Axeman",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/castle",
            "cost": {
                "Food": 1000,
                "Gold": 850
            },
            "build_time": 45,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/throwing_axeman"
            ]
        },
        {
            "id": 138,
            "name": "Elite War Elephant",
            "description": "Upgrade to Elite War Elephant",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/castle",
            "cost": {
                "Food": 1600,
                "Gold": 1200
            },
            "build_time": 75,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/war_elephant"
            ]
        },
        {
            "id": 139,
            "name": "Elite War Wagon",
            "description": "Upgrade to Elite War Wagon",
            "expansion": "The Conquerors",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/castle",
            "cost": {
                "Food": 1000,
                "Gold": 800
            },
            "build_time": 75,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/war_wagon"
            ]
        },
        {
            "id": 140,
            "name": "Elite Woad Raider",
            "description": "Upgrade to Elite Woad Raider",
            "expansion": "Age of Kings",
            "age": "Imperial",
            "develops_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/castle",
            "cost": {
                "Food": 1000,
                "Gold": 800
            },
            "build_time": 45,
            "applies_to": [
                "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/woad_raider"
            ]
        }
    ]
}