const entityDescription = {};

entityDescription["AIR CORRIDOR"] = {
  geometry: {
    type: "LineString",
  },
  properties: {
    sidc: "G-G-ALC-------X",
    name: "AC KNIGHT",
    distance: 500,
    uniqueDesignation: "53ID (M)",
    altitudeDepth: "500 FT AGL",
    altitudeDepth1: "300 FT AGL",
    dtg: "281400ZAPR",
    dtg1: "281530ZAPR",
  }
};
entityDescription["AIRSPACE COORDINATION AREA"] = {
  geometry: {
    type: "Polygon"
  },
  properties: {
    sidc: "G-F-ACAI------X",
    uniqueDesignation: "53ID (M)",
    altitudeDepth: "500 FT AGL",
    altitudeDepth1: "300 FT AGL",
    additionalInformation: "NK2313 to NK3013",
    dtg: "281400ZAPR",
    dtg1: "281530ZAPR"
  }
};
entityDescription["AMBUSH"] = {
  geometry: {
    type: "LineString",
    points: 3
  },
  properties: {
    sidc: "GFGPSLA-------X"
  }
};
entityDescription["ARTILLERY FIRING POSITION"] = {
  geometry: {
    type: "LineString",
    points: 2
  },
  properties: {
    sidc: "A-T-FIRING----X",
    // name: "ARTILLERY FIRING POSITION", TODO nepoužito v kódu
    firingPosition: "11",
  }
};
entityDescription["ARTILLERY MANOEUVRE AREA"] = [{
  geometry: {
    type: "Point",    // TODO nemá implementaci v artillery-firing-position.js
  },
  properties: {
    sidc: "A-T-MANO-A----X",
    distance: 300,
    name: "AMA", // TODO nepoužito v kódu
  }
},
{
  geometry: {
    type: "LineString",
    points: 2
  },
  properties: {
    sidc: "A-T-MANO-A----X",
    distance: 300,
    name: "AMA", // TODO nepoužito v kódu
  }
},
{
  geometry: {
    type: "Polygon",
  },
  properties: {
    sidc: "A-T-MANO-A----X",
    name: "AMA", // TODO nepoužito v kódu
  }
}
];
entityDescription["ARTILLERY RESTRICTED AREA"] = [{
  geometry: {
    type: "Point", // TODO nemá implementaci v artillery-firing-position.js
  },
  properties: {
    sidc: "A-T-REST-A----X",
    distance: 300,
    name: "ARA",
  }
},
{
  geometry: {
    type: "LineString",
    points: 2
  },
  properties: {
    sidc: "A-T-REST-A----X",
    distance: 300,
    name: "ARA",
  }
},
{
  geometry: {
    type: "Polygon",
  },
  properties: {
    sidc: "A-T-REST-A----X",
    distance: 300,
    name: "ARA",
  }
}
];
entityDescription["ARTILLERY TARGET INTELLIGENCE ZONE"] = {
  geometry: {
    type: "Polygon"
  },
  properties: {
    sidc: "G-F-AZII------X",
    uniqueDesignation: "Q35"
  }
};
entityDescription["BARRAGE FIRE"] = {
  geometry: {
    type: "LineString",
  },
  properties: {
    sidc: "B-R-A-FIRE----X",
    name: "AC",
    administrator: "OAK",
    weaponSystemType: "1BTY",
  }
};
entityDescription["BLOCK"] = {
  geometry: {
    type: "LineString",
    points: 3
  },
  properties: {
    sidc: "G-T-B---------X"
  }
};
entityDescription["BOUNDARIES"] = {
  geometry: {
    type: "LineString",
    points: 3
  },
  properties: {
    sidc: "G-G-GLB-------X"
  }
};
entityDescription["BREACH"] = {
  geometry: {
    type: "LineString",
    points: 3
  },
  properties: {
    sidc: "G-T-H---------X"
  },
};
entityDescription["BYPASS"] = {
  geometry: {
    type: "LineString",
    points: 3
  },
  properties: {
    sidc: "G-T-Y---------X"
  }
};
entityDescription["CALL FOR FIRE ZONE"] = {
  geometry: {
    type: "Polygon",
  },
  properties: {
    sidc: "G-F-AZXI------X",
    uniqueDesignation: "Q35"
  }
};
entityDescription["CANALIZE"] = {
  geometry: {
    type: "LineString",
    points: 3
  },
  properties: {
    sidc: "G-T-C---------X"
  }
};
entityDescription["CENSOR ZONE"] = {
  geometry: {
    type: "Polygon"
  },
  properties: {
    sidc: "G-F-AZCI------X",
    uniqueDesignation: "Q35"
  }
};
entityDescription["CIRCULAR TARGET"] = { // TODO - popisky uvnitř jen v zoomu, kde se vejdou do geometrie, jinak ne
  geometry: {
    type: "Point",
  },
  properties: {
    sidc: "G-F-AC--------X",
    name: "JA1101",
    distance: 5000,
  }
};
entityDescription["CLEAR"] = {
  geometry: {
    type: "LineString",
    points: 3
  },
  properties: {
    sidc: "G-T-X---------X"
  }
};
entityDescription["CONTAIN"] = {
  geometry: {
    type: "LineString",
    points: 3
  },
  properties: {
    sidc: "G-T-J---------X"
  }
};
entityDescription["COORDINATED FIRE LINE"] = {
  geometry: {
    type: "LineString"
  },
  properties: {
    sidc: "G-F-LCC-------X",
    name: "CFL",
    administrator: "4RDB",
    uniqueDesignation: "CZE"
  }
};
entityDescription["COUNTERATTACK"] = {
  geometry: {
    type: "LineString",
    points: 4
  },
  properties: {
    sidc: "G-T-K---------X"
  }
};
entityDescription["CRITICAL FRIENDLY ZONE"] = [
  {
    geometry: {
      type: "Polygon"
    },
    properties: {
      sidc: "G-F-AZFI------X",
      uniqueDesignation: "Q35"
    }
  },
  {
    geometry: {
      type: "LineString",
      points: 2
    },
    properties: {
      sidc: "G-F-AZFR------X",
      distance: 5000,
      uniqueDesignation: "Q36"
    }
  }
];
entityDescription["DEAD SPACE AREA"] = [
  {
    geometry: {
      type: "Point"
    },
    properties: {
      sidc: "G-F-ACDC------X",
      distance: 5000,
      dtg: "10095900ZJAN92",
      dtg1: "11095900ZJAN92",
      uniqueDesignation: "Q35"
    }
  },
  {
    geometry: {
      type: "LineString"
    },
    properties: {
      sidc: "G-F-ACDR------X",
      distance: 5000,
      dtg: "10095900ZJAN92",
      dtg1: "11095900ZJAN92",
      uniqueDesignation: "Q35"
    }
  },
  {
    geometry: {
      type: "Polygon"
    },
    properties: {
      sidc: "G-F-ACDI------X",
      dtg: "10095900ZJAN92",
      dtg1: "11095900ZJAN92",
      uniqueDesignation: "Q35"
    }
  }
];
entityDescription["DELAY"] = {
  geometry: {
    type: "LineString",
    points: 3
  },
  properties: {
    sidc: "G-T-L---------X",
    dtg: "272100Z SEP"
  }
};
entityDescription["FIRE SUPPORT AREA"] = [
  {
    geometry: {
      type: "Point"
    },
    properties: {
      sidc: "G-F-ACSC------X",
      distance: 5000,
      dtg: "10095900ZJAN92",
      dtg1: "11095900ZJAN92",
      uniqueDesignation: "III"
    }
  },
  {
    geometry: {
      type: "LineString"
    },
    properties: {
      sidc: "G-F-ACSR------X",
      distance: 5000,
      dtg: "10095900ZJAN92",
      dtg1: "11095900ZJAN92",
      uniqueDesignation: "II"
    }
  },
  {
    geometry: {
      type: "Polygon"
    },
    properties: {
      sidc: "G-F-ACSI------X",
      dtg: "10095900ZJAN92",
      dtg1: "11095900ZJAN92",
      uniqueDesignation: "Q35"
    }
  }
];
entityDescription["FIRE SUPPORT COORDINATION LINE"] = { // TODO - popisky jsou přes sebe, čitelné až v určitém zoomu
  geometry: {
    type: "LineString",
  },
  properties: {
    sidc: "G-F-LCF-------X",
    name: "FSCL",
    t: "XCORPS",
    t1: "ALPHA",
    w: "202100Z",
    w1: "270800Z SEP",
  }
};
entityDescription["FIX"] = {
  geometry: {
    type: "LineString",
    points: 2
  },
  properties: {
    sidc: "G-T-GF--------X"
  }
};
entityDescription["FLOT"] = {
  geometry: {
    type: "LineString",
    points: 2
  },
  properties: {
    sidc: "G-G-GLF-------X",
    bearingWidth: 450,
    bearingSpacing: 20
  }
};
entityDescription["FREE FIRE AREA"] = [{
  geometry: {
    type: "Point", // TODO nemá implementaci
  },
  properties: {
    sidc: "G-F-ACFC------X",
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
    sidc: "G-F-ACFR------X",
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
    sidc: "G-F-ACFI------X",
    uniqueDesignation: "I",
    dtg: "10095900ZJAN92",
    dtg1: "11095900ZJAN92",

  }
}
];
entityDescription["GROUP OF TARGETS"] = {
  geometry: {
    type: "Polygon",
  },
  properties: {
    sidc: "G-F-ATG-------X",
    name: "FORD",
  }
};
entityDescription["ISOLATE"] = {
  geometry: {
    type: "LineString",
    points: 2
  },
  properties: {
    sidc: "G-T-E---------X"
  }
};
entityDescription["LINE OF CONTACT"] = {
  geometry: {
    type: "LineString"
  },
  properties: {
    sidc: "G-G-GLC-------X",
    bearingWidth: 400,
    bearingSpacing: 10,
    spaceBetween: 10
  }
}
entityDescription["LOW LEVEL TRANSIT ROUTE"] = {
  geometry: {
    type: "LineString",
  },
  properties: {
    sidc: "G-G-ALL-------X",
    name: "LLTR KNIGHT",
    distance: 500,
    uniqueDesignation: "53ID (M)",
    altitudeDepth: "500 FT AGL",
    altitudeDepth1: "300 FT AGL",
    dtg: "281400ZAPR",
    dtg1: "281530ZAPR",
  }
};
entityDescription["MAIN ATTACK"] = {
  geometry: {
    type: "LineString"
  },
  properties: {
    sidc: "G-G-OLAGM-----X"
  }
}
entityDescription["MULTILINE BARRAGE FIRE"] = {
  geometry: {
    type: "LineString",
  },
  properties: {
    sidc: "M-B-R-FIRE----X",
    name: "AC",
    administrator: "VLK",
    weaponSystemType: "1BTY",
    distance: 500
  }
};
entityDescription["MUNITION FLIGHT PATH"] = {
  geometry: {
    type: "LineString",
  },
  properties: {
    sidc: "G-F-LCM-------X",
    name: "MFL",
    dtg: "10095900ZJAN92",
    dtg1: "10095900ZJAN92",
  }
};
entityDescription["NAMED AREA OF INTEREST"] = {
  geometry: {
    type: "Polygon"
  },
  properties: {
    sidc: "G-G-SAN-------X",
    uniqueDesignation: "DOCKS"
  }
};
entityDescription["NO FIRE AREA"] = [
  {
    properties: {
      sidc: "G-F-ACNC------X",
      distance: 300,
      "fill": "dashes",
      name: "NFA"
    },
    geometry: {
      type: "Point"
    }
  },
  {
    properties: {
      sidc: "G-F-ACNR------X",
      distance: 300,
      "fill": "dashes",
      name: "NFA"
    },
    geometry: {
      type: "LineString",
      points: 2
    }
  }, {
    properties: {
      sidc: "G-F-ACNI------X",
      distance: 200,
      fill: "dashes",
      name: "NFA"
    },
    geometry: {
      type: "Polygon"
    }
  }
];
entityDescription["NO FIRE LINE"] = {
  geometry: {
    type: "LineString",
  },
  properties: {
    sidc: "G-F-LCN-------X",
    name: "NFL",
    administrator: "4RDB",
    dtg: "10095900ZJAN92",
  }
};
entityDescription["OCCUPY"] = {
  properties: {
    sidc: "G-T-O---------X"
  },
  geometry: {
    type: "LineString",
    points: 2
  }
};
entityDescription[
  "PHASELINE"
] = {
  geometry: {
    type: "LineString"
  },
  properties: {
    sidc: "G-G-GLP-------X",
    name: "PL NAME"
  }
};
entityDescription["POSITION AREA FOR ARTILLERY"] = [{
  geometry: {
    type: "Point",
  },
  properties: {
    sidc: "G-F-ACPC------X",
    distance: 300,
    name: "PAA",
  }
},
{
  geometry: { // TODO - Pokud jsou body definovány mimo horizontální/vertikální smer, tak jsou popisky mimo,
    //        tzn nerotuje s čtvercem, který muze byt obdelnik - asi bych počítal distance
    type: "LineString",
    points: 2
  },
  properties: {
    sidc: "G-F-ACPR------X",
    distance: 300,
    name: "PAA",
  }
},
{
  geometry: {
    type: "Polygon",
  },
  properties: {
    sidc: "G-F-ACP-------X",
    distance: 300,
    name: "PAA",
  }
}
];
entityDescription["RECTANGULAR TARGET"] = { // TODO - popisky uvnitř jen v zoomu, kde se vejdou do geometrie, jinak ne
  geometry: {
    type: "LineString",
    points: 2
  },
  properties: {
    sidc: "G-F-AT--------X",
    name: "AB0176",
    distance: 500,
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
entityDescription["RESTRICTED FIRE AREA"] = [{
  geometry: {
    type: "Point",
  },
  properties: {
    sidc: "G-F-ACRC------X",
    dtg: "10095900ZJAN92",
    dtg1: "11095900ZJAN92",
    administrator: "X CORPS",
    distance: 5000
  }
},
{
  geometry: {
    type: "LineString",
    points: 2
  },
  properties: {
    sidc: "G-F-ACRR------X",
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
    sidc: "G-F-ACRI------X",
    dtg: "10095900ZJAN92",
    dtg1: "11095900ZJAN92",
    administrator: "X CORPS",
  }
}
];
entityDescription["RESTRICTIVE FIRE LINE"] = {
  geometry: {
    type: "LineString",
  },
  properties: {
    sidc: "G-F-LCR-------X",
    name: "RFL",
    t: "XCORPS",
    t1: "DELTA",
    w: "202100Z",
    w1: "270800Z SEP",
  }
};
entityDescription["SAFE LINE"] = {
  geometry: {
    type: "LineString",
  },
  properties: {
    sidc: "G-G-ALL-------X",
    name: "SL KNIGHT",
    distance: 500,
    uniqueDesignation: "53ID (M)",
    altitudeDepth: "500 FT AGL",
    altitudeDepth1: "300 FT AGL",
    dtg: "281400ZAPR",
    dtg1: "281530ZAPR",
  }
};
entityDescription["SUPPORTING ATTACK"] = {
  geometry: {
    type: "LineString"
  },
  properties: {
    sidc: "G-G-OLAGS-----X"
  }
};
entityDescription["TARGET BUILD-UP AREA"] = [
  {
    properties: {
      sidc: "G-F-ACBI------X",
      uniqueDesignation: "Q35",
      dtg: "10095900ZJAN92",
      dtg1: "11095900ZJAN92"
    },
    geometry: {
      type: "Polygon"
    }
  },
  {
    properties: {
      sidc: "G-F-ACBR------X",
      distance: 5000,
      uniqueDesignation: "Q36",
      dtg: "10095900ZJAN92",
      dtg1: "11095900ZJAN92",
    },
    geometry: {
      type: "LineString",
      points: 2
    }
  },
  {
    properties: {
      sidc: "G-F-ACBC------X",
      distance: 5000,
      dtg: "10095900ZJAN92",
      dtg1: "11095900ZJAN92",
      uniqueDesignation: "Q37"
    },
    geometry: {
      type: "Point"
    }
  }
];
entityDescription["TARGET VALUE AREA"] = [
  {
    properties: {
      sidc: "G-F-ACVI------X",
      uniqueDesignation: "Q35",
      dtg: "10095900ZJAN92",
      dtg1: "11095900ZJAN92",
    },
    geometry: {
      type: "Polygon"
    }
  },
  {
    properties: {
      sidc: "G-F-ACVR------X",
      distance: 5000,
      dtg: "10095900ZJAN92",
      dtg1: "11095900ZJAN92",
      uniqueDesignation: "Q36"
    },
    geometry: {
      type: "LineString",
      points: 2
    }
  },
  {
    properties: {
      sidc: "G-F-ACVC------X",
      distance: 5000,
      dtg: "10095900ZJAN92",
      dtg1: "11095900ZJAN92",
      uniqueDesignation: "Q37"
    },
    geometry: {
      type: "Point"
    }
  }
];
entityDescription["TARGETED AREA OF INTEREST"] = {
  properties: {
    sidc: "G-G-SAT-------X",
    uniqueDesignation: "DOCKS"
  },
  geometry: {
    type: "Polygon",
  }
};
entityDescription["TERMINALLY GUIDED MUNITION FOOTPRINT"] = {
  properties: {
    sidc: "G-F-ACT-------X",
    uniqueDesignation: "Q35"
  },
  geometry: {
    type: "Polygon"
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
entityDescription["ZONE OF RESPONSIBILITY"] = [
  {
    properties: {
      sidc: "G-F-ACZI------X",
      uniqueDesignation: "Q35"
    },
    geometry: {
      type: "Polygon"
    }
  },
  {
    properties: {
      sidc: "G-F-ACZR------X",
      distance: 5000,
      dtg: "10095900ZJAN92",
      dtg1: "11095900ZJAN92",
      uniqueDesignation: "Q36"
    },
    geometry: {
      type: "LineString",
      points: 2
    }
  },
  {
    properties: {
      sidc: "G-F-ACZC------X",
      distance: 5000,
      dtg: "10095900ZJAN92",
      dtg1: "11095900ZJAN92",
      uniqueDesignation: "Q37"
    },
    geometry: {
      type: "Point"
    }
  }
];

export default entityDescription;