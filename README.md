# lirc-web-api

# API to remote infrared
I use an raspberry pi 3 with a IR led and lirc package. This is project to manage commands sender using node.js and https://github.com/hobbyquaker/lirc-client  (you can see all lirc module commands here)

## Installation
> npm i

## Usage

> npm start

Then you can POST request on: http://IP:3000/:remoteName/:command
Exemple: http://localhost:3000/danby/POWER_ON

You can list all commands from our lirc remote configuration file with this GET request on: http://IP:3000/list/:remoteName
