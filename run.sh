seperator='frontend'

docker -v

if [ $? != "0" ]
then
	curl -fsSL https://get.docker.com/ | sudo sh
        sudo usermod -aG docker $USER
fi

sudo service docker start
sudo docker ps
sudo chmod 666 /var/run/docker.sock

docker run -d --net=host --name web --restart=always -v /var/run/docker.sock:/var/run/docker.sock \
-v $(which docker):/bin/docker -v $(pwd)/$seperator:$(pwd)/$seperator -w $(pwd)/$seperator \
node:18 bash -c "npm install && npm run dev"
