export interface Person {
  name: string;
  id: string;
  hair_color: string;
  skin_color: string;
  gender: string;
  eye_color: string;
  birth_year: string;
}

export const people: Person[] = [
  {
    name: 'Ben Kenobi',
    id: '1',
    hair_color: 'blond',
    skin_color: 'fair',
    gender: 'male',
    eye_color: 'blue',
    birth_year: '19BBY'
  },
  {
    name: 'Luke Skywalker',
    id: '2',
    hair_color: 'gold',
    skin_color: 'yellow',
    gender: 'male',
    eye_color: 'yellow',
    birth_year: '112BBY'
  },
  {
    name: 'R2-D2',
    id: '3',
    hair_color: 'red',
    skin_color: 'white',
    gender: 'n/a',
    eye_color: 'red',
    birth_year: '33BBY'
  },
  {
    name: 'Darth Vader',
    id: '4',
    hair_color: 'brown',
    skin_color: 'light',
    gender: 'female',
    eye_color: 'yellow',
    birth_year: '41.9BBY'
  },
  {
    name: 'Leia Organa',
    id: '5',
    hair_color: 'brown',
    skin_color: 'light',
    gender: 'female',
    eye_color: 'brown',
    birth_year: '19BBY'
  },
  {
    name: 'Owen Lars',
    id: '6',
    hair_color: 'blond',
    skin_color: 'light',
    gender: 'female',
    eye_color: 'blue',
    birth_year: '52BBY'
  }
];
