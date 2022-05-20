seperator='combined'

docker -v

if [ $? != "0" ]
then
	curl -fsSL https://get.docker.com/ | sudo sh
        sudo usermod -aG docker $USER
fi

sudo service docker start
sudo docker ps
sudo chmod 666 /var/run/docker.sock

docker run -d --net=host --name mysql --restart=always -v $(pwd)/$seperator/db:/var/lib/mysql \
-e MYSQL_ROOT_PASSWORD=qwer1234 mysql:8

docker pull python:3.10

until nc -z -v -w30 localhost 3306
do
  echo "Waiting for database connection..."
  sleep 5
done

docker exec mysql bash -c "mysqladmin -uroot -pqwer1234 create team6"

docker run -d --net=host --name web --restart=always -v /var/run/docker.sock:/var/run/docker.sock \
-v $(which docker):/bin/docker -v $(pwd)/$seperator:$(pwd)/$seperator -w $(pwd)/$seperator \
node:18 bash -c "npm install && node server.js"
