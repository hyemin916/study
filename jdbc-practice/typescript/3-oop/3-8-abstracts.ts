{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  abstract class CoffeeMachine implements CoffeeMaker {
    //오브젝트 생성 X
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('values for beans should be greater than 0'); // 에러 메시지 친절할수록 good
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log('cleaning the machine..');
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }
    private preheat() {
      console.log('heating up...🔥');
    }
    protected abstract extract(shots: number): CoffeeCup; // 클래스마다 달라야 하는 기능

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans); // 어떤 데이터 받아와야하는지 경고문 뜸
    }
    private steamMilk() {
      console.log('Steaming some milk... 🥛');
    }
    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  class SweatCoffeeMaker extends CoffeeMachine {
    protected extract(shots: number): CoffeeCup {
      return {
        shots,
        hasSugar: true,
      };
    }
  }

  const machines: CoffeeMaker[] = [
    new CaffeLatteMachine(16, '1'),
    new SweatCoffeeMaker(16),
    new CaffeLatteMachine(16, '1'),
    new SweatCoffeeMaker(16),
  ];

  machines.forEach((machine) => {
    console.log('---------------');
    machine.makeCoffee(1);
  });
}
