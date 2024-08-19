# k-matsuda-test-layers
TypescriptでLambdaLayerを試してみた

- Layerを使う方のBuildPropertiesに、Externalを追加しないと、buildしようとしてエラーになる
- Layerの方もbuildして、jsファイルにしておかないと、正しく読み込まない
  - Layerのbuildはtscで実施したが、esbuild使えるのか？
- ローカルファイルは /optで読めるみたい。

## Cleanup

To delete the sample application that you created, use the AWS CLI. Assuming you used your project name for the stack name, you can run the following:

```bash
sam delete --stack-name k-matsuda-test-layers
```

## Resources

See the [AWS SAM developer guide](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html) for an introduction to SAM specification, the SAM CLI, and serverless application concepts.

Next, you can use AWS Serverless Application Repository to deploy ready to use Apps that go beyond hello world samples and learn how authors developed their applications: [AWS Serverless Application Repository main page](https://aws.amazon.com/serverless/serverlessrepo/)
