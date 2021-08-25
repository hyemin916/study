{
  /**
   * Type Inference
   */

  let text = 'hello'; // 선언할 때 자동으로 타입 유추
  text = 1; // error

  function print(message = 'hello') {
    //기본값 명시하면 타입 유추
    console.log(message);
  }
  print('hello');
  print(1);

  function add(x: number, y: number) {
    return x + y;
  } //결과값 타입 숫자로 추론

  const result = add(1, 2); //타입 숫자로 추론
}
