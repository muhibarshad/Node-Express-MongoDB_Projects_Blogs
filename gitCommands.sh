#!/usr/bin/env bash

function gitCommands(){
    git add -A
    git commit -m "Added:New Feature"
    git push origin main
}

message="Git commands executed Successfully"
gitCommands && echo $message
