const express = require('express')
const pool = require('../../db/db')

const index = {};

index.main = (req, res) => {
    res.render('login');
}

index.signPage = (req, res) => {
    res.render('signup')
}

index.signProcess = async (req, res) => {
    const { stdNo, stdPw, stdName, stdDe, stdTel, job } = req.body

    const condition = (stdNo != '') && (stdPw != '') && (stdName != '') && (stdDe != '') && (stdTel != '') && (job != 'none')

    const query = 'INSERT INTO users VALUES (?,?,?,?,?,?)'

    const idCheck = await pool.query('SELECT * FROM users WHERE student_id = ? ', [stdNo])
    const jobcode = await pool.query('SELECT * FROM job_position WHERE name = ? ', [job])

    if (condition) {
        if (idCheck[0].length == 0) {
            pool.query(query, [
                stdNo,
                stdPw,
                stdName,
                stdDe,
                stdTel,
                jobcode[0][0].code
            ])
        }
    }

}


module.exports = index;