
# My Lambda Project

This project is an AWS Lambda function built using Node.js, TypeScript, and Serverless Framework. The purpose of this project is to provide a serverless setup that can be deployed and managed through AWS and Serverless Framework.

## Prerequisites

- **Node.js** (LTS version recommended)
- **NPM** (comes with Node.js)
- **Serverless Framework**: To install globally, run:
  ```bash
  npm install -g serverless
  ```
- **AWS Account** and credentials configured for Serverless deployment.

## Project Structure

```
my-lambda-project/
├── src/
│   ├── handlers/       # Lambda handlers
│   ├── models/         # TypeScript types and interfaces
│   ├── services/       # Core business logic
│   └── utils/          # Utility functions
├── package.json        # Node.js dependencies and scripts
├── serverless.yml      # Serverless configuration file
└── tsconfig.json       # TypeScript configuration
```

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone git@github.com:Mischer/my-lambda-project.git
   cd my-lambda-project
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure AWS Credentials**:
   Make sure your AWS credentials are properly configured. You can configure them by running:
   ```bash
   aws configure
   ```
   Alternatively, add your credentials to `~/.aws/credentials`.

4. **Build the TypeScript project**:
   Compile TypeScript to JavaScript by running:
   ```bash
   npm run build
   ```

## Serverless Commands

### Deploy the Lambda function

To deploy the function to AWS, use:
```bash
serverless deploy
```

### Invoke the Lambda function

To invoke the deployed function in AWS:
```bash
serverless invoke -f hello
```

### Local Testing

To run the function locally with Serverless:
```bash
serverless invoke local -f hello
```

### Remove the deployed function

To remove the function and associated resources from AWS:
```bash
serverless remove
```

## Logging

View logs of the deployed Lambda function:
```bash
serverless logs -f hello
```

## Configuration Files

### serverless.yml

The `serverless.yml` file defines the Lambda function, provider configuration, and resources. Here’s an overview:

```yaml
provider:
   name: aws
   runtime: nodejs20.x
   region: eu-north-1
   environment:
      LOG_LEVEL: info

functions:
   helloWorld:
      handler: src/handlers/helloWorld.handler
      events:
         - http:
              path: hello
              method: get

plugins:
   - serverless-offline
```

### tsconfig.json

The `tsconfig.json` file includes TypeScript configurations to target ES2020, enforce strict type-checking, and set `dist` as the output directory for compiled JavaScript files.

## Testing

Use **Jest** or another testing framework to create unit tests for your handlers, services, and utilities. Ensure all tests pass before deploying.

To run the tests:
```bash
npm test
```

## Deployment Pipeline (optional)

For production-grade deployment, consider using CI/CD tools like **GitHub Actions**, **CircleCI**, or **AWS CodePipeline** to automate the deployment process.

---

## Contributing

Feel free to fork the repository, create a new branch, and submit a pull request. Ensure that code follows best practices and includes necessary tests.

## License

This project is open-source and available under the MIT License.
