import { SMS } from "../../send/sms/SMS" 
import { MMS } from "../../send/mms/MMS" 
import { RCS } from "../../send/rcs/RCS" 
import { Alimtalk } from "../../send/kakao/Alimtalk/Alimtalk" 
import { Friendtalk } from "../../send/kakao/Friendtalk/Friendtalk" 

 
 
 /**
   * Interface: MessageForm
   * Description: 메시지 form 구조를 나타냅니다.
   */
  export interface MessageForm {
    /** SMS 메시지 세부 사항 */
    sms?: SMS;
    /** MMS 메시지 세부 사항 */
    mms?: MMS;
    /** RCS 메시지 세부 사항 */
    rcs?: RCS;
    /** 카카오 알림톡 메시지 세부 사항  */
    alimtalk?: Alimtalk;
    /** 카카오 친구톡 메시지 세부 사항 */
    friendtalk?: Friendtalk;
  }