import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    console.log("Received event:", JSON.stringify(event, null, 2));

    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Hello from AWS Lambda!" }),
    };
};