["POSITION AREA FOR ARTILLERY"] = {
    geometry: {
        type: ["Point", "LineString", "Polygon"],
        //points: 3, at least 3 points
        
     },
     properties: {
        sidc: ["G-F-ACPC--", "G-F-ACPR--", "G-F-ACP---"],
        distance: 300,
        name: "PAA",
     }
}
["ARTILLERY FIRING POSITION"] = {
    geometry: {
        type: "LineString",
       //points: 2, at least 2 points
     },
     properties: {
        sidc: "ART-FIRING",
        name: "ARTILLERY FIRING POSITION",
        firingPosition: "11",
     }
}
["ARTILLERY MANOEUVRE AREA"] = {
    geometry: {
        type: ["Point", "LineString", "Polygon"],
        //points: 3, at least 3 points
        
     },
     properties: {
       //sidc: ["G-F-ACPC--", "G-F-ACPR--", "G-F-ACP---"], UNKNOWN
        distance: 300,
        name: "AMA",
     }
}
["ARTILLERY RESTRICTED AREA"] = {
    geometry: {
        type: ["Point", "LineString", "Polygon"],
        //points: 3, at least 3 points
        
     },
     properties: {
        //sidc: ["G-F-ACPC--", "G-F-ACPR--", "G-F-ACP---"], UNKNOWN
        distance: 300,
        name: "ARA",
     }
}
["RECTANGULAR TARGET"] = {
    geometry: {
        type: "LineString",
        points: 2,     
     },
     properties: {
        sidc: "G-F-AT----",
        name: "AB0176",
        distance: 500,
     }
}
["CIRCULAR TARGET"] = {
    geometry: {
        type: "Point",
        points: 1,
        distance: 5000,
     },
     properties: {
        sidc: "G-F-AC----",
        name: "JA1101",
     }
}
["GROUP OF TARGETS"] = {
    geometry: {
        type: "Polygon",
        //points: 3, at least 3 points
     },
     properties: {
        sidc: "G-F-ATG---",
        name: "FORD",
     }
}
["BARRAGE FIRE"] = {
    geometry: {
        type: "MultiLineString",
        //points: 2, at least 2 points
     },
     properties: {
        sidc: "BARRA-FIRE",
        name: "AC",
        administrator: "OAK",
        weaponSystemType: "1BTY",
     }
}
["MULTILINE BARRAGE FIRE"] = {
    geometry: {
        type: "MultiLineString",
        //points: 2, at least 2 points
       
     },
     properties: {
        sidc: "M-BAR-FIRE",
        name: "AC",
        administrator: "VLK",
        weaponSystemType: "1BTY",
        distance: 500,
     }
}
["FREE FIRE AREA"] = {
    geometry: {
        type: ["Point", "LineString", "Polygon"],
        //points: 3, at least 3 points
        
     },
     properties: {
        sidc: ["G-F-ACFC--", "G-F-ACFR--", "G-F-ACFI--"],
        uniqueDesignation: "I",
        dtg: "10095900ZJAN92",
        dtg1: "11095900ZJAN92",
        distance: 5000,
     }
}
["RESTRICTED FIRE AREA"] = {
    geometry: {
        type: ["Point", "LineString", "Polygon"],
        //points: 3, at least 3 points
        
     },
     properties: {
        sidc: ["G-F-ACRC--", "G-F-ACRR--", "G-F-ACRI--"],
        dtg: "10095900ZJAN92",
        dtg1: "11095900ZJAN92",
        administrator: "X CORPS",
        distance: 5000,
     }
}
["NO FIRE LINE"] = {
    geometry: {
        type: "LineString",
        //points: 2, at least 2 points
     },
     properties: {
        sidc: "G-F-LCN---",
        name: "NFL",
        administrator: "4RDB",
        dth: "10095900ZJAN92",
     }
}
["RESTRICTIVE FIRE LINE"] = {
    geometry: {
        type: "LineString",
        //points: 2, at least 2 points
     },
     properties: {
        sidc: "G-F-LCR---",
        administrator: "XCORPS",
        name:"DELTA",
        w: "NO WP SMOKE",
        w1: "",
     }
}
["FIRE SUPPORT COORDINATION LINE"] = {
    geometry: {
        type: "LineString",
        //points: 2, at least 2 points
     },
     properties: {
        sidc: "G-F-LCF---",
        administrator: "XCORPS",
        name:"ALPHA",
        dtg:  "10095900ZJAN92",
        dtg1:  "10095900ZJAN92",
     }
}
["MUNITION FLIGHT PATH"] = {
    geometry: {
        type: "LineString",
        //points: 2, at least 2 points
     },
     properties: {
        sidc: "G-F-LCM---",
        name:"MFL",
        dtg:  "10095900ZJAN92",
        dtg1:  "10095900ZJAN92",
     }
}
["AIR CORRIDOR"] = {
  geometry: {
    type: "MultiLineString",
    //points: 2, at least 2 points
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
}
["LOW LEVEL TRANSIT ROUTE"] = {
    geometry: {
        type: "MultiLineString",
        //points: 2, at least 2 points
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
}
["SAFE LINE"] = {
    geometry: {
        type: "MultiLineString",
        //points: 2, at least 2 points
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
}
["RESTRICTED OPERATING ZONE"] = {
    geometry: {
        type: "Polygon",
        //points: 3, at least 3 points
      },
      properties: {
        sidc: "G-G-AA----",
        name: "(UNIT ID)",
        altitudeDepth: "2000 FT AGL",
        altitudeDepth1: "3000 FT AGL",
        dtg: "180500Z",
        dtg1: "180615Z",
      }
}
["WEAPONS FREE ZONE"] = {
    geometry: {
        type: "Polygon",
        //points: 3, at least 3 points
      },
      properties: {
        sidc: "G-G-AAW-------X",
        name: "(unit ID)",
        timeFrom: "180500Z",
        timeTo: "180615Z",
        fill: "dashes",
      }
}
