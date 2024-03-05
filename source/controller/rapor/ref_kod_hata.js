const sql = require('mssql');
const config = require('../../database/sql_config.js');
const refQuery = require('../../database/querys/ref_kod_hatası.js');

exports.getFunction = async (req,res) => {
    let errorMessage = "";
    let queryData;

    try {
        await sql.connect(config);
        let response = await new sql.Request().query(refQuery);
        queryData = response.recordSet;
    } catch (error) {
        errorMessage = error;
    }finally {
        sql.close();
    }

    res.render('rapor/ref_kod_hata.ejs',{
        message:errorMessage,
        data:queryData,
        title: "REFERANS HESAP KOD HATALARI"});
}