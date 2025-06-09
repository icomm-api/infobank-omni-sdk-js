import { Alimtalk } from "../kakao/Alimtalk/Alimtalk"
import { BrandMessage } from "../kakao/BrandMessage/BrandMessage"
import { Friendtalk } from "../kakao/Friendtalk/Friendtalk"
import { MMS } from "../mms/MMS"
import { RCS } from "../rcs/RCS"
import { SMS } from "../sms/SMS"

 
 
 /**
   * Interface: MessageForm
   * Description: 통합메세지(OMNI) MessageFlow 구조를 나타냅니다.
   */
  export interface MessageFlow {
    /** SMS 메시지 세부 사항 (선택 사항) */
    sms?: SMS;
    /** MMS 메시지 세부 사항 (선택 사항) */
    mms?: MMS;
    /** RCS 메시지 세부 사항 (선택 사항) */
    rcs?: RCS;
    /** 카카오 알림톡 메시지 세부 사항 (선택 사항) */
    alimtalk?: Alimtalk;
    /** 카카오 친구톡 메시지 세부 사항 (선택 사항) */
    friendtalk?: Friendtalk;
    /** 카카오 브랜드드 메시지 세부 사항 (선택 사항) */
    brandmessage?: BrandMessage;
  }