# 설명
nodejs + axios + docker를 이용하여 클라이언트로부터 코드와 인풋을 받아 아웃풋을 출력해주는 기능.

사용자는 접속한 페이지에서 CodeMirror로 Syntax Highlighting된 textarea에 코드를 입력할 수 있고, 마찬가지로 input textarea에 원하는 input을 입력할 수 있다.

run 버튼을 누르면 output div에 실행 결과가 갱신된다.

사용자가 입력한 코드와 인풋은 axios를 통해 post request로 서버에 전송되며 python:3.10 도커 컨테이너 내부에서 해당 코드가 실행되고 그 결과가 클라이언트 쪽으로 전송된다.

# 실행을 위해 필요한 과정
Docker와 nodejs, 그리고 npm 라이브러리를 설치해야 한다.

## Docker 설치
```
sudo apt-get update
sudo apt-get -y install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
 curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
 echo \
  "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io
sudo /etc/init.d/docker start
```

## nodejs npm 설치
```
sudo apt-get install -y curl
sudo apt update
sudo apt install nodejs
sudo apt install npm
```

## 기타 라이브러리 설치
```
npm init
npm install express --save
npm install ejs --save
npm install codemirror --save
npm install axios --save
```

# 실행 방법
```node app.js```

이후 http://localhost:3000/ 으로 접속할 수 있다.
