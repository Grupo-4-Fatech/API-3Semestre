"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Flap {
    constructor(id, brk_conf, ref, weight_below, alt, temp_below, temp_above, wind_head, wind_tail, slope_uphill, slope_downhill, vap, rev) {
        this.getId = () => {
            return this.id;
        };
        this.getBrk_conf = () => {
            return this.brk_conf;
        };
        this.id = id;
        this.brk_conf = brk_conf;
        this.ref = ref;
        this.weight_below = weight_below;
        this.alt = alt;
        this.temp_below = temp_below;
        this.temp_above = temp_above;
        this.wind_head = wind_head;
        this.wind_tail = wind_tail;
        this.slope_uphill = slope_uphill;
        this.slope_downhill = slope_downhill;
        this.vap = vap;
        this.rev = rev;
    }
}
exports.default = Flap;
