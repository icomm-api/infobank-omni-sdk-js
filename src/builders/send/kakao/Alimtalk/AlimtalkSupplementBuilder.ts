import { QuickReply, Supplement } from "../../../../interfaces/send/kakao/Alimtalk/Alimtalk";

export class AlimtalkSupplementBuilder {
    private supplement: Partial<Supplement> = {};
    
    /** 바로연결 정보  */
    setQuickReply(quickReply?: QuickReply[]): this {
        this.supplement.quickReply = quickReply;
        return this;
    }

    build(): Supplement {
        return this.supplement as Supplement;
    }
}
