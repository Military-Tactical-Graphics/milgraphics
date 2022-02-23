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