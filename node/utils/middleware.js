

function checkBodyContainkeys(arr) {
    return (req, res, next) => {
        const { body } = req
        let keysnotfound = []
        const bodyOfKeys = Object.keys(body);
        arr = arr.map(element => {
            if (!bodyOfKeys.includes(element)) {
                keysnotfound.push(element)
            }
            return element
        });
        if (keysnotfound.length !== 0) {
            const missingKeysMessage = `body does not contain all the keys:'${keysnotfound.join("','")}',`;
            return res.status(403).send({ message: missingKeysMessage });
        } else {
            next();
        }
    }
}
module.exports = {
    checkBodyContainkeys
}