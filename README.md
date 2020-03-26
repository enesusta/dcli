
## dcli
[![Build Status](https://travis-ci.com/enesusta/dcli.svg?branch=master)](https://travis-ci.com/enesusta/dcli)
![npm](https://img.shields.io/npm/v/@enesusta/dcli?color=green)
[![install size](https://packagephobia.now.sh/badge?p=@enesusta/dcli)](https://packagephobia.now.sh/result?p=@enesusta/dcli)

**dcli** is cli for Docker.

<p align="center">
<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--J3E8KS70--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn-images-1.medium.com/max/1024/1%2AE33brkN6zivLSb-D9i-CdQ.png" width=300 height=300>
</p>


- [dcli](#dcli)
  - [Installation](#installation)
  - [Commands](#commands)
    - [ls](#ls)
      - [ls containers](#ls-containers)
      - [ls images](#ls-images)
      - [ls volumes](#ls-volumes)
    - [start](#start)
      - [start all](#start-all)
    - [stop](#stop)
      - [stop all](#stop-all)
    - [rm](#rm)
      - [rm force](#rm-force)
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

#### ls

```bash
dcli ls
```

![](https://raw.githubusercontent.com/enesusta/assets-host-for-github-pages/assets/dcli/dcli-ls-1.gif)

**ls** command has three options.

##### ls containers

Lists only **containers.**

```bash
dcli ls -c
```

or 

```bash
dcli ls --container
```

##### ls images

Lists only **images.**

```bash
dcli ls -i
```

or

```bash
dcli ls --image
```

##### ls volumes

Lists only **volumes.**

```bash
dcli ls -v
```

or

```bash
dcli ls --volume
```

![](https://raw.githubusercontent.com/enesusta/assets-host-for-github-pages/assets/dcli/dcli-ls-3.gif)

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

![](https://raw.githubusercontent.com/enesusta/assets-host-for-github-pages/assets/dcli/dcli-rm-2.gif)


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
dcli inspect -i
```

`-i` means IPAddres.

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


































