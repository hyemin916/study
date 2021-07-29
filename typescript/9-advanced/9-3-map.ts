{
type Video = {
  title: string;
  author: string;
};
// [1, 2].map(item => item * item); // [1, 4]

type Optional<T> = {
  [P in keyof T]?: T[P]; // for.. in
}

type ReadOnly<T> = {
  readonly [p in keyof T]: T[p];
}
type VideoOptional = Optional<Video>;

type Animal =  {
  name: string;
  age: number;
}

const animal: Optional<Animal> = {
  name: 'hi',
};
animal.name = 'hyemin';

const video: ReadOnly<Video> = {
  title: 'hi',
  author: 'hyemin',
};

// type VideoOptional = {
//   title?: string;
//   author?: string;
//   description?: string
// }

// type VideoReadOnly = {
//   readonly title: string;
//   readonly author: string;
//   readonly description: string;
// }

type Nullable<T> = { [P in keyof T]: T[p] | null };
const obj2: Nullable<Video> = {
  title: null,
  author: null,
};

type Proxy<T> = {
  get(): T;
  set(value: T): void;
};

type Proxify<T> = {
  [P in keyof T]: Proxy<T[P]>; // Proxy라는 타입으로 한단계 감쌈
};
}
