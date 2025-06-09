import { ItemList } from "../../../../interfaces/send/kakao/Alimtalk/Alimtalk";

export class AlimtalkItemListBuilder {
    private itemList: Partial<ItemList> = {};

    /** 알림톡 아이템 리스트 타이틀  */
    setTitle(title: string): this {
        if (title.length > 6) {
            throw new Error('Title length exceeds the maximum limit of 6 characters.');
        }
        this.itemList.title = title;
        return this;
    }

    /** 알림톡 아이템 리스트 부가정보 */
    setDescription(description: string): this {
        this.itemList.description = description;
        return this;
    }

    build(): ItemList {
        return this.itemList as ItemList;
    }
}
