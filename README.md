# javascript-lotto-precourse

## 기능 목록

- [ ] 로또 구입 금액 입력 기능
- [ ] 로또 구입 금액으로 로또의 개수를 구하는 기능
- [ ] 로또의 개수만큼 6개의 숫자로 이루어진 로또를 생성하는 기능
- [ ] 로또 출력 기능
- [ ] 당첨 번호를 입력받는 기능
- [ ] 보너스 번호를 입력받는 기능
- [ ] 사용자가 구매한 로또 번호와 당첨 번호를 비교하여 당첨 내역 및 수익률을 계산하는 기능
- [ ] 로또 결과를 출력하는 기능

## 예외 상황

- 로또 구입 금액 입력 시

  - 숫자가 아닐때
  - 정수가 아닐때
  - 0 이하 일때
  - infinity일때
  - 1000원으로 나누어 떨어지지 않을 때

- 로또 당첨 번호 입력
  - 입력받은 로또 번호의 개수가 6이 아닐 때
  - 각각의 숫자 검증
    - 숫자가 아닐때
    - 정수가 아닐때
    - infinity일때
    - 1 ~ 45 이하가 아닐때
    - 중복된 숫자가 있을 때
- 로또 보너스 번호 입력 기능

  - 각각의 숫자 검증
    - 숫자가 아닐때
    - 정수가 아닐때
    - infinity일때
    - 1 ~ 45 이하가 아닐때
    - 로또 당첨 번호와 중복된 숫자일 때

## 테스트 코드
