/* ***************************************************************************************
Creating the base of milgraphics by importing milsymbol
*************************************************************************************** */
import milsymbol from 'milsymbol';
import Graphic from './src/graphic';
import GraphicsLayer from './src/graphicslayer';
import { geometryConverter } from './src/geometryconverter';
import addSIDCgraphics from './src/ms/addsidcgraphics';
import format from './src/format';
import { geometry } from './src/geometry';
import editor from './src/editor/entityDescription';
import getLetterPropertiesGraphic from './src/letter-sidc/properties';
import getLetterSIDCgraphic from './src/letter-sidc/getgraphic';
import ms2525 from './src/letter-sidc/tactical-2525.js';
import app6 from './src/letter-sidc/tactical-app6.js';
import numberProperties from './src/number-sidc/properties.js';

const ms = {
    ...milsymbol,
    addSIDCgraphics,
    format,
    geometry,
    geometryConverter,
    Graphic,
    GraphicsLayer,
    editor
};

/* ***************************************************************************************
Letter based SIDC
*************************************************************************************** */
ms._getLetterPropertiesGraphic = getLetterPropertiesGraphic;

ms._getLetterSIDCgraphic = getLetterSIDCgraphic;
ms.addSIDCgraphics(ms2525, "letter");
ms.addSIDCgraphics(app6, "letter");
/* ***************************************************************************************
Number based SIDC
*************************************************************************************** */
ms._getNumberPropertiesGraphic = numberProperties;

/* ***************************************************************************************
Export ms to the world
*************************************************************************************** */
export default ms;