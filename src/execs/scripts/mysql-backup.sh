#!/bin/bash

docker exec -t $1 mysqldump -u $2 --password=$3 $4 > dump_`date +%d-%m-%Y"_"%H_%M_%S`.sql