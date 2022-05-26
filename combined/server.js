const express = require('express');
const next = require('next');
const serverRouter = require("./router/serverRouter");
const session = require('express-session');
const DBManager = require('./DBManager');

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler(); // app에서 뽑아온 get요청 처리기

// DBManager.Tutorial.create({
//   chapter : '2-2',	다양한 조건 만들기	앞에서 if문의 조건으로 “answer == 1”, “1 < 0”, “1 > 0” 등을 넣어 보았습니다. 이렇게 명백히 참이나 거짓이 보이는 것뿐만 아니라 많은 자료형을 조건에 넣을 수 있는데, 불 자료형 절에서 설명했듯이 정수나 실수에서 0, 비어 있는 리스트나 튜플 등은 False가 됩니다. -------- >>> if "a": ... print("a") a >>> if 0: ... print("0") >>> -------- 예를 들어 “a”라는 문자열 값은 빈 문자열이 아니므로 bool형으로 변환되면 True가 되며, 0이라는 정수 값은 False입니다. 따라서 위 예시에서는 “a”만 출력됩니다. 조건을 여러 개 충족시켜야 하거나, 여러 개 조건 중 적어도 하나를 충족시켜야 하거나, 조건이 반대로 되어야 하는 상황에서는 어떻게 하면 될까요? 각각 and, or, not을 사용하면 됩니다. -------- 구문 | 설명 -------- A and B | A와 B가 모두 True일 때만 True, 나머지는 False A or B | A와 B가 모두 False일 때만 False, 나머지는 True not A | A가 True이면 False, False이면 True -------- >>> if 2 + 2 == 5 and 0 != 1: ... print("출력 1") >>> if 2 + 2 == 5 or 0 != 1: ... print("출력 2") 출력 2 >>> if not False: ... print("출력 3") 출력 3 -------- 2 + 2 == 5는 거짓이지만, 0 != 1은 참입니다. 따라서 두 조건을 and로 이으면 거짓이 되고, or로 이으면 참이 됩니다. False는 그 자체로 거짓이므로, not False는 참입니다. 따라서 위 예시에서는 “출력 2”와 “출력 3”이 출력됩니다. 마지막으로 특수 연산자인 in 또한 조건을 만드는 데 유용하게 쓰입니다. A in B는 A가 B의 구성 요소인 경우 True, 아닌 경우 False를 반환합니다. 반대로 A not in B는 구성 요소가 아닐 때 True를 반환합니다. B에는 리스트, 튜플, 문자열 등이 들어갑니다. -------- >>> shopping_list = ["apple","banana","orange"] >>> if "apple" in shopping_list: ... print("사과를 사러 간다") 사과를 사러 간다 >>> if "grape" in shopping_list: ... print("포도를 사러 간다") >>> -------- 위 예제에서 장보기 목록에는 apple은 있지만 grape는 없기 때문에, “사과를 사러 간다”만 출력이 됩니다.
//   2-3	조건문의 다양한 분기: else와 elif	한 조건을 두고 조건이 참일 때와 거짓일 때 실행해야 할 것을 달리하고 싶을 때가 있을 것입니다. 위의 정답이 1일 때 정답임을 알려주는 예제에서 1이 아닐 때 오답임을 알려주고자 할 때, 아래와 같이 쓰는 건 비교적 번거로운 일입니다. -------- if answer == 1: print("정답입니다!") if answer != 1: print("정답이 아닙니다.") -------- 이럴 때 쓸 수 있는 것이 else입니다. Else는 조건문에서 조건에 맞지 않는 경우 실행할 대상을 묶는 역할을 합니다. 따라서 위 코드는 아래와 같이 고쳐 쓸 수 있습니다. -------- if answer == 1: print("정답입니다!") else: print("정답이 아닙니다.") -------- 경우에 따라서는 분류 기준 등 조금 더 복잡한 조건이 필요할 때가 있습니다. 시내버스를 탈 때 19세 이상은 1500원, 13세부터 18세까지는 1200원, 7세부터 12세까지는 800원을 받으며, 그 아래는 무임이라고 합시다. 나이에 따라 요금을 출력하는 코드를 아래와 같이 작성해 볼 수 있을 것입니다. -------- if age >= 19: print(1500) else: if age >= 13: print(1200) else: if age >= 7: print(800) else: print(0) -------- 조건이나 실행할 명령들의 들여쓰기가 달라서 보기에 불편합니다. 이럴 때 쓸 수 있는 것이 elif로, 그 이름에서 볼 수 있듯 else와 if를 합쳐 놓은 것입니다. 이를 이용하면 위 코드를 아래와 같이 보기 좋게 만들 수 있습니다. -------- if age >= 19: print(1500) elif age >= 13: print(1200) elif age >= 7: print(800) else: print(0) -------- 들여쓰기가 일정해져서 보기에 편해졌을 것입니다.
//   2-4	반복문 while	Python에서 쓰이는 반복문에는 while과 for가 있는데, while문은 주어진 조건을 만족하는 동안 while문 안의 동작을 반복하게 합니다. 다음 예시에서 어떤 결과가 출력될지 예상해 봅시다. -------- >>> i = 0 >>> while i < 3: ... print(i) ... i += 1 -------- 맨 처음 i의 값은 0입니다. 이후 while문 안에서 i가 출력되고, i의 값이 1 증가되는 과정을 반복하게 됩니다. 다만 이 과정이 영원히 반복되지는 않을 것입니다. i가 3이 되면 while문의 조건과 맞지 않기 때문입니다. 따라서 i가 0, 1, 2일 때만 출력이 될 것이라 예상할 수 있습니다. 0 1 2 리스트 또한 조건이 된다는 점을 이용해, 리스트의 pop 함수를 이용해 리스트의 뒤부터 원소를 하나씩 뽑아내 출력하는 코드를 작성할 수 있습니다. 아래 코드가 오류 없이 동작함은, 마지막 남은 원소인 Mercury를 뽑아내면 리스트가 비어서 False가 되기 때문입니다. -------- >>> list = ["Mercury","Venus","Earth","Mars","Jupiter","Saturn"] >>> while list: ... print(list.pop()) Saturn Jupiter Mars Earth Venus Mercury >>> --------
//   2-5	반복문의 제어: break, continue와 무한 루프	때로는 while문의 조건에 맞더라도 다른 사정이 생겨서 while문을 빠져나오고 싶을 때가 있을 것입니다. 이럴 때 쓰는 것이 break입니다. break는 반복문을 빠져나가게끔 하며 흔히 반복문 안의 if문에 들어갑니다. 어느 가게에서 금일 아이스크림을 고객에게 하나씩 나누어 주는 행사를 하며, 아이스크림이 다 소진되면 문을 닫아야 한다고 합시다. -------- qty_icecream = int(input("아이스크림 수량을 입력하세요.\n")) customers = int(input("고객의 수를 입력하세요.\n")) while customers > 0: print("아이스크림을 나눠주었습니다.") qty_icecream -= 1 customers -= 1 if qty_icecream <= 0: print("아이스크림이 없습니다. 영업을 종료합니다.") break -------- 아이스크림 수를 50, 고객의 수를 60으로 정하면 “아이스크림을 나눠주었습니다.”는 50번 출력이 되고, 아이스크림의 수가 0이 되므로 if문 안으로 들어가면서 “아이스크림이 없습니다. 영업을 종료합니다.”가 출력되고, break를 만나면서 while문을 빠져나오게 됩니다. 반대로 아이스크림 수를 60, 고객의 수를 50으로 정하면 “아이스크림을 나눠주었습니다.”만 50번 출력이 되며, 이후 대기 중인 고객의 수가 0이 되므로 while문의 조건에 따라 while문을 빠져나오게 됩니다. 반복문에서 흐름을 조작하는 구문으로 break 말고도 continue가 있는데, continue를 만나면 반복문의 처음으로 돌아가게끔 합니다. break와 마찬가지로 continue 또한 흔히 반복문 안의 if문에 들어갑니다. continue는 반복적인 작업을 이어서 해야 하지만 한 단계를 끝까지 할 필요가 없는 경우 바로 다음 단계를 수행할 수 있게 합니다. while과 continue를 이용해 100 이하의 2의 배수인 양의 정수를 출력하는데, 5의 배수는 배제하는 코드를 다음과 같이 만들 수 있습니다. -------- i = 2 while i <= 100: if i % 5 == 0: continue print(i) i += 2 -------- while문의 조건에는 True도 들어갈 수 있습니다. 이런 경우 while문 안에서 무엇이 실행되든 조건이 항상 참이라는 것은 변하지 않기 때문에, 프로그램은 영원히 while문을 벗어나지 못하게 되며 이를 무한 루프라고 합니다. -------- >>> sheep = 1 ... while True: ... print("양 {0}마리".format(sheep)) ... sheep += 1 -------- 위 코드를 실행하면 영원히 양을 세게 됩니다. 참고로 format 함수는 앞의 문자열에 대해 중괄호{}로 둘러싸인 부분에 주어진 값을 넣는 함수입니다. -------- 양 1마리 양 2마리 양 3마리 (…) 양 7149마리 양 7150마리 양 7151마리 (…) -------- 다만 Python 프로그램의 실행 도중에는 Ctrl+C를 눌러 실행을 중단할 수 있으며, 무한 루프 안에 있더라도 예외는 아닙니다. 실제 무한 루프(while True)가 쓰이면 while문 안에 루프를 빠져나갈 수 있는 여지를 만들어 두곤 하는데, 이는 앞에 나왔던 break를 통해 실현할 수 있습니다. 위 코드를 다음과 같이 고쳐 주면 양은 100마리까지만 세고 양 세는 것을 멈출 수 있을 것입니다. -------- >>> sheep = 1 >>> while True: ... print("양 {0}마리".format(sheep)) ... if sheep >= 100: ... break ... sheep += 1 양 1마리 양 2마리 양 3마리 (…) 양 99마리 양 100마리 --------
//   2-6	반복문 for, 정수열을 만드는 range	반복문에는 while 말고도 for가 있습니다. while문에서는 반복문을 실행할 조건을 수반했는데, for에서는 반복문을 실행할 요소들의 모임, 곧 리스트, 튜플, 문자열 등이 함께 나옵니다. 즉, while은 조건을 충족하는 동안 while문 안의 명령을 실행한다면 for는 주어진 리스트나 문자열 등 원소의 모임 안에 있는 원소들에 대해서 for문 안의 명령을 실행합니다. 명단을 주고, 그 명단 안의 이름을 출력하는 코드를 아래와 같이 만들 수 있습니다. -------- >>> name_list = ["Aaron","Elizabeth","James"] >>> for name in name_list: ... print(name) Aaron Elizabeth James -------- 조금 더 복잡한 형태로, 명단이 이름-성의 튜플들의 리스트로 되어 있고 이 중 성만을 출력하는 경우에는 다음과 같이 할 수 있습니다. -------- >>> name_list = [("Aaron","Smith"), ("Elizabeth","Grey"), ("James","Becker")] >>> for (first, last) in name_list: ... print(last) Smith Grey Becker -------- for문에서 정수를 활용하고 싶은 경우 따라오는 것이 range 함수인데, 이는 아래와 같이 주어진 조건에 맞추어 정수열을 만들어 냅니다. -------- 구문 | 설명 -------- range(m) | 0 이상 m 미만의 정수 range(m, n) | m 이상 n 미만의 정수 range(m, n, d) | m으로 시작해 n이 나오기 전까지 값을 d만큼 변화시키면서 나오는 정수 -------- while문에서 0부터 2까지 출력하는 예제가 있었는데, 이를 for문과 range 함수를 이용하면 다음과 같이 바꿔 쓸 수 있습니다. -------- >>> for i in range(3): ... print(i) 0 1 2 -------- 코드를 비교해 보면 i를 1 증가시키는 구문이 사라지는 등, 확연히 간결해졌음을 볼 수 있습니다. 다음은 100 이하의 짝수인 양의 정수를 100부터 내림차순으로 출력하는 코드입니다. -------- >>> for i in range(100, 0, -2): ... print(i) 100 98 96 (…) 4 2 -------- while문뿐만 아니라 for문에서도 break와 continue를 사용할 수 있음은 반복문이기 때문에 당연합니다. 또한 조건문과 반복문은 필요에 따라 얼마든지 겹쳐 쓸 수 있기 때문에, 이를 이용하면 원하는 흐름을 만들어낼 수 있습니다. 다음 예제를 학습하고, 연습문제로 들어가도록 합시다. 다음은 리스트 안의 정수를 반복해서 2로 나누어 홀수로 만들어서 새 리스트에 추가하며, 10의 배수에 대해서는 건너뛰는 코드입니다. -------- >>> old = [52, 69, 80, 128, 144, 159] >>> new = [] >>> for i in old: ... if i % 10 == 0: ... continue ... while i % 2 == 0: ... i //= 2 ... new.append(i) ... >>> print(new) [13, 69, 1, 9, 159] -------- 옛 리스트에 정수가 6개가 있었으나 새 리스트에 정수가 5개가 있음은 원래 리스트의 80은 10의 배수이기 때문에 새 리스트에 삽입이 되지 않았기 때문입니다.[{

