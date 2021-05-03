const db = require('../../data/dbConfig.js');

function find() {
    return db('users as u')
        .join('roles as r', 'u.role_id', 'r.role_id')
        .select('u.username', 'u.password', 'r.role_name as role');
}

function findBy(filter) {
    return db('users as u')
        .join('roles as r', 'u.role_id', 'r.role_id')
        .select('u.user_id', 'u.username', 'r.role_name as role', 'u.password')
        .where(filter);
}

async function add(user) {
    const [id] = await db('users').insert(user);
    return findById(id);
}

function findById(id) {
    return db('users as u')
        .join('roles as r', 'u.role_id', 'r.role_id')
        .select('u.user_id', 'u.username', 'r.role_name as role')
        .where('u.user_id', id)
        .first();
}

module.exports = {
    find,
    findBy,
    add,
    findById,
}