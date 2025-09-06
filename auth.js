const passport = require('passport');// Authentication middleware
const LocalStrategy = require('passport-local').Strategy;
const Person = require('./models/Person');

passport.use(new LocalStrategy(async (USERNAME, password, done)=>{
  try{
    console.log('Received credentials:', USERNAME, password);
    const user =await  Person.findOne({username: USERNAME});
    if(!user)
      return done(null, false, {message: 'Incorrect username'});
    const isPassordMatch = user.password === password ? true : false;
    if(isPassordMatch){
      return done(null, user);
    }else{
      return done(null, false, {message: 'Incorrect password'});
    }

  }catch(err){
    return done(err);
  }
}));

module.exports = passport;