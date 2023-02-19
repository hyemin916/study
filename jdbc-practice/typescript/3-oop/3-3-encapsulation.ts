{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public
  // private
  // protected : 자식 클래스에서 접근 가능
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    } // static함수로 class return하는 형식에선 private constructor

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('values for beans should be greater than 0'); // 에러 메시지 친절할수록 good
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }

      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = CoffeeMaker.makeMachine(40);
  maker.fillCoffeeBeans(3);
  console.log(maker);
  /**
   * Getter와 Setter
   */
  class User {
    //접근할 때 멤버 변수에 접근하는 것처럼 작성해야함
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
      }
      this.internalAge = num;
    }
    constructor(private firstName: string, public lastName: string) {
      // 생성자에 접근 제어자 설정 -> 멤버 변수로 설정됨
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }

  const user = new User('Steve', 'Jobs');
  user.age = 6; // setter 호출 -> internalAge 업데이트
}
