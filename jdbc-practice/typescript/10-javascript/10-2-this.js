console.log(this); // window

function simpleFunc() {
  console.log(this); // window
}
window.simpleFunc();

class Counter {
  count = 0;
  increase = () => { // 바인드 필요없음
    console.log(this);
  }
}

const counter = new Counter();
counter.increase(); // Counter
//const caller = counter.increase;
// caller(); // undefined


const caller = counter.increase.bind(counter);
caller(); // Counter


class Bob {}

const bob = new Bob();
bob.run = counter.increase;
bob.run(); // Bob
