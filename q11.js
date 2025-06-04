db.employees.aggregate([
    {
     $sort:{salary:-1}
    },
    {$limit:3}
])

//2
db.employees.aggregate([
    {
        $addFields:{annualsal:{$multiply:["$salary",12]}}
    }]);

//3
db.employees.aggregate([
    {$project:{
        name:1,
        email:1,
        location:1,
        salary:1,
        grade:{$cond:[{$gt:["$age",40]},"Band A","Band B"]}
    }
}
])