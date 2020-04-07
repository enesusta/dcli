
## dcli

<div align="center">

[![Build Status](https://travis-ci.com/enesusta/dcli.svg?branch=master)](https://travis-ci.com/enesusta/dcli)
![npm](https://img.shields.io/npm/v/@enesusta/dcli?color=green)
[![install size](https://packagephobia.now.sh/badge?p=@enesusta/dcli)](https://packagephobia.now.sh/result?p=@enesusta/dcli)
[![HitCount](http://hits.dwyl.com/enesusta/dcli.svg)](http://hits.dwyl.com/enesusta/dcli)

**dcli** is cli for Docker.

</div>

<p align="center">
<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--J3E8KS70--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn-images-1.medium.com/max/1024/1%2AE33brkN6zivLSb-D9i-CdQ.png" width=300 height=300>
</p>


- [dcli](#dcli)
  - [Installation](#installation)
  - [Commands](#commands)
    - [default](#default)
      - [-c](#c)
      - [-i](#i)
      - [-v](#v)
    - [start](#start)
      - [start all](#start-all)
    - [stop](#stop)
      - [stop all](#stop-all)
    - [rm](#rm)
      - [rm force](#rm-force)
    - [rmi](#rmi)
      - [rmi -f](#rmi--f)
    - [inspect](#inspect)
      - [inspect only IPAddress](#inspect-only-ipaddress)
    - [dump](#dump)


### Installation

```npm
npm i @enesusta/dcli -g
```

**Note:**

Make sure that variables like **grep**, **docker**, **sh** are defined on your `$PATH` variable.

Otherwise it may not work.


### Commands

#### default

default command has **three** options.

##### -c

Lists only **containers**

```bash
dcli -c
```

##### -i

Lists only **images**

```bash
dcli -i
```

##### -v

Lists only **volumes**

```bash
dcli -v
```

![](https://raw.githubusercontent.com/enesusta/assets-host-for-github-pages/assets/dcli/dcli.gif)

#### start

**Starts** a container that you already have.
**start** command has **1 option**.

```bash
dcli start
```

![](https://raw.githubusercontent.com/enesusta/assets-host-for-github-pages/assets/dcli/dcli-start-1.gif)

##### start all

Starts **whole** containers that you already have.

```bash
dcli start --all
```
![](https://raw.githubusercontent.com/enesusta/assets-host-for-github-pages/assets/dcli/dcli-start-2.gif)

#### stop

**Stops** a container that you already have.

```bash
dcli stop
```
![]( https://raw.githubusercontent.com/enesusta/assets-host-for-github-pages/assets/dcli/dcli-stop-1.gif)

##### stop all

Stops **whole** containers that you already have.

```bash
dcli stop --all
```

![](https://raw.githubusercontent.com/enesusta/assets-host-for-github-pages/assets/dcli/dcli-stop-2.gif)

#### rm

Removes a container that you already have.
**rm** command has **1 option**

```bash
dcli rm
```


![](https://raw.githubusercontent.com/enesusta/assets-host-for-github-pages/assets/dcli/dcli-rm-1.gif)

##### rm force

Removes a contaniner that is **running**

```bash
dcli rm -f
```
or 

```bash
dcli rm --force
```

#### rmi

Removes a image that you already have.

```bash
dcli rmi
```

![](https://raw.githubusercontent.com/enesusta/assets-host-for-github-pages/assets/dcli/dcli-rmi-1.gif)

##### rmi -f



#### inspect

Inspects a container that you already have.  

**inspect** command has **1 option**.

```bash
dcli inspect
```

![](https://raw.githubusercontent.com/enesusta/assets-host-for-github-pages/assets/dcli/dcli-inspect.gif)


##### inspect only IPAddress

This option uses `grep` via `unix pipes`.

```bash
dcli inspect -h
```

`-h` means host.

![]( https://raw.githubusercontent.com/enesusta/assets-host-for-github-pages/assets/dcli/dcli-inspect-2.gif)

#### dump

**dcli** can even dump your database containers.

- For **postgre** containers;

```bash
dcli dump --postgre
```

![](https://raw.githubusercontent.com/enesusta/assets-host-for-github-pages/assets/dcli/dcli-dump-postgre.gif)

- For **mysql** containers;

```bash
dcli dump --mysql
```

![]( https://raw.githubusercontent.com/enesusta/assets-host-for-github-pages/assets/dcli/dcli-dump-mysql.gif)


































