var pool=require('./bd');

async function getNovedades(usuario, password){
    try{
        var query = 'select * from novedades order by id desc';
        var rows = await pool.query(query);
        return rows;
    } catch(error){
        console.log(error);
    }

}

async function insertarNovedad(obj){
    try{
        var query = "insert into novedades set ? ";
        var rows = await pool.query(query,[obj]);
        return rows;
    }
    catch(error){
        console.log(error);
        throw error;
    }
}

async function eliminarNovedadById(id){
    try{
        var query = "delete from novedades where id = ? ";
        var rows = await pool.query(query,[id]);
        return rows;
    }
    catch(error){
        console.log(error);
        throw error;
    }
}

async function getNovedadById(id){
        var query = "select * from novedades where id = ?";
        var row = await pool.query(query, [id]);
        return row[0];
  
}
async function modificarNovedadById(obj, id){
    try{
        var query = "update novedades set ? where id = ? ";
        var rows = await pool.query(query,[obj, id]);
        return rows;
    }
    catch(error){
        console.log(error);
        throw error;
    }
}

module.exports = { getNovedades, insertarNovedad, eliminarNovedadById, modificarNovedadById, getNovedadById }