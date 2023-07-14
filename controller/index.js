
// function login(req,res){
//     res.render('index' , {title:"home"});
// };
// exports.login = login;

exports.Home = function Home(req,res){
    res.render('homepage' , {title:"home"});
};