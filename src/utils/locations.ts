import { MISSIONS } from "./consts";
/**
 * Preview image is named `${name}.png`
 * if pictureVariation is provided, `${name} ${pictureVariation}.png`
 */
export type ILocation = {
    name: string;
    pictureVariation?: string;
    confirmed?: boolean;
    index: number;
    /**
     * Rarely, gako indexes and kerotan indexes refer to separate levels
     */
    kerotanIndex?: number;
    mission: string;
};

export const LOCATIONS: ILocation[] = [
    {
        name: 'Dremuchij South',
        mission: MISSIONS.virtuous,
        pictureVariation: 'morning',
        index: 0,
    },
    {
        name: 'Dremuchij Swampland',
        pictureVariation: 'morning',
        mission: MISSIONS.virtuous,
        index: 1,
    },
    {
        name: 'Dremuchij North',
        pictureVariation: 'morning',
        mission: MISSIONS.virtuous,
        index: 2,
    },
    {
        name: 'Dolinovodno',
        pictureVariation: 'morning',
        mission: MISSIONS.virtuous,
        index: 3,
    },
    {
        name: 'Rassvet',
        pictureVariation: 'morning',
        mission: MISSIONS.virtuous,
        index: 4,
    },
    {
        name: 'Dremuchij East',
        mission: MISSIONS.snakeEater,
        index: 5,
        kerotanIndex: 6,
    },
    {
        name: 'Dremuchij North',
        pictureVariation: 'night',
        mission: MISSIONS.snakeEater,
        index: 6,
        kerotanIndex: 8,
    },
    {
        name: 'Dremuchij Swampland',
        pictureVariation: 'night',
        mission: MISSIONS.snakeEater,
        index: 7,
    },
    {
        name: 'Dremuchij South',
        pictureVariation: 'night',
        mission: MISSIONS.snakeEater,
        index: 8,
        kerotanIndex: 5,
    },
    {
        name: 'Dolinovodno',
        pictureVariation: 'night',
        mission: MISSIONS.snakeEater,
        index: 9,
    },
    {
        name: 'Rassvet',
        pictureVariation: 'night',
        mission: MISSIONS.snakeEater,
        index: 10,
    },
    {
        name: 'Chyornyj Prud',
        mission: MISSIONS.snakeEater,
        index: 11,
    },
    {
        name: 'Bolshaya Past South',
        mission: MISSIONS.snakeEater,
        index: 12,
    },
    {
        name: 'Bolshaya Past Base',
        mission: MISSIONS.snakeEater,
        index: 13,
    },
    {
        name: 'Bolshaya Past Crevice',
        mission: MISSIONS.snakeEater,
        index: 14,
    },
    {
        name: 'Chyornaya Peschera Cave Branch',
        mission: MISSIONS.snakeEater,
        index: 15,
    },
    {
        name: 'Chyornaya Peschera Cave',
        mission: MISSIONS.snakeEater,
        index: 16,
    },
    {
        name: 'Chyornaya Peschera Cave Entrance',
        mission: MISSIONS.snakeEater,
        index: 17,
    },
    {
        name: 'Ponizovje South',
        mission: MISSIONS.snakeEater,
        index: 18,
    },
    {
        name: 'Ponizovje West',
        mission: MISSIONS.snakeEater,
        index: 19,
    },
    {
        name: 'Ponizovje Warehouse Docks',
        mission: MISSIONS.snakeEater,
        index: 20,
    },
    {
        name: 'Ponizovje Warehouse',
        mission: MISSIONS.snakeEater,
        index: 21,
    },
    {
        name: 'Graniny Gorki South',
        mission: MISSIONS.snakeEater,
        index: 22,
        kerotanIndex: 23, // kerotans skipped 22
    },
    {
        name: 'Graniny Gorki Exterior: Outside Walls',
        mission: MISSIONS.snakeEater,
        index: 23,
        kerotanIndex: 24,
    },
    {
        name: 'Graniny Gorki Exterior: Inside Walls',
        mission: MISSIONS.snakeEater,
        index: 24,
        kerotanIndex: 25,
    },
    {
        name: 'Graniny Gorki Lab F1',
        mission: MISSIONS.snakeEater,
        index: 25,
        kerotanIndex: 26,
    },
    {
        name: 'Graniny Gorki Lab B1 East',
        mission: MISSIONS.snakeEater,
        index: 26,
        kerotanIndex: 27,
    },
    {
        name: 'Graniny Gorki Lab B1 West',
        mission: MISSIONS.snakeEater,
        index: 27,
        kerotanIndex: 28,
    },
    {
        name: 'Svyatogornyj South',
        mission: MISSIONS.snakeEater,
        index: 28,
        kerotanIndex: 22,
    },
    {
        name: 'Svyatogornyj West',
        mission: MISSIONS.snakeEater,
        index: 29,
    },
    {
        name: 'Svyatogornyj East',
        mission: MISSIONS.snakeEater,
        index: 30,
    },
    {
        name: 'Sokrovenno South',
        mission: MISSIONS.snakeEater,
        index: 31,
    },
    {
        name: 'Sokrovenno West',
        mission: MISSIONS.snakeEater,
        index: 32,
    },
    {
        name: 'Sokrovenno North',
        mission: MISSIONS.snakeEater,
        index: 33,
    },
    {
        name: 'Krasnogorje Tunnel',
        mission: MISSIONS.snakeEater,
        index: 34,
    },
    {
        name: 'Krasnogorje Mountain Base',
        mission: MISSIONS.snakeEater,
        index: 35,
    },
    {
        name: 'Krasnogorje Mountainside',
        mission: MISSIONS.snakeEater,
        index: 36,
    },
    {
        name: 'Krasnogorje Mountaintop',
        mission: MISSIONS.snakeEater,
        index: 37,
    },
    {
        name: 'Krasnogorje Mountaintop: Behind Ruins',
        mission: MISSIONS.snakeEater,
        index: 39, // In indexing these go in the opposite order, but in gameplay they go in this one
    },
    {
        name: 'Krasnogorje Mountaintop Ruins',
        mission: MISSIONS.snakeEater,
        index: 38,
    },
    {
        name: 'Groznyj Grad Underground Tunnel',
        mission: MISSIONS.snakeEater,
        index: 40,
    },
    {
        name: 'Groznyj Grad Southwest',
        mission: MISSIONS.snakeEater,
        index: 41,
    },
    {
        name: 'Groznyj Grad Northwest',
        mission: MISSIONS.snakeEater,
        index: 42,
    },
    {
        name: 'Groznyj Grad Southeast',
        mission: MISSIONS.snakeEater,
        index: 43,
        kerotanIndex: 44,
    },
    {
        name: 'Groznyj Grad Jail',
        mission: MISSIONS.snakeEater,
        index: 47,
    },
    {
        name: 'Groznyj Grad Northeast',
        mission: MISSIONS.snakeEater,
        index: 44,
        kerotanIndex: 43,
    },
    {
        name: 'Groznyj Grad Weapons Lab: East Wing',
        mission: MISSIONS.snakeEater,
        index: 45,
    },
    {
        name: 'Groznyj Grad Weapons Lab: West Wing Corridor',
        mission: MISSIONS.snakeEater,
        index: 46,
    },
    {
        name: 'Tikhogornyj',
        mission: MISSIONS.snakeEater,
        index: 48,
        kerotanIndex: 50,
    },
    {
        name: 'Tikhogornyj: Behind Waterfall',
        mission: MISSIONS.snakeEater,
        index: 49,
        kerotanIndex: 51,
    },
    {
        name: 'Groznyj Grad Weapons Lab: Main Wing Hangar',
        mission: MISSIONS.snakeEater,
        index: 50,
        kerotanIndex: 48,
    },
    {
        name: 'Groznyj Grad B1F',
        mission: MISSIONS.snakeEater,
        index: 51,
        kerotanIndex: 49,
    },
    {
        name: 'Groznyj Grad',
        mission: MISSIONS.snakeEater,
        index: 52,
    },
    {
        name: 'Groznyj Grad Runway South',
        mission: MISSIONS.snakeEater,
        index: 53,
    },
    {
        name: 'Groznyj Grad Runway',
        mission: MISSIONS.snakeEater,
        index: 54,
    },
    {
        name: 'Groznyj Grad Runway 2nd Area',
        mission: MISSIONS.snakeEater,
        index: 55,
    },
    {
        name: 'Groznyj Grad Rail Bridge - C3',
        mission: MISSIONS.snakeEater,
        index: 56,
    },
    {
        name: 'Groznyj Grad Rail Bridge - Boss Fight',
        mission: MISSIONS.snakeEater,
        index: 57,
    },
    {
        name: 'Groznyj Grad Rail Bridge North',
        mission: MISSIONS.snakeEater,
        index: 58,
    },
    {
        name: 'Lazorevo South',
        mission: MISSIONS.snakeEater,
        index: 59,
    },
    { name: 'Lazorevo North', mission: MISSIONS.snakeEater, index: 60 },
    { name: 'Zaozyorje West', mission: MISSIONS.snakeEater, index: 61 },
    { name: 'Zaozyorje East', mission: MISSIONS.snakeEater, index: 62 },
    { name: 'Rokovoj Bereg', mission: MISSIONS.snakeEater, index: 63 },
];
