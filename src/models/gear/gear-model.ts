import { GearSlot } from "./gear-slot";
import { IGearStats } from "./gear-stats";

export interface IGearModel{
    Slot: GearSlot;
    Name: string;
    Stats: IGearStats;
}