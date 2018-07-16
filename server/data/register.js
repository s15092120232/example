db.system.js.save({_id:'register',value:function(phone){
    var count = db.col_user.count({phone:phone});
    if(count) return;
    db.col_user.insert({
        phone:phone,
        name:phone,
        pwd:'123'
     });
     return;
}})












