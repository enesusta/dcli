#!/bin/bash

docker start $(docker ps --filter "status=exited")