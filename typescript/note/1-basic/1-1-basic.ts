{
  // JavaScript
  // old: var 💩
  var age = 5;
  age = 1;

  // let es6
  let name = "hello";
  name = "hi";

  // const
  const age = 5;
  age = 5; //❌
}
{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array...
   */

  // TypeScript

  // number
  const num: number = -6;

  // string
  const str: string = "hello";

  // boolean
  const boal: boolean = true;

  // undefined
  let name: undefined; // 💩
  let age: number | undefined; //보편적으로 많이 씀
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null; // 💩
  let person2: string | null;

  // unknown 💩
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  // any 💩
  let anything: any = 0;
  anything = "hello";

  // void - 생략 가능. 가이드에 맞게 따라가기.
  function print(): void {
    console.log("hello");
    return; // 아무 값도 리턴하지 않음
  }
  let unusable: void = undefined; // 💩

  // never
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    while (true) {}
  }
  let neverEnding: never; // 💩

  // object
  let obj: object; // 💩 명확하지 않음
  function accetSomeObject(obj: object) {}
  accetSomeObject({ name: "min" });
  accetSomeObject({ animal: "cat" });
}
