{
  // Type Aliases
  type Text = string;
  const name: Text = "hyemin";
  const address: Text = "korea";
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "hyemin",
    age: 12,
  };

  type Boal = true;
  const inCat: Boal = true;

  // String Literal Types
  type Name = "name";
  let ellieName: Name;
  ellieName = "name";
  type JSON = "json";
  const json: JSON = "json";
}
