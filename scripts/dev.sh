#!/bin/bash

PROJECT_PATH=$(
    cd $(dirname $0)
    pwd
)/..
CLIENT_PATH=$PROJECT_PATH/client
SERVER_PATH=$PROJECT_PATH/server

# ClientのDEVサーバーを起動する
function dev_client() {
    cd $CLIENT_PATH
    npm ci
    npm run dev
}

# ServerのDEVサーバーを起動する
function dev_server() {
    cd $SERVER_PATH
    go mod tidy
    go run main.go
}

# 終了のシグナルを受け取った時に実行する関数
function finish() {
    echo "終了します"
    exit 0
}

# DEVをserverとclientで並列実行する
function dev() {
    echo "開発環境を起動します、終了する場合はCtrl+Cを押してください"
    trap finish SIGINT SIGTERM
    dev_client &
    dev_server &
    wait
}

dev
