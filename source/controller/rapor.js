const sql = require('mssql');
const config = require('../database/sql_config.js');
const query = require('../database/querys/departman_bazlı_tablo.js');



exports.getRapor = async (req, res) => {
    try {
        // MSSQL bağlantısını kur
        await sql.connect(config);

        // Sorguyu hazırla ve çalıştır
        const result = await sql.query`SELECT * FROM TBLMUHFIS WHERE TARIH BETWEEN '2024-01-01' AND '2024-01-31' AND REF_KOD = '11008-770'`;

        console.log(query);

        // Sorgu başarılı, sonucu ekrana gönder
        res.render('rapor/sql_rapor', {
            title: 'Rapor',
            bodys: '<h3>Merhabalar</h3>',
            data: result.recordset // Sorgu sonucunu "data" adı altında şablonla paylaş
        });
    } catch (err) {
        console.log('Hata oluştu:', err);
        res.status(500).send('Bir hata oluştu');
    } finally {
        // MSSQL bağlantısını kapat
        await sql.close();
    }
};

exports.postRapor = (req,res) => {

};



