import { OMNIOptions } from "../../interfaces/config/Config";


/**
 * 클래스: OMNIOptionsBuilder
 * 설명: OMNI API 인증 및 사용을 위한 OMNIOption 빌더 클래스입니다.
 */
export class OMNIOptionsBuilder {
    private omniOptions: Partial<OMNIOptions> = {};

    setBaseURL(baseURL: string): this {
        this.omniOptions.baseURL = baseURL;
        return this;
    }

    setId(id?: string): this {
        this.omniOptions.id = id;
        return this;
    }

    setPassword(password?: string): this {
        this.omniOptions.password = password;
        return this;
    }

    setToken(token?: string): this {
        this.omniOptions.token = token;
        return this;
    }

    build(): OMNIOptions {
        return this.omniOptions as OMNIOptions;
    }
}
