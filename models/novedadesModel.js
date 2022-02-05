var pool=require('./bd');

async function getNovedades(user, password){
    try{
        var query = 'select * from novedades';
        var rows = await pool.query(query, [user, md5(password)]);
        return rows[0];
    } catch(error){
        console.log(error);
    }

}
module.exports = {}