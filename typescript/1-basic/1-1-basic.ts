{
  // JavaScript
  // old: var π©
  var age = 5;
  age = 1;

  // let es6
  let name = "hello";
  name = "hi";

  // const
  const age = 5;
  age = 5; //β
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
  let name: undefined; // π©
  let age: number | undefined; //λ³΄νΈμ μΌλ‘ λ§μ΄ μ
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null; // π©
  let person2: string | null;

  // unknown π©
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  // any π©
  let anything: any = 0;
  anything = "hello";

  // void - μλ΅ κ°λ₯. κ°μ΄λμ λ§κ² λ°λΌκ°κΈ°.
  function print(): void {
    console.log("hello");
    return; // μλ¬΄ κ°λ λ¦¬ν΄νμ§ μμ
  }
  let unusable: void = undefined; // π©

  // never
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    while (true) {}
  }
  let neverEnding: never; // π©

  // object
  let obj: object; // π© λͺννμ§ μμ
  function accetSomeObject(obj: object) {}
  accetSomeObject({ name: "min" });
  accetSomeObject({ animal: "cat" });
}
