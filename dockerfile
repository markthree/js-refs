FROM node:20-alpine AS builder

WORKDIR /app
COPY . /app/

RUN npm install pnpm -g
RUN pnpm install
RUN pnpm build

FROM pierrezemb/gostatic@sha256:7e5718f98f2172f7c8dffd152ef0b203873ba889c8d838b2e730484fc71f6acd
COPY --from=builder /app/dist /srv/http


EXPOSE 8043

# 内部静态服务
# -fallback 用来指定 spa
CMD ["/goStatic", "-fallback" "/index.html"]

