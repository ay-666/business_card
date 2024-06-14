const zod = require('zod')

const cardSchema = zod.object({
    name:zod.string(),
    description: zod.string(),
    interests: zod.array(zod.string())
});

module.exports = { cardSchema };