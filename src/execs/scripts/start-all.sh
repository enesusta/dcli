#!/bin/bash

docker start $(docker container ls -aq -f "status=exited")