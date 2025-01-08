import { MessageForm } from "../../../interfaces/registration/form/MessageForm";
import { Alimtalk } from "../../../interfaces/send/kakao/Alimtalk/Alimtalk";
import { Friendtalk } from "../../../interfaces/send/kakao/Friendtalk/Friendtalk";
import { MMS } from "../../../interfaces/send/mms/MMS";
import { RCS } from "../../../interfaces/send/rcs/RCS";
import { SMS } from "../../../interfaces/send/sms/SMS";

export class MessageFormBuilder {
    private messageForm: Partial<MessageForm>[] = [];

    /** SMS 메시지 세부 사항 설정 (선택 사항) */
    setSMS(sms?: SMS): this {
        if (sms) {
            this.messageForm.push({ sms });
        }
        return this;
    }

    /** MMS 메시지 세부 사항 설정 (선택 사항) */
    setMMS(mms?: MMS): this {
        if (mms) {
            this.messageForm.push({ mms });
        }
        return this;
    }

    /** RCS 메시지 세부 사항 설정 (선택 사항) */
    setRCS(rcs?: RCS): this {
        if (rcs) {
            this.messageForm.push({ rcs });
        }
        return this;
    }

    /** 카카오 알림톡 메시지 세부 사항 설정 (선택 사항) */
    setAlimtalk(alimtalk?: Alimtalk): this {
        if (alimtalk) {
            this.messageForm.push({ alimtalk });
        }
        return this;
    }

    /** 카카오 친구톡 메시지 세부 사항 설정 (선택 사항) */
    setFriendtalk(friendtalk?: Friendtalk): this {
        if (friendtalk) {
            this.messageForm.push({ friendtalk });
        }
        return this;
    }

    /** MessageForm 배열 생성 */
    build(): Partial<MessageForm>[] {
        return this.messageForm;
    }
}
