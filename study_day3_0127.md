# Nest.js Study 3일차

### 1. 영속화 - 데이터의 기록과 컨트롤
#### ORM vs Node.js DB 라이브러리
#### ORM : Object Relational Mapping
    ORM이란 데이터베이스의 관계를 객체로 바꿔 개발자가 객체지향프로그래밍을 쉽게 할 수 있게 도와주는 도구.
    SQL문을 직접 작성하지 않기 때문에 부담이 덜하고 러닝커브가 짧다는 장점이 있다.

    @nest/typeorm

#### + Migration

----
### 2. MiddleWare
#### 라우트 핸들러가 클라이언트의 요청을 수행하기 전에 수행되는 컴포넌트를 말함.

#### 미들웨어는 다음과 같은 동작을 수행할 수 있다.
    - 어떤 형태의 코드라도 수행할 수 있다.
    - 요청과 응답에 변형을 가할 수 있다.
    - 요청, 응답 주기를 끝낼 수 있다.
    - 여러개의 미들웨어를 사용한다면 next()로 호출 스택 상 다음 미들웨어에 제어권을 전달한다.

#### 미들웨어의 역할
    쿠키 파싱, 세션 관리, 인증/인가, 본문 파싱

----
### 3. JWT
#### 인증 vs 인가
#### '가드'를 이용한 인가
```
guard는 인증된 사용자만 특정 라우트에 접근할 수 있도록 제한하는 역할을 한다.
Guard를 구현할 때 CanActivate를 구현해야 한다.

- pipe 구현 시 : PipeTransform
- guard 구현 시 : CanActivate
```

#### 어떤 범위에 적용할 것인지 결정하고 컨트롤러, 앱모듈 등에 적용한다.

    JWT
    - 토큰 기반의 인증 방식
    - 토큰은 헤더, 페이로드, 시그니처(서명)로 구성되어 있다.
---
### 4. Logger
#### 내장 Logger Class : @nest/common 패키지로 제공
#### Node.js 로깅 라이브러리 : winston => nest-winston
#### 사용 시 : AppModule 적용
#### Winston 로그 레벨
    - error
    - warn
    - log
    - verbose
    - debug
    - silly
