const bcrypt=require('bcrypt');
const saltRounds=10;

var bcryptService={
    hashPassword:function(plainPassword)
    {
        return bcrypt.hash(plainPassword,saltRounds);
    },
    comparePassword:function(plainPassword,hashPassword)
    {
        return bcrypt.compare(plainPassword,hashPassword);
    }
}

module.exports=bcryptService;