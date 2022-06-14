import { Poline } from "./polines.class";
import { Vendor } from "./vendor.class";

export class Po {
    vendor!: Vendor;
    polines!: Poline[];
    poTotal: number = 0;
}