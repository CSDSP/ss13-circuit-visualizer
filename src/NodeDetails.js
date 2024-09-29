export const DataTypes = Object.freeze({
    ANY: "any",
    STRING: "string",
    COLOR: "color",
    NUMBER: "number",
    DIR: "dir",
    BOOLEAN: "boolean",
    REF: "ref",
    LIST: "list",
    PULSE: "pulse",
    NULL: "null"
});

export const NodeDetails = {
    "power thingy": {
        "category": "Power - Passive",
        "desc": "Does power stuff.",
        "complexity": 5,
        "size": 1,
        "inputs": {},
        "outputs": {},
    },
    "tiny photovoltaic cell": {
        "category": "Power - Passive",
        "desc": "It's a very tiny solar cell, generally used in calculators. This cell generates 1 W of power in optimal lighting conditions. Less light will result in less power being generated.",
        "complexity": 8,
        "size": 1,
        "inputs": {},
        "outputs": {},
    },
    "starter": {
        "category": "Power - Passive",
        "desc": "This tiny circuit will send a pulse right after the device is turned on, or when power is restored to it.",
        "complexity": 1,
        "size": 1,
        "inputs": {},
        "outputs": {
            "pulse out": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        }
    },
    "tesla power relay": {
        "category": "Power - Passive",
        "desc": "A seemingly enigmatic device which connects to nearby APCs wirelessly and draws power from them. The siphon drains 50 W of power from an APC in the same room as it as long as it has charge remaining. It will always drain from the 'equipment' power channel.",
        "complexity": 7,
        "size": 1,
        "inputs": {},
        "outputs": {}
    },
    "large tesla power relay": {
        "category": "Power - Passive",
        "desc": "A seemingly enigmatic device which connects to nearby APCs wirelessly and draws power from them, now in industrial size! The siphon drains 2 kW of power from an APC in the same room as it as long as it has charge remaining. It will always drain from the 'equipment' power channel.",
        "complexity": 15,
        "size": 1,
        "inputs": {},
        "outputs": {}
    },
    "fuel cell": {
        "category": "Power - Passive",
        "desc": "Produces electricity from chemicals. This is effectively an internal beaker. It will consume and produce power from plasma, slime jelly, welding fuel, carbon,ethanol, nutriment, and blood in order of decreasing efficiency. It will consume fuel only if the battery can take more energy. But no fuel can be compared with blood of living human.",
        "complexity": 4,
        "size": 1,
        "inputs": {
            "push ref": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "volume used": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "self reference": {
                "dataType": DataTypes.REF,
                "index": 1
            }
        }
    },
    "addition circuit": {
        "category": "Arithmetic",
        "desc": "This circuit can add numbers together. The order that the calculation goes is;<br>result = ((((A + B) + C) + D) ... ) and so on, until all pins have been added. Null pins are ignored.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "A": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "B": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "C": {
                "dataType": DataTypes.NUMBER,
                "index": 2
            },
            "D": {
                "dataType": DataTypes.NUMBER,
                "index": 3
            },
            "E": {
                "dataType": DataTypes.NUMBER,
                "index": 4
            },
            "F": {
                "dataType": DataTypes.NUMBER,
                "index": 5
            },
            "G": {
                "dataType": DataTypes.NUMBER,
                "index": 6
            },
            "H": {
                "dataType": DataTypes.NUMBER,
                "index": 7
            },
            "compute": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "result": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "on computed": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "subtraction circuit": {
        "category": "Arithmetic",
        "desc": "This circuit can subtract numbers. The order that the calculation goes is;<br>result = ((((A - B) - C) - D) ... ) and so on, until all pins have been subtracted. Null pins are ignored.  Pin A <b>must</b> be a number, or the circuit will not function.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "A": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "B": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "C": {
                "dataType": DataTypes.NUMBER,
                "index": 2
            },
            "D": {
                "dataType": DataTypes.NUMBER,
                "index": 3
            },
            "E": {
                "dataType": DataTypes.NUMBER,
                "index": 4
            },
            "F": {
                "dataType": DataTypes.NUMBER,
                "index": 5
            },
            "G": {
                "dataType": DataTypes.NUMBER,
                "index": 6
            },
            "H": {
                "dataType": DataTypes.NUMBER,
                "index": 7
            },
            "compute": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "result": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "on computed": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "multiplication circuit": {
        "category": "Arithmetic",
        "desc": "This circuit can multiply numbers. The order that the calculation goes is;<br>result = ((((A * B) * C) * D) ... ) and so on, until all pins have been multiplied. Null pins are ignored. Pin A <b>must</b> be a number, or the circuit will not function.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "A": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "B": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "C": {
                "dataType": DataTypes.NUMBER,
                "index": 2
            },
            "D": {
                "dataType": DataTypes.NUMBER,
                "index": 3
            },
            "E": {
                "dataType": DataTypes.NUMBER,
                "index": 4
            },
            "F": {
                "dataType": DataTypes.NUMBER,
                "index": 5
            },
            "G": {
                "dataType": DataTypes.NUMBER,
                "index": 6
            },
            "H": {
                "dataType": DataTypes.NUMBER,
                "index": 7
            },
            "compute": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "result": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "on computed": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "division circuit": {
        "category": "Arithmetic",
        "desc": "This circuit can divide numbers. Don't even think about trying to divide by zero! The order that the calculation goes is;<br>result = ((((A / B) / C) / D) ... ) and so on, until all pins have been divided. Null pins, and pins containing 0, are ignored. Pin A <b>must</b> be a number or the circuit will not function.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "A": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "B": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "C": {
                "dataType": DataTypes.NUMBER,
                "index": 2
            },
            "D": {
                "dataType": DataTypes.NUMBER,
                "index": 3
            },
            "E": {
                "dataType": DataTypes.NUMBER,
                "index": 4
            },
            "F": {
                "dataType": DataTypes.NUMBER,
                "index": 5
            },
            "G": {
                "dataType": DataTypes.NUMBER,
                "index": 6
            },
            "H": {
                "dataType": DataTypes.NUMBER,
                "index": 7
            },
            "compute": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "result": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "on computed": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "exponent circuit": {
        "category": "Arithmetic",
        "desc": "Outputs A to the power of B.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "A": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "B": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "compute": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "result": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "on computed": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "sign circuit": {
        "category": "Arithmetic",
        "desc": "This circuit can tell if a number is positive, negative, or zero. Will output 1, -1, or 0, depending on if A is a positive number, a negative number, or zero, respectively.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "A": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "compute": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "result": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "on computed": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "round circuit": {
        "category": "Arithmetic",
        "desc": "Rounds A to the nearest B multiple of A. If B is not given a number, it will output the floor of A instead.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "A": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "B": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "compute": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "result": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "on computed": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "absolute circuit": {
        "category": "Arithmetic",
        "desc": "This outputs a non-negative version of the number you put in. This may also be thought of as its distance from zero.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "A": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "compute": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "result": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "on computed": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "average circuit": {
        "category": "Arithmetic",
        "desc": "This circuit is of average quality. It will compute the average of the numbers you give it. Note that null pins are ignored, whereas a pin containing 0 is included in the averaging calculation.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "A": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "B": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "C": {
                "dataType": DataTypes.NUMBER,
                "index": 2
            },
            "D": {
                "dataType": DataTypes.NUMBER,
                "index": 3
            },
            "E": {
                "dataType": DataTypes.NUMBER,
                "index": 4
            },
            "F": {
                "dataType": DataTypes.NUMBER,
                "index": 5
            },
            "G": {
                "dataType": DataTypes.NUMBER,
                "index": 6
            },
            "H": {
                "dataType": DataTypes.NUMBER,
                "index": 7
            },
            "compute": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "result": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "on computed": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "pi constant circuit": {
        "category": "Arithmetic",
        "desc": "Not recommended for cooking. Outputs '3.1416' when it receives a pulse.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "compute": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "result": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "on computed": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        },
    },
    "random number generator circuit": {
        "category": "Arithmetic",
        "desc": "This gives a random (integer) number between values A and B inclusive. 'Inclusive' means that the upper bound is included in the range of numbers, e.g. L = 1 and H = 3 will allow for outputs of 1, 2, or 3. H being the higher number is not <i>strictly</i> required.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "L": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "H": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "compute": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "result": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "on computed": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "square root circuit": {
        "category": "Arithmetic",
        "desc": "This outputs the square root of the number you input.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "A": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "compute": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "result": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "on computed": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "modulo circuit": {
        "category": "Arithmetic",
        "desc": "Gets the remainder of A / B.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "A": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "B": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "compute": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "result": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "on computed": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "max circuit": {
        "category": "Arithmetic",
        "desc": "This circuit sends out the highest number. The highest number is put out. Null is ignored.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "A": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "B": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "C": {
                "dataType": DataTypes.NUMBER,
                "index": 2
            },
            "D": {
                "dataType": DataTypes.NUMBER,
                "index": 3
            },
            "E": {
                "dataType": DataTypes.NUMBER,
                "index": 4
            },
            "F": {
                "dataType": DataTypes.NUMBER,
                "index": 5
            },
            "G": {
                "dataType": DataTypes.NUMBER,
                "index": 6
            },
            "H": {
                "dataType": DataTypes.NUMBER,
                "index": 7
            },
            "compute": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "result": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "on computed": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "min circuit": {
        "category": "Arithmetic",
        "desc": "This circuit sends out the smallest number. The smallest number is put out. Null is ignored. In case no number is found, 0 is given out.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "A": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "B": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "C": {
                "dataType": DataTypes.NUMBER,
                "index": 2
            },
            "D": {
                "dataType": DataTypes.NUMBER,
                "index": 3
            },
            "E": {
                "dataType": DataTypes.NUMBER,
                "index": 4
            },
            "F": {
                "dataType": DataTypes.NUMBER,
                "index": 5
            },
            "G": {
                "dataType": DataTypes.NUMBER,
                "index": 6
            },
            "H": {
                "dataType": DataTypes.NUMBER,
                "index": 7
            },
            "compute": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "result": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "on computed": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "gas pump": {
        "category": "Atmospherics",
        "desc": "Somehow moves gases between two tanks, canisters, and other gas containers.  Use negative pressure to move air from target to source. Note that only part of the gas is moved on each transfer, so multiple activations will be necessary to achieve target pressure. The pressure limit for circuit pumps is 2533 kPa.",
        "complexity": 10,
        "size": 7,
        "inputs": {
            "source": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "target": {
                "dataType": DataTypes.REF,
                "index": 1
            },
            "target pressure": {
                "dataType": DataTypes.NUMBER,
                "index": 2
            },
            "transfer": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "self reference": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "pressure": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "on transfer": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "volume pump": {
        "category": "Atmospherics",
        "desc": "Moves gases between two tanks, canisters, and other gas containers by using their volume, up to 200 L/s.  Use negative volume to move air from target to source. Note that only part of the gas is moved on each transfer. Its maximum pumping volume is capped at 1000kPa. Use negative pressure to move air from target to source. Note that only part of the gas is moved on each transfer, so multiple activations will be necessary to achieve target pressure. The pressure limit for circuit pumps is 2533 kPa.",
        "complexity": 10,
        "size": 7,
        "inputs": {
            "source": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "target": {
                "dataType": DataTypes.REF,
                "index": 1
            },
            "transfer volume": {
                "dataType": DataTypes.NUMBER,
                "index": 2
            },
            "transfer": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "self reference": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "pressure": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "on transfer": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "gas vent": {
        "category": "Atmospherics",
        "desc": "Moves gases between the environment and adjacent gas containers. Use negative volume to move air from target to environment. Note that only part of the gas is moved on each transfer. Unlike the gas pump, this one keeps pumping even further to pressures of 9000 pKa and it is not advised to use it on tank circuits. Use negative pressure to move air from target to source. Note that only part of the gas is moved on each transfer, so multiple activations will be necessary to achieve target pressure. The pressure limit for circuit pumps is 2533 kPa.",
        "complexity": 10,
        "size": 7,
        "inputs": {
            "container": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "target pressure": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "transfer": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "self reference": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "pressure": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "on transfer": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "gas filter": {
        "category": "Atmospherics",
        "desc": "Filters one gas out of a mixture. Remember to properly spell and capitalize the filtered gas name. Note that only part of the gas is moved on each transfer, so multiple activations will be necessary to achieve target pressure. The pressure limit for circuit pumps is 2533 kPa.",
        "complexity": 20,
        "size": 8,
        "inputs": {
            "source": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "filtered output": {
                "dataType": DataTypes.REF,
                "index": 1
            },
            "contaminants output": {
                "dataType": DataTypes.REF,
                "index": 2
            },
            "wanted gases": {
                "dataType": DataTypes.LIST,
                "index": 3
            },
            "target pressure": {
                "dataType": DataTypes.NUMBER,
                "index": 4
            },
            "transfer": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "self reference": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "pressure": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "on transfer": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "gas mixer": {
        "category": "Atmospherics",
        "desc": "Mixes 2 different types of gases.  Use negative pressure to move air from target to source. Note that only part of the gas is moved on each transfer, so multiple activations will be necessary to achieve target pressure. The pressure limit for circuit pumps is 2533 kPa.",
        "complexity": 20,
        "size": 8,
        "inputs": {
            "first source": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "second source": {
                "dataType": DataTypes.REF,
                "index": 1
            },
            "output": {
                "dataType": DataTypes.REF,
                "index": 2
            },
            "first source percentage": {
                "dataType": DataTypes.NUMBER,
                "index": 3
            },
            "target pressure": {
                "dataType": DataTypes.NUMBER,
                "index": 4
            },
            "transfer": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "self reference": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "pressure": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "on transfer": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "integrated connector": {
        "category": "Atmospherics",
        "desc": "Creates an airtight seal with standard connectors found on the floor, allowing the assembly to exchange gases with a pipe network. This circuit will automatically attempt to locate and connect to ports on the floor beneath it when activated. You <b>must</b> set a target before connecting.",
        "complexity": 10,
        "size": 7,
        "inputs": {
            "target": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "toggle connection": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "self reference": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "pressure": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "on connected": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "on connection failed": {
                "dataType": DataTypes.PULSE,
                "index": 2
            },
            "on disconnected": {
                "dataType": DataTypes.PULSE,
                "index": 3
            }
        }
    },
    "integrated tank": {
        "category": "Atmospherics",
        "desc": "A small tank for the storage of gases. Take care not to pressurize it above 2533 kPa, or else it will break.",
        "complexity": 10,
        "size": 4,
        "inputs": {
            "push ref": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "self reference": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "pressure": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            }
        }
    },
    "large integrated tank": {
        "category": "Atmospherics",
        "desc": "A less small tank for the storage of gases. Take care not to pressurize it above 2533 kPa, or else it will break.",
        "complexity": 10,
        "size": 12,
        "inputs": {
            "push ref": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "self reference": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "pressure": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            }
        }
    },
    "freezer tank": {
        "category": "Atmospherics",
        "desc": "Cools the gas it contains to a preset temperature. Take care not to pressurize it above 2533 kPa, or else it will break.",
        "complexity": 10,
        "size": 8,
        "inputs": {
            "target temperature": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "on": {
                "dataType": DataTypes.BOOLEAN,
                "index": 1
            },
            "push ref": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "self reference": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "pressure": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            }
        }
    },
    "heater tank": {
        "category": "Atmospherics",
        "desc": "Heats the gas it contains to a preset temperature. Take care not to pressurize it above 2533 kPa, or else it will break.",
        "complexity": 10,
        "size": 8,
        "inputs": {
            "target temperature": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "on": {
                "dataType": DataTypes.BOOLEAN,
                "index": 1
            },
            "push ref": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "self reference": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "pressure": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            }
        }
    },
    "atmospheric cooler circuit": {
        "category": "Atmospherics",
        "desc": "Cools the air around it.",
        "complexity": 10,
        "size": 13,
        "inputs": {
            "target temperature": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "on": {
                "dataType": DataTypes.BOOLEAN,
                "index": 1
            }
        },
        "outputs": {
            "self reference": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "pressure": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            }
        }
    },
    "atmospheric heater circuit": {
        "category": "Atmospherics",
        "desc": "Heats the air around it.",
        "complexity": 10,
        "size": 13,
        "inputs": {
            "target temperature": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "on": {
                "dataType": DataTypes.BOOLEAN,
                "index": 1
            }
        },
        "outputs": {
            "self reference": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "pressure": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            }
        }
    },
    "tank slot": {
        "category": "Atmospherics",
        "desc": "Lets you add a tank to your assembly and remove it even when the assembly is closed. It can help you extract gases easier.",
        "complexity": 25,
        "size": 30,
        "inputs": {
            "push ref": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "pressure used": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "current tank": {
                "dataType": DataTypes.REF,
                "index": 1
            },
            "on insert": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "on remove": {
                "dataType": DataTypes.PULSE,
                "index": 2
            }
        }
    },
    "button": {
        "category": "Input",
        "desc": "This tiny button must do something, right?",
        "complexity": 1,
        "size": 1,
        "inputs": {},
        "outputs": {
            "on pressed": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        }
    },
    "toggle button": {
        "category": "Input",
        "desc": "It toggles on, off, on, off...",
        "complexity": 1,
        "size": 1,
        "inputs": {},
        "outputs": {
            "on": {
                "dataType": DataTypes.BOOLEAN,
                "index": 0
            },
            "on toggle": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        }
    },
    "number pad": {
        "category": "Input",
        "desc": "This small number pad allows someone to input a number into the system.",
        "complexity": 2,
        "size": 1,
        "inputs": {},
        "outputs": {
            "number entered": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "on entered": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        }
    },
    "text pad": {
        "category": "Input",
        "desc": "This small text pad allows someone to input a string into the system.",
        "complexity": 2,
        "size": 1,
        "inputs": {},
        "outputs": {
            "string entered": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "on entered": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        }
    },
    "color pad": {
        "category": "Input",
        "desc": "This small color pad allows someone to input a hexadecimal color into the system.",
        "complexity": 2,
        "size": 1,
        "inputs": {},
        "outputs": {
            "color entered": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "on entered": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        }
    },
    "integrated medical analyser": {
        "category": "Input",
        "desc": "A very small version of the common medical analyser. This allows the machine to know how healthy someone is.",
        "complexity": 4,
        "size": 1,
        "inputs": {
            "target": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "scan": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "total health %": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "total missing health": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "on scanned": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "integrated adv. medical analyser": {
        "category": "Input",
        "desc": "A very small version of the medbot's medical analyser. This allows the machine to know how healthy someone is. This type is much more precise, allowing the machine to know much more about the target than a normal analyzer.",
        "complexity": 12,
        "size": 1,
        "inputs": {
            "target": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "scan": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "total health %": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "total missing health": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "brute damage": {
                "dataType": DataTypes.NUMBER,
                "index": 2
            },
            "burn damage": {
                "dataType": DataTypes.NUMBER,
                "index": 3
            },
            "tox damage": {
                "dataType": DataTypes.NUMBER,
                "index": 4
            },
            "oxy damage": {
                "dataType": DataTypes.NUMBER,
                "index": 5
            },
            "clone damage": {
                "dataType": DataTypes.NUMBER,
                "index": 6
            },
            "on scanned": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "slime_scanner": {
        "category": "Input",
        "desc": "A very small version of the xenobio analyser. This allows the machine to know every needed properties of slime. Output mutation list is non-associative.",
        "complexity": 12,
        "size": 1,
        "inputs": {
            "target": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "scan": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "colour": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "adult": {
                "dataType": DataTypes.BOOLEAN,
                "index": 1
            },
            "nutrition": {
                "dataType": DataTypes.NUMBER,
                "index": 2
            },
            "charge": {
                "dataType": DataTypes.NUMBER,
                "index": 3
            },
            "health": {
                "dataType": DataTypes.NUMBER,
                "index": 4
            },
            "possible mutation": {
                "dataType": DataTypes.LIST,
                "index": 5
            },
            "genetic destability": {
                "dataType": DataTypes.NUMBER,
                "index": 6
            },
            "slime core amount": {
                "dataType": DataTypes.NUMBER,
                "index": 7
            },
            "Growth progress": {
                "dataType": DataTypes.NUMBER,
                "index": 8
            },
            "on scanned": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "integrated plant analyzer": {
        "category": "Input",
        "desc": "A very small version of the plant analyser. This allows the machine to know all valuable parameters of plants in trays. It can only scan plants, not seeds or fruits.",
        "complexity": 12,
        "size": 1,
        "inputs": {
            "target": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "scan": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "plant type": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "age": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "potency": {
                "dataType": DataTypes.NUMBER,
                "index": 2
            },
            "yield": {
                "dataType": DataTypes.NUMBER,
                "index": 3
            },
            "Maturation speed": {
                "dataType": DataTypes.NUMBER,
                "index": 4
            },
            "Production speed": {
                "dataType": DataTypes.NUMBER,
                "index": 5
            },
            "Endurance": {
                "dataType": DataTypes.NUMBER,
                "index": 6
            },
            "Lifespan": {
                "dataType": DataTypes.NUMBER,
                "index": 7
            },
            "Weed Growth Rate": {
                "dataType": DataTypes.NUMBER,
                "index": 8
            },
            "Weed Vulnerability": {
                "dataType": DataTypes.NUMBER,
                "index": 9
            },
            "Weed level": {
                "dataType": DataTypes.NUMBER,
                "index": 10
            },
            "Pest level": {
                "dataType": DataTypes.NUMBER,
                "index": 11
            },
            "Toxicity level": {
                "dataType": DataTypes.NUMBER,
                "index": 12
            },
            "Water level": {
                "dataType": DataTypes.NUMBER,
                "index": 13
            },
            "Nutrition level": {
                "dataType": DataTypes.NUMBER,
                "index": 14
            },
            "harvest": {
                "dataType": DataTypes.NUMBER,
                "index": 15
            },
            "dead": {
                "dataType": DataTypes.NUMBER,
                "index": 16
            },
            "plant health": {
                "dataType": DataTypes.NUMBER,
                "index": 17
            },
            "self sustaining": {
                "dataType": DataTypes.NUMBER,
                "index": 18
            },
            "using irrigation": {
                "dataType": DataTypes.NUMBER,
                "index": 19
            },
            "connected trays": {
                "dataType": DataTypes.LIST,
                "index": 20
            },
            "on scanned": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "gene scanner": {
        "category": "Input",
        "desc": "This circuit will scan the target plant for traits and reagent genes. Output is non-associative. This allows the machine to scan plants in trays for reagent and trait genes. It can only scan plants, not seeds or fruits.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "target": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "scan": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "traits": {
                "dataType": DataTypes.LIST,
                "index": 0
            },
            "reagents": {
                "dataType": DataTypes.LIST,
                "index": 1
            },
            "on scanned": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "examiner": {
        "category": "Input",
        "desc": "It's a little machine vision system. It can return the name, description, distance, relative coordinates, total amount of reagents, maximum amount of reagents, density, and opacity of the referenced object.",
        "complexity": 6,
        "size": 1,
        "inputs": {
            "target": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "scan": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "name": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "description": {
                "dataType": DataTypes.STRING,
                "index": 1
            },
            "X": {
                "dataType": DataTypes.NUMBER,
                "index": 2
            },
            "Y": {
                "dataType": DataTypes.NUMBER,
                "index": 3
            },
            "distance": {
                "dataType": DataTypes.NUMBER,
                "index": 4
            },
            "max reagents": {
                "dataType": DataTypes.NUMBER,
                "index": 5
            },
            "amount of reagents": {
                "dataType": DataTypes.NUMBER,
                "index": 6
            },
            "density": {
                "dataType": DataTypes.BOOLEAN,
                "index": 7
            },
            "opacity": {
                "dataType": DataTypes.BOOLEAN,
                "index": 8
            },
            "occupied turf": {
                "dataType": DataTypes.REF,
                "index": 9
            },
            "on scanned": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "not scanned": {
                "dataType": DataTypes.PULSE,
                "index": 2
            }
        }
    },
    "Tile pointer": {
        "category": "Input",
        "desc": "This circuit will get a tile ref with the provided absolute coordinates. If the machine\tcannot see the target, it will not be able to calculate the correct direction.This circuit only works while inside an assembly.",
        "complexity": 5,
        "size": 1,
        "inputs": {
            "X": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "Y": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "calculate dir": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "tile": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "on calculated": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "not calculated": {
                "dataType": DataTypes.PULSE,
                "index": 2
            }
        }
    },
    "tile analyzer": {
        "category": "Input",
        "desc": "This circuit can analyze the contents of the scanned turf, and can read letters on the turf.",
        "complexity": 5,
        "size": 1,
        "inputs": {
            "target": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "scan": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "located ref": {
                "dataType": DataTypes.LIST,
                "index": 0
            },
            "Written letters": {
                "dataType": DataTypes.STRING,
                "index": 1
            },
            "area": {
                "dataType": DataTypes.STRING,
                "index": 2
            },
            "on scanned": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "not scanned": {
                "dataType": DataTypes.PULSE,
                "index": 2
            }
        }
    },
    "local locator": {
        "category": "Input",
        "desc": "This is needed for certain devices that demand a reference for a target to act upon. This type only locates something that is holding the machine containing it.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "locate": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "located ref": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "is ground": {
                "dataType": DataTypes.BOOLEAN,
                "index": 1
            },
            "is creature": {
                "dataType": DataTypes.BOOLEAN,
                "index": 2
            },
            "on scanned": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "adjacent locator": {
        "category": "Input",
        "desc": "This is needed for certain devices that demand a reference for a target to act upon. This type only locates something that is standing up to a meter away from the machine. The first pin requires a ref to the kind of object that you want the locator to acquire. This means that it will give refs to nearby objects that are similar. If more than one valid object is found nearby, it will choose one of them at random.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "desired type ref": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "locate": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "located ref": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "found": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "not found": {
                "dataType": DataTypes.PULSE,
                "index": 2
            }
        }
    },
    "list advanced locator": {
        "category": "Input",
        "desc": "This is needed for certain devices that demand list of names for a target to act upon. This type locates something that is standing in given radius of up to 8 meters. Output is non-associative. Input will only consider keys if associative. The first pin requires a list of the kinds of objects that you want the locator to acquire. It will locate nearby objects by name and description, and will then provide a list of all found objects which are similar. The second pin is a radius.",
        "complexity": 6,
        "size": 1,
        "inputs": {
            "desired type ref": {
                "dataType": DataTypes.LIST,
                "index": 0
            },
            "radius": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "locate": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "located ref": {
                "dataType": DataTypes.LIST,
                "index": 0
            },
            "found": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "not found": {
                "dataType": DataTypes.PULSE,
                "index": 2
            }
        }
    },
    "advanced locator": {
        "category": "Input",
        "desc": "This is needed for certain devices that demand a reference for a target to act upon. This type locates something that is standing in given radius of up to 8 meters The first pin requires a ref to the kind of object that you want the locator to acquire. This means that it will give refs to nearby objects which are similar. If this pin is a string, the locator will search for an item matching the desired text in its name and description. If more than one valid object is found nearby, it will choose one of them at random. The second pin is a radius.",
        "complexity": 6,
        "size": 1,
        "inputs": {
            "desired type": {
                "dataType": DataTypes.ANY,
                "index": 0
            },
            "radius": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "locate": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "located ref": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "found": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "not found": {
                "dataType": DataTypes.PULSE,
                "index": 2
            }
        }
    },
    "integrated signaler": {
        "category": "Input",
        "desc": "Signals from a signaler can be received with this, allowing for remote control. It can also send signals. When a signal is received from another signaler, the 'on signal received' activator pin will be pulsed. The two input pins are to configure the integrated signaler's settings. Note that the frequency should not have a decimal in it, meaning the default frequency is expressed as 1457, not 145.7. To send a signal, pulse the 'send signal' activator pin.",
        "complexity": 4,
        "size": 1,
        "inputs": {
            "frequency": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "code": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "send signal": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "on signal sent": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "on signal received": {
                "dataType": DataTypes.PULSE,
                "index": 2
            }
        }
    },
    "NTNet networking circuit": {
        "category": "Input",
        "desc": "Enables the sending and receiving of messages over NTNet via packet data protocol.<br>This circuit's NTNet hardware address is: 09c6c378 Data can be sent or received using the second pin on each side, with additonal data reserved for the third pin. When a message is received, the second activation pin will pulse whatever is connected to it. Pulsing the first activation pin will send a message. Messages can be sent to multiple recepients. Addresses must be separated with a semicolon, like this: Address1;Address2;Etc.",
        "complexity": 2,
        "size": 1,
        "inputs": {
            "target NTNet addresses": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "data to send": {
                "dataType": DataTypes.STRING,
                "index": 1
            },
            "secondary text": {
                "dataType": DataTypes.STRING,
                "index": 2
            },
            "passkey": {
                "dataType": DataTypes.STRING,
                "index": 3
            },
            "send data": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "address received": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "data received": {
                "dataType": DataTypes.STRING,
                "index": 1
            },
            "secondary text received": {
                "dataType": DataTypes.STRING,
                "index": 2
            },
            "passkey received": {
                "dataType": DataTypes.STRING,
                "index": 3
            },
            "is_broadcast": {
                "dataType": DataTypes.BOOLEAN,
                "index": 4
            },
            "on data received": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "Low level NTNet transreceiver": {
        "category": "Input",
        "desc": "Enables the sending and receiving of messages over NTNet via packet data protocol. Allows advanced control of message contents and signalling. Must use associative lists. Outputs associative list. Has a slower transmission rate than normal NTNet circuits, due to increased data processing complexity.<br>This circuit's NTNet hardware address is: 2b38c2df Data can be sent or received using the second pin on each side, When a message is received, the second activation pin will pulse whatever is connected to it. Pulsing the first activation pin will send a message. Messages can be sent to multiple recepients. Addresses must be separated with a semicolon, like this: Address1;Address2;Etc.",
        "complexity": 4,
        "size": 1,
        "inputs": {
            "target NTNet addresses": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "data": {
                "dataType": DataTypes.LIST,
                "index": 1
            },
            "passkey": {
                "dataType": DataTypes.STRING,
                "index": 2
            },
            "send data": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "received data": {
                "dataType": DataTypes.LIST,
                "index": 0
            },
            "is_broadcast": {
                "dataType": DataTypes.BOOLEAN,
                "index": 1
            },
            "received passkey": {
                "dataType": DataTypes.STRING,
                "index": 2
            },
            "on data received": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "global positioning system": {
        "category": "Input",
        "desc": "This allows you to easily know the position of a machine containing this device. The coordinates that the GPS outputs are absolute, not relative. The full coords output has the coords separated by commas and is in string format.",
        "complexity": 4,
        "size": 1,
        "inputs": {
            "get coordinates": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "X": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "Y": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "Z": {
                "dataType": DataTypes.NUMBER,
                "index": 2
            },
            "full coords": {
                "dataType": DataTypes.STRING,
                "index": 3
            },
            "on get coordinates": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "microphone": {
        "category": "Input",
        "desc": "Useful for spying on people, or for voice-activated machines. This will automatically translate most languages it hears to Galactic Common. The first activation pin is always pulsed when the circuit hears someone talk, while the second one is only triggered if it hears someone speaking a language other than Galactic Common.",
        "complexity": 4,
        "size": 1,
        "inputs": {},
        "outputs": {
            "speaker": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "message": {
                "dataType": DataTypes.STRING,
                "index": 1
            },
            "on message received": {
                "dataType": DataTypes.PULSE,
                "index": 0
            },
            "on translation": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "sensor": {
        "category": "Input",
        "desc": "Scans and obtains a reference for any objects or persons near you. All you need to do is shove the machine in their face. If the 'ignore storage' pin is set to true, the sensor will disregard scanning various storage containers such as backpacks.",
        "complexity": 12,
        "size": 1,
        "inputs": {
            "ignore storage": {
                "dataType": DataTypes.BOOLEAN,
                "index": 0
            }
        },
        "outputs": {
            "scanned": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "on scanned": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        }
    },
    "ranged sensor": {
        "category": "Input",
        "desc": "Scans and obtains a reference for any objects or persons in range. All you need to do is point the machine towards the target. If the 'ignore storage' pin is set to true, the sensor will disregard scanning various storage containers such as backpacks.",
        "complexity": 36,
        "size": 1,
        "inputs": {
            "ignore storage": {
                "dataType": DataTypes.BOOLEAN,
                "index": 0
            }
        },
        "outputs": {
            "scanned": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "on scanned": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        }
    },
    "scanner": {
        "category": "Input",
        "desc": "Scans and obtains a reference for any objects you use on the assembly. If the 'put down' pin is set to true, the assembly will take the scanned object from your hands to its location. Useful for interaction with the grabber. The scanner only works using the help intent.",
        "complexity": 4,
        "size": 1,
        "inputs": {
            "put down": {
                "dataType": DataTypes.BOOLEAN,
                "index": 0
            }
        },
        "outputs": {
            "scanned": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "on scanned": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        }
    },
    "internal battery monitor": {
        "category": "Input",
        "desc": "This monitors the charge level of an internal battery. This circuit will give you the values of charge, max charge, and the current percentage of the internal battery on demand.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "read": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "cell charge": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "max charge": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "percentage": {
                "dataType": DataTypes.NUMBER,
                "index": 2
            },
            "refference to assembly": {
                "dataType": DataTypes.REF,
                "index": 3
            },
            "refference to cell": {
                "dataType": DataTypes.REF,
                "index": 4
            },
            "on read": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "external battery monitor": {
        "category": "Input",
        "desc": "This can read the battery state of any device in view. This circuit will give you the charge, max charge, and the current percentage values of any device or battery in view.",
        "complexity": 2,
        "size": 1,
        "inputs": {
            "target": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "read": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "cell charge": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "max charge": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "percentage": {
                "dataType": DataTypes.NUMBER,
                "index": 2
            },
            "on read": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "NTNet scanner": {
        "category": "Input",
        "desc": "This can return the NTNet IDs of a component inside the given object, if there are any.",
        "complexity": 2,
        "size": 1,
        "inputs": {
            "target": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "read": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "id": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "found": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "not found": {
                "dataType": DataTypes.PULSE,
                "index": 2
            }
        }
    },
    "material scanner": {
        "category": "Input",
        "desc": "This special module is designed to get information about material containers of different machinery, like ORM, lathes, etc.",
        "complexity": 6,
        "size": 1,
        "inputs": {
            "target": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "scan": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "Metal": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "Glass": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "Silver": {
                "dataType": DataTypes.NUMBER,
                "index": 2
            },
            "Gold": {
                "dataType": DataTypes.NUMBER,
                "index": 3
            },
            "Diamond": {
                "dataType": DataTypes.NUMBER,
                "index": 4
            },
            "Solid Plasma": {
                "dataType": DataTypes.NUMBER,
                "index": 5
            },
            "Uranium": {
                "dataType": DataTypes.NUMBER,
                "index": 6
            },
            "Bananium": {
                "dataType": DataTypes.NUMBER,
                "index": 7
            },
            "Titanium": {
                "dataType": DataTypes.NUMBER,
                "index": 8
            },
            "Bluespace Mesh": {
                "dataType": DataTypes.NUMBER,
                "index": 9
            },
            "Biomass": {
                "dataType": DataTypes.NUMBER,
                "index": 10
            },
            "Plastic": {
                "dataType": DataTypes.NUMBER,
                "index": 11
            },
            "on scanned": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "not scanned": {
                "dataType": DataTypes.PULSE,
                "index": 2
            }
        }
    },
    "atmospheric analyzer": {
        "category": "Input",
        "desc": "A miniaturized analyzer which can scan anything that contains gases. Leave target as NULL to scan the air around the assembly. The nth element of gas amounts is the number of moles of the nth gas in gas list. Pressure is in kPa, temperature is in Kelvin. Due to programming limitations, scanning an object that does not contain a gas will return the air around it instead.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "target": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "scan": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "gas list": {
                "dataType": DataTypes.LIST,
                "index": 0
            },
            "gas amounts": {
                "dataType": DataTypes.LIST,
                "index": 1
            },
            "total moles": {
                "dataType": DataTypes.NUMBER,
                "index": 2
            },
            "pressure": {
                "dataType": DataTypes.NUMBER,
                "index": 3
            },
            "temperature": {
                "dataType": DataTypes.NUMBER,
                "index": 4
            },
            "volume": {
                "dataType": DataTypes.NUMBER,
                "index": 5
            },
            "on success": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "on failure": {
                "dataType": DataTypes.PULSE,
                "index": 2
            }
        }
    },
    "data card reader": {
        "category": "Input",
        "desc": "A circuit that can read from and write to data cards. Setting the \"write mode\" boolean to true will cause any data cards that are used on the assembly to replace their existing function and data strings with the given strings, if it is set to false then using a data card on the assembly will cause the function and data strings stored on the card to be written to the output pins.",
        "complexity": 4,
        "size": 1,
        "inputs": {
            "function to store": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "data to store": {
                "dataType": DataTypes.STRING,
                "index": 1
            },
            "write mode": {
                "dataType": DataTypes.BOOLEAN,
                "index": 2
            }
        },
        "outputs": {
            "stored function": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "stored data": {
                "dataType": DataTypes.STRING,
                "index": 1
            },
            "on write": {
                "dataType": DataTypes.PULSE,
                "index": 0
            },
            "on read": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "selection circuit": {
        "category": "Input",
        "desc": "This circuit lets you choose between different strings from a selection. This circuit lets you choose between up to 4 different values from selection of up to 8 strings that you can set. Null values are ignored and the chosen value is put out in selected.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "A": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "B": {
                "dataType": DataTypes.STRING,
                "index": 1
            },
            "C": {
                "dataType": DataTypes.STRING,
                "index": 2
            },
            "D": {
                "dataType": DataTypes.STRING,
                "index": 3
            },
            "E": {
                "dataType": DataTypes.STRING,
                "index": 4
            },
            "F": {
                "dataType": DataTypes.STRING,
                "index": 5
            },
            "G": {
                "dataType": DataTypes.STRING,
                "index": 6
            },
            "H": {
                "dataType": DataTypes.STRING,
                "index": 7
            }
        },
        "outputs": {
            "selected": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "on selected": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        }
    },
    "storage examiner circuit": {
        "category": "Input",
        "desc": "This circuit lets you scan a storage's content. (backpacks, toolboxes etc.) The items are put out as reference, which makes it possible to interact with them. Additionally also gives the amount of items.",
        "complexity": 6,
        "size": 1,
        "inputs": {
            "storage": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "examine": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "item amount": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "item list": {
                "dataType": DataTypes.LIST,
                "index": 1
            },
            "on examined": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "beaker slot": {
        "category": "Reagent",
        "desc": "Lets you add a beaker to your assembly and remove it even when the assembly is closed. It can help you extract reagents easier.",
        "complexity": 4,
        "size": 1,
        "inputs": {
            "push ref": {
                "dataType": DataTypes.PULSE,
                "index": 2
            }
        },
        "outputs": {
            "volume used": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "current beaker": {
                "dataType": DataTypes.REF,
                "index": 1
            },
            "on insert": {
                "dataType": DataTypes.PULSE,
                "index": 0
            },
            "on remove": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
        }
    },
    "man-machine interface tank": {
        "category": "Input",
        "desc": "This circuit is just a jar filled with an artificial liquid mimicking the cerebrospinal fluid. This jar can hold 1 man-machine interface and let it take control of some basic functions of the assembly.",
        "complexity": 60,
        "size": 1,
        "inputs": {
            "laws": {
                "dataType": DataTypes.LIST,
                "index": 0
            }
        },
        "outputs": {
            "man-machine interface": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "direction": {
                "dataType": DataTypes.DIR,
                "index": 1
            },
            "click target": {
                "dataType": DataTypes.REF,
                "index": 2
            },
            "move": {
                "dataType": DataTypes.PULSE,
                "index": 0
            },
            "left": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "right": {
                "dataType": DataTypes.PULSE,
                "index": 2
            },
            "up": {
                "dataType": DataTypes.PULSE,
                "index": 3
            },
            "down": {
                "dataType": DataTypes.PULSE,
                "index": 4
            },
            "leftclick": {
                "dataType": DataTypes.PULSE,
                "index": 5
            },
            "shiftclick": {
                "dataType": DataTypes.PULSE,
                "index": 6
            },
            "altclick": {
                "dataType": DataTypes.PULSE,
                "index": 7
            },
            "ctrlclick": {
                "dataType": DataTypes.PULSE,
                "index": 8
            }
        }
    },
    "pAI connector circuit": {
        "category": "Input",
        "desc": "This circuit lets you fit in a personal artificial intelligence to give it some form of control over the bot. You can wire various functions to it.",
        "complexity": 60,
        "size": 1,
        "inputs": {
            "laws": {
                "dataType": DataTypes.LIST,
                "index": 0
            }
        },
        "outputs": {
            "personal artificial intelligence": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "direction": {
                "dataType": DataTypes.DIR,
                "index": 1
            },
            "click target": {
                "dataType": DataTypes.REF,
                "index": 2
            },
            "move": {
                "dataType": DataTypes.PULSE,
                "index": 0
            },
            "left": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "right": {
                "dataType": DataTypes.PULSE,
                "index": 2
            },
            "up": {
                "dataType": DataTypes.PULSE,
                "index": 3
            },
            "down": {
                "dataType": DataTypes.PULSE,
                "index": 4
            },
            "leftclick": {
                "dataType": DataTypes.PULSE,
                "index": 5
            },
            "shiftclick": {
                "dataType": DataTypes.PULSE,
                "index": 6
            },
            "altclick": {
                "dataType": DataTypes.PULSE,
                "index": 7
            },
            "ctrlclick": {
                "dataType": DataTypes.PULSE,
                "index": 8
            },
            "shiftctrlclick": {
                "dataType": DataTypes.PULSE,
                "index": 9
            }
        }
    },
    "telecommunication interceptor": {
        "category": "Input",
        "desc": "This circuit allows for telecomms signals to be fetched prior to being broadcasted. Similar to the old NTSL system of realtime signal modification, the circuit connects to telecomms and fetches data for each signal, which can be sent normally or blocked, for cases such as other circuits modifying certain data. Beware, this cannot stop signals from unreachable areas, such as space or zlevels other than station's one.",
        "complexity": 30,
        "size": 1,
        "inputs": {
            "intercept": {
                "dataType": DataTypes.BOOLEAN,
                "index": 0
            },
            "no pass": {
                "dataType": DataTypes.BOOLEAN,
                "index": 1
            }
        },
        "outputs": {
            "source": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "job": {
                "dataType": DataTypes.STRING,
                "index": 1
            },
            "content": {
                "dataType": DataTypes.STRING,
                "index": 2
            },
            "spans": {
                "dataType": DataTypes.LIST,
                "index": 3
            },
            "frequency": {
                "dataType": DataTypes.NUMBER,
                "index": 4
            },
            "on intercept": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        }
    },
    "quick button": {
        "category": "Input",
        "desc": "A button that can be used to quickly activate a pin. This circuit adds a button to the assembly that can be easily accessed while the machine is being held. <br>\"grant access to\" can be used to grant access to this button to internal pAIs or MMIs.<br>Possible button styles: blank, one, two, three, four, five, plus, minus, exclamation, question, cross, info, heart, skull, brain, brain_damage, injection, blood, shield, reaction, network, power, radioactive, electricity, magnetism, scan, repair, id, wireless, say, sleep and bomb",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "grant access to": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "button name": {
                "dataType": DataTypes.STRING,
                "index": 1
            },
            "button style": {
                "dataType": DataTypes.STRING,
                "index": 2
            }
        },
        "outputs": {
            "on pressed": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        }
    },
    "number to string": {
        "category": "Converter",
        "desc": "This circuit can convert a number variable into a string. Because of circuit limitations, null/false variables will output a '0' string.",
        "complexity": 2,
        "size": 1,
        "inputs": {
            "input": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "convert": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "output": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "on convert": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "string to number": {
        "category": "Converter",
        "desc": "This circuit can convert a string variable into a number.",
        "complexity": 2,
        "size": 1,
        "inputs": {
            "input": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "convert": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "output": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "on convert": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "reference to string": {
        "category": "Converter",
        "desc": "This circuit can convert a reference to something else to a string, specifically the name of that reference.",
        "complexity": 2,
        "size": 1,
        "inputs": {
            "input": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "convert": {
                "dataType": DataTypes.PULSE,
                "index": 0
            },
        },
        "outputs": {
            "output": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "on convert": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "reference encoder": {
        "category": "Converter",
        "desc": "This circuit can encode a reference into a string, which can then be read by a reference decoder circuit.",
        "complexity": 2,
        "size": 1,
        "inputs": {
            "input": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "convert": {
                "dataType": DataTypes.PULSE,
                "index": 0
            },
        },
        "outputs": {
            "output": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "on convert": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "reference decoder": {
        "category": "Converter",
        "desc": "This circuit can convert an encoded reference to an actual reference.",
        "complexity": 2,
        "size": 1,
        "inputs": {
            "input": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "convert": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "output": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "on convert": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "lowercase string converter": {
        "category": "Converter",
        "desc": "this circuit will cause a string to come out in all lowercase.",
        "complexity": 2,
        "size": 1,
        "inputs": {
            "input": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "convert": {
                "dataType": DataTypes.PULSE,
                "index": 0
            },
        },
        "outputs": {
            "output": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "on convert": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "uppercase string converter": {
        "category": "Converter",
        "desc": "THIS WILL CAUSE A STRING TO COME OUT IN ALL UPPERCASE.",
        "complexity": 2,
        "size": 1,
        "inputs": {
            "input": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "convert": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "output": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "on convert": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "concatenator": {
        "category": "Converter",
        "desc": "This can join up to 8 strings together to get a string with a maximum of 512 characters.",
        "complexity": 4,
        "size": 1,
        "inputs": {
            "input 1": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "input 2": {
                "dataType": DataTypes.STRING,
                "index": 1
            },
            "input 3": {
                "dataType": DataTypes.STRING,
                "index": 2
            },
            "input 4": {
                "dataType": DataTypes.STRING,
                "index": 3
            },
            "input 5": {
                "dataType": DataTypes.STRING,
                "index": 4
            },
            "input 6": {
                "dataType": DataTypes.STRING,
                "index": 5
            },
            "input 7": {
                "dataType": DataTypes.STRING,
                "index": 6
            },
            "input 8": {
                "dataType": DataTypes.STRING,
                "index": 7
            },
            "concatenate": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "result": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "on concatenated": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "small concatenator": {
        "category": "Converter",
        "desc": "This can join up to 4 strings together to get a string with a maximum of 256 characters.",
        "complexity": 2,
        "size": 1,
        "inputs": {
            "input 1": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "input 2": {
                "dataType": DataTypes.STRING,
                "index": 1
            },
            "input 3": {
                "dataType": DataTypes.STRING,
                "index": 2
            },
            "input 4": {
                "dataType": DataTypes.STRING,
                "index": 3
            },
            "concatenate": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "result": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "on concatenated": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "large concatenator": {
        "category": "Converter",
        "desc": "This can join up to 16 strings together to get a string with a maximum of 1024 characters.",
        "complexity": 6,
        "size": 1,
        "inputs": {
            "input 1": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "input 2": {
                "dataType": DataTypes.STRING,
                "index": 1
            },
            "input 3": {
                "dataType": DataTypes.STRING,
                "index": 2
            },
            "input 4": {
                "dataType": DataTypes.STRING,
                "index": 3
            },
            "input 5": {
                "dataType": DataTypes.STRING,
                "index": 4
            },
            "input 6": {
                "dataType": DataTypes.STRING,
                "index": 5
            },
            "input 7": {
                "dataType": DataTypes.STRING,
                "index": 6
            },
            "input 8": {
                "dataType": DataTypes.STRING,
                "index": 7
            },
            "input 9": {
                "dataType": DataTypes.STRING,
                "index": 8
            },
            "input 10": {
                "dataType": DataTypes.STRING,
                "index": 9
            },
            "input 11": {
                "dataType": DataTypes.STRING,
                "index": 10
            },
            "input 12": {
                "dataType": DataTypes.STRING,
                "index": 11
            },
            "input 13": {
                "dataType": DataTypes.STRING,
                "index": 12
            },
            "input 14": {
                "dataType": DataTypes.STRING,
                "index": 13
            },
            "input 15": {
                "dataType": DataTypes.STRING,
                "index": 14
            },
            "input 16": {
                "dataType": DataTypes.STRING,
                "index": 15
            },
            "concatenate": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "result": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "on concatenated": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "separator": {
        "category": "Converter",
        "desc": "This splits a single string into two at the relative split point. This circuit splits a given string into two, based on the string and the index value. The index splits the string <b>after</b> the given index, including spaces. So 'a person' with an index of '3' will split into 'a p' and 'erson'.",
        "complexity": 4,
        "size": 1,
        "inputs": {
            "string to split": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "index": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "separate": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "before split": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "after split": {
                "dataType": DataTypes.STRING,
                "index": 1
            },
            "on separated": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "indexer": {
        "category": "Converter",
        "desc": "This circuit takes a string and an index value, then returns the character found at in the string at the given index. Make sure the index is not longer or shorter than the string length. If you don't, the circuit will return empty.",
        "complexity": 4,
        "size": 1,
        "inputs": {
            "string to index": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "index": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "pulse index": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "found character": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "on indexed": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "find text": {
        "category": "Converter",
        "desc": "This outputs the position of the sample in the string, or returns 0. The first pin is the string to be examined. The second pin is the sample to be found. For example, inputting 'my wife has caught on fire' with 'has' as the sample will give you position 9. This circuit isn't case sensitive, and it does not ignore spaces.",
        "complexity": 4,
        "size": 1,
        "inputs": {
            "string": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "sample": {
                "dataType": DataTypes.STRING,
                "index": 1
            },
            "search": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "position": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "after search": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "found": {
                "dataType": DataTypes.PULSE,
                "index": 2
            },
            "not found": {
                "dataType": DataTypes.PULSE,
                "index": 3
            }
        }
    },
    "get length": {
        "category": "Converter",
        "desc": "This circuit will return the number of characters in a string.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "string": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "get length": {
                "dataType": DataTypes.PULSE,
                "index": 0
            },
        },
        "outputs": {
            "length": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "on acquisition": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "string exploder": {
        "category": "Converter",
        "desc": "This splits a single string into a list of strings. This circuit splits a given string into a list of strings based on the string and given delimiter. For example, 'eat this burger' will be converted to list('eat','this','burger'). Leave the delimiter null to get a list of every individual character.",
        "complexity": 4,
        "size": 1,
        "inputs": {
            "string to split": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "delimiter": {
                "dataType": DataTypes.STRING,
                "index": 1
            },
            "separate": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "list": {
                "dataType": DataTypes.LIST,
                "index": 0
            },
            "on separated": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "radians to degrees converter": {
        "category": "Converter",
        "desc": "Converts radians to degrees.",
        "complexity": 2,
        "size": 1,
        "inputs": {
            "radian": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "convert": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "degrees": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "on convert": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "degrees to radians converter": {
        "category": "Converter",
        "desc": "Converts degrees to radians.",
        "complexity": 2,
        "size": 1,
        "inputs": {
            "degrees": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "convert": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "radians": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "on convert": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "abs to rel coordinate converter": {
        "category": "Converter",
        "desc": "Easily convert absolute coordinates to relative coordinates with this. Keep in mind that both sets of input coordinates should be absolute.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "X1": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "Y1": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "X2": {
                "dataType": DataTypes.NUMBER,
                "index": 2
            },
            "Y2": {
                "dataType": DataTypes.NUMBER,
                "index": 3
            },
            "compute rel coordinates": {
                "dataType": DataTypes.PULSE,
                "index": 0
            },
        },
        "outputs": {
            "X": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "Y": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "on convert": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "rel to abs coordinate converter": {
        "category": "Converter",
        "desc": "Convert relative coordinates to absolute coordinates with this. Keep in mind that only one set of input coordinates should be absolute, and the other relative. The output coordinates will be the absolute form of the input relative coordinates.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "X1": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "Y1": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "X2": {
                "dataType": DataTypes.NUMBER,
                "index": 2
            },
            "Y2": {
                "dataType": DataTypes.NUMBER,
                "index": 3
            },
            "compute abs coordinates": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "X": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "Y": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "on convert": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "advanced rel to abs coordinate converter": {
        "category": "Converter",
        "desc": "Easily convert relative coordinates to absolute coordinates with this. This circuit only requires a single set of relative inputs to output absolute coordinates.",
        "complexity": 2,
        "size": 1,
        "inputs": {
            "rel X": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "rel Y": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "compute abs coordinates": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "abs X": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "abs Y": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "on convert": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "hsv to hexadecimal": {
        "category": "Converter",
        "desc": "This circuit can convert a HSV (Hue, Saturation, and Value) color to a Hexadecimal RGB color. The first pin controls tint (0-359), the second pin controls how intense the tint is (0-255), and the third controls how bright the tint is (0 for black, 127 for normal, 255 for white).",
        "complexity": 2,
        "size": 1,
        "inputs": {
            "hue": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "saturation": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "value": {
                "dataType": DataTypes.NUMBER,
                "index": 2
            },
            "convert": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "hexadecimal rgb": {
                "dataType": DataTypes.COLOR,
                "index": 0
            },
            "on convert": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "rgb to hexadecimal": {
        "category": "Converter",
        "desc": "This circuit can convert a RGB (Red, Green, Blue) color to a Hexadecimal RGB color. The first pin controls red amount, the second pin controls green amount, and the third controls blue amount. They all go from 0-255.",
        "complexity": 2,
        "size": 1,
        "inputs": {
            "red": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "green": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "blue": {
                "dataType": DataTypes.NUMBER,
                "index": 2
            },
            "convert": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "hexadecimal rgb": {
                "dataType": DataTypes.COLOR,
                "index": 0
            },
            "on convert": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "two multiplexer": {
        "category": "Data Transfer",
        "desc": "This is what those in the business tend to refer to as a 'mux', or data selector. It moves data from one of the selected inputs to the output. It has 2 input pins. The first input pin is used to select which of the other input pins which has its data moved to the output. If the input selection is outside the valid range then no output is given. This multiplexer has a range from 1 to 2.",
        "complexity": 2,
        "size": 1,
        "inputs": {
            "input selection": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "input 1": {
                "dataType": DataTypes.ANY,
                "index": 1
            },
            "input 2": {
                "dataType": DataTypes.ANY,
                "index": 2
            },
            "select": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "output": {
                "dataType": DataTypes.ANY,
                "index": 0
            },
            "on select": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "four multiplexer": {
        "category": "Data Transfer",
        "desc": "This is what those in the business tend to refer to as a 'mux', or data selector. It moves data from one of the selected inputs to the output. It has 4 input pins. The first input pin is used to select which of the other input pins which has its data moved to the output. If the input selection is outside the valid range then no output is given. This multiplexer has a range from 1 to 4.",
        "complexity": 4,
        "size": 1,
        "inputs": {
            "input selection": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "input 1": {
                "dataType": DataTypes.ANY,
                "index": 1
            },
            "input 2": {
                "dataType": DataTypes.ANY,
                "index": 2
            },
            "input 3": {
                "dataType": DataTypes.ANY,
                "index": 3
            },
            "input 4": {
                "dataType": DataTypes.ANY,
                "index": 4
            },
            "select": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "output": {
                "dataType": DataTypes.ANY,
                "index": 0
            },
            "on select": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "eight multiplexer": {
        "category": "Data Transfer",
        "desc": "This is what those in the business tend to refer to as a 'mux', or data selector. It moves data from one of the selected inputs to the output. It has 8 input pins. The first input pin is used to select which of the other input pins which has its data moved to the output. If the input selection is outside the valid range then no output is given. This multiplexer has a range from 1 to 8.",
        "complexity": 8,
        "size": 1,
        "inputs": {
            "input selection": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "input 1": {
                "dataType": DataTypes.ANY,
                "index": 1
            },
            "input 2": {
                "dataType": DataTypes.ANY,
                "index": 2
            },
            "input 3": {
                "dataType": DataTypes.ANY,
                "index": 3
            },
            "input 4": {
                "dataType": DataTypes.ANY,
                "index": 4
            },
            "input 5": {
                "dataType": DataTypes.ANY,
                "index": 5
            },
            "input 6": {
                "dataType": DataTypes.ANY,
                "index": 6
            },
            "input 7": {
                "dataType": DataTypes.ANY,
                "index": 7
            },
            "input 8": {
                "dataType": DataTypes.ANY,
                "index": 8
            },
            "select": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "output": {
                "dataType": DataTypes.ANY,
                "index": 0
            },
            "on select": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "sixteen multiplexer": {
        "category": "Data Transfer",
        "desc": "This is what those in the business tend to refer to as a 'mux', or data selector. It moves data from one of the selected inputs to the output. It has 16 input pins. The first input pin is used to select which of the other input pins which has its data moved to the output. If the input selection is outside the valid range then no output is given. This multiplexer has a range from 1 to 16.",
        "complexity": 16,
        "size": 1,
        "inputs": {
            "input selection": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "input 1": {
                "dataType": DataTypes.ANY,
                "index": 1
            },
            "input 2": {
                "dataType": DataTypes.ANY,
                "index": 2
            },
            "input 3": {
                "dataType": DataTypes.ANY,
                "index": 3
            },
            "input 4": {
                "dataType": DataTypes.ANY,
                "index": 4
            },
            "input 5": {
                "dataType": DataTypes.ANY,
                "index": 5
            },
            "input 6": {
                "dataType": DataTypes.ANY,
                "index": 6
            },
            "input 7": {
                "dataType": DataTypes.ANY,
                "index": 7
            },
            "input 8": {
                "dataType": DataTypes.ANY,
                "index": 8
            },
            "input 9": {
                "dataType": DataTypes.ANY,
                "index": 9
            },
            "input 10": {
                "dataType": DataTypes.ANY,
                "index": 10
            },
            "input 11": {
                "dataType": DataTypes.ANY,
                "index": 11
            },
            "input 12": {
                "dataType": DataTypes.ANY,
                "index": 12
            },
            "input 13": {
                "dataType": DataTypes.ANY,
                "index": 13
            },
            "input 14": {
                "dataType": DataTypes.ANY,
                "index": 14
            },
            "input 15": {
                "dataType": DataTypes.ANY,
                "index": 15
            },
            "input 16": {
                "dataType": DataTypes.ANY,
                "index": 16
            },
            "select": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "output": {
                "dataType": DataTypes.ANY,
                "index": 0
            },
            "on select": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "two demultiplexer": {
        "category": "Data Transfer",
        "desc": "This is what those in the business tend to refer to as a 'demux'. It moves data from the input to one of the selected outputs. It has 2 output pins. The first input pin is used to select which of the output pins is given the data from the second input pin. If the output selection is outside the valid range then no output is given. This demultiplexer has a range from 1 to 2.",
        "complexity": 2,
        "size": 1,
        "inputs": {
            "output selection": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "input": {
                "dataType": DataTypes.ANY,
                "index": 1
            },
            "select": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "output 1": {
                "dataType": DataTypes.ANY,
                "index": 0
            },
            "output 2": {
                "dataType": DataTypes.ANY,
                "index": 1
            },
            "on select": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "four demultiplexer": {
        "category": "Data Transfer",
        "desc": "This is what those in the business tend to refer to as a 'demux'. It moves data from the input to one of the selected outputs. It has 4 output pins. The first input pin is used to select which of the output pins is given the data from the second input pin. If the output selection is outside the valid range then no output is given. This demultiplexer has a range from 1 to 4.",
        "complexity": 4,
        "size": 1,
        "inputs": {
            "output selection": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "input": {
                "dataType": DataTypes.ANY,
                "index": 1
            },
            "select": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "output 1": {
                "dataType": DataTypes.ANY,
                "index": 0
            },
            "output 2": {
                "dataType": DataTypes.ANY,
                "index": 1
            },
            "output 3": {
                "dataType": DataTypes.ANY,
                "index": 2
            },
            "output 4": {
                "dataType": DataTypes.ANY,
                "index": 3
            },
            "on select": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "eight demultiplexer": {
        "category": "Data Transfer",
        "desc": "This is what those in the business tend to refer to as a 'demux'. It moves data from the input to one of the selected outputs. It has 8 output pins. The first input pin is used to select which of the output pins is given the data from the second input pin. If the output selection is outside the valid range then no output is given. This demultiplexer has a range from 1 to 8.",
        "complexity": 8,
        "size": 1,
        "inputs": {
            "output selection": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "input": {
                "dataType": DataTypes.ANY,
                "index": 1
            },
            "select": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "output 1": {
                "dataType": DataTypes.ANY,
                "index": 0
            },
            "output 2": {
                "dataType": DataTypes.ANY,
                "index": 1
            },
            "output 3": {
                "dataType": DataTypes.ANY,
                "index": 2
            },
            "output 4": {
                "dataType": DataTypes.ANY,
                "index": 3
            },
            "output 5": {
                "dataType": DataTypes.ANY,
                "index": 4
            },
            "output 6": {
                "dataType": DataTypes.ANY,
                "index": 5
            },
            "output 7": {
                "dataType": DataTypes.ANY,
                "index": 6
            },
            "output 8": {
                "dataType": DataTypes.ANY,
                "index": 7
            },
            "on select": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "sixteen demultiplexer": {
        "category": "Data Transfer",
        "desc": "This is what those in the business tend to refer to as a 'demux'. It moves data from the input to one of the selected outputs. It has 16 output pins. The first input pin is used to select which of the output pins is given the data from the second input pin. If the output selection is outside the valid range then no output is given. This demultiplexer has a range from 1 to 16.",
        "complexity": 16,
        "size": 1,
        "inputs": {
            "output selection": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "input": {
                "dataType": DataTypes.ANY,
                "index": 1
            },
            "select": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "output 1": {
                "dataType": DataTypes.ANY,
                "index": 0
            },
            "output 2": {
                "dataType": DataTypes.ANY,
                "index": 1
            },
            "output 3": {
                "dataType": DataTypes.ANY,
                "index": 2
            },
            "output 4": {
                "dataType": DataTypes.ANY,
                "index": 3
            },
            "output 5": {
                "dataType": DataTypes.ANY,
                "index": 4
            },
            "output 6": {
                "dataType": DataTypes.ANY,
                "index": 5
            },
            "output 7": {
                "dataType": DataTypes.ANY,
                "index": 6
            },
            "output 8": {
                "dataType": DataTypes.ANY,
                "index": 7
            },
            "output 9": {
                "dataType": DataTypes.ANY,
                "index": 8
            },
            "output 10": {
                "dataType": DataTypes.ANY,
                "index": 9
            },
            "output 11": {
                "dataType": DataTypes.ANY,
                "index": 10
            },
            "output 12": {
                "dataType": DataTypes.ANY,
                "index": 11
            },
            "output 13": {
                "dataType": DataTypes.ANY,
                "index": 12
            },
            "output 14": {
                "dataType": DataTypes.ANY,
                "index": 13
            },
            "output 15": {
                "dataType": DataTypes.ANY,
                "index": 14
            },
            "output 16": {
                "dataType": DataTypes.ANY,
                "index": 15
            },
            "on select": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "two pulse demultiplexer": {
        "category": "Data Transfer",
        "desc": "Selector switch to choose the pin to be activated by number. It has 2 output pins. The first input pin is used to select which of the pulse out pins will be activated after activation of the circuit. If the output selection is outside the valid range then no output is given. This pulse demultiplexer has a range from 1 to 2.",
        "complexity": 2,
        "size": 1,
        "inputs": {
            "output selection": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "select": {
                "dataType": DataTypes.PULSE,
                "index": 0
            },
        },
        "outputs": {
            "output 1": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "output 2": {
                "dataType": DataTypes.PULSE,
                "index": 2
            }
        }
    },
    "four pulse demultiplexer": {
        "category": "Data Transfer",
        "desc": "Selector switch to choose the pin to be activated by number. It has 4 output pins. The first input pin is used to select which of the pulse out pins will be activated after activation of the circuit. If the output selection is outside the valid range then no output is given. This pulse demultiplexer has a range from 1 to 4.",
        "complexity": 4,
        "size": 1,
        "inputs": {
            "output selection": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "select": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "output 1": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "output 2": {
                "dataType": DataTypes.PULSE,
                "index": 2
            },
            "output 3": {
                "dataType": DataTypes.PULSE,
                "index": 3
            },
            "output 4": {
                "dataType": DataTypes.PULSE,
                "index": 4
            }
        }
    },
    "eight pulse demultiplexer": {
        "category": "Data Transfer",
        "desc": "Selector switch to choose the pin to be activated by number. It has 8 output pins. The first input pin is used to select which of the pulse out pins will be activated after activation of the circuit. If the output selection is outside the valid range then no output is given. This pulse demultiplexer has a range from 1 to 8.",
        "complexity": 8,
        "size": 1,
        "inputs": {
            "output selection": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "select": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "output 1": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "output 2": {
                "dataType": DataTypes.PULSE,
                "index": 2
            },
            "output 3": {
                "dataType": DataTypes.PULSE,
                "index": 3
            },
            "output 4": {
                "dataType": DataTypes.PULSE,
                "index": 4
            },
            "output 5": {
                "dataType": DataTypes.PULSE,
                "index": 5
            },
            "output 6": {
                "dataType": DataTypes.PULSE,
                "index": 6
            },
            "output 7": {
                "dataType": DataTypes.PULSE,
                "index": 7
            },
            "output 8": {
                "dataType": DataTypes.PULSE,
                "index": 8
            }
        }
    },
    "sixteen pulse demultiplexer": {
        "category": "Data Transfer",
        "desc": "Selector switch to choose the pin to be activated by number. It has 16 output pins. The first input pin is used to select which of the pulse out pins will be activated after activation of the circuit. If the output selection is outside the valid range then no output is given. This pulse demultiplexer has a range from 1 to 16.",
        "complexity": 16,
        "size": 1,
        "inputs": {
            "output selection": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "select": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "output 1": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "output 2": {
                "dataType": DataTypes.PULSE,
                "index": 2
            },
            "output 3": {
                "dataType": DataTypes.PULSE,
                "index": 3
            },
            "output 4": {
                "dataType": DataTypes.PULSE,
                "index": 4
            },
            "output 5": {
                "dataType": DataTypes.PULSE,
                "index": 5
            },
            "output 6": {
                "dataType": DataTypes.PULSE,
                "index": 6
            },
            "output 7": {
                "dataType": DataTypes.PULSE,
                "index": 7
            },
            "output 8": {
                "dataType": DataTypes.PULSE,
                "index": 8
            },
            "output 9": {
                "dataType": DataTypes.PULSE,
                "index": 9
            },
            "output 10": {
                "dataType": DataTypes.PULSE,
                "index": 10
            },
            "output 11": {
                "dataType": DataTypes.PULSE,
                "index": 11
            },
            "output 12": {
                "dataType": DataTypes.PULSE,
                "index": 12
            },
            "output 13": {
                "dataType": DataTypes.PULSE,
                "index": 13
            },
            "output 14": {
                "dataType": DataTypes.PULSE,
                "index": 14
            },
            "output 15": {
                "dataType": DataTypes.PULSE,
                "index": 15
            },
            "output 16": {
                "dataType": DataTypes.PULSE,
                "index": 16
            }
        }
    },
    "two pulse multiplexer": {
        "category": "Data Transfer",
        "desc": "Pulse in pins to choose the pin value to be sent. It has 2 pulse in pins and 2 output pins. The input pulses are used to select which of the input pins has its data moved to the output. This pulse multiplexer has a range from 1 to 2.",
        "complexity": 2,
        "size": 1,
        "inputs": {
            "input 1": {
                "dataType": DataTypes.ANY,
                "index": 0
            },
            "input 2": {
                "dataType": DataTypes.ANY,
                "index": 1
            },
            "pulse input 1": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "pulse input 2": {
                "dataType": DataTypes.PULSE,
                "index": 2
            }
        },
        "outputs": {
            "output": {
                "dataType": DataTypes.ANY,
                "index": 0
            },
            "on selected": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        }
    },
    "four pulse multiplexer": {
        "category": "Data Transfer",
        "desc": "Pulse in pins to choose the pin value to be sent. It has 4 pulse in pins and 4 output pins. The input pulses are used to select which of the input pins has its data moved to the output. This pulse multiplexer has a range from 1 to 4.",
        "complexity": 4,
        "size": 1,
        "inputs": {
            "input 1": {
                "dataType": DataTypes.ANY,
                "index": 0
            },
            "input 2": {
                "dataType": DataTypes.ANY,
                "index": 1
            },
            "input 3": {
                "dataType": DataTypes.ANY,
                "index": 2
            },
            "input 4": {
                "dataType": DataTypes.ANY,
                "index": 3
            },
            "pulse input 1": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "pulse input 2": {
                "dataType": DataTypes.PULSE,
                "index": 2
            },
            "pulse input 3": {
                "dataType": DataTypes.PULSE,
                "index": 3
            },
            "pulse input 4": {
                "dataType": DataTypes.PULSE,
                "index": 4
            }
        },
        "outputs": {
            "output": {
                "dataType": DataTypes.ANY,
                "index": 0
            },
            "on selected": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        }
    },
    "eight pulse multiplexer": {
        "category": "Data Transfer",
        "desc": "Pulse in pins to choose the pin value to be sent. It has 8 pulse in pins and 8 output pins. The input pulses are used to select which of the input pins has its data moved to the output. This pulse multiplexer has a range from 1 to 8.",
        "complexity": 8,
        "size": 1,
        "inputs": {
            "input 1": {
                "dataType": DataTypes.ANY,
                "index": 0
            },
            "input 2": {
                "dataType": DataTypes.ANY,
                "index": 1
            },
            "input 3": {
                "dataType": DataTypes.ANY,
                "index": 2
            },
            "input 4": {
                "dataType": DataTypes.ANY,
                "index": 3
            },
            "input 5": {
                "dataType": DataTypes.ANY,
                "index": 4
            },
            "input 6": {
                "dataType": DataTypes.ANY,
                "index": 5
            },
            "input 7": {
                "dataType": DataTypes.ANY,
                "index": 6
            },
            "input 8": {
                "dataType": DataTypes.ANY,
                "index": 7
            },
            "pulse input 1": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "pulse input 2": {
                "dataType": DataTypes.PULSE,
                "index": 2
            },
            "pulse input 3": {
                "dataType": DataTypes.PULSE,
                "index": 3
            },
            "pulse input 4": {
                "dataType": DataTypes.PULSE,
                "index": 4
            },
            "pulse input 5": {
                "dataType": DataTypes.PULSE,
                "index": 5
            },
            "pulse input 6": {
                "dataType": DataTypes.PULSE,
                "index": 6
            },
            "pulse input 7": {
                "dataType": DataTypes.PULSE,
                "index": 7
            },
            "pulse input 8": {
                "dataType": DataTypes.PULSE,
                "index": 8
            }
        },
        "outputs": {
            "output": {
                "dataType": DataTypes.ANY,
                "index": 0
            },
            "on selected": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        }
    },
    "sixteen pulse multiplexer": {
        "category": "Data Transfer",
        "desc": "Pulse in pins to choose the pin value to be sent. It has 16 pulse in pins and 16 output pins. The input pulses are used to select which of the input pins has its data moved to the output. This pulse multiplexer has a range from 1 to 16.",
        "complexity": 16,
        "size": 1,
        "inputs": {
            "input 1": {
                "dataType": DataTypes.ANY,
                "index": 0
            },
            "input 2": {
                "dataType": DataTypes.ANY,
                "index": 1
            },
            "input 3": {
                "dataType": DataTypes.ANY,
                "index": 2
            },
            "input 4": {
                "dataType": DataTypes.ANY,
                "index": 3
            },
            "input 5": {
                "dataType": DataTypes.ANY,
                "index": 4
            },
            "input 6": {
                "dataType": DataTypes.ANY,
                "index": 5
            },
            "input 7": {
                "dataType": DataTypes.ANY,
                "index": 6
            },
            "input 8": {
                "dataType": DataTypes.ANY,
                "index": 7
            },
            "input 9": {
                "dataType": DataTypes.ANY,
                "index": 8
            },
            "input 10": {
                "dataType": DataTypes.ANY,
                "index": 9
            },
            "input 11": {
                "dataType": DataTypes.ANY,
                "index": 10
            },
            "input 12": {
                "dataType": DataTypes.ANY,
                "index": 11
            },
            "input 13": {
                "dataType": DataTypes.ANY,
                "index": 12
            },
            "input 14": {
                "dataType": DataTypes.ANY,
                "index": 13
            },
            "input 15": {
                "dataType": DataTypes.ANY,
                "index": 14
            },
            "input 16": {
                "dataType": DataTypes.ANY,
                "index": 15
            },
            "pulse input 1": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "pulse input 2": {
                "dataType": DataTypes.PULSE,
                "index": 2
            },
            "pulse input 3": {
                "dataType": DataTypes.PULSE,
                "index": 3
            },
            "pulse input 4": {
                "dataType": DataTypes.PULSE,
                "index": 4
            },
            "pulse input 5": {
                "dataType": DataTypes.PULSE,
                "index": 5
            },
            "pulse input 6": {
                "dataType": DataTypes.PULSE,
                "index": 6
            },
            "pulse input 7": {
                "dataType": DataTypes.PULSE,
                "index": 7
            },
            "pulse input 8": {
                "dataType": DataTypes.PULSE,
                "index": 8
            },
            "pulse input 9": {
                "dataType": DataTypes.PULSE,
                "index": 9
            },
            "pulse input 10": {
                "dataType": DataTypes.PULSE,
                "index": 10
            },
            "pulse input 11": {
                "dataType": DataTypes.PULSE,
                "index": 11
            },
            "pulse input 12": {
                "dataType": DataTypes.PULSE,
                "index": 12
            },
            "pulse input 13": {
                "dataType": DataTypes.PULSE,
                "index": 13
            },
            "pulse input 14": {
                "dataType": DataTypes.PULSE,
                "index": 14
            },
            "pulse input 15": {
                "dataType": DataTypes.PULSE,
                "index": 15
            },
            "pulse input 16": {
                "dataType": DataTypes.PULSE,
                "index": 16
            }
        },
        "outputs": {
            "output": {
                "dataType": DataTypes.ANY,
                "index": 0
            },
            "on selected": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        }
    },
    "wire node": {
        "category": "Data Transfer",
        "desc": "Just a wire node to make wiring easier. Transfers the pulse from in to out.",
        "complexity": 0,
        "size": 0.1,
        "inputs": {
            "pulse in": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "pulse out": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "pick circuit": {
        "category": "Lists",
        "desc": "This circuit will pick a random element from the input list, and output that element. The input list is not modified.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "input": {
                "dataType": DataTypes.LIST,
                "index": 0
            },
            "compute": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "result": {
                "dataType": DataTypes.ANY,
                "index": 0
            },
            "on success": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "on failure": {
                "dataType": DataTypes.PULSE,
                "index": 2
            }
        }
    },
    "append circuit": {
        "category": "Lists",
        "desc": "This circuit will add an element to a list. The new element will always be at the bottom of the list.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "list to append": {
                "dataType": DataTypes.LIST,
                "index": 0
            },
            "input": {
                "dataType": DataTypes.ANY,
                "index": 1
            },
            "compute": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "appended list": {
                "dataType": DataTypes.LIST,
                "index": 0
            },
            "on computed": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "search circuit": {
        "category": "Lists",
        "desc": "This circuit will get the index location of the desired element in a list. Search will start at position 1 and will return the first matching position.",
        "complexity": 2,
        "size": 1,
        "inputs": {
            "list": {
                "dataType": DataTypes.LIST,
                "index": 0
            },
            "item": {
                "dataType": DataTypes.ANY,
                "index": 1
            },
            "compute": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "index": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "on success": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "on failure": {
                "dataType": DataTypes.PULSE,
                "index": 2
            }
        }
    },
    "filter circuit": {
        "category": "Lists",
        "desc": "This circuit will search through a list for anything matching the desired element(s) and outputs two lists: one containing only the matching elements, and one with the matching elements filtered out. Sample accepts lists. If no match is found, the original list is sent to output 1.",
        "complexity": 6,
        "size": 1,
        "inputs": {
            "input list": {
                "dataType": DataTypes.LIST,
                "index": 0
            },
            "sample": {
                "dataType": DataTypes.ANY,
                "index": 1
            },
            "compute": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "list filtered": {
                "dataType": DataTypes.LIST,
                "index": 0
            },
            "list matched": {
                "dataType": DataTypes.LIST,
                "index": 1
            },
            "on match": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "on no match": {
                "dataType": DataTypes.PULSE,
                "index": 2
            }
        }
    },
    "list set circuit": {
        "category": "Lists",
        "desc": "This circuit will remove any duplicate entries from a list. If there are no duplicate entries, the output list will be unchanged.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "list": {
                "dataType": DataTypes.LIST,
                "index": 0
            },
            "compute": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "list filtered": {
                "dataType": DataTypes.LIST,
                "index": 0
            },
            "on computed": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "at circuit": {
        "category": "Lists",
        "desc": "This circuit will pick an element from a list by the input index. If there is no element at the given index, the result will be null.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "list": {
                "dataType": DataTypes.LIST,
                "index": 0
            },
            "index": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "compute": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "item": {
                "dataType": DataTypes.ANY,
                "index": 0
            },
            "on success": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "on failure": {
                "dataType": DataTypes.PULSE,
                "index": 2
            }
        }
    },
    "delete circuit": {
        "category": "Lists",
        "desc": "This circuit will remove an element from a list by the index. If there is no element at the given index, the result list will be unchanged.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "list": {
                "dataType": DataTypes.LIST,
                "index": 0
            },
            "index": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "compute": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "item": {
                "dataType": DataTypes.LIST,
                "index": 0
            },
            "on computed": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "write circuit": {
        "category": "Lists",
        "desc": "This circuit will write an element to a list at the given index location. If there is no element at the given index, it will output the same list as before.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "list": {
                "dataType": DataTypes.LIST,
                "index": 0
            },
            "index": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "item": {
                "dataType": DataTypes.ANY,
                "index": 2
            },
            "compute": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "redacted list": {
                "dataType": DataTypes.LIST,
                "index": 0
            },
            "on success": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "on failure": {
                "dataType": DataTypes.PULSE,
                "index": 2
            }
        }
    },
    "len circuit": {
        "category": "Lists",
        "desc": "This circuit will return the length of the list.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "list": {
                "dataType": DataTypes.LIST,
                "index": 0
            },
            "compute": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "item": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "on computed": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "join text circuit": {
        "category": "Lists",
        "desc": "This circuit will combine two lists into one, and output it as a string. Default settings will encode the entire list into a string.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "list to join": {
                "dataType": DataTypes.LIST,
                "index": 0
            },
            "delimiter": {
                "dataType": DataTypes.STRING,
                "index": 1
            },
            "start": {
                "dataType": DataTypes.NUMBER,
                "index": 2
            },
            "end": {
                "dataType": DataTypes.NUMBER,
                "index": 3
            },
            "compute": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "joined text": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "on computed": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "large list constructor": {
        "category": "Lists",
        "desc": "This circuit will build a list out of up to sixteen input values.",
        "complexity": 8,
        "size": 1,
        "inputs": {
            "input 1": {
                "dataType": DataTypes.ANY,
                "index": 0
            },
            "input 2": {
                "dataType": DataTypes.ANY,
                "index": 1
            },
            "input 3": {
                "dataType": DataTypes.ANY,
                "index": 2
            },
            "input 4": {
                "dataType": DataTypes.ANY,
                "index": 3
            },
            "input 5": {
                "dataType": DataTypes.ANY,
                "index": 4
            },
            "input 6": {
                "dataType": DataTypes.ANY,
                "index": 5
            },
            "input 7": {
                "dataType": DataTypes.ANY,
                "index": 6
            },
            "input 8": {
                "dataType": DataTypes.ANY,
                "index": 7
            },
            "input 9": {
                "dataType": DataTypes.ANY,
                "index": 8
            },
            "input 10": {
                "dataType": DataTypes.ANY,
                "index": 9
            },
            "input 11": {
                "dataType": DataTypes.ANY,
                "index": 10
            },
            "input 12": {
                "dataType": DataTypes.ANY,
                "index": 11
            },
            "input 13": {
                "dataType": DataTypes.ANY,
                "index": 12
            },
            "input 14": {
                "dataType": DataTypes.ANY,
                "index": 13
            },
            "input 15": {
                "dataType": DataTypes.ANY,
                "index": 14
            },
            "input 16": {
                "dataType": DataTypes.ANY,
                "index": 15
            },
            "compute": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "result": {
                "dataType": DataTypes.LIST,
                "index": 0
            },
            "on computed": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "list constructor": {
        "category": "Lists",
        "desc": "This circuit will build a list out of up to four input values.",
        "complexity": 2,
        "size": 1,
        "inputs": {
            "input 1": {
                "dataType": DataTypes.ANY,
                "index": 0
            },
            "input 2": {
                "dataType": DataTypes.ANY,
                "index": 1
            },
            "input 3": {
                "dataType": DataTypes.ANY,
                "index": 2
            },
            "input 4": {
                "dataType": DataTypes.ANY,
                "index": 3
            },
            "compute": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "result": {
                "dataType": DataTypes.LIST,
                "index": 0
            },
            "on computed": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "medium list constructor": {
        "category": "Lists",
        "desc": "This circuit will build a list out of up to eight input values.",
        "complexity": 4,
        "size": 1,
        "inputs": {
            "input 1": {
                "dataType": DataTypes.ANY,
                "index": 0
            },
            "input 2": {
                "dataType": DataTypes.ANY,
                "index": 1
            },
            "input 3": {
                "dataType": DataTypes.ANY,
                "index": 2
            },
            "input 4": {
                "dataType": DataTypes.ANY,
                "index": 3
            },
            "input 5": {
                "dataType": DataTypes.ANY,
                "index": 4
            },
            "input 6": {
                "dataType": DataTypes.ANY,
                "index": 5
            },
            "input 7": {
                "dataType": DataTypes.ANY,
                "index": 6
            },
            "input 8": {
                "dataType": DataTypes.ANY,
                "index": 7
            },
            "compute": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "result": {
                "dataType": DataTypes.LIST,
                "index": 0
            },
            "on computed": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "large list deconstructor": {
        "category": "Lists",
        "desc": "This circuit will write the first sixteen entries of its input list, starting with the index, into the output values.",
        "complexity": 8,
        "size": 1,
        "inputs": {
            "input": {
                "dataType": DataTypes.LIST,
                "index": 0
            },
            "index": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "compute": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "output 1": {
                "dataType": DataTypes.ANY,
                "index": 0
            },
            "output 2": {
                "dataType": DataTypes.ANY,
                "index": 1
            },
            "output 3": {
                "dataType": DataTypes.ANY,
                "index": 2
            },
            "output 4": {
                "dataType": DataTypes.ANY,
                "index": 3
            },
            "output 5": {
                "dataType": DataTypes.ANY,
                "index": 4
            },
            "output 6": {
                "dataType": DataTypes.ANY,
                "index": 5
            },
            "output 7": {
                "dataType": DataTypes.ANY,
                "index": 6
            },
            "output 8": {
                "dataType": DataTypes.ANY,
                "index": 7
            },
            "output 9": {
                "dataType": DataTypes.ANY,
                "index": 8
            },
            "output 10": {
                "dataType": DataTypes.ANY,
                "index": 9
            },
            "output 11": {
                "dataType": DataTypes.ANY,
                "index": 10
            },
            "output 12": {
                "dataType": DataTypes.ANY,
                "index": 11
            },
            "output 13": {
                "dataType": DataTypes.ANY,
                "index": 12
            },
            "output 14": {
                "dataType": DataTypes.ANY,
                "index": 13
            },
            "output 15": {
                "dataType": DataTypes.ANY,
                "index": 14
            },
            "output 16": {
                "dataType": DataTypes.ANY,
                "index": 15
            },
            "on computed": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "list deconstructor": {
        "category": "Lists",
        "desc": "This circuit will write the first four entries of its input list, starting with the index, into the output values.",
        "complexity": 2,
        "size": 1,
        "inputs": {
            "input": {
                "dataType": DataTypes.LIST,
                "index": 0
            },
            "index": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "compute": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "output 1": {
                "dataType": DataTypes.ANY,
                "index": 0
            },
            "output 2": {
                "dataType": DataTypes.ANY,
                "index": 1
            },
            "output 3": {
                "dataType": DataTypes.ANY,
                "index": 2
            },
            "output 4": {
                "dataType": DataTypes.ANY,
                "index": 3
            },
            "on computed": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "medium list deconstructor": {
        "category": "Lists",
        "desc": "This circuit will write the first eight entries of its input list, starting with the index, into the output values.",
        "complexity": 4,
        "size": 1,
        "inputs": {
            "input": {
                "dataType": DataTypes.LIST,
                "index": 0
            },
            "index": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "compute": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "output 1": {
                "dataType": DataTypes.ANY,
                "index": 0
            },
            "output 2": {
                "dataType": DataTypes.ANY,
                "index": 1
            },
            "output 3": {
                "dataType": DataTypes.ANY,
                "index": 2
            },
            "output 4": {
                "dataType": DataTypes.ANY,
                "index": 3
            },
            "output 5": {
                "dataType": DataTypes.ANY,
                "index": 4
            },
            "output 6": {
                "dataType": DataTypes.ANY,
                "index": 5
            },
            "output 7": {
                "dataType": DataTypes.ANY,
                "index": 6
            },
            "output 8": {
                "dataType": DataTypes.ANY,
                "index": 7
            },
            "on computed": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "equal gate": {
        "category": "Logic",
        "desc": "This gate compares two values, and outputs TRUE if both are the same. Logic circuits will treat a null, 0, and a \"\" string value as FALSE and anything else as TRUE.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "A": {
                "dataType": DataTypes.ANY,
                "index": 0
            },
            "B": {
                "dataType": DataTypes.ANY,
                "index": 1
            },
            "compare": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "result": {
                "dataType": DataTypes.BOOLEAN,
                "index": 0
            },
            "on true result": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "on false result": {
                "dataType": DataTypes.PULSE,
                "index": 2
            }
        }
    },
    "JK latch": {
        "category": "Logic",
        "desc": "This gate is a synchronized JK latch. Logic circuits will treat a null, 0, and a \"\" string value as FALSE and anything else as TRUE.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "J": {
                "dataType": DataTypes.ANY,
                "index": 0
            },
            "K": {
                "dataType": DataTypes.ANY,
                "index": 1
            },
            "pulse in C": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "Q": {
                "dataType": DataTypes.BOOLEAN,
                "index": 0
            },
            "!Q": {
                "dataType": DataTypes.BOOLEAN,
                "index": 1
            },
            "pulse out Q": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "pulse out !Q": {
                "dataType": DataTypes.PULSE,
                "index": 2
            }
        }
    },
    "RS latch": {
        "category": "Logic",
        "desc": "This gate is a synchronized RS latch. If both R and S are true, its state will not change. Logic circuits will treat a null, 0, and a \"\" string value as FALSE and anything else as TRUE.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "S": {
                "dataType": DataTypes.ANY,
                "index": 0
            },
            "R": {
                "dataType": DataTypes.ANY,
                "index": 1
            },
            "pulse in C": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "Q": {
                "dataType": DataTypes.BOOLEAN,
                "index": 0
            },
            "!Q": {
                "dataType": DataTypes.BOOLEAN,
                "index": 1
            },
            "pulse out Q": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "pulse out !Q": {
                "dataType": DataTypes.PULSE,
                "index": 2
            }
        }
    },
    "gated D latch": {
        "category": "Logic",
        "desc": "This gate is a synchronized gated D latch. Logic circuits will treat a null, 0, and a \"\" string value as FALSE and anything else as TRUE.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "D": {
                "dataType": DataTypes.ANY,
                "index": 0
            },
            "E": {
                "dataType": DataTypes.ANY,
                "index": 1
            },
            "pulse in C": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "Q": {
                "dataType": DataTypes.BOOLEAN,
                "index": 0
            },
            "!Q": {
                "dataType": DataTypes.BOOLEAN,
                "index": 1
            },
            "pulse out Q": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "pulse out !Q": {
                "dataType": DataTypes.PULSE,
                "index": 2
            }
        }
    },
    "not equal gate": {
        "category": "Logic",
        "desc": "This gate compares two values, and outputs TRUE if both are different. Logic circuits will treat a null, 0, and a \"\" string value as FALSE and anything else as TRUE.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "A": {
                "dataType": DataTypes.ANY,
                "index": 0
            },
            "B": {
                "dataType": DataTypes.ANY,
                "index": 1
            },
            "compare": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "result": {
                "dataType": DataTypes.BOOLEAN,
                "index": 0
            },
            "on true result": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "on false result": {
                "dataType": DataTypes.PULSE,
                "index": 2
            }
        }
    },
    "and gate": {
        "category": "Logic",
        "desc": "This gate will output TRUE if both inputs evaluate to true. Logic circuits will treat a null, 0, and a \"\" string value as FALSE and anything else as TRUE.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "A": {
                "dataType": DataTypes.ANY,
                "index": 0
            },
            "B": {
                "dataType": DataTypes.ANY,
                "index": 1
            },
            "compare": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "result": {
                "dataType": DataTypes.BOOLEAN,
                "index": 0
            },
            "on true result": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "on false result": {
                "dataType": DataTypes.PULSE,
                "index": 2
            }
        }
    },
    "or gate": {
        "category": "Logic",
        "desc": "This gate will output TRUE if one of the inputs evaluate to true. Logic circuits will treat a null, 0, and a \"\" string value as FALSE and anything else as TRUE.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "A": {
                "dataType": DataTypes.ANY,
                "index": 0
            },
            "B": {
                "dataType": DataTypes.ANY,
                "index": 1
            },
            "compare": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "result": {
                "dataType": DataTypes.BOOLEAN,
                "index": 0
            },
            "on true result": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "on false result": {
                "dataType": DataTypes.PULSE,
                "index": 2
            }
        }
    },
    "xor gate": {
        "category": "Logic",
        "desc": "This gate will output TRUE if only one of the inputs evaluate to true. Logic circuits will treat a null, 0, and a \"\" string value as FALSE and anything else as TRUE.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "A": {
                "dataType": DataTypes.ANY,
                "index": 0
            },
            "B": {
                "dataType": DataTypes.ANY,
                "index": 1
            },
            "compare": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "result": {
                "dataType": DataTypes.BOOLEAN,
                "index": 0
            },
            "on true result": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "on false result": {
                "dataType": DataTypes.PULSE,
                "index": 2
            }
        }
    },
    "less than gate": {
        "category": "Logic",
        "desc": "This will output TRUE if the first input is less than the second input. Logic circuits will treat a null, 0, and a \"\" string value as FALSE and anything else as TRUE.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "A": {
                "dataType": DataTypes.ANY,
                "index": 0
            },
            "B": {
                "dataType": DataTypes.ANY,
                "index": 1
            },
            "compare": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "result": {
                "dataType": DataTypes.BOOLEAN,
                "index": 0
            },
            "on true result": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "on false result": {
                "dataType": DataTypes.PULSE,
                "index": 2
            }
        }
    },
    "less than or equal gate": {
        "category": "Logic",
        "desc": "This will output TRUE if the first input is less than, or equal to the second input. Logic circuits will treat a null, 0, and a \"\" string value as FALSE and anything else as TRUE.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "A": {
                "dataType": DataTypes.ANY,
                "index": 0
            },
            "B": {
                "dataType": DataTypes.ANY,
                "index": 1
            },
            "compare": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "result": {
                "dataType": DataTypes.BOOLEAN,
                "index": 0
            },
            "on true result": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "on false result": {
                "dataType": DataTypes.PULSE,
                "index": 2
            }
        }
    },
    "greater than gate": {
        "category": "Logic",
        "desc": "This will output TRUE if the first input is greater than the second input. Logic circuits will treat a null, 0, and a \"\" string value as FALSE and anything else as TRUE.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "A": {
                "dataType": DataTypes.ANY,
                "index": 0
            },
            "B": {
                "dataType": DataTypes.ANY,
                "index": 1
            },
            "compare": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "result": {
                "dataType": DataTypes.BOOLEAN,
                "index": 0
            },
            "on true result": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "on false result": {
                "dataType": DataTypes.PULSE,
                "index": 2
            }
        }
    },
    "greater than or equal gate": {
        "category": "Logic",
        "desc": "This will output TRUE if the first input is greater than, or equal to the second input. Logic circuits will treat a null, 0, and a \"\" string value as FALSE and anything else as TRUE.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "A": {
                "dataType": DataTypes.ANY,
                "index": 0
            },
            "B": {
                "dataType": DataTypes.ANY,
                "index": 1
            },
            "compare": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "result": {
                "dataType": DataTypes.BOOLEAN,
                "index": 0
            },
            "on true result": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "on false result": {
                "dataType": DataTypes.PULSE,
                "index": 2
            }
        }
    },
    "not gate": {
        "category": "Logic",
        "desc": "This gate inverts what's fed into it. Logic circuits will treat a null, 0, and a \"\" string value as FALSE and anything else as TRUE.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "A": {
                "dataType": DataTypes.ANY,
                "index": 0
            },
            "invert": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "result": {
                "dataType": DataTypes.BOOLEAN,
                "index": 0
            },
            "on inverted": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "locomotion circuit": {
        "category": "Manipulation",
        "desc": "This allows a machine to move in a given direction. The circuit accepts a 'dir' number as a direction to move towards.<br>Pulsing the 'step towards dir' activator pin will cause the machine to move one step in that direction, assuming it is not being held, or anchored in some way. It should be noted that the ability to move is dependant on the type of assembly that this circuit inhabits; only drone assemblies can move.",
        "complexity": 10,
        "size": 1,
        "inputs": {
            "direction": {
                "dataType": DataTypes.DIR,
                "index": 0
            },
            "step towards dir": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "obstacle": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "on step": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "blocked": {
                "dataType": DataTypes.PULSE,
                "index": 2
            }
        }
    },
    "plant manipulation module": {
        "category": "Manipulation",
        "desc": "Used to uproot weeds and harvest/plant trays. The circuit accepts a reference to a hydroponic tray or an item on an adjacent tile. Mode input (0-harvest, 1-uproot weeds, 2-uproot plant, 3-plant seed) determines action. Harvesting outputs a list of the harvested plants.",
        "complexity": 10,
        "size": 1,
        "inputs": {
            "tray": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "mode": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "item": {
                "dataType": DataTypes.REF,
                "index": 2
            },
            "pulse in": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "result": {
                "dataType": DataTypes.LIST,
                "index": 0
            },
            "pulse out": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "seed extractor module": {
        "category": "Manipulation",
        "desc": "Used to extract seeds from grown produce. The circuit accepts a reference to a plant item and extracts seeds from it, outputting the results to a list.",
        "complexity": 8,
        "size": 1,
        "inputs": {
            "target": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "pulse in": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "result": {
                "dataType": DataTypes.LIST,
                "index": 0
            },
            "pulse out": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "grabber": {
        "category": "Manipulation",
        "desc": "A circuit with its own inventory for items. Used to grab and store things. This circuit accepts a reference to an object to be grabbed, and can store up to 10 objects. Modes: 1 to grab, 0 to eject the first object, -1 to eject all objects, and -2 to eject the target. If you throw something from a grabber's inventory with a thrower, the grabber will update its outputs accordingly.",
        "complexity": 10,
        "size": 3,
        "inputs": {
            "target": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "mode": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "pulse in": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "first": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "last": {
                "dataType": DataTypes.REF,
                "index": 1
            },
            "amount": {
                "dataType": DataTypes.NUMBER,
                "index": 2
            },
            "contents": {
                "dataType": DataTypes.LIST,
                "index": 3
            },
            "pulse out": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "pulling claw": {
        "category": "Manipulation",
        "desc": "Circuit which can pull things.. This circuit accepts a reference to a thing to be pulled. Modes: 0 for release. 1 for pull.",
        "complexity": 10,
        "size": 3,
        "inputs": {
            "target": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "mode": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "dir": {
                "dataType": DataTypes.DIR,
                "index": 2
            },
            "pulse in": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "is pulling": {
                "dataType": DataTypes.BOOLEAN,
                "index": 0
            },
            "pulse out": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "released": {
                "dataType": DataTypes.PULSE,
                "index": 2
            },
            "pull to dir": {
                "dataType": DataTypes.PULSE,
                "index": 3
            }
        }
    },
    "thrower": {
        "category": "Manipulation",
        "desc": "A compact launcher to throw things from inside or nearby tiles at a low enough velocity not to harm someone. The first and second inputs need to be numbers which correspond to the coordinates to throw objects at relative to the machine itself. The 'fire' activator will cause the mechanism to attempt to throw objects at the coordinates, if possible. Note that the projectile needs to be inside the machine, or on an adjacent tile, and must be medium sized or smaller. The assembly must also be a gun if you wish to throw something while the assembly is in hand.",
        "complexity": 25,
        "size": 2,
        "inputs": {
            "target X rel": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "target Y rel": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "projectile": {
                "dataType": DataTypes.REF,
                "index": 2
            },
            "fire": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {}
    },
    "material manager": {
        "category": "Manipulation",
        "desc": "This circuit is designed for automatic storage and distribution of materials. The first input takes a ref of a machine with a material container. Second input is used for inserting material stacks into the internal material storage. Inputs 3-13 are used to transfer materials between target machine and circuit storage. Positive values will take that number of materials from another machine. Negative values will fill another machine from internal storage. Outputs show current stored amounts of mats.",
        "complexity": 16,
        "size": 1,
        "inputs": {
            "target": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "sheets to insert": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "Metal": {
                "dataType": DataTypes.NUMBER,
                "index": 2
            },
            "Glass": {
                "dataType": DataTypes.NUMBER,
                "index": 3
            },
            "Silver": {
                "dataType": DataTypes.NUMBER,
                "index": 4
            },
            "Gold": {
                "dataType": DataTypes.NUMBER,
                "index": 5
            },
            "Diamond": {
                "dataType": DataTypes.NUMBER,
                "index": 6
            },
            "Uranium": {
                "dataType": DataTypes.NUMBER,
                "index": 7
            },
            "Solid Plasma": {
                "dataType": DataTypes.NUMBER,
                "index": 8
            },
            "Bluespace Mesh": {
                "dataType": DataTypes.NUMBER,
                "index": 9
            },
            "Bananium": {
                "dataType": DataTypes.NUMBER,
                "index": 10
            },
            "Titanium": {
                "dataType": DataTypes.NUMBER,
                "index": 11
            },
            "Plastic": {
                "dataType": DataTypes.NUMBER,
                "index": 12
            },
            "insert sheet": {
                "dataType": DataTypes.PULSE,
                "index": 0
            },
            "transfer mats": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "push ref": {
                "dataType": DataTypes.PULSE,
                "index": 4
            }
        },
        "outputs": {
            "self ref": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "Total amount": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "Stored Metal": {
                "dataType": DataTypes.NUMBER,
                "index": 2
            },
            "Stored Glass": {
                "dataType": DataTypes.NUMBER,
                "index": 3
            },
            "Stored Silver": {
                "dataType": DataTypes.NUMBER,
                "index": 4
            },
            "Stored Gold": {
                "dataType": DataTypes.NUMBER,
                "index": 5
            },
            "Stored Diamond": {
                "dataType": DataTypes.NUMBER,
                "index": 6
            },
            "Stored Uranium": {
                "dataType": DataTypes.NUMBER,
                "index": 7
            },
            "Stored Solid Plasma": {
                "dataType": DataTypes.NUMBER,
                "index": 8
            },
            "Stored Bluespace Mesh": {
                "dataType": DataTypes.NUMBER,
                "index": 9
            },
            "Stored Bananium": {
                "dataType": DataTypes.NUMBER,
                "index": 10
            },
            "Stored Titanium": {
                "dataType": DataTypes.NUMBER,
                "index": 11
            },
            "Stored Plastic": {
                "dataType": DataTypes.NUMBER,
                "index": 12
            },
            "on success": {
                "dataType": DataTypes.PULSE,
                "index": 2
            },
            "on failure": {
                "dataType": DataTypes.PULSE,
                "index": 3
            },
            "on push ref": {
                "dataType": DataTypes.PULSE,
                "index": 5
            }
        }
    },
    "inserter": {
        "category": "Manipulation",
        "desc": "A nimble circuit that puts stuff inside a storage like a backpack and can take it out aswell. This circuit accepts a reference to an object to be inserted or extracted depending on mode. If a storage is given for extraction, the extracted item will be put in the new storage. Modes: 1 insert, 0 to extract.",
        "complexity": 10,
        "size": 3,
        "inputs": {
            "target object": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "target container": {
                "dataType": DataTypes.REF,
                "index": 1
            },
            "mode": {
                "dataType": DataTypes.NUMBER,
                "index": 2
            },
            "pulse in": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "pulse out": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "renamer": {
        "category": "Manipulation",
        "desc": "A small circuit that renames the assembly it is in. Useful paired with speech-based circuits. This circuit accepts a string as input, and can be pulsed to rewrite the current assembly's name with said string. On success, it pulses the default pulse-out wire.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "name": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "rename": {
                "dataType": DataTypes.PULSE,
                "index": 0
            },
            "get name": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        },
        "outputs": {
            "current name": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "pulse out": {
                "dataType": DataTypes.PULSE,
                "index": 2
            }
        }
    },
    "redescriber": {
        "category": "Manipulation",
        "desc": "Takes any string as an input and will set it as the assembly's description. Strings should can be of any length.",
        "complexity": 3,
        "size": 1,
        "inputs": {
            "text": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "redescribe": {
                "dataType": DataTypes.PULSE,
                "index": 0
            },
            "get description": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        },
        "outputs": {
            "description": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "pulse out": {
                "dataType": DataTypes.PULSE,
                "index": 2
            }
        }
    },
    "auto-repainter": {
        "category": "Manipulation",
        "desc": "There's an oddly high amount of spraying cans fitted right inside this circuit. Takes a value in hexadecimal and uses it to repaint the assembly it is in.",
        "complexity": 3,
        "size": 1,
        "inputs": {
            "color": {
                "dataType": DataTypes.COLOR,
                "index": 0
            },
            "repaint": {
                "dataType": DataTypes.PULSE,
                "index": 0
            },
            "get color": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        },
        "outputs": {
            "current color": {
                "dataType": DataTypes.COLOR,
                "index": 0
            },
            "pulse out": {
                "dataType": DataTypes.PULSE,
                "index": 2
            }
        }
    },
    "activator": {
        "category": "Manipulation",
        "desc": "Circuit which can activate things remotely! This circuit needs a reference to a thing to activate, it also needs to know who is activating said item.",
        "complexity": 10,
        "size": 3,
        "inputs": {
            "target": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "person": {
                "dataType": DataTypes.REF,
                "index": 1
            },
            "pulse in": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "pulse out": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "advactivator": {
        "category": "Manipulation",
        "desc": "Circuit which can UI elements remotely! This circuit needs a reference to a to activate, as well as action and parems to pass! Use mode 1 for lists or 0 for single values.",
        "complexity": 10,
        "size": 3,
        "inputs": {
            "target": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "action": {
                "dataType": DataTypes.STRING,
                "index": 1
            },
            "mode": {
                "dataType": DataTypes.NUMBER,
                "index": 2
            },
            "params": {
                "dataType": DataTypes.STRING,
                "index": 3
            },
            "listparams": {
                "dataType": DataTypes.LIST,
                "index": 4
            },
            "pulse in": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "pulse out": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "memory chip": {
        "category": "Memory",
        "desc": "This tiny chip can store one piece of data.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "input 1": {
                "dataType": DataTypes.ANY,
                "index": 0
            },
            "set": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "output 1": {
                "dataType": DataTypes.ANY,
                "index": 0
            },
            "on set": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "small memory circuit": {
        "category": "Memory",
        "desc": "This circuit can store two pieces of data.",
        "complexity": 2,
        "size": 1,
        "inputs": {
            "input 1": {
                "dataType": DataTypes.ANY,
                "index": 0
            },
            "input 2": {
                "dataType": DataTypes.ANY,
                "index": 1
            },
            "set": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "output 1": {
                "dataType": DataTypes.ANY,
                "index": 0
            },
            "output 2": {
                "dataType": DataTypes.ANY,
                "index": 1
            },
            "on set": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "medium memory circuit": {
        "category": "Memory",
        "desc": "This circuit can store four pieces of data.",
        "complexity": 4,
        "size": 1,
        "inputs": {
            "input 1": {
                "dataType": DataTypes.ANY,
                "index": 0
            },
            "input 2": {
                "dataType": DataTypes.ANY,
                "index": 1
            },
            "input 3": {
                "dataType": DataTypes.ANY,
                "index": 2
            },
            "input 4": {
                "dataType": DataTypes.ANY,
                "index": 3
            },
            "set": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "output 1": {
                "dataType": DataTypes.ANY,
                "index": 0
            },
            "output 2": {
                "dataType": DataTypes.ANY,
                "index": 1
            },
            "output 3": {
                "dataType": DataTypes.ANY,
                "index": 2
            },
            "output 4": {
                "dataType": DataTypes.ANY,
                "index": 3
            },
            "on set": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "large memory circuit": {
        "category": "Memory",
        "desc": "This big circuit can store eight pieces of data.",
        "complexity": 8,
        "size": 1,
        "inputs": {
            "input 1": {
                "dataType": DataTypes.ANY,
                "index": 0
            },
            "input 2": {
                "dataType": DataTypes.ANY,
                "index": 1
            },
            "input 3": {
                "dataType": DataTypes.ANY,
                "index": 2
            },
            "input 4": {
                "dataType": DataTypes.ANY,
                "index": 3
            },
            "input 5": {
                "dataType": DataTypes.ANY,
                "index": 4
            },
            "input 6": {
                "dataType": DataTypes.ANY,
                "index": 5
            },
            "input 7": {
                "dataType": DataTypes.ANY,
                "index": 6
            },
            "input 8": {
                "dataType": DataTypes.ANY,
                "index": 7
            },
            "set": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "output 1": {
                "dataType": DataTypes.ANY,
                "index": 0
            },
            "output 2": {
                "dataType": DataTypes.ANY,
                "index": 1
            },
            "output 3": {
                "dataType": DataTypes.ANY,
                "index": 2
            },
            "output 4": {
                "dataType": DataTypes.ANY,
                "index": 3
            },
            "output 5": {
                "dataType": DataTypes.ANY,
                "index": 4
            },
            "output 6": {
                "dataType": DataTypes.ANY,
                "index": 5
            },
            "output 7": {
                "dataType": DataTypes.ANY,
                "index": 6
            },
            "output 8": {
                "dataType": DataTypes.ANY,
                "index": 7
            },
            "on set": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "large memory stick": {
        "category": "Memory",
        "desc": "This stick of memory can store up up to sixteen pieces of data.",
        "complexity": 16,
        "size": 1,
        "inputs": {
            "input 1": {
                "dataType": DataTypes.ANY,
                "index": 0
            },
            "input 2": {
                "dataType": DataTypes.ANY,
                "index": 1
            },
            "input 3": {
                "dataType": DataTypes.ANY,
                "index": 2
            },
            "input 4": {
                "dataType": DataTypes.ANY,
                "index": 3
            },
            "input 5": {
                "dataType": DataTypes.ANY,
                "index": 4
            },
            "input 6": {
                "dataType": DataTypes.ANY,
                "index": 5
            },
            "input 7": {
                "dataType": DataTypes.ANY,
                "index": 6
            },
            "input 8": {
                "dataType": DataTypes.ANY,
                "index": 7
            },
            "input 9": {
                "dataType": DataTypes.ANY,
                "index": 8
            },
            "input 10": {
                "dataType": DataTypes.ANY,
                "index": 9
            },
            "input 11": {
                "dataType": DataTypes.ANY,
                "index": 10
            },
            "input 12": {
                "dataType": DataTypes.ANY,
                "index": 11
            },
            "input 13": {
                "dataType": DataTypes.ANY,
                "index": 12
            },
            "input 14": {
                "dataType": DataTypes.ANY,
                "index": 13
            },
            "input 15": {
                "dataType": DataTypes.ANY,
                "index": 14
            },
            "input 16": {
                "dataType": DataTypes.ANY,
                "index": 15
            },
            "set": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "output 1": {
                "dataType": DataTypes.ANY,
                "index": 0
            },
            "output 2": {
                "dataType": DataTypes.ANY,
                "index": 1
            },
            "output 3": {
                "dataType": DataTypes.ANY,
                "index": 2
            },
            "output 4": {
                "dataType": DataTypes.ANY,
                "index": 3
            },
            "output 5": {
                "dataType": DataTypes.ANY,
                "index": 4
            },
            "output 6": {
                "dataType": DataTypes.ANY,
                "index": 5
            },
            "output 7": {
                "dataType": DataTypes.ANY,
                "index": 6
            },
            "output 8": {
                "dataType": DataTypes.ANY,
                "index": 7
            },
            "output 9": {
                "dataType": DataTypes.ANY,
                "index": 8
            },
            "output 10": {
                "dataType": DataTypes.ANY,
                "index": 9
            },
            "output 11": {
                "dataType": DataTypes.ANY,
                "index": 10
            },
            "output 12": {
                "dataType": DataTypes.ANY,
                "index": 11
            },
            "output 13": {
                "dataType": DataTypes.ANY,
                "index": 12
            },
            "output 14": {
                "dataType": DataTypes.ANY,
                "index": 13
            },
            "output 15": {
                "dataType": DataTypes.ANY,
                "index": 14
            },
            "output 16": {
                "dataType": DataTypes.ANY,
                "index": 15
            },
            "on set": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "constant chip": {
        "category": "Memory",
        "desc": "This tiny chip can store one piece of data, which cannot be overwritten without disassembly.",
        "complexity": 0,
        "size": 1,
        "inputs": {
            "push data": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "output pin": {
                "dataType": DataTypes.ANY,
                "index": 0
            }
        }
    },
    "screen": {
        "category": "Output",
        "desc": "Takes any data type as an input, and displays it to the user upon examining.  use <br> to start a new line",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "displayed data": {
                "dataType": DataTypes.ANY,
                "index": 0
            },
            "load data": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {}
    },
    "medium screen": {
        "category": "Output",
        "desc": "Takes any data type as an input and displays it to anybody near the device when pulsed. It can also be examined to see the last thing it displayed.  use <br> to start a new line",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "displayed data": {
                "dataType": DataTypes.ANY,
                "index": 0
            },
            "load data": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {}
    },
    "large screen": {
        "category": "Output",
        "desc": "Takes any data type as an input and displays it to the user upon examining, and to all nearby beings when pulsed.  use <br> to start a new line",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "displayed data": {
                "dataType": DataTypes.ANY,
                "index": 0
            },
            "load data": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {}
    },
    "light": {
        "category": "Output",
        "desc": "A basic light which can be toggled on/off when pulsed.",
        "complexity": 4,
        "size": 1,
        "inputs": {
            "toggle light": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {}
    },
    "advanced light": {
        "category": "Output",
        "desc": "A light that takes a hexadecimal color value and a brightness value, and can be toggled on/off by pulsing it.",
        "complexity": 8,
        "size": 1,
        "inputs": {
            "color": {
                "dataType": DataTypes.COLOR,
                "index": 0
            },
            "brightness": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "toggle light": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {}
    },
    "speaker circuit": {
        "category": "Output",
        "desc": "A miniature speaker is attached to this component. The first input pin determines which sound is used. The choices are; . The second pin determines the volume of sound that is played, and the third determines if the frequency of the sound will vary with each activation.",
        "complexity": 8,
        "size": 1,
        "inputs": {
            "sound ID": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "volume": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "frequency": {
                "dataType": DataTypes.BOOLEAN,
                "index": 2
            },
            "play sound": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {}
    },
    "beeper circuit": {
        "category": "Output",
        "desc": "Takes a sound name as an input, and will play said sound when pulsed. This circuit has a variety of beeps, boops, and buzzes to choose from. The first input pin determines which sound is used. The choices are; beep, chime, buzz sigh, buzz twice, ping, synth yes, synth no, warning buzz. The second pin determines the volume of sound that is played, and the third determines if the frequency of the sound will vary with each activation.",
        "complexity": 8,
        "size": 1,
        "inputs": {
            "sound ID": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "volume": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "frequency": {
                "dataType": DataTypes.BOOLEAN,
                "index": 2
            },
            "play sound": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {}
    },
    "securitron sound circuit": {
        "category": "Output",
        "desc": "Takes a sound name as an input, and will play said sound when pulsed. This circuit is similar to those used in Securitrons. The first input pin determines which sound is used. The choices are; creep, criminal, freeze, god, i am the law, insult, radio, secure day. The second pin determines the volume of sound that is played, and the third determines if the frequency of the sound will vary with each activation.",
        "complexity": 8,
        "size": 1,
        "inputs": {
            "sound ID": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "volume": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "frequency": {
                "dataType": DataTypes.BOOLEAN,
                "index": 2
            },
            "play sound": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {}
    },
    "medbot sound circuit": {
        "category": "Output",
        "desc": "Takes a sound name as an input, and will play said sound when pulsed. This circuit is often found in medical robots. The first input pin determines which sound is used. The choices are; surgeon, radar, feel better, patched up, injured, insult, coming, help, live, lost, flies, catch, delicious, apple, no. The second pin determines the volume of sound that is played, and the third determines if the frequency of the sound will vary with each activation.",
        "complexity": 8,
        "size": 1,
        "inputs": {
            "sound ID": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "volume": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "frequency": {
                "dataType": DataTypes.BOOLEAN,
                "index": 2
            },
            "play sound": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {}
    },
    "Female ai vox sound circuit": {
        "category": "Output",
        "desc": "Takes a sound name as an input, and will play said sound when pulsed. This circuit is often found in AI announcement systems. The first input pin determines which sound is used. It uses the AI Vox Broadcast word list. So either experiment to find words that work, or ask the AI to help in figuring them out. The second pin determines the volume of sound that is played, and the third determines if the frequency of the sound will vary with each activation.",
        "complexity": 8,
        "size": 1,
        "inputs": {
            "sound ID": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "volume": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "frequency": {
                "dataType": DataTypes.BOOLEAN,
                "index": 2
            },
            "play sound": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {}
    },
    "Male ai vox sound circuit": {
        "category": "Output",
        "desc": "Takes a sound name as an input, and will play said sound when pulsed. This circuit is often found in AI announcement systems. The first input pin determines which sound is used. It uses the AI Vox Broadcast word list. So either experiment to find words that work, or ask the AI to help in figuring them out. The second pin determines the volume of sound that is played, and the third determines if the frequency of the sound will vary with each activation.",
        "complexity": 8,
        "size": 1,
        "inputs": {
            "sound ID": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "volume": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "frequency": {
                "dataType": DataTypes.BOOLEAN,
                "index": 2
            },
            "play sound": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {}
    },
    "Military ai vox sound circuit": {
        "category": "Output",
        "desc": "Takes a sound name as an input, and will play said sound when pulsed. This circuit is often found in AI announcement systems. The first input pin determines which sound is used. It uses the AI Vox Broadcast word list. So either experiment to find words that work, or ask the AI to help in figuring them out. The second pin determines the volume of sound that is played, and the third determines if the frequency of the sound will vary with each activation.",
        "complexity": 8,
        "size": 1,
        "inputs": {
            "sound ID": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "volume": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "frequency": {
                "dataType": DataTypes.BOOLEAN,
                "index": 2
            },
            "play sound": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {}
    },
    "text-to-speech circuit": {
        "category": "Output",
        "desc": "Takes any string as an input and will make the device say the string when pulsed. This unit is more advanced than the plain speaker circuit, able to transpose any valid text to speech.",
        "complexity": 12,
        "size": 1,
        "inputs": {
            "text": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "to speech": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {}
    },
    "video camera circuit": {
        "category": "Output",
        "desc": "Takes a string as a name and a boolean to determine whether it is on, and uses this to be a camera linked to a list of networks you choose. The camera is linked to a list of camera networks of your choosing. Common choices are 'rd' for the research network, 'ss13' for the main station network (visible to AI), 'mine' for the mining network, and 'thunder' for the thunderdome network (viewable from bar).",
        "complexity": 10,
        "size": 1,
        "inputs": {
            "camera name": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "camera active": {
                "dataType": DataTypes.BOOLEAN,
                "index": 1
            },
            "camera fast mode": {
                "dataType": DataTypes.BOOLEAN,
                "index": 2
            },
            "camera network": {
                "dataType": DataTypes.LIST,
                "index": 3
            }
        },
        "outputs": {}
    },
    "light-emitting diode": {
        "category": "Output",
        "desc": "RGB LED. Takes a boolean value in, and if the boolean value is 'true-equivalent', the LED will be marked as lit on examine. TRUE-equivalent values are: Non-empty strings, non-zero numbers, and valid refs.",
        "complexity": 0.1,
        "size": 1,
        "inputs": {
            "lit": {
                "dataType": DataTypes.BOOLEAN,
                "index": 0
            },
            "color": {
                "dataType": DataTypes.COLOR,
                "index": 1
            }
        },
        "outputs": {}
    },
    "AR interface": {
        "category": "Output",
        "desc": "Takes an icon name as an input, and will update the status hud when data is written to it. Takes an icon name as an input, and will update the status hud when data is written to it, this means it can change the icon and have the icon stay that way even if the circuit is removed. The acceptable inputs are 'alert', 'move', 'working', 'patrol', 'called', and 'heart'. Any input other than that will return the icon to its default state.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "icon": {
                "dataType": DataTypes.STRING,
                "index": 0
            }
        },
        "outputs": {}
    },
    "text-to-radio circuit": {
        "category": "Output",
        "desc": "Takes any string as an input and will make the device output it in the radio with the frequency chosen as input. Similar to the text-to-speech circuit, except the fact that the text is converted into a subspace signal and broadcasted to the desired frequency, or 1459 as default.The frequency is a number, and doesn't need the dot. Example: Common frequency is 145.9, so the result is 1459 as a number.",
        "complexity": 15,
        "size": 1,
        "inputs": {
            "text": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "frequency": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "broadcast": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "encryption keys": {
                "dataType": DataTypes.LIST,
                "index": 0
            }
        }
    },
    "pointer circuit": {
        "category": "Output",
        "desc": "Takes a reference and points to it upon activation. This machine points at something for everyone to see.",
        "complexity": 2,
        "size": 1,
        "inputs": {
            "target": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "point": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "on pointed": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "on failure": {
                "dataType": DataTypes.PULSE,
                "index": 2
            }
        }
    },
    "power transmission circuit": {
        "category": "Power - Active",
        "desc": "This can wirelessly transmit electricity from an assembly's battery towards a nearby machine. This circuit transmits 5 kJ of electricity every time the activator pin is pulsed. The input pin must be a reference to a machine to send electricity to. This can be a battery, or anything containing a battery. The machine can exist inside the assembly, or adjacent to it. The power is sourced from the assembly's power cell. If the target is outside of the assembly, some power is lost due to ineffiency.",
        "complexity": 16,
        "size": 1,
        "inputs": {
            "target": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "transmit": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "target cell charge": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "target cell max charge": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "target cell percentage": {
                "dataType": DataTypes.NUMBER,
                "index": 2
            },
            "on transmit": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "large power transmission circuit": {
        "category": "Power - Active",
        "desc": "This can wirelessly transmit a lot of electricity from an assembly's battery towards a nearby machine. <b>Warning:</b> Do not operate in flammable environments. This circuit transmits 20 kJ of electricity every time the activator pin is pulsed. The input pin must be a reference to a machine to send electricity to. This can be a battery, or anything containing a battery. The machine can exist inside the assembly, or adjacent to it. The power is sourced from the assembly's power cell. If the target is outside of the assembly, some power is lost due to ineffiency. Warning! Don't stack more than 1 power transmitter, as it becomes less efficient for every other transmission circuit in its own assembly and other nearby ones.",
        "complexity": 32,
        "size": 1,
        "inputs": {
            "target": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "transmit": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "target cell charge": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "target cell max charge": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "target cell percentage": {
                "dataType": DataTypes.NUMBER,
                "index": 2
            },
            "on transmit": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "integrated hypo-injector": {
        "category": "Reagent",
        "desc": "This scary looking thing is able to pump liquids into, or suck liquids out of, whatever it's pointed at. This autoinjector can push up to 30 units of reagents into another container or someone else outside of the machine. The target must be adjacent to the machine, and if it is a person, they cannot be wearing thick clothing. Negative given amounts makes the injector suck out reagents instead.",
        "complexity": 20,
        "size": 1,
        "inputs": {
            "target": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "injection amount": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "inject": {
                "dataType": DataTypes.PULSE,
                "index": 0
            },
            "push ref": {
                "dataType": DataTypes.PULSE,
                "index": 3
            }
        },
        "outputs": {
            "volume used": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "self reference": {
                "dataType": DataTypes.REF,
                "index": 1
            },
            "on injected": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "on fail": {
                "dataType": DataTypes.PULSE,
                "index": 2
            },
        }
    },
    "reagent pump": {
        "category": "Reagent",
        "desc": "Moves liquids safely inside a machine, or even nearby it. This is a pump which will move liquids from the source ref to the target ref. The third pin determines how much liquid is moved per pulse, between 0 and 50. The pump can move reagents to any open container inside the machine, or outside the machine if it is adjacent to the machine.",
        "complexity": 8,
        "size": 1,
        "inputs": {
            "source": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "target": {
                "dataType": DataTypes.REF,
                "index": 1
            },
            "injection amount": {
                "dataType": DataTypes.NUMBER,
                "index": 2
            },
            "transfer reagents": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "on transfer": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "reagent storage": {
        "category": "Reagent",
        "desc": "Stores liquid inside the device away from electrical components. It can store up to 60u. This is effectively an internal beaker.",
        "complexity": 4,
        "size": 1,
        "inputs": {
            "push ref": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "volume used": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "self reference": {
                "dataType": DataTypes.REF,
                "index": 1
            }
        }
    },
    "big reagent storage": {
        "category": "Reagent",
        "desc": "Stores liquid inside the device away from electrical components. Can store up to 180u. This is effectively an internal beaker.",
        "complexity": 16,
        "size": 1,
        "inputs": {
            "push ref": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "volume used": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "self reference": {
                "dataType": DataTypes.REF,
                "index": 1
            }
        }
    },
    "cryo reagent storage": {
        "category": "Reagent",
        "desc": "Stores liquid inside the device away from electrical components. It can store up to 60u. This will also prevent reactions. This is effectively an internal cryo beaker.",
        "complexity": 8,
        "size": 1,
        "inputs": {
            "push ref": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "volume used": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "self reference": {
                "dataType": DataTypes.REF,
                "index": 1
            }
        }
    },
    "reagent grinder": {
        "category": "Reagent",
        "desc": "This is a reagent grinder. It accepts a ref to something, and refines it into reagents. It can store up to 100u. ",
        "complexity": 16,
        "size": 1,
        "inputs": {
            "target": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "grind": {
                "dataType": DataTypes.PULSE,
                "index": 0
            },
            "push ref": {
                "dataType": DataTypes.PULSE,
                "index": 3
            }
        },
        "outputs": {
            "volume used": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "self reference": {
                "dataType": DataTypes.REF,
                "index": 1
            },
            "on grind": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "on fail": {
                "dataType": DataTypes.PULSE,
                "index": 2
            }
        }
    },
    "reagent juicer": {
        "category": "Reagent",
        "desc": "This is a reagent juicer. It accepts a ref to something and refines it into reagents. It can store up to 100u. ",
        "complexity": 16,
        "size": 1,
        "inputs": {
            "target": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "juice": {
                "dataType": DataTypes.PULSE,
                "index": 0
            },
            "push ref": {
                "dataType": DataTypes.PULSE,
                "index": 3
            }
        },
        "outputs": {
            "volume used": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "self reference": {
                "dataType": DataTypes.REF,
                "index": 1
            },
            "on juice": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "on fail": {
                "dataType": DataTypes.PULSE,
                "index": 2
            }
        }
    },
    "reagent scanner": {
        "category": "Reagent",
        "desc": "Stores liquid inside the device away from electrical components. It can store up to 60u. On pulse this beaker will send list of contained reagents. Mostly useful for filtering reagents.",
        "complexity": 8,
        "size": 1,
        "inputs": {
            "scan": {
                "dataType": DataTypes.PULSE,
                "index": 0
            },
            "push ref": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        },
        "outputs": {
            "volume used": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "self reference": {
                "dataType": DataTypes.REF,
                "index": 1
            },
            "list of reagents": {
                "dataType": DataTypes.LIST,
                "index": 2
            }
        }
    },
    "chemical heater": {
        "category": "Reagent",
        "desc": "Stores liquid inside the device away from electrical components. It can store up to 60u. It will heat or cool the reagents to the target temperature when turned on. This is effectively an internal beaker.",
        "complexity": 8,
        "size": 1,
        "inputs": {
            "target temperature": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "on": {
                "dataType": DataTypes.BOOLEAN,
                "index": 1
            },
            "push ref": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "volume used": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "self reference": {
                "dataType": DataTypes.REF,
                "index": 1
            },
            "temperature": {
                "dataType": DataTypes.NUMBER,
                "index": 2
            }
        }
    },
    "reagent filter": {
        "category": "Reagent",
        "desc": "Filters liquids by list of desired or unwanted reagents. This is a filter which will move liquids from the source to its target. If the amount in the fourth pin is positive, it will move all reagents except those in the unwanted list. If the amount in the fourth pin is negative, it will only move the reagents in the wanted list. The third pin determines how many reagents are moved per pulse, between 0 and 50. Amount is given for each separate reagent.",
        "complexity": 8,
        "size": 1,
        "inputs": {
            "source": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "target": {
                "dataType": DataTypes.REF,
                "index": 1
            },
            "injection amount": {
                "dataType": DataTypes.NUMBER,
                "index": 2
            },
            "list of reagents": {
                "dataType": DataTypes.LIST,
                "index": 3
            },
            "transfer reagents": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "on transfer": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "smoke generator": {
        "category": "Reagent",
        "desc": "Unlike most electronics, creating smoke is completely intentional. This smoke generator creates clouds of smoke on command. It can also hold liquids inside, which will go into the smoke clouds when activated. The reagents are consumed when the smoke is made. Requires at least 10 units of reagents to generate smoke.",
        "complexity": 20,
        "size": 1,
        "inputs": {
            "create smoke": {
                "dataType": DataTypes.PULSE,
                "index": 0
            },
            "push ref": {
                "dataType": DataTypes.PULSE,
                "index": 2
            }
        },
        "outputs": {
            "volume used": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "self reference": {
                "dataType": DataTypes.REF,
                "index": 1
            },
            "on smoked": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "integrated extinguisher": {
        "category": "Reagent",
        "desc": "This circuit sprays any of its contents out like an extinguisher. This circuit can hold up to 30 units of any given chemicals. On each use, it sprays these reagents like a fire extinguisher. Requires at least 10 units of reagents to work.",
        "complexity": 20,
        "size": 1,
        "inputs": {
            "target X rel": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "target Y rel": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "spray": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "volume": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "self reference": {
                "dataType": DataTypes.REF,
                "index": 1
            },
            "on sprayed": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "on fail": {
                "dataType": DataTypes.PULSE,
                "index": 2
            }
        }
    },
    "basic pathfinder": {
        "category": "Smart",
        "desc": "This complex circuit is able to determine what direction a given target is. This circuit uses a miniturized integrated camera to determine where the target is. If the machine cannot see the target, it will not be able to calculate the correct direction.",
        "complexity": 5,
        "size": 1,
        "inputs": {
            "target": {
                "dataType": DataTypes.REF,
                "index": 0
            },
            "ignore obstacles": {
                "dataType": DataTypes.BOOLEAN,
                "index": 1
            },
            "calculate dir": {
                "dataType": DataTypes.PULSE,
                "index": 0
            },
        },
        "outputs": {
            "dir": {
                "dataType": DataTypes.DIR,
                "index": 0
            },
            "on calculated": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "not calculated": {
                "dataType": DataTypes.PULSE,
                "index": 2
            }
        }
    },
    "coordinate pathfinder": {
        "category": "Smart",
        "desc": "This complex circuit is able to determine what direction a given target is. This circuit uses absolute coordinates to determine where the target is. If the machine cannot see the target, it will not be able to calculate the correct direction. This circuit will only work while inside an assembly.",
        "complexity": 5,
        "size": 1,
        "inputs": {
            "X": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "Y": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "ignore obstacles": {
                "dataType": DataTypes.BOOLEAN,
                "index": 2
            },
            "calculate dir": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "dir": {
                "dataType": DataTypes.DIR,
                "index": 0
            },
            "distance": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "on calculated": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "not calculated": {
                "dataType": DataTypes.PULSE,
                "index": 2
            }
        }
    },
    "advanced pathfinder": {
        "category": "Smart",
        "desc": "This circuit uses a complex processor for long-range pathfinding. This circuit uses absolute coordinates to find its target. A path will be generated to the target, taking obstacles into account, and pathing around any instances of said input. The passkey provided from a card reader is used to calculate a valid path through airlocks.",
        "complexity": 40,
        "size": 1,
        "inputs": {
            "X target": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "Y target": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "obstacle": {
                "dataType": DataTypes.REF,
                "index": 2
            },
            "access": {
                "dataType": DataTypes.STRING,
                "index": 3
            },
            "calculate path": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "X": {
                "dataType": DataTypes.LIST,
                "index": 0
            },
            "Y": {
                "dataType": DataTypes.LIST,
                "index": 1
            },
            "on calculated": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "not calculated": {
                "dataType": DataTypes.PULSE,
                "index": 2
            }
        }
    },
    "find-replace circuit": {
        "category": "Text",
        "desc": "Replaces all of one bit of text with another Takes a string(haystack) and puts out the string while having a certain word(needle) replaced with another.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "haystack": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "needle": {
                "dataType": DataTypes.STRING,
                "index": 1
            },
            "replacement": {
                "dataType": DataTypes.STRING,
                "index": 2
            },
            "replace": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "replaced string": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "on replaced": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "two-sec delay circuit": {
        "category": "Time",
        "desc": "This sends a pulse signal out after a delay, critical for ensuring proper control flow in a complex machine.  This circuit is set to send a pulse after a delay of two seconds.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "incoming": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "outgoing": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "five-sec delay circuit": {
        "category": "Time",
        "desc": "This sends a pulse signal out after a delay, critical for ensuring proper control flow in a complex machine.  This circuit is set to send a pulse after a delay of five seconds.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "incoming": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "outgoing": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "one-sec delay circuit": {
        "category": "Time",
        "desc": "This sends a pulse signal out after a delay, critical for ensuring proper control flow in a complex machine.  This circuit is set to send a pulse after a delay of one second.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "incoming": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "outgoing": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "half-sec delay circuit": {
        "category": "Time",
        "desc": "This sends a pulse signal out after a delay, critical for ensuring proper control flow in a complex machine.  This circuit is set to send a pulse after a delay of half a second.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "incoming": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "outgoing": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "tenth-sec delay circuit": {
        "category": "Time",
        "desc": "This sends a pulse signal out after a delay, critical for ensuring proper control flow in a complex machine.  This circuit is set to send a pulse after a delay of 1/10th of a second.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "incoming": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "outgoing": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "custom delay circuit": {
        "category": "Time",
        "desc": "This sends a pulse signal out after a delay defined in tenths of a second, critical for ensuring proper control flow in a complex machine. This circuit's delay can be customized, between 1/10th of a second to one hour. The delay is updated upon receiving a pulse. The delay is defined in tenths of a second. For instance, 4 will be a delay of 0.4 seconds, or 15 for 1.5 seconds.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "delay time": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "incoming": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "outgoing": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "ticker circuit": {
        "category": "Time",
        "desc": "This circuit sends an automatic pulse every four seconds.",
        "complexity": 4,
        "size": 1,
        "inputs": {
            "enable ticking": {
                "dataType": DataTypes.BOOLEAN,
                "index": 0
            }
        },
        "outputs": {
            "outgoing pulse": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        }
    },
    "custom ticker": {
        "category": "Time",
        "desc": "This advanced circuit sends an automatic pulse every given interval, defined in tenths of a second. This advanced circuit sends an automatic pulse every given interval, defined in tenths of a second. For example, setting the time pin to 4 will send a pulse every 0.4 seconds, or 15 for every 1.5 seconds.",
        "complexity": 8,
        "size": 1,
        "inputs": {
            "enable ticking": {
                "dataType": DataTypes.BOOLEAN,
                "index": 0
            },
            "delay time": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            }
        },
        "outputs": {
            "outgoing pulse": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        }
    },
    "fast ticker": {
        "category": "Time",
        "desc": "This advanced circuit sends an automatic pulse every two seconds.",
        "complexity": 6,
        "size": 1,
        "inputs": {
            "enable ticking": {
                "dataType": DataTypes.BOOLEAN,
                "index": 0
            }
        },
        "outputs": {
            "outgoing pulse": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        }
    },
    "slow ticker": {
        "category": "Time",
        "desc": "This simple circuit sends an automatic pulse every six seconds.",
        "complexity": 2,
        "size": 1,
        "inputs": {
            "enable ticking": {
                "dataType": DataTypes.BOOLEAN,
                "index": 0
            }
        },
        "outputs": {
            "outgoing pulse": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        }
    },
    "integrated clock (NT Common Time)": {
        "category": "Time",
        "desc": "Tells you what the time is, in Nanotrasen Common Time.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "get time": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "time": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "hours": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "minutes": {
                "dataType": DataTypes.NUMBER,
                "index": 2
            },
            "seconds": {
                "dataType": DataTypes.NUMBER,
                "index": 3
            },
            "absolute decisecond elapsed time": {
                "dataType": DataTypes.NUMBER,
                "index": 4
            },
            "on time got": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "integrated clock (Station Time)": {
        "category": "Time",
        "desc": "Tells you what the time is, in terms and adjusted for your local station or planet",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "get time": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "time": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "hours": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "minutes": {
                "dataType": DataTypes.NUMBER,
                "index": 2
            },
            "seconds": {
                "dataType": DataTypes.NUMBER,
                "index": 3
            },
            "absolute decisecond elapsed time": {
                "dataType": DataTypes.NUMBER,
                "index": 4
            },
            "on time got": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "integrated clock (Bluespace Absolute Time)": {
        "category": "Time",
        "desc": "Tells you what the time is, in Bluespace Absolute Time, unaffected by local time dilation or other phenomenon.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "get time": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "time": {
                "dataType": DataTypes.STRING,
                "index": 0
            },
            "hours": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "minutes": {
                "dataType": DataTypes.NUMBER,
                "index": 2
            },
            "seconds": {
                "dataType": DataTypes.NUMBER,
                "index": 3
            },
            "absolute decisecond elapsed time": {
                "dataType": DataTypes.NUMBER,
                "index": 4
            },
            "on time got": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "sin circuit": {
        "category": "Trig",
        "desc": "Only evil if you're allergic to math. Takes a degree and outputs the sine of said degree. Input and output are in degrees.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "A": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "compute": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "result": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "on computed": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "cos circuit": {
        "category": "Trig",
        "desc": "Takes a degree and outputs the cosine of said degree. Input and output are in degrees.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "A": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "compute": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "result": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "on computed": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "tan circuit": {
        "category": "Trig",
        "desc": "Takes a degree and outputs the tangent of said degree. Input and output are in degrees.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "A": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "compute": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "result": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "on computed": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "cosecant (CSC) circuit": {
        "category": "Trig",
        "desc": "Takes a degree and outputs the cosecant of said degree. Input and output are in degrees.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "A": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "compute": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "result": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "on computed": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "secant (SEC) circuit": {
        "category": "Trig",
        "desc": "Takes a degree and outputs the secant of said degree. Input and output are in degrees.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "A": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "compute": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "result": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "on computed": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "cotangent (COT) circuit": {
        "category": "Trig",
        "desc": "Takes a degree and outputs the cotangent of said degree. Input and output are in degrees.",
        "complexity": 1,
        "size": 1,
        "inputs": {
            "A": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "compute": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "result": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "on computed": {
                "dataType": DataTypes.PULSE,
                "index": 1
            }
        }
    },
    "weapon firing mechanism": {
        "category": "Weaponized",
        "desc": "This somewhat complicated system allows one to slot in a gun, direct it towards a position, and remotely fire it. The firing mechanism can slot in any energy weapon. The first and second inputs need to be numbers which correspond to coordinates for the gun to fire at relative to the machine itself. The 'fire' activator will cause the mechanism to attempt to fire the weapon at the coordinates, if possible. Mode will switch between lethal (TRUE) or stun (FALSE) modes. It uses the internal battery of the weapon itself, not the assembly. If you wish to fire the gun while the circuit is in hand, you will need to use an assembly that is a gun.",
        "complexity": 20,
        "size": 3,
        "inputs": {
            "target X rel": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "target Y rel": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "mode": {
                "dataType": DataTypes.BOOLEAN,
                "index": 2
            },
            "fire": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "reference to gun": {
                "dataType": DataTypes.REF,
                "index": 0
            }
        }
    },
    "grenade primer": {
        "category": "Weaponized",
        "desc": "This circuit comes with the ability to attach most types of grenades and prime them at will. The time between priming and detonation is limited to between 1 to 12 seconds, but is optional. If the input is not set, not a number, or a number less than 1, the grenade's built-in timing will be used. Beware: Once primed, there is no aborting the process!",
        "complexity": 30,
        "size": 1,
        "inputs": {
            "detonation time": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "prime grenade": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {}
    },
    "pneumatic cannon": {
        "category": "Weaponized",
        "desc": "A compact pneumatic cannon to throw things from inside or nearby tiles at a high enough velocity to cause damage. Requires air from a canister to fire. The first and second inputs need to be numbers which correspond to the coordinates to throw objects at relative to the machine itself. The 'fire' activator will cause the mechanism to attempt to launch objects at the coordinates, if possible. Note that the projectile needs to be inside the machine, or on an adjacent tile, and must be medium sized or smaller. The assembly must also be a gun if you wish to launch something while the assembly is in hand.",
        "complexity": 50,
        "size": 4,
        "inputs": {
            "target X rel": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "target Y rel": {
                "dataType": DataTypes.NUMBER,
                "index": 1
            },
            "projectile": {
                "dataType": DataTypes.REF,
                "index": 2
            },
            "canister": {
                "dataType": DataTypes.REF,
                "index": 3
            },
            "fire": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {}
    },
    "electronic stun module": {
        "category": "Weaponized",
        "desc": "Used to stun a target holding the device via electricity. Attempts to stun the holder of this device, with the strength input being the strength of the stun, from 1 to 70.",
        "complexity": 30,
        "size": 4,
        "inputs": {
            "strength": {
                "dataType": DataTypes.NUMBER,
                "index": 0
            },
            "stun": {
                "dataType": DataTypes.PULSE,
                "index": 0
            }
        },
        "outputs": {
            "on success": {
                "dataType": DataTypes.PULSE,
                "index": 1
            },
            "on fail": {
                "dataType": DataTypes.PULSE,
                "index": 2
            }
        }
    }
}