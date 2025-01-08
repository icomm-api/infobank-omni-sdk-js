import { MapSendButton } from "../../../interfaces/send/rcs/RCSContent";

/**
 * 클래스: MapSendButtonBuilder
 * 설명: 휴대폰의 현재 위치 정보를 전송합니다. (MAP_SEND)
 */
export class MapSendButtonBuilder {
  private button: Partial<MapSendButton> = { type: 'MAP_SEND' };

  /** 버튼 명 */
  setName(name: string): this {
    this.button.name = name;
    return this;
  }

  build(): MapSendButton {
    return this.button as MapSendButton;
  }
}
