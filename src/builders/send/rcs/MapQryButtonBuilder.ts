import { MapQryButton } from "../../../interfaces/send/rcs/RCSContent";


/**
 * 클래스: MapQryButtonBuilder
 * 설명: 검색어를 통해 조회된 지도 App을 실행합니다. (MAP_QRY)
 */
export class MapQryButtonBuilder {
  private button: Partial<MapQryButton> = { type: 'MAP_QRY' };

  /** 버튼 명 */
  setName(name: string): this {
    this.button.name = name;
    return this;
  }

  /** 지도 App에서 검색할 구문 */
  setQuery(query: string): this {
    this.button.query = query;
    return this;
  }

  /** 지도 App동작이 안 될 경우 대처할 URL */
  setFallbackUrl(fallbackUrl: string): this {
    this.button.fallbackUrl = fallbackUrl;
    return this;
  }

  build(): MapQryButton {
    return this.button as MapQryButton;
  }
}
