import { CopyButton } from "../../../interfaces/send/rcs/RCSContent";


/**
 * 클래스: CopyButtonBuilder
 * 설명: 지정된 내용을 클립보드로 복사합니다. (COPY)
 */
export class CopyButtonBuilder {
  private button: Partial<CopyButton> = { type: 'COPY' };

   /** 버튼 명 */
  setName(name: string): this {
    this.button.name = name;
    return this;
  }

  /** 클립보드로 복사될 내용 */
  setText(text: string): this {
    this.button.text = text;
    return this;
  }

  build(): CopyButton {
    return this.button as CopyButton;
  }
}
