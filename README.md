# README #

This README would normally document whatever steps are necessary to get your application up and running.

# Installation
## Before you start
Install node and npm
Install bower - `npm i -g bower`
Install pm2 - `npm i -g pm2`

## Install this project
- Download this repository to the server using `git clone`

## How to install dep
- cd to the root dir of this project code
- `./install.sh`

## How to start/stop/update the service on server ###
- cd to the root dir of this project code
- Start service: `./start_server.sh`
- Stop service: `./stop_server.sh`
- Update service: `./update.sh`

## How to install chinese fonts in Ubuntu server (skip if the server already has Chinese font support)
sudo apt-get install language-pack-zh*
sudo apt-get install chinese*
sudo apt-get install ttf-wqy-microhei

# Work on this project
## Update UI
Start the service on your your local. 

Code for the UI is written in Angular 1. Simply change the code in the `./public` directory and refresh the browser.

## Update PDF
Start the service on your your local. 

PDF is generated using an Angular template in Node server. Code is in `./server/template` dir.

## Update Node server
Start the service on your your local.

Code is in `./server` dir.