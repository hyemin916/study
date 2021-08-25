{
  /**
   * JavaScript
   */
  const MAX_NUM = 6; //고정값 나타낼때 대문자
  const MAX_STUDENTS_PER_CLASS = 10; // 클래스당 들어가는 학생수

  //연관돼 있지만 묶을 수 있는 타입 X
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;

  //최대한 enum에 가깝게
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  /**
   * TypeScript
   */
  enum Days {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  console.log(Days.Monday); // 1
  let day = Days.Saturday;
  console.log(day); // 6
  day = Days.Tuesday;
  day = 10; // 😱

  // enum 대신 union
  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
  let dayOfWeek: DaysOfWeek = 'Monday';
  dayOfWeek = 'ellie'; // error
}
