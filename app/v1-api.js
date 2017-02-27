import {readFileSync} from 'fs';
import axios from 'axios';
import sdk, {axiosConnector } from 'v1sdk';
import { v1RootUrl, v1Protocol, v1Port, v1Host, v1Instance, v1AccessToken  } from './env';

const axiosConnectedSdk = axiosConnector(axios)(sdk);
const isHttps = v1Protocol === 'https';
export const v1 = (token) => axiosConnectedSdk(v1Host, v1Instance, v1Port, isHttps).withAccessToken(token);

const MY_WORK_QUERY = readFileSync('./app/query.yaml', 'utf8');

function queryV1(query){ //can't use YAML with v1sdk
	const instance = axios.create({
		baseURL: v1RootUrl,
		headers: {
			'Authorization': v1AccessToken,
			'Content-Type': "text/plain"
		}
	});
	return instance.post("/query.v1", query);
}
export function getMyWork(){
	return queryV1(MY_WORK_QUERY);
}