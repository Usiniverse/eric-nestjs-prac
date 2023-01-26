# Nest.js Study 1일차

## 1. Nest.js란?
#### Node.js에 기반을 둔 웹 API 프레임워크
#### Express를 기반으로 만들어졌으며, Express의 기능을 그대로 사용할 수 있음
#### Angular.js의 구조를 차용하여, MVC 패턴을 사용함

## 2. Nest.js vs Express
     Express는 가볍고 자유도가 높으나 맞는 라이브러리를 찾아야하는 번거로움이 있음
     타입스크립트는 추가 설정을 통해 사용
     사용자 많음
***
    Nest.js는 Express의 기능을 그대로 사용할 수 있으며, 타입스크립트를 기본으로 사용
    많은 기능을 이미 프레임워크 내에 자체 포함하고 있음
    사용자가 꾸준히 증가하는 중


## 3. 데커레이터(decorator)
#### @를 사용하여 클래스, 메서드, 속성에 추가적인 기능을 부여할 수 있음
#### 데커레이터는 선언된 클래스, 메서드 등에 대한 정보와 함께 런타임에서 호출되는 함수여야 한다.
#### 데커레이터 합성 : 클래스의 정의를 읽거나 수정
#### 클래스 데커레이터
    인수 : constroctor
    선언 불가능한 위치 : d.ts 파일, declare 클래스
#### 메서드 데커레이터 : 메서드의 정의를 읽거나 수정
    인수 : target, propertyKey, propertyDescriptor
    선언 불가능한 위치 : d.ts 파일, declare 클래스, 오버로드 메서드
#### 접근자 데커레이터
    인수 : target, propertyKey, propertyDescriptor
    선언 불가능한 위치 : d.ts 파일, declare 클래스
#### 속성 데커레이터
    인수 : target, propertyKey
    선언 불가능한 위치 : d.ts 파일, declare 클래스
#### 매개변수 데커레이터
    인수 : target, propertyKey, parameterIndex
    선언 불가능한 위치 : d.ts 파일, declare 클래스

## 4. 인터페이스
### 컨트롤러
    라우팅, 와일드카드 사용, 요청 객체, 응답, 헤더, 리디렉션, 하위 도메인 라우팅, 페이로드 등
    