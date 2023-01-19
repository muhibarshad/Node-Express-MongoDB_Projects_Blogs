#!/usr/bin/env bash

function gitCommands(){
    git add -A
    git commit -m "Commit message"
    git push origin master
}

message="Git commands executed Successfully"
gitCommands && echo $message
