import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Map from './map';
import files from '../tacticaljson/import_files.js';
import editor from '../src/editor/entityDescription';

const AFFILIATION_TYPES = {
  '-': 'None',
  P: 'Pending',
  U: 'Unknown',
  A: 'Assumed Friend',
  F: 'Friend',
  N: 'Neutral',
  S: 'Suspect',
  H: 'Hostile',
  G: 'Exercise Pending',
  W: 'Exercise Unknown',
  D: 'Exercise Friend',
  L: 'Exercise Neutral',
  M: 'Exercise Assumed Friend',
  J: 'Joker',
  K: 'Faker',
  O: 'None Specified'
};

const OpenLayersMap = ({ data }) => {
  return <Map style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0 }} data={data} />
};

const APP = () => {
  const [selected, onSelect] = useState('air-corridor');
  const [affiliation, onAffiliation] = useState('-');
  const NAME = `${selected.split(/\-|_/).join(" ")}`.toUpperCase().replace("BUILD UP", "BUILD-UP");
  return (
    <>
      <div style={{ position: 'fixed', zIndex: 100, right: 0 }}>
        <select style={{ fontSize: 20 }} onChange={(e) => onSelect(e.target.value)}>
          {Object.keys(files).map(key =>
            <option key={`option_${key}`} value={key}>{key}</option>
          )}
        </select>
      </div>
      <div style={{ position: 'fixed', zIndex: 100, right: 0, top: 25 }}>
        <select style={{ fontSize: 20 }} onChange={(e) => onAffiliation(e.target.value)}>
          {Object.keys(AFFILIATION_TYPES).map(key =>
            <option key={`option_${key}`} value={key}>{AFFILIATION_TYPES[key]}</option>
          )}
        </select>
      </div>
      {selected && editor[NAME] && <div style={{ position: 'fixed', zIndex: 100, left: 40 }}>
        {editor[NAME].geometry ?
          <img src={editor[NAME].description.base64} /> :
          <>
            {editor[NAME].map((geom, id) =>
              <img key={`${NAME}_${geom.geometry.type}`} src={geom.description.base64} />)}          
          </>}
      </div>}
      <OpenLayersMap data={updateFiles(files[selected], editor[NAME], affiliation)} />
    </>   
  );
};

const updateFiles = (file, editor, affiliation) => {
  const VALID_SIDC = Array.isArray(editor) ?
    editor.map(e => e.properties.sidc.slice(2)) : [editor?.properties?.sidc.slice(2)];

  return ({
    features: file.features
      .map((feature) => {
        if (VALID_SIDC.includes(feature.properties.sidc.slice(2))) {
          let SIDC = feature.properties.sidc;
          SIDC = SIDC.split('');
          SIDC[1] = affiliation;
          SIDC = SIDC.join('');
          return ({
            ...feature,
            properties: {
              ...feature.properties,
              sidc: SIDC
            }
          })
        }
        return feature;
      })
  })
};

const container = document.querySelector('.root');
const root = createRoot(container);

root.render(<APP />);
