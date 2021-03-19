FROM nginx:stable

MAINTAINER xiaoyh

# 将 vue 生成的静态资源放入 nginx 的目录
COPY dist/  /usr/share/nginx/html/

# 修改 nginx 配置文件
COPY nginx.conf /etc/nginx/nginx.conf
