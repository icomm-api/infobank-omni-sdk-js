> [!WARNING]
> **이 SDK는 더 이상 유지보수되지 않습니다 (deprecated).**
> 이전 OMNI API(`omni.ibapi.kr`, ID/PW 토큰 인증) 기준 SDK입니다. 새 기능과 보안 수정은 비즈고 API(`mars.ibapi.kr`, API Key 인증) 기준의
> **[bizgo-sdk-comm-js](https://github.com/icomm-api/bizgo-sdk-comm-js)** 에서만 제공됩니다.
>
> - 설치: `npm install @bizgo/bizgo-sdk-comm-js@^1.2.0`
> - 옮기는 방법: 새 SDK README의 옮기기 안내 (API·인증 방식이 달라 코드 호환은 되지 않습니다)
> - 이 저장소는 더 이상 업데이트되지 않으며, 예제 코드는 새 API와 호환되지 않습니다.

# infobank-omni-sdk-js v1.1.0
---
[![SDK Documentation](https://img.shields.io/badge/SDK-Documentation-blue)]() [![Migration Guide](https://img.shields.io/badge/Migration-Guide-blue)]() [![API Reference](https://img.shields.io/badge/api-reference-blue.svg)]() [![Apache V2 License](https://img.shields.io/badge/license-Apache%20V2-blue.svg)]()


infobank omni api sdk JavaScript(TypeScript) 입니다.

builder 패턴으로 파라미터를 구성할 수 있으며, JSON 으로도 구성하여 전송할 수 있습니다.
node.js 와 next 환경에서 구동할 수 있으며 react 와 같은 front 환경에서는 CORS 가 발생할 수 있습니다.

바로가기 : 
- [OMNI API](https://infobank-guide.gitbook.io/omni_api)
- [시작하기](#시작하기-getting-started)
- [사용법](#사용법-usage)
  - [토큰 발급](#토큰-발급)
  - [파일 업로드](#파일-업로드)
    - [Node.js](#nodejs)
    - [Next.js](#nextjs)
  - [FORM 등록](#form-등록)
  - [전송](#전송)
    - [Node.js](#nodejs-1)
    - [Next.js](#nextjs-1)
  - [리포트](#리포트)
    - [Node.js](#nodejs-2)
    - [Next.js](#nextjs-2)
    - [Node.js](#nodejs-3)
    - [Next.js](#nextjs-3)
- [라이센스](#라이센스)
- [문의](#문의)

------------
## 시작하기 (Getting Started)

```bash
## 소스 설치


## 방법 1
npm i @infobank/infobank-omni-sdk-js

## 방법 2
## 받으신 소스 파일을 원하는 경로에 설치합니다.
C:/sdk/omni-sdk-js

## 받으신 소스를 빌드합니다.
npm i
npm run build

## 사용하실 프로젝트에 SDK 를 로컬 경로로 링크합니다.
npm install ./[다운로드한 SDK의 경로]


## 방법 3
## 직접 node_module 에 복사합니다.
cp -R ./[다운로드한 SDK의 경로] ./node_modules/omni-sdk-js

## 직접 node_module 에 이동합니다.
cd ./node_modules/omni-sdk-js

## 받으신 소스를 빌드합니다.
npm i 
npm run build

```


## 사용법 (Usage)

### 토큰 발급 

#### Node.js
```javascript
const { OMNI, OMNIOptionsBuilder } = require('omni-sdk-js');

async function main() {
    try {
        const option = new OMNIOptionsBuilder()
            .setBaseURL(baseURL)
            .setId(userId)
            .setPassword(userPassword)
            .build();
        
        const omni = new OMNI(option);
        
        const token = await omni.auth.getToken();
        console.log('Token:', token);

    } catch (error) {
        console.error('Error:', error);
    }
}
main();
```


#### Next.js
```javascript

import { NextResponse } from 'next/server';
import { OMNI, OMNIOptionsBuilder } from 'omni-sdk-js';

export async function POST() {
  try {
    const option = new OMNIOptionsBuilder()
            .setBaseURL(baseURL)
            .setId(userId)
            .setPassword(userPassword)
            .build();

    const omni = new OMNI(option);
    const response = await omni.auth?.getToken(); 
      
    return NextResponse.json(response);
  } catch {
    return NextResponse.json({ error: 'API 호출 실패' }, { status: 500 });
  }
}

```

### File 업로드 
#### Node.js
```javascript
const { OMNI, OMNIOptionsBuilder } = require('omni-sdk-js');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path'); 


const option = new OMNIOptionsBuilder()
  .setBaseURL(baseURL)
  .setToken(token)
  .build();

async function file() {
    try {
        const omni = new OMNI(option);
        
        const filePath = path.join(__dirname, './hqdefault.jpg');
        
        const formData = new FormData();
        formData.append('file', fs.createReadStream(filePath));
        
        const result = await omni.file.uploadFile({ serviceType: "MMS" }, formData);
        console.log('응답:', result);

    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
}

// 파일 업로드 함수 실행
file();

```


### FORM 등록 
#### Node.js
```javascript

const { OMNI, OMNIOptionsBuilder, SMSBuilder, SMSRequestBodyBuilder, MMSRequestBodyBuilder, FormRequestBodyBuilder, AlimtalkBuilder, MessageFormBuilder, OMNIRequestBodyBuilder } = require('omni-sdk-js');

const option = new OMNIOptionsBuilder()
.setBaseURL(baseURL)
.setToken(token)
.build();


async function formPost() {
    try {
        
        const omni = new OMNI(option);
        
        /* JSON을 사용하여 생성 */
        const req ={ 
            messageForm : [
              {
                alimtalk: {
                  msgType: "AT",
                  senderKey: "{senderKey}",
                  templateCode: "{templateCode}",
                  text: "[테스트] \n알림톡 내용"
                }
              },
              {
                sms: {
                  from: "0310000000",
                  text: "test form message"
                }
              }
            ]
        };

        /* Builder를 사용하여 생성 */
        const alimtalk = new AlimtalkBuilder().setMsgType("AT").setSenderKey("senderKey").setTemplateCode("templatCode").setText("[테스트] \n알림톡 내용").build();
        const sms = new SMSBuilder().setFrom("0310000000").setText("test").build();
          
        const messageForm = new MessageFormBuilder().setAlimtalk(alimtalk).setSMS(sms).build();
        const req = new FormRequestBodyBuilder().setMessageForm(messageForm).build();
          
 

        // 비동기 함수인 getToken을 await로 호출
        const res = await omni.form.registForm(req);
        console.log('전송결과:', res);

    } catch (error) {
        console.error('Error:', error);
    }

}

formPost();
```

#### Next.js
```javascript
import { NextResponse } from 'next/server';
import { OMNI, OMNIOptionsBuilder } from 'omni-sdk-ts';

const option = new OMNIOptionsBuilder()
.setBaseURL(baseURL)
.setToken(token)
.build();

export async function POST(req: Request) {
  try {
      
    const data = await req.json();
    
    const omni = new OMNI(option);
    const test = {
      messageForm: [
          {
              alimtalk : {
                  msgType: "AT",
                  senderKey: "{senderKey}",
                  templateCode: "{templateCode}",
                  text: "[테스트]\n알림톡 내용"
              }
          }, 
          {
              sms: {
                  from: "0310000000",
                  text: "test form message"
              }
          }
      ]
  }

    const response = await omni.form?.registForm(test);

    return NextResponse.json(response);
  } catch {
    return NextResponse.json({ error: 'API 호출 실패' }, { status: 500 });
  }
}


```

### 전송

#### Node.js
```javascript
async function send() {
    try {
        const option = new OMNIOptionsBuilder()
            .setBaseURL(baseUrl)
            .setToken(token)
            .build();
        
        const omni = new OMNI(option);

        /* Builder를 사용하여 생성 */
        const req = new SMSRequestBodyBuilder()
            .setTo("01000000000")
            .setFrom("0316281500")
            .setText("테스트 발송입니다.")
            .build();

        /* JSON 사용하여 생성 */
        const req = {
            form : "0310000000",
            to : "010123455678",
            text : "test 발송입니다."
        }

        const res = await omni.send?.SMS(req);
        console.log('전송결과:', res);

        console.log(omni);
    } catch (error) {
        console.error('Error:', error);
    }

}

send();
```

#### Next.js
```javascript
// src/app/api/test/route.js
import { NextResponse } from 'next/server';
import { OMNI, OMNIOptionsBuilder, SMSRequestBodyBuilder} from 'omni-sdk-js';

export async function POST() {

  const option = new OMNIOptionsBuilder().setBaseURL(baseUrl).setToken(token).build();

  const omni = new OMNI(option);

  /* Builder를 사용하여 생성 */
  const req = new SMSRequestBodyBuilder().setFrom("0310000000").setTo("01000000000").setText("test 발송입니다.").build();

  /* JSON 사용하여 생성 */
  const req = {
    form : "0310000000",
    to : "010123455678",
    text : "test 발송입니다."
  };

  const result  = await omni.send?.SMS(req);
  return NextResponse.json({ result: result });
}


```



### 리포트

#### Node.js
```javascript
const { OMNI, OMNIOptionsBuilder } = require('omni-sdk-js');

const option = new OMNIOptionsBuilder()
.setBaseURL(baseUrl)
.setToken(token)
.build();
async function reportPolling() {
    try {
        const omni = new OMNI(option);
        
        const result = await omni.polling.getReport();
        console.log('data:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}

reportPolling()


```

#### Next.js
```javascript

import { NextResponse } from 'next/server';
import { OMNI, OMNIOptionsBuilder } from 'omni-sdk-ts';
const option = new OMNIOptionsBuilder()
.setBaseURL(baseUrl)
.setToken(token)
.build();


export async function GET() {
  try {

    const omni = new OMNI(option);
    let req;
    let res;
    res = await omni.polling?.getReport();
    
    return NextResponse.json(res);
  } catch  {
    return NextResponse.json({ error: 'API 호출 실패' }, { status: 500 });
  }
}
```
## 문의 (Contact)
본 문서와 관련된 기술 문의는 아래 메일 주소로 연락 바랍니다. 😄

[support@infobank.net](support@infobank.net)








