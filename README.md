Serverless
=================================================

Setup AWS credential
--------------------
```
serverless config credentials --provider aws --key <key> --secret <secret>
```

Create a Serverless Lambda
--------------------------
```
serverless create --template aws-nodejs --path serverless-spike
```

Deploy
------
```
serverless deploy --stage dev --region ap-southeast-2
```

Deploy Lambda only
------
```
serverless deploy function --function hello --stage dev --region ap-southeast-2
```

Remove
------
```
serverless remove -v --stage dev --region ap-southeast-2
```