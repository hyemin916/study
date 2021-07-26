interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): void;
}

class Item {
  constructor(public value: string, public next: Item | null) {
    this.value = value;
  }
  getNext(): Item {
    if (!this.next) {
      throw Error("can't find next item");
    }
    return this.next;
  }
}

class StackMaker implements Stack {
  private head: Item | null = null;

  constructor(readonly size: number) {}

  push(value: string) {
    const item = new Item(value, this.head);
    this.head = item;
  }

  pop() {
    const top = this.head;
    if (!top) {
      throw Error('no item');
    }
    this.head = top.getNext();
    top.next = null;
    let item: Item | null = this.head;
    while (item) {
      console.log(item.value);
      item = item.next;
    }
  }
}

const stack = new StackMaker(5);
stack.push('hello');
stack.push('world');
stack.push('hi');
stack.pop();
