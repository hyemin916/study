{
  /**
   * Type Assertions ๐ฉ
   */

  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();
  //string API ์ธ์ ์์

  (result as string).length;
  <string>result.length;

  console.log((result as string).length); //undefined

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // error๐ฑ

  function findNumber(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumber()!;
  numbers!.push(2); // ๐จ

  const button = document.querySelector('class')!;
}
