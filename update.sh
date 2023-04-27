#!/bin/bash
# 进入根目录
cd /

# 创建虚拟目录
if [ ! -d "/huasen-temp/huasenjio-compose" ]; then mkdir /huasen-temp; else rm -rf /huasen-temp/huasenjio-compose; fi

# 拉取最新源代码
cd /huasen-temp
git clone https://github.com/huasenjio/huasenjio-compose.git

# 停止容器
cd /huasenjio-compose
pwd
docker-compose down

# 删除旧文件
if [ ! -d "./huasen-log" ]; then echo "文件不存在"; else rm -rf ./huasen-log; fi
if [ ! -d "./huasen-nginx" ]; then echo "文件不存在"; else rm -rf ./huasen-nginx; fi
if [ ! -d "./huasen-server" ]; then echo "文件不存在"; else rm -rf ./huasen-server; fi
if [ ! -d "./huasen-frontend" ]; then echo "文件不存在"; else rm -rf ./huasen-frontend; fi

# 更新文件
mv -f /huasen-temp/huasenjio-compose/huasen-nginx /huasenjio-compose/huasen-nginx
mv -f /huasen-temp/huasenjio-compose/huasen-server /huasenjio-compose/huasen-server
mv -f /huasen-temp/huasenjio-compose/huasen-frontend /huasenjio-compose/huasen-frontend
mv -f /huasen-temp/huasenjio-compose/docker-compose.yml /huasenjio-compose/docker-compose.yml

# 合并静态资源
cp -frap /huasen-temp/huasenjio-compose/huasen-store/* /huasenjio-compose/huasen-store/

# 重新构建后端服务
docker-compose build server

# 重启容器
docker-compose up -d

# 清理废弃的数据卷和镜像
docker image prune -f
docker volume prune -f