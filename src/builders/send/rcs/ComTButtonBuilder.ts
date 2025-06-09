import { ComTButton } from "../../../interfaces/send/rcs/RCSContent";

/**
 * 클래스: ComTButtonBuilder
 * 설명: 대화방 열기 (문자) 메시지 App을 실행합니다. (COM_T)
 */
export class ComTButtonBuilder {
  private button: Partial<ComTButton> = { type: 'COM_T' };

  /** 버튼 명 */
  setName(name: string): this {
    this.button.name = name;
    return this;
  }

  /** 대화방의 수신자 번호  */
  setPhoneNumber(phoneNumber: string): this {
    this.button.phoneNumber = phoneNumber;
    return this;
  }

  /** 내용 */
  setText(text: string): this {
    this.button.text = text;
    return this;
  }

  build(): ComTButton {
    return this.button as ComTButton;
  }
}
