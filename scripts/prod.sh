#!/bin/bash

PROJECT_PATH=$(
    cd $(dirname $0)
    pwd
)/..
CLIENT_PATH=$PROJECT_PATH/client
SERVER_PATH=$PROJECT_PATH/server

# ClientのPRODサーバーを起動する
function prod_client() {
    cd $CLIENT_PATH
    npm ci
    npm run build
    npm run preview
}

# ServerのPRODサーバーを起動する
function prod_server() {
    cd $SERVER_PATH
    go mod tidy
    go build -o server
    ./server
}

# 終了のシグナルを受け取った時に実行する関数
function finish() {
    echo "終了します"
    exit 0
}

# PRODをserverとclientで並列実行する
function prod() {
    echo "本番環境を起動します、終了する場合はCtrl+Cを押してください"
    trap finish SIGINT SIGTERM
    prod_client &
    prod_server &
    wait
}

prod
