import { CalendarButton } from "../../../interfaces/send/rcs/RCSContent";



/**
 * 클래스: CalendarButtonBuilder
 * 설명: 정해진 일자와 내용으로 일정을 등록합니다. (CALENDAR)
 */
export class CalendarButtonBuilder {
  private button: Partial<CalendarButton> = { type: 'CALENDAR' };

  /** 버튼 명 */
  setName(name: string): this {
    this.button.name = name;
    return this;
  }

  /** 시작 일정(yyyy-MM-dd’T’HH:mm:ssXXX) */
  setStartTime(startTime: string): this {
    this.button.startTime = startTime;
    return this;
  }

  /** 종료 일정(yyyy-MM-dd’T’HH:mm:ssXXX) */
  setEndTime(endTime: string): this {
    this.button.endTime = endTime;
    return this;
  }

  /** 일정 제목 */
  setTitle(title: string): this {
    this.button.title = title;
    return this;
  }

  /** 일정 내용 */
  setDescription(description: string): this {
    this.button.description = description;
    return this;
  }


  build(): CalendarButton {
    return this.button as CalendarButton;
  }
}
