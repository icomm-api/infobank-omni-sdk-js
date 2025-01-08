import { FallbackMessage } from "../../interfaces/send/FallbackMessage";

/**
 * 클래스: SMSRequestBodyBuilder
 * 설명: SMSRequestBody 객체 생성을 위한 빌더 클래스입니다.
 */
export class FallbackBuilder {
    private fallback: Partial<FallbackMessage> = {};
  
    public setType(type: string): this {
      this.fallback.type = type;
      return this;
    }

    public setFrom(type: string): this {
        this.fallback.from = type;
        return this;
      }
  
    public setText(text: string): this {
      this.fallback.text = text;
      return this;
    }
  
    public setTitle(title?: string): this {
      this.fallback.title = title;
      return this;
    }
  
    public setFileKey(fileKey?: string[]): this {
      this.fallback.fileKey = fileKey;
      return this;
    }
  
    public setOriginCID(originCID?: string): this {
      this.fallback.originCID = originCID;
      return this;
    }
  
    public build(): FallbackMessage {
      return this.fallback as FallbackMessage;
    }
  }
  