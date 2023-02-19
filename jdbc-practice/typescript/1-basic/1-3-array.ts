{
  // Array
  const fruits: string[] = ["🍎", "🍌"];
  const scores: Array<number> = [1, 3, 4]; //Generic
  function printArray(fruits: readonly string[]) {}

  // Tuple -> interface, type alias, class로 대체
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;
}
