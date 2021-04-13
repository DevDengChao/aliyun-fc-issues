# Deploy larger zip then expected

本模块用于展示 `fun` 命令行工具 `3.6.21` 版部署函数时将大量不相关内容打包进压缩包, 并进行部署的问题.

涉及该问题的功能点可能与 `.funignore` 的解析以及 `fc-builder` 相关.

## 复现步骤

1. 在当前目录下执行 `npm run build`
1. 将 `../.fun/build/artifacts/funcraft/deply-larger-zip-then-expected` 文件夹以 `zip` 格式进行压缩
1. 记录手动压缩包的大小, 约 `480 Kb`
1. 在当前目录下执行 `npm run package`
1. 观察控制台输出内容, 发现 `fun` 上传了一个 `12.45 Mb` 的压缩包
    > A total of 7549 files files were compressed and the final size was 12.45 MB
1. 从 OSS 上将 `fun` 上传的压缩包下载到本地后进行解压.
    1. 发现其中包含 `.funignore` 指定的文件
    1. 发现其中包含 `devDependencies` 开发环境依赖的第三方库
