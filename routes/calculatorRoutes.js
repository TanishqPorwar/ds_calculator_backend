const router = require('express').Router();

function validate (a, b) {
    if (!a || !b || isNaN(a) || isNaN(b)) {
        return false
    }
    return true
}

router.post('/add', (req, res) => {
    const { a, b } = req.body;
    return validate(a, b) ?
        res.status(200).json({ "result": a + b }) : res.status(400).json({ "message": "invaild request" })
})

router.post('/subtract', (req, res) => {
    const { a, b } = req.body;

    return validate(a, b) ?
        res.status(200).json({ "result": a - b }) : res.status(400).json({ "message": "invaild request" })
})

router.post('/product', (req, res) => {
    const { a, b } = req.body;

    return validate(a, b) ?
        res.status(200).json({ "result": a * b }) : res.status(400).json({ "message": "invaild request" })
})

router.post('/divide', (req, res) => {
    const { a, b } = req.body;

    if (validate(a, b)) {
        res.status(400).json({ "message": "invaild request" })
    }
    return (b===0) ?
        res.status(200).json({ "result": a / b }) : res.status(400).json({ "message": "division by zero error" })
})

module.exports = router