// flatted 사용
import { stringify } from 'flatted';

export function toJSON(json: object): string {
    return stringify(json);
}