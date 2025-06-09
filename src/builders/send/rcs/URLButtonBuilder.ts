import { URLButton } from "../../../interfaces/send/rcs/RCSContent";

/**
 * 클래스: URLButtonBuilder
 * 설명: Web page 또는 App으로 이동할 수 있습니다. (URL)
 */
export class URLButtonBuilder {
  private button: Partial<URLButton> = { type: 'URL' };

  /** 버튼 명 */
  setName(name: string): this {
    this.button.name = name;
    return this;
  }

  /** 웹브라우저로 연결할 URL주소 */
  setUrl(url: string): this {
    this.button.url = url;
    return this;
  }

  build(): URLButton {
    return this.button as URLButton;
  }
}
