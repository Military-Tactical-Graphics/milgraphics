import { Feature } from "ol";
import Geometry from "ol/geom/Geometry";
import geometryConverterObject from "./src/geometryconverter";
import getproperties from "./src/graphic/getproperties";

type GeometryType = {
    LineString: string;
    MultiLineString: string;
    Polygon: string;
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
    w?: string;
    w1?: string;
}

type FeatureColection = {
    type: string;
    features: Feature<Geometry>[];
}

export class GraphicsLayer {
    constructor(
        feature: FeatureColection
    )
    asOpenLayers(): Feature<Geometry>[];
    asCesium(): Cesium.EntityCollection;
}

export class Graphic {
    constructor(
        feature: FeatureColection
    )
    getProperties(): ReturnType<typeof getproperties>;
    isConverted(): boolean;
}
export namespace format {
    export function GeoJSON(data: object, mapping?: object): FeatureColection;
    export function ArmyXML(xml: string): FeatureColection;
    export function NVG(data: any): FeatureColection;
    export function SLF(xml: string): FeatureColection;
}

type GeometryObject = {
  geometry: Geometry;
  annotation?: Geometry;  
}

type PointType = [number, number];

export namespace geometry {
    export function bearingBetween(point1: PointType, point2: PointType): number;
    export function circle(feature: Feature<Geometry>): GeometryObject;
    export function circleCorridorPolygon(feature: Feature<Geometry>): GeometryObject;
    export function corridor(feature: Feature<Geometry>): GeometryObject;
    export function distanceBetween(point1: PointType, point2: PointType): number;
    export function isClockwise(points: PointType): boolean;
    export function pointBetween(point1: PointType, point2: PointType, fractionalDistance: number): PointType;
    export function pointBetweenAbsolute(point1: PointType, point2: PointType, absoluteDistance: number): PointType;
    export function rectangle(feature: Feature<Geometry>): GeometryObject;
    export function toDistanceBearing(point1: PointType, point2: PointType, bearing: number): GeometryObject;
    export function testGeometry(point1: PointType, point2: PointType, fractionalDistance: number): PointType;
    export function addAnnotation(point: PointType, text: string): Feature<Geometry>;
}

export type geometryConverter = typeof geometryConverterObject;
