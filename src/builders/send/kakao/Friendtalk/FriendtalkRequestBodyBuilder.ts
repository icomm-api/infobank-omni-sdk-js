import { FallbackMessage } from "../../../../interfaces/send/FallbackMessage";
import { FriendtalkRequestBody } from "../../../../interfaces/send/kakao/Friendtalk/FriendtalkRequestBody";
import { KakaoButton } from "../../../../interfaces/send/kakao/KakaoButton";

export class FriendtalkRequestBodyBuilder {
    private friendtalkRequestBody: Partial<FriendtalkRequestBody> = {};

    /** 카카오 비즈메시지 발신 프로필 키 설정 */
    setSenderKey(senderKey: string): this {
        this.friendtalkRequestBody.senderKey = senderKey;
        return this;
    }

    /** 카카오 친구톡 메시지타입 설정 */
    setMsgType(msgType: string): this {
        this.friendtalkRequestBody.msgType = msgType;
        return this;
    }

    /** 수신번호 설정 */
    setTo(to: string): this {
        this.friendtalkRequestBody.to = to;
        return this;
    }

    /** 친구톡 내용 설정 (최대 90자) */
    setText(text: string): this {
        if (text.length > 90) {
            throw new Error('Text length exceeds the maximum limit of 90 characters.');
        }
        this.friendtalkRequestBody.text = text;
        return this;
    }

    /** 친구톡 이미지 URL 설정 */
    setImgUrl(imgUrl?: string): this {
        this.friendtalkRequestBody.imgUrl = imgUrl;
        return this;
    }

    /** 친구톡 버튼정보 설정 */
    setButton(button?: KakaoButton[]): this {
        this.friendtalkRequestBody.button = button;
        return this;
    }

    /** 참조필드 설정 (최대 200자) */
    setRef(ref?: string): this {
        if (ref && ref.length > 200) {
            throw new Error('Ref length exceeds the maximum limit of 200 characters.');
        }
        this.friendtalkRequestBody.ref = ref;
        return this;
    }

    /** 실패 시 전송될 Fallback 메시지 정보 설정 */
    setFallback(fallback?: FallbackMessage): this {
        this.friendtalkRequestBody.fallback = fallback;
        return this;
    }

    /** FriendtalkRequestBody 객체 생성 */
    build(): FriendtalkRequestBody {
        return this.friendtalkRequestBody as FriendtalkRequestBody;
    }
}
