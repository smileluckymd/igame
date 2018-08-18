import request from './request';
export function jsonrpc(url, body) {
  const params = {
    jsonrpc: 2.0,
    id: 1,
    method: 'call',
    params: body,
  };
  return request(url, {
    method: 'POST',
    body: params,
  });
}

export function toArray(a, b, c) {
  return [a, b, c];
}

export function odooResponse(response) {
  // TBD: response.error!!!!
  return response.result;
}

export function odooCall(model, method, args, kwargs = {}) {
  const params1 = {
    model: model,
    method: method,
    args: args,
    kwargs: kwargs,
  };
  return jsonrpc('/json/api?session_id=' + JSON.parse(localStorage.userMSG).sid, params1);
}
