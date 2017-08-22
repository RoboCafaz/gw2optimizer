import { Stat } from "../stats";
import { GearDistribution } from "./gear-distribution";
import { GearSlot } from "./gear-slot";

export interface IGearStats {
    set(stat: Stat, number: number);
    get(stat: Stat): number;
}

export class GearStats implements IGearStats {
    private stats: number[];

    constructor() {
        this.stats = new Array<number>();
    }

    set(stat: Stat, number: number) {
        this.stats[stat] = number;
    }

    get(stat: Stat): number {
        return this.stats[stat] || 0;
    }

    public static create(distribution: GearDistribution, slot: GearSlot): IGearStats {
        return null;
    }
}