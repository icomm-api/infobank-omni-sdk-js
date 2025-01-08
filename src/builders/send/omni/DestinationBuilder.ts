import { Destination } from "../../../interfaces/send/omni/Destination";

export class DestinationBuilder {
    private destination: Partial<Destination> = {};

    /** 수신번호 설정 */
    setTo(to: string): this {
        this.destination.to = to;
        return this;
    }

    /** 치환 문구 설정 (JSON) */
    setReplaceWords(replaceWords?: object): this {
        this.destination.replaceWords = replaceWords;
        return this;
    }

    /** Destinations 객체 생성 */
    build(): Destination {
        return this.destination as Destination;
    }
}
