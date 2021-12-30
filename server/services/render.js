
exports.homeRoutes=(req,res)=>{
   res.render('index');
}

 exports.book=(req,res)=>{
    res.render('book.ejs');
 }

 exports.create=(req,res)=>{
    res.render('create.ejs');
 }

 exports.dashboard=(req,res)=>{
    res.render('dashboard.ejs');
 }

 exports.m_list=(req,res)=>{
    res.render('m_list.ejs');
 }

 exports.profile=(req,res)=>{
    res.render('profile.ejs');;
 }