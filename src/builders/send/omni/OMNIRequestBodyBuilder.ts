import { Destination } from "../../../interfaces/send/omni/Destination";
import { MessageFlow } from "../../../interfaces/send/omni/MessageFlow";
import { OMNIRequestBody } from "../../../interfaces/send/omni/OMNIRequestBody";

export class OMNIRequestBodyBuilder {
    private omniRequestBody: Partial<OMNIRequestBody> = {};

    /** 수신 정보 리스트 설정 (최대 10개) */
    setDestinations(destinations: Array<Destination>): this {
        this.omniRequestBody.destinations = destinations;
        return this;
    }

    /** 메시지 정보 리스트 설정 */
    setMessageFlow(messageFlow?: MessageFlow[]): this {
        this.omniRequestBody.messageFlow = messageFlow;
        return this;
    }

    /** 메시지 폼 ID 설정 */
    setMessageForm(messageForm?: string): this {
        this.omniRequestBody.messageForm = messageForm;
        return this;
    }

    /** 정산용 부서코드 설정 (최대 20자) */
    setPaymentCode(paymentCode?: string): this {
        this.omniRequestBody.paymentCode = paymentCode;
        return this;
    }

    /** 참조 필드 설정 (선택 사항) */
    setRef(ref?: string): this {
        this.omniRequestBody.ref = ref;
        return this;
    }

    /** OMNIRequestBody 객체 생성 */
    build(): OMNIRequestBody {
        return this.omniRequestBody as OMNIRequestBody;
    }
}
