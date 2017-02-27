require('dotenv').config();

export const v1Protocol = process.env.V1Protocol;
export const v1Port = process.env.V1Port;
export const v1Host = process.env.V1Host;
export const v1Instance = process.env.V1Instance;
export const v1AccessToken = process.env.V1AccessToken;
export const v1RootUrl = `${v1Protocol}://${v1Host}:${v1Port}/${v1Instance}`;

export const PORT = process.env.PORT;