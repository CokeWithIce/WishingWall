const  config={
    DEBUG:true,
    MYSQL:{
        host:'localhost',
        database:'wish',
        username:'root',
        password:'jklkof8821'
    }
};
if(process.env.NODE_ENV==="production"){
    config.MYSQL={
        host:'localhost',
        database:'wish',
        username:'root',
        password:'jklkof8821'
    }

}
module.exports=config;