# OMNI-SDK-JS

JavaScript (TypeScript 지원) 기반의 Infobank OMNI API SDK입니다.  
builder 패턴 또는 JSON 형식으로 메시지를 구성하여 쉽게 사용할 수 있으며, Node.js 및 Next.js 환경에서 동작합니다.  
※ React 등의 클라이언트 환경에서는 CORS 제한이 있을 수 있습니다.

---

## 📖 목차

- [설치 (Installation)](#설치-installation)
- [사용법 (Usage)](#사용법-usage)
  - [1️⃣ 토큰 발급](#1️⃣-토큰-발급)
  - [2️⃣ File 업로드](#2️⃣-file-업로드)
  - [3️⃣ Form 등록](#3️⃣-form-등록)
  - [4️⃣ 메시지 전송](#4️⃣-메시지-전송)
  - [5️⃣ 리포트 조회](#5️⃣-리포트-조회)
- [구조 및 구성](#구조-및-구성)
- [라이선스](#라이선스)

---

## 설치 (Installation)

### 방법 1: npm 레지스트리에서 설치
```bash
npm install @infobank/infobank-omni-sdk-js
```

### 방법 2: 소스 로컬 설치 및 빌드
```bash
# 소스 클론 또는 다운로드
git clone https://github.com/icomm-api/omni-sdk-js.git
cd omni-sdk-js

# 의존성 설치 및 빌드
npm install
npm run build

# 프로젝트에서 로컬 링크
npm install ./[다운로드한 SDK 경로]
```

### 방법 3: node_modules 직접 복사
```bash
cp -R ./[SDK경로] ./node_modules/omni-sdk-js
cd ./node_modules/omni-sdk-js
npm install
npm run build
```

---

## 사용법 (Usage)

### 공통 변수 예시
```javascript
const baseURL = "https://omni.ibapi.kr";
const userId = "YOUR_CLIENT_ID";
const userPassword = "YOUR_PASSWORD";
const token = "ACCESS_TOKEN"; // getToken() 이후 획득
```

---
## 사용법 (Usage)

### 토큰 발급 

#### Node.js
```javascript

// node 일 경우 
const { OMNI, OMNIOptionsBuilder } = require('omni-sdk-js');

// main 으로 감싸기
async function main() {
    try {
        const option = new OMNIOptionsBuilder()
            .setBaseURL(baseURL)
            .setId(userId)
            .setPassword(userPassword)
            .build();
        
        const omni = new OMNI(option);

        // 비동기 함수인 getToken을 await로 호출
        const token = await omni.auth.getToken();
        console.log('Token:', token);

    } catch (error) {
        console.error('Error:', error);
    }
}

// main 함수 실행
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
    const response = await omni.auth?.getToken(); // SDK로 API 호출

    return NextResponse.json(response); // 결과를 클라이언트에 JSON 형태로 반환
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
const fs = require('fs'); // 파일 시스템 모듈
const path = require('path'); // 경로 모듈


const option = new OMNIOptionsBuilder()
  .setBaseURL(baseURL)
  .setToken(token)
  .build();

async function file() {
    try {
        const omni = new OMNI(option);
        
        // 파일 경로를 설정하고 읽기
        const filePath = path.join(__dirname, './hqdefault.jpg'); // 이미지 파일의 절대 경로
        
        // FormData 생성 및 파일 추가
        const formData = new FormData();
        formData.append('file', fs.createReadStream(filePath)); // 파일을 스트림으로 읽어서 추가
        
        // 비동기 함수인 uploadFile을 호출
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

        const req ={ 
            messageForm : [
              {
                alimtalk: {
                  msgType: "AT",
                  senderKey: "{senderKey}",
                  templateCode: "{templateCode}",
                  text: "[테스트] \n[공영주차장 정기권 연장 등록 안내] \n#{신청자이름}님 (#{차량번호}) 은 정기권사용자입니다."
                }
              },
              {
                sms: {
                  from: "0316281500",
                  text: "test form message"
                }
              }
            ]
        };


        // const alimtalk = new AlimtalkBuilder().setMsgType("AT").setSenderKey("senderKey").setTemplateCode("templatCode").setText("[테스트] \n[공영주차장 정기권 연장 등록 안내] \n#{신청자이름}님 (#{차량번호}) 은 정기권사용자입니다.").build();
        // const sms = new SMSBuilder().setFrom("0316281500").setText("test").build();
          
        // const messageForm = new MessageFormBuilder().setAlimtalk(alimtalk).setSMS(sms).build();
        // const req = new FormRequestBodyBuilder().setMessageForm(messageForm).build();
          
 

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

    // Extract and parse the JSON body
    const data = await req.json(); // req.json() parses the body as JSON

    // Log the parsed data
    console.log("data:", data);
    

    const omni = new OMNI(option);
    const test = {
      messageForm: [
          {
              alimtalk : {
                  msgType: "AT",
                  senderKey: "{senderKey}",
                  templateCode: "{templateCode}",
                  text: "[테스트]\n[공영주차장 정기권 연장 등록 안내] \n#{신청자이름} 님 (#{차량번호}) 은 정기권사용자입니다. 정기권 연장 이용을 희망하시는 경우 결제 기간 내에 결제를 완료해야 주차장을 이용할 수 있사오니 기간 내에 꼭\n결제하여주시기 바랍니다.\n- 대상주차장: #{주차장주소}\n- 이용기간: #{시작일자} ~ #{종료일자} \n- 결제기간: #{추첨일자} ~ #{납부마감일자}\n- 결제금: #{이용요금}원 \n- 가상계좌번호: (우리) #{가상계좌번호} /n※\n미결제 시 자동취소 및 차 순위자에게 정기권이 부여됩니다.\n※ 문의: 070-4953-9837 (양천구시설관리공단 통합관제센터)"
              }
          }, 
          {
              sms: {
                  from: "0316281500",
                  text: "test form message"
              }
          }
      ]
  }

    const response = await omni.form?.registForm(test);

    return NextResponse.json(response); // 결과를 클라이언트에 JSON 형태로 반환
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

        const req = new SMSRequestBodyBuilder()
            .setTo("01000000000")
            .setFrom("0316281500")
            .setText("테스트 발송입니다.")
            .build();

    //const req = {
  //   form : "0310000000",
  //   to : "010123455678",
  //   text : "test 발송입니다."
  // }

        const res = await omni.send?.SNS(req);
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

  const req = new SMSRequestBodyBuilder().setFrom("0310000000").setTo("01012364566").setText("test 발송입니다.").build();

  // const req = {
  //   form : "0310000000",
  //   to : "010123455678",
  //   text : "test 발송입니다."
  // }

  const result  = await omni.send?.SNS(req));

  console.log(result);

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

        // 비동기 함수인 getToken을 await로 호출
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

const option = new OMNIOptionsBuilder())
.setBaseURL(baseUrl)
.setToken(token)
.build();


export async function GET() {
  try {

    const omni = new OMNI(option);
    let req;
    let res;
    res = await omni.polling?.getReport();

    //res = await omni.report?.getDetailReport(req);
    
    return NextResponse.json(res); // 결과를 클라이언트에 JSON 형태로 반환
  } catch  {
    return NextResponse.json({ error: 'API 호출 실패' }, { status: 500 });
  }
}
```


## 구조 및 구성

```
omni-sdk-js/
├── src/                # TypeScript 소스 코드
├── dist/               # 빌드된 JavaScript 코드
├── examples/           # 사용 예제
├── package.json
├── README.md
```

- **main**: `dist/index.js`
- **types**: `dist/index.d.ts` (TypeScript 지원)

---

## 라이선스

이 프로젝트는 [MIT License](https://opensource.org/licenses/MIT)를 따릅니다.
© 2025 Infobank Corp.