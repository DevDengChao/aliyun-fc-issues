# Fc Error: RequestError: Error: connect ECONNREFUSED 127.0.0.1:80

## 复现步骤

使用 `aliyunfc/runtime-custom:1.9.21` 镜像进行 `s local invoke` 后, 退出容器时报错:

```log
Retry request to container for 3s, please make your function timeout longer
Fc Error: RequestError: Error: connect ECONNREFUSED 127.0.0.1:80
[object Object]
[2021-11-23 07:53:35] [INFO] [FC-LOCAL-INVOKE] - Exiting Container...
✖ Project default failed to execute:

TraceId:     xxxxxxxxxxxxx
Environment: @serverless-devs/s: 2.0.94, @serverless-devs/core: 0.1.14, win32-x64, node-v16.13.0
Documents:   https://www.serverless-devs.com
Discussions: https://github.com/Serverless-Devs/Serverless-Devs/discussions
Issues:      https://github.com/Serverless-Devs/Serverless-Devs/issues

ERROR:
Error: (HTTP code 404) no such container - No such container: xxxxxxxxxxxxx

Please copy traceId: xxxxxxxxxxxxx and join Dingding group: 33947367 for consultation.
You can run 's clean --cache' to prune Serverless devs.
And run again with the '--debug' option or 's -h' to get more logs.
```
