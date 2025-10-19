/**
 * Preview image is named `${name}.png`
 * if pictureVariation is provided, `${name} ${pictureVariation}.png`
 */
export type ILocation = {
    name: string;
    pictureVariation?: string;
    confirmed?: boolean;
    index: number;
    mission: string;
};

export const LOCATIONS: ILocation[] = [
    {
        name: 'Dremuchij South',
        mission: 'Virtuous Mission',
        pictureVariation: 'morning',
        index: 0,
    },
    {
        name: 'Dremuchij Swampland',
        pictureVariation: 'morning',
        mission: 'Virtuous Mission',
        index: 1,
    },
    {
        name: 'Dremuchij North',
        pictureVariation: 'morning',
        mission: 'Virtuous Mission',
        index: 2,
    },
    {
        name: 'Dolinovodno',
        pictureVariation: 'morning',
        mission: 'Virtuous Mission',
        index: 3,
    },
    {
        name: 'Rassvet',
        pictureVariation: 'morning',
        mission: 'Virtuous Mission',
        index: 4,
    },
    { name: 'Dremuchij East', mission: 'Operation Snake Eater', index: 5 },
    {
        name: 'Dremuchij North',
        pictureVariation: 'night',
        mission: 'Operation Snake Eater',
        index: 6,
    },
    {
        name: 'Dremuchij Swampland',
        pictureVariation: 'night',
        mission: 'Operation Snake Eater',
        index: 7,
    },
    {
        name: 'Dremuchij South',
        pictureVariation: 'night',
        mission: 'Operation Snake Eater',
        index: 8,
    },
    {
        name: 'Dolinovodno',
        pictureVariation: 'night',
        mission: 'Operation Snake Eater',
        index: 9,
    },
    {
        name: 'Rassvet',
        pictureVariation: 'night',
        mission: 'Operation Snake Eater',
        index: 10,
    },
    { name: 'Chyornyj Prud', mission: 'Operation Snake Eater', index: 11 },
    {
        name: 'Bolshaya Past South',
        mission: 'Operation Snake Eater',
        index: 12,
    },
    { name: 'Bolshaya Past Base', mission: 'Operation Snake Eater', index: 13 },
    {
        name: 'Bolshaya Past Crevice',
        mission: 'Operation Snake Eater',
        index: 14,
    },
    {
        name: 'Chyornaya Peschera Cave Branch',
        mission: 'Operation Snake Eater',
        index: 15,
    },
    {
        name: 'Chyornaya Peschera Cave',
        mission: 'Operation Snake Eater',
        index: 16,
    },
    {
        name: 'Chyornaya Peschera Cave Entrance',
        mission: 'Operation Snake Eater',
        index: 17,
    },
    { name: 'Ponizovje South', mission: 'Operation Snake Eater', index: 18 },
    { name: 'Ponizovje West', mission: 'Operation Snake Eater', index: 19 },
    {
        name: 'Ponizovje Warehouse Docks',
        mission: 'Operation Snake Eater',
        index: 20,
    },
    {
        name: 'Ponizovje Warehouse',
        mission: 'Operation Snake Eater',
        index: 21,
    },
    {
        name: 'Graniny Gorki South',
        mission: 'Operation Snake Eater',
        index: 22,
    },
    {
        name: 'Graniny Gorki Exterior: Outside Walls',
        mission: 'Operation Snake Eater',
        index: 23,
    },
    {
        name: 'Graniny Gorki Exterior: Inside Walls',
        mission: 'Operation Snake Eater',
        index: 24,
    },
    {
        name: 'Graniny Gorki Lab F1',
        mission: 'Operation Snake Eater',
        index: 25,
    },
    {
        name: 'Graniny Gorki Lab B1 East',
        mission: 'Operation Snake Eater',
        index: 26,
    },
    {
        name: 'Graniny Gorki Lab B1 West',
        mission: 'Operation Snake Eater',
        index: 27,
    },
    { name: 'Svyatogornyj South', mission: 'Operation Snake Eater', index: 28 },
    { name: 'Svyatogornyj West', mission: 'Operation Snake Eater', index: 29 },
    { name: 'Svyatogornyj East', mission: 'Operation Snake Eater', index: 30 },
    { name: 'Sokrovenno South', mission: 'Operation Snake Eater', index: 31 },
    { name: 'Sokrovenno North', mission: 'Operation Snake Eater', index: 32 },
    { name: 'Sokrovenno West', mission: 'Operation Snake Eater', index: 33 },
    { name: 'Krasnogorje Tunnel', mission: 'Operation Snake Eater', index: 34 },
    {
        name: 'Krasnogorje Mountain Base',
        mission: 'Operation Snake Eater',
        index: 35,
    },
    {
        name: 'Krasnogorje Mountainside',
        mission: 'Operation Snake Eater',
        index: 36,
    },
    {
        name: 'Krasnogorje Mountaintop',
        mission: 'Operation Snake Eater',
        index: 37,
    },
    {
        name: 'Krasnogorje Mountaintop: Behind Ruins',
        mission: 'Operation Snake Eater',
        index: 38,
    },
    {
        name: 'Krasnogorje Mountaintop Ruins',
        mission: 'Operation Snake Eater',
        index: 39,
    },
    {
        name: 'Groznyj Grad Underground Tunnel',
        confirmed: true,
        mission: 'Operation Snake Eater',
        index: 40,
    },
    {
        name: 'Groznyj Grad Southwest',
        mission: 'Operation Snake Eater',
        index: 41,
    },
    {
        name: 'Groznyj Grad Northwest',
        mission: 'Operation Snake Eater',
        index: 42,
    },
    {
        name: 'Groznyj Grad Southeast',
        mission: 'Operation Snake Eater',
        index: 43,
    },
    { name: 'Groznyj Grad Jail', mission: 'Operation Snake Eater', index: 44 },
    {
        name: 'Groznyj Grad Northeast',
        mission: 'Operation Snake Eater',
        index: 45,
    },
    {
        name: 'Groznyj Grad Weapons Lab: East Wing',
        mission: 'Operation Snake Eater',
        index: 46,
    },
    {
        name: 'Groznyj Grad Weapons Lab: West Wing Corridor',
        mission: 'Operation Snake Eater',
        index: 47,
    },
    { name: 'Tikhogornyj', mission: 'Operation Snake Eater', index: 48 },
    {
        name: 'Tikhogornyj: Behind Waterfall',
        mission: 'Operation Snake Eater',
        index: 49,
    },
    {
        name: 'Groznyj Grad Weapons Lab: Main Wing Hangar',
        mission: 'Operation Snake Eater',
        index: 50,
    },
    { name: 'Groznyj Grad B1F', mission: 'Operation Snake Eater', index: 51 },
    { name: 'Groznyj Grad', mission: 'Operation Snake Eater', index: 52 },
    {
        name: 'Groznyj Grad Runway South',
        mission: 'Operation Snake Eater',
        index: 53,
    },
    {
        name: 'Groznyj Grad Runway',
        mission: 'Operation Snake Eater',
        index: 54,
    },
    {
        name: 'Groznyj Grad Runway 2nd Area',
        mission: 'Operation Snake Eater',
        index: 55,
    },
    {
        name: 'Groznyj Grad Rail Bridge - C3',
        mission: 'Operation Snake Eater',
        index: 56,
    },
    {
        name: 'Groznyj Grad Rail Bridge - Boss Fight',
        mission: 'Operation Snake Eater',
        index: 57,
    },
    {
        name: 'Groznyj Grad Rail Bridge North',
        mission: 'Operation Snake Eater',
        index: 58,
    },
    { name: 'Lazorevo South', mission: 'Operation Snake Eater', index: 59 },
    { name: 'Lazorevo North', mission: 'Operation Snake Eater', index: 60 },
    { name: 'Zaozyorje West', mission: 'Operation Snake Eater', index: 61 },
    { name: 'Zaozyorje East', mission: 'Operation Snake Eater', index: 62 },
    { name: 'Rokovoj Bereg', mission: 'Operation Snake Eater', index: 63 },
];
