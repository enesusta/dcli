#!/bin/bash

docker exec -t $1 pg_dumpall -c -U $2 > dump_`date +%d-%m-%Y"_"%H_%M_%S`.sql