import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { add } from '/opt/nodejs/add';

export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        const result = add(1, 2);
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'hello world' + result,
            }),
        };
    } catch (err) {
        console.log(err);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'some error happened',
            }),
        };
    }
};
