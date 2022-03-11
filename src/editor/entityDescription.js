const entityDescription = {};

entityDescription["POSITION AREA FOR ARTILLERY"] = [{
    geometry: {
      type: "Point",
    },
    properties: {
      sidc: "G-F-ACPC-----X",
      distance: 300,
      name: "PAA",
    }
  },
  {
    geometry: { // TODO - Pokud jsou body definovány mimo horizontální/vertikální smer, tak jsou popisky mimo,
                //        tzn nerotuje s čtvercem, který muze byt obdelnik - asi bych počítal distance
      type: "LineString",
    },
    properties: {
      sidc: "G-F-ACPR-----X",
      distance: 300,
      name: "PAA",
    }
  },
  {
    geometry: {
      type: "Polygon",
    },
    properties: {
      sidc: "G-F-ACP------X",
      distance: 300,
      name: "PAA",
    }
  }
];
entityDescription["ARTILLERY FIRING POSITION"] = {
  geometry: {
    type: "LineString",
  },
  properties: {
    sidc: "A-T-FIRING---X",
    name: "ARTILLERY FIRING POSITION",
    firingPosition: "11",
  }
};
entityDescription["ARTILLERY MANOEUVRE AREA"] = [{
    geometry: {
      type: "Point",
    },
    properties: {
      sidc: "A-T-MANO-A---X",
      distance: 300,
      name: "AMA",
    }
  },
  {
    geometry: {
      type: "LineString",
    },
    properties: {
      sidc: "A-T-MANO-A---X", 
      distance: 300,
      name: "AMA",
    }
  },
  {
    geometry: {
      type: "Polygon",
    },
    properties: {
      sidc: "A-T-MANO-A---X", 
      distance: 300,
      name: "AMA",
    }
  }
];
entityDescription["ARTILLERY RESTRICTED AREA"] = [{
    geometry: {
      type: "Point",
    },
    properties: {
      sidc: "A-T-REST-A---X",
      distance: 300,
      name: "ARA",
    }
  },
  {
    geometry: {
      type: "LineString",
    },
    properties: {
      sidc: "A-T-REST-A---X",
      distance: 300,
      name: "ARA",
    }
  },
  {
    geometry: {
      type: "Polygon",
    },
    properties: {
      sidc: "A-T-REST-A---X",
      distance: 300,
      name: "ARA",
    }
  }
];
entityDescription["RECTANGULAR TARGET"] = { // TODO - popisky uvnitř jen v zoomu, kde se vejdou do geometrie, jinak ne
  geometry: {
    type: "LineString",
    points: 2,
  },
  properties: {
    sidc: "G-F-AT-------X",
    name: "AB0176",
    distance: 500,
  }
};
entityDescription["CIRCULAR TARGET"] = { // TODO - popisky uvnitř jen v zoomu, kde se vejdou do geometrie, jinak ne
  geometry: {
    type: "Point",
  },
  properties: {
    sidc: "G-F-AC-------X",
    name: "JA1101",
    distance: 5000,
  }
};
entityDescription["GROUP OF TARGETS"] = {
  geometry: {
    type: "Polygon",
  },
  properties: {
    sidc: "G-F-ATG------X",
    name: "FORD",
  }
};
entityDescription["BARRAGE FIRE"] = {
  geometry: {
    type: "LineString",
  },
  properties: {
    sidc: "B-R-A-FIRE---X",
    name: "AC",
    administrator: "OAK",
    weaponSystemType: "1BTY",
  }
};
entityDescription["MULTILINE BARRAGE FIRE"] = {
  geometry: {
    type: "LineString",
  },
  properties: {
    sidc: "M-B-R-FIRE---X",
    name: "AC",
    administrator: "VLK",
    weaponSystemType: "1BTY",
    distance: 500,
  }
};
entityDescription["FREE FIRE AREA"] = [{
    geometry: {
      type: "Point",
    },
    properties: {
      sidc: "G-F-ACFC-----X",
      uniqueDesignation: "I",
      dtg: "10095900ZJAN92",
      dtg1: "11095900ZJAN92",
      distance: 5000,
    }
  },
  {
    geometry: {
      type: "LineString",
    },
    properties: {
      sidc: "G-F-ACFR-----X",
      uniqueDesignation: "I",
      dtg: "10095900ZJAN92",
      dtg1: "11095900ZJAN92",
      distance: 5000,
    }
  },
  {
    geometry: {
      type: "Polygon",
    },
    properties: {
      sidc: "G-F-ACFI-----X",
      uniqueDesignation: "I",
      dtg: "10095900ZJAN92",
      dtg1: "11095900ZJAN92",

    }
  }
];
entityDescription["RESTRICTED FIRE AREA"] = [{
    geometry: {
      type: "Point",
    },
    properties: {
      sidc: "G-F-ACRC-----X",
      dtg: "10095900ZJAN92",
      dtg1: "11095900ZJAN92",
      administrator: "X CORPS",
      distance: 5000,
    }
  },
  {
    geometry: {
      type: "LineString",
      points: 2,
    },
    properties: {
      sidc: "G-F-ACRR-----X",
      dtg: "10095900ZJAN92",
      dtg1: "11095900ZJAN92",
      administrator: "X CORPS",
      distance: 5000,
    }
  },
  {
    geometry: {
      type: "Polygon",
    },
    properties: {
      sidc: "G-F-ACRI-----X",
      dtg: "10095900ZJAN92",
      dtg1: "11095900ZJAN92",
      administrator: "X CORPS",
    }
  }
];
entityDescription["NO FIRE LINE"] = {
  geometry: {
    type: "LineString",
  },
  properties: {
    sidc: "G-F-LCN------X",
    name: "NFL",
    administrator: "4RDB",
    dtg: "10095900ZJAN92",
  }
};
entityDescription["RESTRICTIVE FIRE LINE"] = {
  geometry: {
    type: "LineString",
  },
  properties: {
    sidc: "G-F-LCR-------X",
    name: "RFL",
    t: "XCORPS",
    t1:"DELTA",
    w: "202100Z",
    w1: "270800Z SEP",
  }
};
entityDescription["FIRE SUPPORT COORDINATION LINE"] = { // TODO - popisky jsou přes sebe, čitelné až v určitém zoomu
  geometry: {
    type: "LineString",
  },
  properties: {
    sidc: "G-F-LCF-------X",
    name: "FSCL",
    t: "XCORPS",
    t1:"ALPHA",
    w: "202100Z",
    w1: "270800Z SEP",
  }
};
entityDescription["MUNITION FLIGHT PATH"] = {
  geometry: {
    type: "LineString",
  },
  properties: {
    sidc: "G-F-LCM------X",
    name: "MFL",
    dtg: "10095900ZJAN92",
    dtg1: "10095900ZJAN92",
  }
};
entityDescription["AIR CORRIDOR"] = {
  geometry: {
    type: "LineString",
  },
  properties: {
    sidc: "G-G-ALC------X",
    name: "AC KNIGHT",
    distance: 500,
    uniqueDesignation: "53ID (M)",
    altitudeDepth: "500 FT AGL",
    altitudeDepth1: "300 FT AGL",
    dtg: "281400ZAPR",
    dtg1: "281530ZAPR",
  }
};
entityDescription["LOW LEVEL TRANSIT ROUTE"] = {
  geometry: {
    type: "LineString",
  },
  properties: {
    sidc: "G-G-ALL------X",
    name: "LLTR KNIGHT",
    distance: 500,
    uniqueDesignation: "53ID (M)",
    altitudeDepth: "500 FT AGL",
    altitudeDepth1: "300 FT AGL",
    dtg: "281400ZAPR",
    dtg1: "281530ZAPR",
  }
};
entityDescription["SAFE LINE"] = {
  geometry: {
    type: "LineString",
  },
  properties: {
    sidc: "G-G-ALL------X",
    name: "SL KNIGHT",
    distance: 500,
    uniqueDesignation: "53ID (M)",
    altitudeDepth: "500 FT AGL",
    altitudeDepth1: "300 FT AGL",
    dtg: "281400ZAPR",
    dtg1: "281530ZAPR",
  }
};
entityDescription["RESTRICTED OPERATING ZONE"] = {
  geometry: {
    type: "Polygon",
  },
  properties: {
    sidc: "G-G-AA--------X",
    name: "(UNIT ID)",
    altitudeDepth: "2000 FT AGL",
    altitudeDepth1: "3000 FT AGL",
    dtg: "180500Z",
    dtg1: "180615Z",
  }
};
entityDescription["WEAPONS FREE ZONE"] = {
  geometry: {
    type: "Polygon",
  },
  properties: {
    sidc: "G-G-AAW-------X",
    name: "(unit ID)",
    timeFrom: "180500Z",
    timeTo: "180615Z",
    fill: "dashes"
  }
};

export default entityDescription;