const geometryConverter = {};

geometryConverter[
    "AIR CORRIDOR"
] = require("./geometryconverter/air-corridor.js");
geometryConverter[
    "AIRSPACE COORDINATION AREA"
] = require("./geometryconverter/airspace-coordination-area.js");
geometryConverter[
    "AMBUSH"
] = require("./geometryconverter/ambush.js");
geometryConverter[
    "ARTILLERY FIRING POSITION"
] = require("./geometryconverter/artillery-firing-position.js"); 
geometryConverter[
    "ARTILLERY MANOEUVRE AREA"
] = require("./geometryconverter/artillery-firing-position.js");
geometryConverter[
    "ARTILLERY RESTRICTED AREA"
] = require("./geometryconverter/artillery-firing-position.js");
geometryConverter[
    "ARTILLERY TARGET INTELLIGENCE ZONE"
] = require("./geometryconverter/artillery-target-intelligence-zone.js");
geometryConverter[
    "BARRAGE FIRE"
] = require("./geometryconverter/barrage-fire.js"); 
geometryConverter[
    "BLOCK"
] = require("./geometryconverter/block.js");
geometryConverter[
    "BOUNDARIES"
] = require("./geometryconverter/boundaries.js");
geometryConverter[
    "BREACH"
] = require("./geometryconverter/breach.js");
geometryConverter[
    "BYPASS"
] = require("./geometryconverter/bypass.js");
geometryConverter[
    "CALL FOR FIRE ZONE"
] = require("./geometryconverter/call-for-fire-zone.js");
geometryConverter[
    "CANALIZE"
] = require("./geometryconverter/canalize.js");
geometryConverter[
    "CENSOR ZONE"
] = require("./geometryconverter/censor-zone.js");
//geometryConverter.circle = require("./geometryconverter/circle.js");
geometryConverter[
    "CIRCULAR TARGET"
] = require("./geometryconverter/circular-target.js");
geometryConverter[
    "CLEAR"
] = require("./geometryconverter/clear.js");
geometryConverter[
    "CONTAIN"
] = require("./geometryconverter/contain.js");
geometryConverter[
    "COORDINATED FIRE LINE"
] = require("./geometryconverter/coordinated-fire-line.js");
geometryConverter["CORRIDOR"] = require("./geometryconverter/corridor.js");
geometryConverter[
    "COUNTERATTACK"
] = require("./geometryconverter/counterattack.js");
geometryConverter["COVER"] = require("./geometryconverter/cover.js");
geometryConverter[
    "CRITICAL FRIENDLY ZONE"
] = require("./geometryconverter/critical-friendly-zone.js");
geometryConverter[
    "DEAD SPACE AREA"
] = require("./geometryconverter/dead-space-area.js");
geometryConverter[
    "DELAY"
] = require("./geometryconverter/delay.js");
geometryConverter[
    "FIRE SUPPORT AREA"
] = require("./geometryconverter/fire-support-area.js");
geometryConverter[
    "FIRE SUPPORT COORDINATION LINE"
] = require("./geometryconverter/fire-support-coordination-line.js");
geometryConverter[
    "FIX"
] = require("./geometryconverter/fix.js");
geometryConverter[
    "FLOT"
] = require("./geometryconverter/flot.js");
geometryConverter[
    "FREE FIRE AREA"
] = require("./geometryconverter/free-fire-area.js");
geometryConverter[
    "GROUP OF TARGETS"
] = require("./geometryconverter/group-of-targets.js");
geometryConverter["GUARD"] = require("./geometryconverter/guard.js");
geometryConverter[
    "ISOLATE"
] = require("./geometryconverter/isolate.js");
geometryConverter[
    "LINE OF CONTACT"
] = require("./geometryconverter/line-of-contact.js");
geometryConverter[
    "LOW LEVEL TRANSIT ROUTE"
] = require("./geometryconverter/low-level-transit-route.js");
geometryConverter[
    "MAIN ATTACK"
] = require("./geometryconverter/main-attack.js");
geometryConverter[
    "MULTILINE BARRAGE FIRE"
] = require("./geometryconverter/multiline-barrage-fire.js"); // New
geometryConverter[
    "MUNITION FLIGHT PATH"
] = require("./geometryconverter/munition-flight-path.js");
geometryConverter[
    "NAMED AREA OF INTEREST"
] = require("./geometryconverter/named-area-of-interest.js");
geometryConverter[
    "NO FIRE AREA"
] = require("./geometryconverter/no-fire-area.js");
geometryConverter[
    "NO FIRE LINE"
] = require("./geometryconverter/no-fire-line.js");
geometryConverter["OCCUPY"] = require("./geometryconverter/occupy.js");
geometryConverter[
    "PHASELINE"
] = require("./geometryconverter/phase-line.js");
geometryConverter[
    "POSITION AREA FOR ARTILLERY"
] = require("./geometryconverter/position-area-for-artillery.js");
geometryConverter[
    "RECTANGULAR TARGET"
] = require("./geometryconverter/rectangular-target.js");
geometryConverter[
    "RESTRICTED OPERATIONS ZONE"
] = require("./geometryconverter/restricted-operations-zone.js");
geometryConverter[
    "RESTRICTIVE FIRE AREA"
] = require("./geometryconverter/restrictive-fire-area.js");
geometryConverter[
    "RESTRICTIVE FIRE LINE"
] = require("./geometryconverter/restrictive-fire-line.js");
geometryConverter[
    "SAFE LANE"
] = require("./geometryconverter/safe-lane.js");
geometryConverter[
    "SEARCH AREA"
] = require("./geometryconverter/search-area.js")
geometryConverter[
    "SENSOR ZONE"
] = require("./geometryconverter/sensor-zone.js");
geometryConverter[
    "SUPPORTING ATTACK"
] = require("./geometryconverter/supporting-attack.js");
geometryConverter[
    "TARGET BUILD-UP AREA"
] = require("./geometryconverter/target-build-up-area.js");
geometryConverter[
    "TARGET VALUE AREA"
] = require("./geometryconverter/target-value-area.js");
geometryConverter[
    "TARGETED AREA OF INTEREST"
] = require("./geometryconverter/targeted-area-of-interest.js");
geometryConverter[
    "TERMINALLY GUIDED MUNITION FOOTPRINT"
] = require("./geometryconverter/terminally-guided-munition-footprint.js");
geometryConverter[
    "TEST"
] = require("./geometryconverter/test.js");
geometryConverter[
    "WEAPONS FREE ZONE"
] = require("./geometryconverter/weapons-free-zone.js");
geometryConverter[
    "ZONE OF RESPONSIBILITY"
] = require("./geometryconverter/zone-of-responsibility.js");

export default geometryConverter;