{
// Java: Exception
// JavaScript: Error

const position = {
  x: 0,
  y: 0,
};


function move(direction: 'up' | 'down' | 'left' | 'right' | 'he') {
  switch (direction) {
    case 'up': {
      position.y += 1;
      break;
    }
    case 'down': {
      position.y -= 1;
      break;
    }
    case 'left': {
      position.x -= 1;
      break;
    }
    case 'right': {
      position.x += 1;
      break;
    }
    case 'he': {
      position.x += 1;
      break;
    }
    default: {
      const invalid: never = direction; //컴파일 단계에서 에러 감지하기 위해
      throw Error(`unknown direction: ${invalid}}`);
    }
  }
}

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
  if(fileName === 'not exist!') {
    throw new Error(`file not exist! ${fileName}`); // Error 메시지는 가능한 상세히
  }
  return 'file contents';
}

function closeFile(fileName: string) {
  //
}

const fileName = 'not exist!';

function run() {
  try {
    console.log(readFile(fileName));
  } catch (error) {
    console.log(`catched!!`);
    return;
  } finally {
    closeFile(fileName);
    console.log(`finally!!`)
  }
}

run();

}
