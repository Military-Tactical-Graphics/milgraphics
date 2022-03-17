import entityImages from './entityImages';

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
  },
  description: {
    base64: entityImages["AIR CORRIDOR"]
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
  },
  description: {
    base64: entityImages["AIRSPACE COORDINATION AREA"]
  }
};
entityDescription["AMBUSH"] = {
  geometry: {
    type: "LineString",
    points: 3
  },
  properties: {
    sidc: "GFGPSLA-------X"
  },
  description: {
    base64: entityImages["AMBUSH"]
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
  },
  description: {
    base64: entityImages["ARTILLERY FIRING POSITION"] // TODO dodat obrázek
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
  },
  description: {
    base64: entityImages["ARTILLERY MANOEUVRE AREA - POINT"]
  }
},
{
  geometry: {
    type: "LineString",
    points: 2
  },
  properties: {
    sidc: "A-T-MANO-A----X",
    distance: 300, // TODO nepoužito v kódu
    name: "AMA", // TODO nepoužito v kódu
  },
  description: {
    base64: entityImages["ARTILLERY MANOEUVRE AREA - LINESTRING"]
  }
},
{
  geometry: {
    type: "Polygon",  // TODO nemá implementaci v artillery-firing-position.js
  },
  properties: {
    sidc: "A-T-MANO-A----X",
    name: "AMA", // TODO nepoužito v kódu
  },
  description: {
    base64: entityImages["ARTILLERY MANOEUVRE AREA - POLYGON"]
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
  },
  description: {
    base64: entityImages["ARTILLERY RESTRICTED AREA - POINT"]
  }
},
{
  geometry: {
    type: "LineString",
    points: 2
  },
  properties: {
    sidc: "A-T-REST-A----X",
    distance: 300, // TODO k čemu??
    name: "ARA",
  },
  description: {
    base64: entityImages["ARTILLERY RESTRICTED AREA - LINESTRING"]
  }
},
{
  geometry: {
    type: "Polygon", // TODO nemá implementaci v artillery-firing-position.js
  },
  properties: {
    sidc: "A-T-REST-A----X",
    distance: 300, // TODO k čemu??
    name: "ARA",
  },
  description: {
    base64: entityImages["ARTILLERY RESTRICTED AREA - POLYGON"]
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
  },
  description: {
    base64: entityImages["ARTILLERY TARGET INTELLIGENCE ZONE"] // TODO změnit na POLYGON
  }
};
entityDescription["BARRAGE FIRE"] = { // TODO popisky jsou přes sebe
  geometry: {
    type: "LineString",
  },
  properties: {
    sidc: "B-R-A-FIRE----X",
    name: "AC", // TODO nepoužito v kódu
    administrator: "OAK",
    weaponSystemType: "1BTY",
  },
  description: {
    base64: entityImages["BARRAGE FIRE"] // TODO dodat obrázek
  }
};
entityDescription["BLOCK"] = {
  geometry: {
    type: "LineString",
    points: 3
  },
  properties: {
    sidc: "G-T-B---------X"
  },
  description: {
    base64: entityImages["BLOCK"]
  }
};
entityDescription["BOUNDARIES"] = {
  geometry: {
    type: "LineString",
    points: 3
  },
  properties: {   // TODO přidat anotace
    sidc: "G-G-GLB-------X"
  },
  description: {
    base64: entityImages["BOUNDARIES"]
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
  description: {
    base64: entityImages["BREACH"]
  }
};
entityDescription["BYPASS"] = {
  geometry: {
    type: "LineString",
    points: 3
  },
  properties: {
    sidc: "G-T-Y---------X"
  },
  description: {
    base64: entityImages["BYPASS"]
  }
};
entityDescription["CALL FOR FIRE ZONE"] = {
  geometry: {
    type: "Polygon",
  },
  properties: {
    sidc: "G-F-AZXI------X",
    uniqueDesignation: "Q35"
  },
  description: {
    base64: entityImages["CALL FOR FIRE ZONE"]
  }
};
entityDescription["CANALIZE"] = {
  geometry: {
    type: "LineString",
    points: 3
  },
  properties: {
    sidc: "G-T-C---------X"
  },
  description: {
    base64: entityImages["CANALIZE"]
  }
};
entityDescription["CENSOR ZONE"] = {
  geometry: {
    type: "Polygon"
  },
  properties: {
    sidc: "G-F-AZCI------X",
    uniqueDesignation: "Q35"
  },
  description: {
    base64: entityImages["CENSOR ZONE"]
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
  },
  description: {
    base64: entityImages["CIRCULAR TARGET"]
  }
};
entityDescription["CLEAR"] = {
  geometry: {
    type: "LineString",
    points: 3
  },
  properties: {
    sidc: "G-T-X---------X"
  },
  description: {
    base64: entityImages["CLEAR"]
  }
};
entityDescription["CONTAIN"] = {
  geometry: {
    type: "LineString",
    points: 3
  },
  properties: {
    sidc: "G-T-J---------X"
  },
  description: {
    base64: entityImages["CONTAIN"]
  }
};
entityDescription["COORDINATED FIRE LINE"] = {
  geometry: {
    type: "LineString"
  },
  properties: { // TODO Upravit anotace
    sidc: "G-F-LCC-------X",
    name: "CFL",
    administrator: "4RDB",
    uniqueDesignation: "CZE"
  },
  description: {
    base64: entityImages["COORDINATED FIRE LINE"]
  }
};
entityDescription["COUNTERATTACK"] = { // TODO Změnit pořadí zadávání bodů
  geometry: {
    type: "LineString",
    points: 4
  },
  properties: {
    sidc: "G-T-K---------X"
  },
  description: {
    base64: entityImages["COUNTERATTACK"]
  }
};
entityDescription["CRITICAL FRIENDLY ZONE"] = [   // TODO přidat anotace W, W1
  {
    geometry: {
      type: "LineString",
      points: 2
    },
    properties: {
      sidc: "G-F-AZFR------X",
      distance: 5000,
      uniqueDesignation: "Q36"
    },
    description: {
      base64: entityImages["CRITICAL FRIENDLY ZONE - LINESTRING"]
    }
  },
  {
    geometry: {
      type: "Polygon"
    },
    properties: {
      sidc: "G-F-AZFI------X",
      uniqueDesignation: "Q35"
    },
    description: {
      base64: entityImages["CRITICAL FRIENDLY ZONE - POLYGON"]
    }
  }
];
entityDescription["DEAD SPACE AREA"] = [   // TODO přidat anotace W, W1
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
    },
    description: {
      base64: entityImages["DEAD SPACE AREA - POINT"]
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
    },
    description: {
      base64: entityImages["DEAD SPACE AREA - LINESTRING"]
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
    },
    description: {
      base64: entityImages["DEAD SPACE AREA - POLYGON"]
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
  },
  description: {
    base64: entityImages["DELAY"]
  }
};
entityDescription["FIRE SUPPORT AREA"] = [   // TODO přidat anotace W, W1
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
    },
    description: {
      base64: entityImages["FIRE SUPPORT AREA - POINT"]
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
    },
    description: {
      base64: entityImages["FIRE SUPPORT AREA - LINESTRING"]
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
    },
    description: {
      base64: entityImages["FIRE SUPPORT AREA - POLYGON"]
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
  },
  description: {
    base64: entityImages["FIRE SUPPORT COORDINATION LINE"]
  }
};
entityDescription["FIX"] = { // TODO did not find graphic convertor
  geometry: {
    type: "LineString",
    points: 2
  },
  properties: {
    sidc: "G-T-GF--------X"
  },
  description: {
    base64: entityImages["FIX"]
  }
};
entityDescription["FLOT"] = { // TODO sestřelí prohlížeč při změne bearing
  geometry: {
    type: "LineString",
    points: 2
  },
  properties: {   // TODO přidat anotace N
    sidc: "G-G-GLF-------X",
    bearingWidth: 450,
    bearingSpacing: 20
  },
  description: {
    base64: entityImages["FLOT"]
  }
};
entityDescription["FREE FIRE AREA"] = [{
  geometry: {
    type: "Point"
  },
  properties: {
    sidc: "G-F-ACFC------X",
    uniqueDesignation: "I",
    dtg: "10095900ZJAN92",
    dtg1: "11095900ZJAN92",
    distance: 5000,
  },
  description: {
    base64: entityImages["FREE FIRE AREA - POINT"]
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
  },
  description: {
    base64: entityImages["FREE FIRE AREA - LINESTRING"]
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
    dtg1: "11095900ZJAN92"
  },
  description: {
    base64: entityImages["FREE FIRE AREA - POLYGON"]
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
  },
  description: {
    base64: entityImages["GROUP OF TARGETS"]
  }
};
entityDescription["ISOLATE"] = {
  geometry: {
    type: "LineString",
    points: 2
  },
  properties: {
    sidc: "G-T-E---------X"
  },
  description: {
    base64: entityImages["ISOLATE"]
  }
};
entityDescription["LINE OF CONTACT"] = { // TODO sestřelí prohlížeč při změne bearing
  geometry: {
    type: "LineString"
  },
  properties: {  // TODO přidat anotace N, smazat Line of Contact
    sidc: "G-G-GLC-------X",
    bearingWidth: 400,
    bearingSpacing: 10,
    spaceBetween: 10
  },
  description: {
    base64: entityImages["LINE OF CONTACT"]
  }
};
entityDescription["LOW LEVEL TRANSIT ROUTE"] = {
  geometry: {
    type: "LineString",
  },
  properties: {
    sidc: "G-G-ALL-------X",
    name: "LLTR KNIGHT",
    distance: 500,
    uniqueDesignation: "53ID (M)", // TODO nepoužito
    altitudeDepth: "500 FT AGL",
    altitudeDepth1: "300 FT AGL",
    dtg: "281400ZAPR",
    dtg1: "281530ZAPR",
  },
  description: {
    base64: entityImages["LOW LEVEL TRANSIT ROUTE"]
  }
};
entityDescription["MAIN ATTACK"] = { // TODO Změnit pořadí zadávání bodů
  geometry: {
    type: "LineString"
  },
  properties: {
    sidc: "G-G-OLAGM-----X"
  },
  description: {
    base64: entityImages["MAIN ATTACK"]
  }
};
entityDescription["MULTILINE BARRAGE FIRE"] = {
  geometry: {
    type: "LineString", // TODO zkontrolovat úhel kolmic na přímku
  },
  properties: {
    sidc: "M-B-R-FIRE----X",
    name: "AC",  // TODO Nepoužito
    administrator: "VLK",
    weaponSystemType: "1BTY", // TODO Nepoužito
    distance: 500 // TODO Nepoužito
  },
  description: {
    base64: entityImages["MULTILINE BARRAGE FIRE"] // TODO dodat obrázek
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
  },
  description: {
    base64: entityImages["MUNITION FLIGHT PATH"]
  }
};
entityDescription["NAMED AREA OF INTEREST"] = {
  geometry: {
    type: "Polygon"
  },
  properties: {
    sidc: "G-G-SAN-------X",
    uniqueDesignation: "DOCKS"
  },
  description: {
    base64: entityImages["NAMED AREA OF INTEREST"]
  }
};
entityDescription["NO FIRE AREA"] = [ // TODO přidat anotace T, W, W1
  {
    properties: {
      sidc: "G-F-ACNC------X",
      distance: 300,
      fill: "dashes",
      name: "NFA"
    },
    geometry: {
      type: "Point"
    },
    description: {
      base64: entityImages["NO FIRE AREA - POINT"]
    }
  },
  {
    properties: {
      sidc: "G-F-ACNR------X",
      distance: 300,
      fill: "dashes",
      name: "NFA"
    },
    geometry: {
      type: "LineString",
      points: 2
    },
    description: {
      base64: entityImages["NO FIRE AREA - LINESTRING"]
    }
  }, {
    properties: {
      sidc: "G-F-ACNI------X",
      fill: "dashes",
      name: "NFA"
    },
    geometry: {
      type: "Polygon"
    },
    description: {
      base64: entityImages["NO FIRE AREA - POLYGON"]
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
  },
  description: {
    base64: entityImages["NO FIRE LINE"]
  }
};
entityDescription["OCCUPY"] = { // TODO Nefunguje
  properties: {
    sidc: "G-T-O---------X"
  },
  geometry: {
    type: "LineString",
    points: 2
  },
  description: {
    base64: entityImages["OCCUPY"]
  }
};
entityDescription["PHASE LINE"] = {
  geometry: {
    type: "LineString"
  },
  properties: {
    sidc: "G-G-GLP-------X",
    name: "PL NAME"
  },
  description: {
    base64: entityImages["PHASE LINE"]
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
  },
  description: {
    base64: entityImages["POSITION AREA FOR ARTILLERY - POINT"]
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
  },
  description: {
    base64: entityImages["POSITION AREA FOR ARTILLERY - LINESTRING"]
  }
},
{
  geometry: {
    type: "Polygon",
  },
  properties: {
    sidc: "G-F-ACP-------X",
    name: "PAA",
  },
  description: {
    base64: entityImages["POSITION AREA FOR ARTILLERY - POLYGON"]  // TODO dodat obrázek
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
  },
  description: {
    base64: entityImages["RECTANGULAR TARGET"]
  }
};
entityDescription["RESTRICTED OPERATIONS ZONE"] = {
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
  },
  description: {
    base64: entityImages["RESTRICTED OPERATIONS ZONE"]
  }
};
entityDescription["RESTRICTIVE FIRE AREA"] = [{
  geometry: {
    type: "Point",
  },
  properties: {
    sidc: "G-F-ACRC------X",
    dtg: "10095900ZJAN92",
    dtg1: "11095900ZJAN92",
    administrator: "X CORPS",
    distance: 5000
  },
  description: {
    base64: entityImages["RESTRICTIVE FIRE AREA - POINT"]
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
  },
  description: {
    base64: entityImages["RESTRICTIVE FIRE AREA - LINESTRING"]
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
  },
  description: {
    base64: entityImages["RESTRICTIVE FIRE AREA - POLYGON"]
  }
}
];
entityDescription["RESTRICTIVE FIRE LINE"] = { // TODO popisky se překrývají
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
  },
  description: {
    base64: entityImages["RESTRICTIVE FIRE LINE"]
  }
};
entityDescription["SAFE LANE"] = {
  geometry: {
    type: "LineString",
  },
  properties: {
    sidc: "G-G-ALL-------X",
    name: "SL KNIGHT",
    distance: 500,
    uniqueDesignation: "53ID (M)", // TODO Nepoužito
    altitudeDepth: "500 FT AGL",
    altitudeDepth1: "300 FT AGL",
    dtg: "281400ZAPR",
    dtg1: "281530ZAPR",
  },
  description: {
    base64: entityImages["SAFE LANE"]
  }
};
entityDescription["SUPPORTING ATTACK"] = { // TODO Změnit pořadí zadávání
  geometry: {
    type: "LineString"
  },
  properties: {
    sidc: "G-G-OLAGS-----X"
  },
  description: {
    base64: entityImages["SUPPORTING ATTACK"]
  }
};
entityDescription["TARGET BUILD-UP AREA"] = [ // TODO přidat anotace W, W1
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
    },
    description: {
      base64: entityImages["TARGET BUILD-UP AREA - POINT"]
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
    },
    description: {
      base64: entityImages["TARGET BUILD-UP AREA - LINESTRING"]
    }
  },
  {
    properties: {
      sidc: "G-F-ACBI------X",
      uniqueDesignation: "Q35",
      dtg: "10095900ZJAN92",
      dtg1: "11095900ZJAN92"
    },
    geometry: {
      type: "Polygon"
    },
    description: {
      base64: entityImages["TARGET BUILD-UP AREA - POLYGON"]
    }
  }
];
entityDescription["TARGET VALUE AREA"] = [  // TODO přidat anotace W, W1
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
    },
    description: {
      base64: entityImages["TARGET VALUE AREA - POINT"]
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
    },
    description: {
      base64: entityImages["TARGET VALUE AREA - LINESTRING"]
    }
  },
  {
    properties: {
      sidc: "G-F-ACVI------X",
      uniqueDesignation: "Q35",
      dtg: "10095900ZJAN92",
      dtg1: "11095900ZJAN92",
    },
    geometry: {
      type: "Polygon"
    },
    description: {
      base64: entityImages["TARGET VALUE AREA - POLYGON"]
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
  },
  description: {
    base64: entityImages["TARGETED AREA OF INTEREST"]
  }
};
entityDescription["TERMINALLY GUIDED MUNITION FOOTPRINT"] = {
  properties: {
    sidc: "G-F-ACT-------X",
    uniqueDesignation: "Q35" // TODO Nepoužito
  },
  geometry: {
    type: "Polygon"
  },
  description: {
    base64: entityImages["TERMINALLY GUIDED MUNITION FOOTPRINT"]
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
  },
  description: {
    base64: entityImages["WEAPONS FREE ZONE"]
  }
};
entityDescription["ZONE OF RESPONSIBILITY"] = [ // TODO přidat anotace W, W1
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
    },
    description: {
      base64: entityImages["ZONE OF RESPONSIBILITY - POINT"]
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
    },
    description: {
      base64: entityImages["ZONE OF RESPONSIBILITY - LINESTRING"]
    }
  },
  {
    properties: {
      sidc: "G-F-ACZI------X",
      uniqueDesignation: "Q35"
    },
    geometry: {
      type: "Polygon"
    },
    description: {
      base64: entityImages["ZONE OF RESPONSIBILITY - POLYGON"]
    }
  }
];

export default entityDescription;