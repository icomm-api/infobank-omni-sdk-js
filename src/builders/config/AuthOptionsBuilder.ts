import { AuthOptions } from "../../interfaces/config/Config";

/**
 * 클래스: AuthOptionsBuilder
 * 설명: OMNI API 인증을 위한 AuthOption 빌더 클래스입니다.
 */
export class AuthOptionsBuilder {
    private authOptions: Partial<AuthOptions> = {};

    /** */
    setBaseURL(baseURL: string): this {
        this.authOptions.baseURL = baseURL;
        return this;
    }

    setId(id?: string): this {
        this.authOptions.id = id;
        return this;
    }

    setPassword(password?: string): this {
        this.authOptions.password = password;
        return this;
    }

    build(): AuthOptions {
        return this.authOptions as AuthOptions;
    }
}
