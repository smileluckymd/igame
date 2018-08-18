import request from '../utils/request';
import { odooCall } from '../utils/odooUtils';
import { toArray } from '../utils/odooUtils';

export async function queryUsers() {
 // return request('/json/api');
 const uid = JSON.parse(localStorage.userMSG).uid;
 const model = 'res.partner';
 const method = 'search_read2';
 const dm = [toArray('id', '=', uid)];
 const args = [dm, ['name', 'ref', 'email']];
 const kwargs = { limit: 1, offset: 0, order: 'id desc' };
 return odooCall(model, method, args, kwargs);
  
}

export async function queryCurrent() {
  // return request('/json/api');
  const uid = JSON.parse(localStorage.userMSG).uid;
  const model = 'res.users';
  const method = 'search_read2';
  const dm = [toArray('id', '=', uid)];
  const args = [dm, ['name', 'ref', 'email']];
  const kwargs = { limit: 1, offset: 0, order: 'id desc' };
  return odooCall(model, method, args, kwargs);
}


