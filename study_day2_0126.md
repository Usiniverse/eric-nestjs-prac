# Nest.js Study 2일차

### 1. Provider : 앱이 제공하고자 하는 핵심 기능, 비즈니스 로직을 수행하는 것이 프로바이더.
    프로바이더는 service, repository, factory, helper 등 다양하게 저장된다.

#### 사용법 : 등록 - 속성 기반 주입(Injectable)

### 2. 모듈 설계
#### 모듈을 어떻게 나누어야 한다는 것에 대한 기준은 없음. 서비스가 커져가며 유사한 기능을 하는 모듈로 묶어야 할 것.
#### import  export 의 유연한 활용
    nest g mo <module_name> : 모듈의 자동 생성 커맨드

### 3. dotenv, config 컨트롤
#### dotenv : 환경변수를 관리하는 라이브러리
    npm i dotenv
    .env 파일 생성
    .env 파일에 환경변수 작성
    main.ts 에서 import dotenv from 'dotenv'; dotenv.config(); 추가
    process.env.변수명 으로 사용

### 4. 파이프와 유효성 검사

#### 파이프는 요청이 라우터 핸들러로 가기 전에 객체를 변환할 수 있게 함.
#### 파이프 사용의 목적
    1. 변환 : 입력 데이터를 원하는 형식으로 바꿈
    2. 유효성 검사 : 예외 처리 -> @nest/common ValidationPipe 등

#### 유효성 검사 파이프 구조를 뜯어볼 것.
#### nest에서 제공하는 파이프를 사용하세요!
