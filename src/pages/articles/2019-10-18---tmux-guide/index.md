---
title: tmux 사용법
date: 2019-10-18T00:00:00
layout: post
draft: false
path: "/posts/tmux-guide"
category: "tmux"
tags:
- "linux"
- "shortcut"
description: "tmux(terminal multiplexer) 구성 방법 및 단축키 정리"
---
 

> tmux(terminal multiplexer) 구성 방법 및 단축키 정리

## 1.tmux 설치

``` shell
sudo apt install tmux
```

## 2.tmux 용어 정리

* sessions : tmux 기본 실행 단위
* windows : session에 존재하는 탭
* panes : windows 내에서 화면을 분할 하여 사용
* prefix : tmux 단축키를 사용하기 전에 입력해야 하는 키 조합(Default : `ctrl + b` )

## 3.tmux 단축키

### 3.1.sessions

``` shell
# session 생성
tmux
tmux new -s {{session name}}

# session 목록 조회
tmux ls

# session attach
tmux attach
tmux attach -t {{session name}}

# session detach(session 내에서)
<prefix> + d

# session 강제 종료
tmux kill-session -t {{session name}}
```

### 3.3.windows

``` shell
# windows 생성
<prefix> + c

# 윈도우 이름 변경
<prefix> + ,

# window 이동
## next
<prefix> + n
## previous
<prefix> + p

## 특정 window로 이동
<prefix> + {{window number}}
```

### 3.4.panes

``` shell
# pane 분할
## 횡
<prefix> + %
## 종
<prefix> + "

# pane 이동
## 지정
<prefix> + q + {{화면에 표시되는 숫자}}
## 순차
<prefix> + o

# pane 삭제
<prefix> + x
ctrl + d

# pane size 변경
## command prompt 진입 후(<prefix> + :)
resize-pane -L 10
resize-pane -R 10
resize-pane -D 10
resize-pane -U 10

# pane layout 변경
<prefix> + spacebar
```

### 3.5. 추가 옵션

``` shell
# pane 전체에 키입력 보내기(동시 입력)
## command prompt 진입 후(<prefix> + :)
setw synchronize-panes
```

## Reference

* <https://github.com/tmux/tmux/wiki>
* <http://man.openbsd.org/OpenBSD-current/man1/tmux.1>
