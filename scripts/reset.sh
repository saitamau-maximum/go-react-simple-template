#!/bin/bash

PROJECT_PATH=$(
    cd $(dirname $0)
    pwd
)/..
CLIENT_PATH=$PROJECT_PATH/client
SERVER_PATH=$PROJECT_PATH/server

RED () {
    echo -e "\033[0;31m$1\033[0;39m"
}

BLUE () {
    echo -e "\033[0;34m$1\033[0;39m"
}

RED "データをリセットしますか？(db.sqlite3を削除します)"
echo "y/n で入力してください (y = yes, n = no)"
read ANSWER

if [ $ANSWER = "y" ]; then
    echo "データをリセットします"
    rm $SERVER_PATH/db.sqlite3
    BLUE "データをリセットしました"
else
    echo "キャンセルしました"
fi

