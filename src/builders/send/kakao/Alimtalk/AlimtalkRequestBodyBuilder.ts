import { FallbackMessage } from "../../../../interfaces/send/FallbackMessage";
import { AlimtalkRequestBody } from "../../../../interfaces/send/kakao/Alimtalk/AlimtalkRequestBody";
import { KakaoButton } from "../../../../interfaces/send/kakao/KakaoButton";

export class AlimtalkRequestBodyBuilder {
    private alimtalkRequestBody: Partial<AlimtalkRequestBody> = {};

    /** 카카오 비즈메시지 발신 프로필 키 설정 */
    setSenderKey(senderKey: string): this {
        this.alimtalkRequestBody.senderKey = senderKey;
        return this;
    }

    /** 카카오 알림톡메시지타입 설정 */
    setMsgType(msgType: string): this {
        this.alimtalkRequestBody.msgType = msgType;
        return this;
    }

    /** 수신번호 설정 */
    setTo(to: string): this {
        this.alimtalkRequestBody.to = to;
        return this;
    }

    /** 알림톡 템플릿 코드 설정 */
    setTemplateCode(templateCode: string): this {
        this.alimtalkRequestBody.templateCode = templateCode;
        return this;
    }

    /** 알림톡 내용 설정 */
    setText(text: string): this {
        this.alimtalkRequestBody.text = text;
        return this;
    }

    /** 카카오 버튼 정보 설정 (최대 5개) */
    setButton(button?: KakaoButton[]): this {
        if (button && button.length > 5) {
            throw new Error('You can only add up to 5 buttons.');
        }
        this.alimtalkRequestBody.button = button;
        return this;
    }

    /** 참조필드 설정 (최대 200자, 선택 사항) */
    setRef(ref?: string): this {
        if (ref && ref.length > 200) {
            throw new Error('Ref length exceeds the maximum limit of 200 characters.');
        }
        this.alimtalkRequestBody.ref = ref;
        return this;
    }

    /** 실패 시 전송될 Fallback 메시지 정보 설정 (선택 사항) */
    setFallback(fallback?: FallbackMessage): this {
        this.alimtalkRequestBody.fallback = fallback;
        return this;
    }

    /** AlimtalkRequestBody 객체 생성 */
    build(): AlimtalkRequestBody {
        return this.alimtalkRequestBody as AlimtalkRequestBody;
    }
}
