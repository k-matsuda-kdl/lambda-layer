import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { add } from '/opt/nodejs/add';
import { minus } from '/opt/nodejs/minus';

export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        const a = add(1, 2);
        const m = minus(2, 1);
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'hello world' + " add:" + a + " minus:" + m,
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
