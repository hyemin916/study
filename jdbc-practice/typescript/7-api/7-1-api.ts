Array;

class Animal {};
class Cat extends Animal {
  isCat: boolean = true;
}
class Dog extends Animal {
  isDog: boolean = false;
}
const animals: Animal[] = [ new Cat(), new Cat(), new Dog() ];
function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isCat !== undefined;
}
console.log(animals.every<Cat>(isCat));
