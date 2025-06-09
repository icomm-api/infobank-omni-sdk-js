import { DefaultOptions } from "../../interfaces/config/Config";

/**
 * 클래스: DefaultOptionsBuilder
 * 설명: OMNI API 사용을 위한 DefaultOption 빌더 클래스입니다.
 */
export class DefaultOptionsBuilder {
    private defaultOptions: Partial<DefaultOptions> = {};

    setBaseURL(baseURL: string): this {
        this.defaultOptions.baseURL = baseURL;
        return this;
    }

    setToken(token?: string): this {
        this.defaultOptions.token = token;
        return this;
    }

    build(): DefaultOptions {
        return this.defaultOptions as DefaultOptions;
    }
}