// }
// ,
// {

// }]
// })
// DBManager.Problem.create({
//   chapter : '3-2',
//   problem : 	'최대공약수 찾기	유클리드 호제법이라는 방법을 통해 두 정수의 최대공약수를 찾을 수 있습니다. 큰 수를 작은 수로 나누어서 나온 나머지로 다시 작은 수를 나누는 과정을 나머지가 0이 나올 때까지 반복하면, 직전의 작은 수가 최대공약수가 됩니다. 예시로 126과 75의 최대공약수를 구해 보면, 3이 나옵니다: 126 % 75 => 51 75 % 51 => 24 51 % 24 => 3 24 % 3 => 0 이렇게 유클리드 호제법을 이용해서 354748과 491512의 최대공약수를 구하는 코드를 작성해 보세요. 사용을 추천하는 함수: max(), min()',
//   answer : 	'524'
// })

app.prepare().then(() => {
  const server = express();
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));

  server.use(session({
    key: 'sid', // 세션의 키 값
    secret: 'secret', // 세션의 비밀 키
    resave: false, // 세션 항상 저장 여부
    saveUninitialized: true, // 세션이 저장되기전 상태
    cookie: { // 쿠키 설정
      maxAge: 24000 * 60 * 60
    }
  }))

  server.get('/hashtag/:tag', (req, res) => {
    return app.render(req, res, '/hashtag', { tag: req.params.tag });
  });
  server.get('/user/:id', (req, res) => {
    return app.render(req, res, '/user', { tag: req.params.id });
  });
  server.use("/", serverRouter);
  server.all('*', (req, res) => handle(req, res));

  server.listen(3060, () => {
    console.log('next + express running on : http://localhost:3060');
  });
});
