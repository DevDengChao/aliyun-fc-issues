# Unexpected request body

## 复现步骤

使用 `aliyunfc/runtime-custom:1.9.21` 镜像进行 `s local invoke -f request-body.json` 时, `request.body` 与 `request-body.json`
中的内容不一致 :

```log
expected body {"a": "b"}

actually body {}
```

详见 [local-invoke.cmd](./local-invoke.cmd), [main.js](./main.js)


参考 https://github.com/awesome-fc/fc-custom-demo/blob/master/nodejs12/event-demo/code/server.js 后, 切换至
`app.use(raw())` 也不行.
