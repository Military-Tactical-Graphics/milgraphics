/* ***************************************************************************************
Creating the base of milgraphics by importing milsymbol
*************************************************************************************** */
import * as ms from 'milsymbol';
import Graphic from './src/graphic';
import GraphicsLayer from './src/graphicslayer';
import geometryConverter from './src/geometryconverter';
import addSIDCgraphics from './src/ms/addsidcgraphics';
import format from './src/format';
import geometry from './src/geometry';
import editor from './src/editor/entityDescription';

ms.addSIDCgraphics = addSIDCgraphics;
ms.format = format;
ms.geometry = geometry;
ms.geometryConverter = geometryConverter;

ms.Graphic = Graphic;

ms.GraphicsLayer = GraphicsLayer;

ms.editor = editor;

/* ***************************************************************************************
Letter based SIDC
*************************************************************************************** */
ms._getLetterPropertiesGraphic = require("./src/letter-sidc/properties.js");

ms._getLetterSIDCgraphic = require("./src/letter-sidc/getgraphic.js");
ms.addSIDCgraphics(require("./src/letter-sidc/tactical-2525.js"), "letter");
ms.addSIDCgraphics(require("./src/letter-sidc/tactical-app6.js"), "letter");
/* ***************************************************************************************
Number based SIDC
*************************************************************************************** */
ms._getNumberPropertiesGraphic = require("./src/number-sidc/properties.js");

/* ***************************************************************************************
Export ms to the world
*************************************************************************************** */
export default ms;