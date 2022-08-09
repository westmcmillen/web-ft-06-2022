// Birds, Cows, Dogs, Cats

type Mammal = {
  readonly legs: number;
  name: string;
  weight: 25 | 300;
  hair: boolean;
};

type Bird = {
  readonly legs: 2;
  name: string;
  weight: 3 | 10;
  feathers: boolean;
};

type Animal = Mammal | Bird;

const eagle: Animal = {
  legs: 2,
  name: "Bald Eagle",
  weight: 3,
  feathers: true,
};

const rhino: Animal = {
  legs: 8,
  name: "Big Rhino",
  weight: 300,
  hair: false,
};
