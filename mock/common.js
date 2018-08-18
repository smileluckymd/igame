import { user_read2, user_search_read2 } from './user';

function call_kw(model, method, args, kwargs) {
    // console.log(User);
    if (method === 'read2') {
        return read2(model, args, kwargs)
    }
    if (method === 'search_read2') {
        return search_read2(model, args, kwargs)
    }
}


export function odooJsonApi(req, res) {
    // console.log(req.body);
    const { params: { model, method, args, kwargs } } = req.body;
    let result = call_kw(model, method, args, kwargs);
    res.send({ jsonrpc: 2.0, id: 1, method: 'call', result: result });
    return;
}

function read2(model, ids, fields) {
    switch (model) {
        case 'res.users':
            return user_read2(ids, fields);
        default:
            break;
    }
}
function search_read2(model, domain, fields) {
    switch (model) {
        case 'res.users':
            return user_search_read2(domain, fields);
        default:
            break;
    }
}

