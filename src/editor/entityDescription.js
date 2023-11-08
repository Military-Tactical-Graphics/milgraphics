import entityImages from './entityImages.js';

  // TODO ujednotit názvosloví

  // AN  Attitude
  // AM  Width/Distance
  // B   Echelon
  // FP  Firing Position
  // H   Additional Information 
  // N   Hostile
  // T   UniqueDesignation
  // T1  UniqueDesignation 1
  // W   DTG Start
  // W1  DTG End
  // X   Min Altitude
  // X1  Max Altitude

/**
 * @module ms/editor
 */
const entityDescription = {
  ["AIR CORRIDOR"]: {
    geometry: {
      type: "LineString",
    },
    properties: {
      sidc: "G-G-ALC-------X",
      uniqueDesignation: "KNIGHT",
      distance: 500,
      altitudeDepth: "500 FT AGL",
      altitudeDepth1: "300 FT AGL",
      dtg: "281400ZAPR",
      dtg1: "281530ZAPR",
    },
    description: {
      base64: entityImages["AIR CORRIDOR"]
    }
  },
  ["AIRSPACE COORDINATION AREA"]: {
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
  },
  ["AMBUSH"]: {
    geometry: {
      type: "LineString",
      points: 3
    },
    properties: {
      sidc: "G-GPSLA-------X"
    },
    description: {
      base64: entityImages["AMBUSH"]
    }
  },
  ["ARTILLERY FIRING POSITION"]: {
    geometry: {
      type: "LineString",
      points: 2
    },
    properties: {
      sidc: "A-T-FIRING----X",
      firingPosition: "11",
    },
    description: {
      base64: entityImages["ARTILLERY FIRING POSITION"]
    }
  },
  ["ARTILLERY MANOEUVRE AREA"]: [{
    geometry: {
      type: "Point",
    },
    properties: {
      sidc: "A-T-MANO-A----X",
      distance: 300
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
      distance: 300
    },
    description: {
      base64: entityImages["ARTILLERY MANOEUVRE AREA - LINESTRING"]
    }
  },
  {
    geometry: {
      type: "Polygon",
    },
    properties: {
      sidc: "A-T-MANO-A----X"
    },
    description: {
      base64: entityImages["ARTILLERY MANOEUVRE AREA - POLYGON"]
    }
  }
  ],
  ["ARTILLERY RESTRICTED AREA"]: [
    {
      geometry: {
        type: "Point",
      },
      properties: {
        sidc: "A-T-REST-A----X",
        distance: 300
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
        distance: 300
      },
      description: {
        base64: entityImages["ARTILLERY RESTRICTED AREA - LINESTRING"]
      }
    },
    {
      geometry: {
        type: "Polygon",
      },
      properties: {
        sidc: "A-T-REST-A----X"
      },
      description: {
        base64: entityImages["ARTILLERY RESTRICTED AREA - POLYGON"]
      }
    }
  ],
  ["ARTILLERY TARGET INTELLIGENCE ZONE"]: {
    geometry: {
      type: "Polygon"
    },
    properties: {
      sidc: "G-F-AZII------X",
      uniqueDesignation: "Q35",
      dtg: "10095900ZJAN92",
      dtg1: "11095900ZJAN92"
    },
    description: {
      base64: entityImages["ARTILLERY TARGET INTELLIGENCE ZONE"]
    }
  },
  ["BARRAGE FIRE"]: {
    geometry: {
      type: "LineString",
      points: 2
    },
    properties: {
      sidc: "B-R-A-FIRE----X",
      uniqueDesignation: "AC",
      weaponSystemType: "1BTY",
    },
    description: {
      base64: entityImages["BARRAGE FIRE"]
    }
  },
  ["BLOCK"]: {
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
  },
  ["BOUNDARIES"]: {
    geometry: {
      type: "LineString",
      points: 3
    },
    properties: {
      sidc: "G-G-GLB-------X",
      uniqueDesignation: "T",
      uniqueDesignation1: "T1",
      echelon: "B",
      hostile: "N"
    },
    description: {
      base64: entityImages["BOUNDARIES"]
    }
  },
  ["BREACH"]: {
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
  },
  ["BYPASS"]: {
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
  },
  ["CALL FOR FIRE ZONE"]: {
    geometry: {
      type: "Polygon",
    },
    properties: {
      sidc: "G-F-AZXI------X",
      uniqueDesignation: "Q35",
      dtg: "10095900ZJAN92",
      dtg1: "11095900ZJAN92"
    },
    description: {
      base64: entityImages["CALL FOR FIRE ZONE"]
    }
  },
  ["CANALIZE"]: {
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
  },
  ["CENSOR ZONE"]: {
    geometry: {
      type: "Polygon"
    },
    properties: {
      sidc: "G-F-AZCI------X",
      uniqueDesignation: "Q35",
      dtg: "10095900ZJAN92",
      dtg1: "11095900ZJAN92"
    },
    description: {
      base64: entityImages["CENSOR ZONE"]
    }
  },
  ["CIRCULAR TARGET"]: {
    geometry: {
      type: "Point",
    },
    properties: {
      sidc: "G-F-AC--------X",
      uniqueDesignation: "JA1101",
      distance: 5000,
    },
    description: {
      base64: entityImages["CIRCULAR TARGET"]
    }
  },
  ["CLEAR"]: {
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
  },
  ["CONTAIN"]: {
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
  },
  ["COORDINATED FIRE LINE"]: {
    geometry: {
      type: "LineString"
    },
    properties: {
      sidc: "G-F-LCC-------X",
      uniqueDesignation: "4RDB",
      uniqueDesignation1: "CZE",
      dtg: "10095900ZJAN92",
      dtg1: "11095900ZJAN92"
    },
    description: {
      base64: entityImages["COORDINATED FIRE LINE"]
    }
  },
  ["COUNTERATTACK"]: { // TODO s více body šipky se změní čárkování
    geometry: {
      type: "LineString"
    },
    properties: {
      sidc: "G-T-K---------X"
    },
    description: {
      base64: entityImages["COUNTERATTACK"]
    }
  },
  ["CRITICAL FRIENDLY ZONE"]: [
    {
      geometry: {
        type: "LineString",
        points: 2
      },
      properties: {
        sidc: "G-F-AZFR------X",
        distance: 5000,
        uniqueDesignation: "Q36",
        dtg: "10095900ZJAN92",
        dtg1: "11095900ZJAN92"
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
        uniqueDesignation: "Q35",
        dtg: "10095900ZJAN92",
        dtg1: "11095900ZJAN92"
      },
      description: {
        base64: entityImages["CRITICAL FRIENDLY ZONE - POLYGON"]
      }
    }
  ],
  ["DEAD SPACE AREA"]: [
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
        type: "LineString",
        points: 2
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
  ],
  ["DELAY"]: { // TODO Pokud je bod 3 na levé strane osy PT1, PT2 - jak bude vypadat?
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
  },
  ["FIRE SUPPORT AREA"]: [
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
        type: "LineString",
        points: 2
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
  ],
  ["FIRE SUPPORT COORDINATION LINE"]: { // TODO - popisky jsou přes sebe, čitelné až v určitém zoomu
    geometry: {
      type: "LineString",
    },
    properties: {
      sidc: "G-F-LCF-------X",
      uniqueDesignation: "FSCL",
      uniqueDesignation1: "ALPHA",
      dtg: "202100Z",
      dtg1: "270800Z SEP",
    },
    description: {
      base64: entityImages["FIRE SUPPORT COORDINATION LINE"]
    }
  },
  ["FIX"]: {
    geometry: {
      type: "LineString",
      points: 2
    },
    properties: {
      sidc: "G-T-F---------X"
    },
    description: {
      base64: entityImages["FIX"]
    }
  },
  ["FLOT"]: {
    geometry: {
      type: "LineString",
      points: 2
    },
    properties: {
      sidc: "G-G-GLF-------X",
      bearingWidth: 450,
      bearingSpacing: 20,
      hostile: "ENY"
    },
    description: {
      base64: entityImages["FLOT"]
    }
  },
  ["FREE FIRE AREA"]: [{
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
      points: 2
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
  ],
  ["GROUP OF TARGETS"]: {
    geometry: {
      type: "Polygon",
    },
    properties: {
      sidc: "G-F-ATG-------X",
      uniqueDesignation: "FORD",
    },
    description: {
      base64: entityImages["GROUP OF TARGETS"]
    }
  },
  ["ISOLATE"]: {
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
  },
  ["LINE OF CONTACT"]: {
    geometry: {
      type: "LineString",
      points: 2
    },
    properties: {
      sidc: "G-G-GLC-------X",
      bearingWidth: 400,
      bearingSpacing: 10,
      spaceBetween: 10,
      hostile: "ENY"
    },
    description: {
      base64: entityImages["LINE OF CONTACT"]
    }
  },
  ["LOW LEVEL TRANSIT ROUTE"]: {
    geometry: {
      type: "LineString",
    },
    properties: {
      sidc: "G-G-ALL-------X",
      uniqueDesignation: "KNIGHT",
      distance: 500,
      altitudeDepth: "500 FT AGL",
      altitudeDepth1: "300 FT AGL",
      dtg: "281400ZAPR",
      dtg1: "281530ZAPR",
    },
    description: {
      base64: entityImages["LOW LEVEL TRANSIT ROUTE"]
    }
  },
  ["MAIN ATTACK"]: {
    geometry: {
      type: "LineString"
    },
    properties: {
      sidc: "G-G-OLAGM-----X"
    },
    description: {
      base64: entityImages["MAIN ATTACK"]
    }
  },
  ["MISSILE ENGAGEMENT ZONE"]: {
    geometry: {
      type: "Polygon",
    },
    properties: {
      sidc: "G-G-AAM-------X",
      uniqueDesignation: "(UNIT ID)",
      altitudeDepth: "2000 FT AGL",
      altitudeDepth1: "3000 FT AGL",
      dtg: "180500Z",
      dtg1: "180615Z",
    },
    description: {
      base64: entityImages["MEZ"]
    }
  },
  ["MULTILINE BARRAGE FIRE"]: {
    geometry: {
      type: "LineString",
      points: 2
    },
    properties: {
      sidc: "M-B-R-FIRE----X",
      uniqueDesignation: "VLK",
      distance: 500
    },
    description: {
      base64: entityImages["MULTILINE BARRAGE FIRE"]
    }
  },
  ["MUNITION FLIGHT PATH"]: {
    geometry: {
      type: "LineString"
    },
    properties: {
      sidc: "G-F-LCM-------X",
      dtg: "10095900ZJAN92",
      dtg1: "10095900ZJAN92"
    },
    description: {
      base64: entityImages["MUNITION FLIGHT PATH"]
    }
  },
  ["NAMED AREA OF INTEREST"]: {
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
  },
  ["NO FIRE AREA"]: [
    {
      properties: {
        sidc: "G-F-ACNC------X",
        distance: 300,
        uniqueDesignation: "Test",
        dtg: "10095900ZJAN92",
        dtg1: "10095900ZJAN92"
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
        uniqueDesignation: "Test",
        dtg: "10095900ZJAN92",
        dtg1: "10095900ZJAN92"
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
        uniqueDesignation: "Test",
        dtg: "10095900ZJAN92",
        dtg1: "10095900ZJAN92"
      },
      geometry: {
        type: "Polygon"
      },
      description: {
        base64: entityImages["NO FIRE AREA - POLYGON"]
      }
    }
  ],
  ["NO FIRE LINE"]: {
    geometry: {
      type: "LineString",
    },
    properties: {
      sidc: "G-F-LCN-------X",
      uniqueDesignation: "4RDB"
    },
    description: {
      base64: entityImages["NO FIRE LINE"]
    }
  },
  ["OCCUPY"]: {
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
  },
  ["PHASE LINE"]: {
    geometry: {
      type: "LineString"
    },
    properties: {
      sidc: "G-G-GLP-------X",
      uniqueDesignation: "NAME"
    },
    description: {
      base64: entityImages["PHASE LINE"]
    }
  },
  ["POSITION AREA FOR ARTILLERY"]: [{
    geometry: {
      type: "Point",
    },
    properties: {
      sidc: "G-F-ACPC------X",
      distance: 300,
    },
    description: {
      base64: entityImages["POSITION AREA FOR ARTILLERY - POINT"]
    }
  },
  {
    geometry: {
      type: "LineString",
      points: 2
    },
    properties: {
      sidc: "G-F-ACPR------X",
      distance: 500
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
      sidc: "G-F-ACP-------X"
    },
    description: {
      base64: entityImages["POSITION AREA FOR ARTILLERY - POLYGON"]
    }
  }
  ],
  ["RECTANGULAR TARGET"]: {
    geometry: {
      type: "Point",
    },
    properties: {
      sidc: "G-F-AT--------X",
      uniqueDesignation: "AB0176",
      distance: 500,
      distance1: 400,
      attitude: 40
    },
    description: {
      base64: entityImages["RECTANGULAR TARGET"]
    }
  },
  ["RESTRICTED OPERATIONS ZONE"]: {
    geometry: {
      type: "Polygon",
    },
    properties: {
      sidc: "G-G-AAR-------X",
      uniqueDesignation: "(UNIT ID)",
      altitudeDepth: "2000 FT AGL",
      altitudeDepth1: "3000 FT AGL",
      dtg: "180500Z",
      dtg1: "180615Z",
    },
    description: {
      base64: entityImages["RESTRICTED OPERATIONS ZONE"]
    }
  },
  ["RESTRICTIVE FIRE AREA"]: [{
    geometry: {
      type: "Point",
    },
    properties: {
      sidc: "G-F-ACRC------X",
      dtg: "10095900ZJAN92",
      dtg1: "11095900ZJAN92",
      uniqueDesignation: "X CORPS",
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
      uniqueDesignation: "X CORPS",
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
      uniqueDesignation: "X CORPS",
    },
    description: {
      base64: entityImages["RESTRICTIVE FIRE AREA - POLYGON"]
    }
  }
  ],
  ["RESTRICTIVE FIRE LINE"]: { // TODO popisky se překrývají
    geometry: {
      type: "LineString",
    },
    properties: {
      sidc: "G-F-LCR-------X",
      uniqueDesignation: "XCORPS",
      uniqueDesignation1: "DELTA",
      dtg: "202100Z",
      dtg1: "270800Z SEP",
    },
    description: {
      base64: entityImages["RESTRICTIVE FIRE LINE"]
    }
  },
  ["SAFE LANE"]: {
    geometry: {
      type: "LineString",
    },
    properties: {
      sidc: "S-F-LANE------X",
      uniqueDesignation: "KNIGHT",
      distance: 500,
      altitudeDepth: "500 FT AGL",
      altitudeDepth1: "300 FT AGL",
      dtg: "281400ZAPR",
      dtg1: "281530ZAPR",
    },
    description: {
      base64: entityImages["SAFE LANE"]
    }
  },
  ["SENSOR ZONE"]: [{
    geometry: {
      type: "Point",
    },
    properties: {
      sidc: "G-F-ACEC------X",
      dtg: "10095900ZJAN92",
      dtg1: "11095900ZJAN92",
      uniqueDesignation: "Q37",
      distance: 5000
    },
    description: {
      base64: entityImages["SENSOR ZONE - POINT"]
    }
  },
  {
    geometry: {
      type: "LineString",
      points: 2
    },
    properties: {
      sidc: "G-F-ACER------X",
      dtg: "10095900ZJAN92",
      dtg1: "11095900ZJAN92",
      uniqueDesignation: "Q36",
      distance: 5000,
    },
    description: {
      base64: entityImages["SENSOR ZONE - LINESTRING"]
    }
  },
  {
    geometry: {
      type: "Polygon",
    },
    properties: {
      sidc: "G-F-ACEI------X",
      dtg: "10095900ZJAN92",
      dtg1: "11095900ZJAN92",
      uniqueDesignation: "Q35"
    },
    description: {
      base64: entityImages["SENSOR ZONE - POLYGON"]
    }
  }
  ],
  ["SHORADEZ"]: {
    geometry: {
      type: "Polygon",
    },
    properties: {
      sidc: "G-G-AAF-------X",
      uniqueDesignation: "(UNIT ID)",
      altitudeDepth: "2000 FT AGL",
      altitudeDepth1: "3000 FT AGL",
      dtg: "180500Z",
      dtg1: "180615Z",
    },
    description: {
      base64: entityImages["SHORADEZ"]
    }
  },
  ["SUPPORTING ATTACK"]: {
    geometry: {
      type: "LineString"
    },
    properties: {
      sidc: "G-G-OLAGS-----X"
    },
    description: {
      base64: entityImages["SUPPORTING ATTACK"]
    }
  },
  ["TARGET BUILD-UP AREA"]: [
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
  ],
  ["TARGET VALUE AREA"]: [
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
  ],
  ["TARGETED AREA OF INTEREST"]: {
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
  },
  ["TERMINALLY GUIDED MUNITION FOOTPRINT"]: {
    properties: {
      sidc: "G-F-ACT-------X"
    },
    geometry: {
      type: "Polygon"
    },
    description: {
      base64: entityImages["TERMINALLY GUIDED MUNITION FOOTPRINT"]
    }
  },
  ["WEAPONS FREE ZONE"]: {
    geometry: {
      type: "Polygon",
    },
    properties: {
      sidc: "G-G-AAW-------X",
      uniqueDesignation: "(unit ID)",
      dtg: "180500Z",
      dtg1: "180615Z"
    },
    description: {
      base64: entityImages["WEAPONS FREE ZONE"]
    }
  },
  ["ZONE OF RESPONSIBILITY"]: [
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
  ]
};

export default entityDescription;