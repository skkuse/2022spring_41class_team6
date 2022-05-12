# 설명
frontend에 python IDE를 삽입하고 RUN 버튼을 눌렀을 때 코드와 인풋에 대한 실행 결과를 확인할 수 있다.

# 실행 화면
<img src="https://user-images.githubusercontent.com/38034263/168148109-86fb51c6-c83b-42af-9164-a8ef32f00172.png"/>

# 실행을 위해 필요한 과정
Docker와 nodejs, 그리고 npm 라이브러리를 설치해야 한다.

## Docker 설치
아래는 ubuntu 전용 설치 법이며, 다른 운영체제의 경우 직접 docker 설치법을 찾아야 한다.
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
sudo usermod -aG docker $USER
sudo service docker start
```

## nodejs npm 설치
npm 최신 버전을 홈페이지에서 설치한다.
https://nodejs.org/en/download/
실행 환경은
nodejs v16.14.2
npm 8.5.0

## nodejs 라이브러리 설치
```
npm install
```

# 실행 방법
```npm run dev```

이후 http://localhost:3000/ 으로 접속할 수 있다.
