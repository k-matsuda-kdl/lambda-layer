# lambda-layer
Typescript+samの環境で、共通関数をLambda Layerで管理するために試してみた。

## やったこと
- 共通関数は、/optで読み込む
- Lambda関数のLayerを使う方のBuildPropertiesに、Externalを追加して、buildの過程で除外読み込まないようにする。
- Layerの方もbuildが必要
  - Layerのbuildはtscで実施した。理由は、ファイルを個別に分けるため
- Layerもsam buildでbuildするため、Makefileでbuildするようにした
- Makefileないで、npm installするとエラーになるので、npm ciとした

## useage
### ローカルで動かす

``` bash
sam build
sam local start-api
```

http://127.0.0.1:3000/hello にアクセスすると`{"message":"hello world add:3 minus:1"}`と出るはず

### deployして動かす
自分の環境でdeployしてください。`samconfig.toml`は適宜調整してください（stack-nameも書かれてます）

``` bash
sam build
sam deploy
```

```
-------------------------------------------------------------------------------------------------------------------------
Outputs
-------------------------------------------------------------------------------------------------------------------------
Key                 HelloWorldFunctionIamRole                              
Description         Implicit IAM Role created for Hello World function
Value               arn:aws:iam::＊＊＊＊＊＊＊＊         

Key                 HelloWorldApi
Description         API Gateway endpoint URL for Prod stage for Hello World function
Value               https://＊＊＊＊＊＊＊＊/Prod/hello/                             

Key                 HelloWorldFunction
Description         Hello World Lambda Function ARN
Value               arn:aws:lambda:ap-northeast-1:＊＊＊＊＊＊＊＊
-------------------------------------------------------------------------------------------------------------------------
```

URLにアクセスして、同じ表示ならdeploy完了


