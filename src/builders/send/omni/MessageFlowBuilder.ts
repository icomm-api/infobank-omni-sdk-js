
import { Alimtalk } from "../../../interfaces/send/kakao/Alimtalk/Alimtalk";
import { Friendtalk } from "../../../interfaces/send/kakao/Friendtalk/Friendtalk";
import { MMS } from "../../../interfaces/send/mms/MMS";
import { MessageFlow } from "../../../interfaces/send/omni/MessageFlow";
import { RCS } from "../../../interfaces/send/rcs/RCS";
import { SMS } from "../../../interfaces/send/sms/SMS";

export class MessageFlowBuilder {
    private messageFlow: Partial<MessageFlow>[] = [];

   /** SMS 메시지 세부 사항 설정 (선택 사항) */
   setSMS(sms?: SMS): this {
    if (sms) {
        this.messageFlow.push({ sms });
    }
    return this;
}

/** MMS 메시지 세부 사항 설정 (선택 사항) */
setMMS(mms?: MMS): this {
    if (mms) {
        this.messageFlow.push({ mms });
    }
    return this;
}

/** RCS 메시지 세부 사항 설정 (선택 사항) */
setRCS(rcs?: RCS): this {
    if (rcs) {
        this.messageFlow.push({ rcs });
    }
    return this;
}

/** 카카오 알림톡 메시지 세부 사항 설정 (선택 사항) */
setAlimtalk(alimtalk?: Alimtalk): this {
    if (alimtalk) {
        this.messageFlow.push({ alimtalk });
    }
    return this;
}

/** 카카오 친구톡 메시지 세부 사항 설정 (선택 사항) */
setFriendtalk(friendtalk?: Friendtalk): this {
    if (friendtalk) {
        this.messageFlow.push({ friendtalk });
    }
    return this;
}

/** MessageForm 배열 생성 */
build(): Partial<MessageFlow>[] {
    return this.messageFlow;
}
}
