import { ItemList } from "../../../../interfaces/send/kakao/Friendtalk/Friendtalk";

export class FriendtalkItemListBuilder {
    private itemList: Partial<ItemList> = {};

    /** 아이템 제목 */
    setTitle(title: string): this {
        this.itemList.title = title;
        return this;
    }

    /** 아이템 이미지 URL */
    setImgUrl(imgUrl: string): this {
        this.itemList.imgUrl = imgUrl;
        return this;
    }

    /** mobile android 환경에서 이미지 클릭 시 실행할 application custom scheme */
    setSchemeAndroid(schemeAndroid?: string): this {
        this.itemList.schemeAndroid = schemeAndroid;
        return this;
    }

    /** mobile ios 환경에서 이미지 클릭 시 실행할 application custom scheme */
    setSchemeIos(schemeIos?: string): this {
        this.itemList.schemeIos = schemeIos;
        return this;
    }

    /** mobile 환경에서 이미지 클릭 시 이동할 url */
    setUrlMobile(urlMobile: string): this {
        this.itemList.urlMobile = urlMobile;
        return this;
    }

    /** pc 환경에서 이미지 클릭 시 이동할 url */
    setUrlPc(urlPc: string): this {
        this.itemList.urlPc = urlPc;
        return this;
    }

    build(): ItemList {
        return this.itemList as ItemList;
    }
}
