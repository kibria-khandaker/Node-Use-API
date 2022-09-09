let rendomNum = 0;
const randomFun = (req, res, next) => {
    rendomNum++;
    console.log(rendomNum);

    // res.send('rendom finder')
    next()
};

module.exports = randomFun;