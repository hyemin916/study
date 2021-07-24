{
  /**
   * Type Assertions 💩
   */

  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();
  //string API 쓸수 없음

  (result as string).length;
  <string>result.length;

  console.log((result as string).length); //undefined

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // error😱

  function findNumber(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumber()!;
  numbers!.push(2); // 😨

  const button = document.querySelector('class')!;
}
