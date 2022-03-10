const entityDescription = {};

entityDescription["POSITION AREA FOR ARTILLERY"] = [{
    geometry: {
      type: "Point",
    },
    properties: {
      sidc: "G-F-ACPC--",
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
      sidc: "G-F-ACPR--",
      distance: 300,
      name: "PAA",
    }
  },
  {
    geometry: {
      type: "Polygon",
    },
    properties: {
      sidc: "G-F-ACP---",
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
    sidc: "ART-FIRING",
    name: "ARTILLERY FIRING POSITION",
    firingPosition: "11",
  }
};
entityDescription["ARTILLERY MANOEUVRE AREA"] = [{
    geometry: {
      type: "Point",
    },
    properties: {
      //sidc: "G-F-ACPC--", UNKNOWN
      distance: 300,
      name: "AMA",
    }
  },
  {
    geometry: {
      type: "LineString",
    },
    properties: {
      //sidc: "G-F-ACPR--", UNKNOWN
      distance: 300,
      name: "AMA",
    }
  },
  {
    geometry: {
      type: "Polygon",
    },
    properties: {
      //sidc: "G-F-ACP---", UNKNOWN
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
      //sidc: "G-F-ACPC--", UNKNOWN
      distance: 300,
      name: "ARA",
    }
  },
  {
    geometry: {
      type: "LineString",
      //maxPoints: 20, 
    },
    properties: {
      //sidc: "G-F-ACPR--", UNKNOWN
      distance: 300,
      name: "ARA",
    }
  },
  {
    geometry: {
      type: "Polygon",
    },
    properties: {
      //sidc: "G-F-ACP---", UNKNOWN
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
    sidc: "G-F-AT----",
    name: "AB0176",
    distance: 500,
  }
};
entityDescription["CIRCULAR TARGET"] = { // TODO - popisky uvnitř jen v zoomu, kde se vejdou do geometrie, jinak ne
  geometry: {
    type: "Point",
  },
  properties: {
    sidc: "G-F-AC----",
    name: "JA1101",
    distance: 5000,
  }
};
entityDescription["GROUP OF TARGETS"] = {
  geometry: {
    type: "Polygon",
  },
  properties: {
    sidc: "G-F-ATG---",
    name: "FORD",
  }
};
entityDescription["BARRAGE FIRE"] = {
  geometry: {
    type: "MultiLineString",
  },
  properties: {
    sidc: "BARRA-FIRE",
    name: "AC",
    administrator: "OAK",
    weaponSystemType: "1BTY",
  }
};
entityDescription["MULTILINE BARRAGE FIRE"] = {
  geometry: {
    type: "MultiLineString",
  },
  properties: {
    sidc: "M-BAR-FIRE",
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
      sidc: "G-F-ACFC--",
      uniqueDesignation: "I",
      dtg: "10095900ZJAN92",
      dtg1: "11095900ZJAN92",
      distance: 5000,
    }
  },
  {
    geometry: {
      type: "LineString",
      //maxPoints: 20, 
    },
    properties: {
      sidc: "G-F-ACFR--",
      uniqueDesignation: "I",
      dtg: "10095900ZJAN92",
      dtg1: "11095900ZJAN92",
      // distance TODO - chybějící distance 
    }
  },
  {
    geometry: {
      type: "Polygon",
    },
    properties: {
      sidc: "G-F-ACFI--",
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
      sidc: "G-F-ACRC--",
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
      sidc: "G-F-ACRR--",
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
      sidc: "G-F-ACRI--",
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
    sidc: "G-F-LCN---",
    name: "NFL",
    administrator: "4RDB",
    dtg: "10095900ZJAN92",
    // dtg1: ""   TODO - v no-fire-line.js je parameter dtg1, ale tady ani v example ne
  }
};
entityDescription["RESTRICTIVE FIRE LINE"] = {
  geometry: {
    type: "LineString",
  },
  properties: {
    sidc: "G-F-LCR---",
    administrator: "XCORPS",
    name: "DELTA",
    w: "NO WP SMOKE",
    w1: "",  // TODO - v geometryconverter v restrictive-fire-line.js jsou 3 anotace, ale 1 je undefined (asi ta t a t1 když se definuje w a w1)
  }
};
entityDescription["FIRE SUPPORT COORDINATION LINE"] = { // TODO - popisky jsou přes sebe, čitelné až v určitém zoomu
  geometry: {
    type: "LineString",
  },
  properties: {
    sidc: "G-F-LCF---",
    administrator: "XCORPS",
    name: "ALPHA",
    dtg: "10095900ZJAN92",
    dtg1: "10095900ZJAN92",
  }
};
entityDescription["MUNITION FLIGHT PATH"] = {
  geometry: {
    type: "LineString",
  },
  properties: {
    sidc: "G-F-LCM---",
    name: "MFL",
    dtg: "10095900ZJAN92",
    dtg1: "10095900ZJAN92",
  }
};
entityDescription["AIR CORRIDOR"] = {
  geometry: {
    type: "MultiLineString",
  },
  properties: {
    sidc: "G-G-ALC---",
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
    type: "MultiLineString",
  },
  properties: {
    sidc: "G-G-ALL---",
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
    type: "MultiLineString",
  },
  properties: {
    sidc: "G-G-ALL---",
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
    sidc: "G-G-AA----",
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