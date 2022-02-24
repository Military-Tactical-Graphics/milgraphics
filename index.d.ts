import { Feature } from "ol";

type GeometryType = {
    LineString: String;
    MultiLineString: String;
    Polygon: String;
    Point: string;
};

type GeometryOptions = {
    additionalInformation?:string;
    administrator?: string;
    altitudeDepth?: string;
    altitudeDepth1?:string,
    bearingSpacing?: number;
    bearingWidth?: number;
    distance?: number;
    dtg?: string;
    dtg1?: string;
    fill?: string;
    firingPosition?: string;
    name?:string;
    sidc: string;
    spaceBetween?:number;
    uniqueDesignation?: string;
    weaponSystemType?: string;
}

type FeatureColection = {
    type: string;
    features: Feature[];
}

export class GraphicsLayer {
    constructor(
        feature: FeatureColection
    )
    asOpenLayers(): Feature[];
    asCesium(): Cesium.EntityCollection;
};

export namespace format {
    export function ArmyXML(xml: string): format.GeoJSON;
    export function GeoJSON(data: object, mapping?: object): FeatureColection;
    export function NVG(data: any): format.GeoJSON; // TODO add type of NVG
    export function SLF(xml: string): format.GeoJSON;
}
