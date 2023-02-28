const express = require("express");
const bodyParser = require("body-parser");
const e = require("express");
const { urlencoded } = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/',(req,res,next)=>{
    res.status(200).json({message:"hi ali"})
})
app.get('/page',(req,res,next)=>{
    res.status(200).json({message:"you went to page"})
})
// app.get('/page/name',(req,res,next)=>{
//     res.status(200).json({message:"hello word"})
// })
// app.get('/name/:name/:age',(req,res,next)=>{
//     console.log(req.params)
//     let n = req.params.name;
//     let a = req.params.age;
//     if(req.params.age>=20){

//         res.status(200).json({message:`welcome ${n} your age:${a}`})
//     }
//     else if(req.params.age>=15 && req.params.age<20){
//         res.status(200).json({message:req.params})
//     }
//     else{
//         res.status(200).json({message:'not'})
//     }
 

// })
app.get('/filter/:name/:mark',(req,res,next)=>{
    if(req.params.name=="mohammad"|| req.params.mark>18){
        res.status(200).json({message:'welcome'})
    }else{
        res.status(200).json({message:'not'})  
    }
})
app.get('/name/:name/:age',(req,res,next)=>{
    let n = req.params.name;
    let a = req.params.age;
    if(req.params.age>30){
        res.status(200).json({message:`okey.dear ${n} your age is ${a}`})
    }
    else if(req.params.age>20){
        res.status(200).json({message:`true.dear ${n} your age is ${a}`})
    }
    else if(req.params.age>15){
        res.status(200).json({message:`yes.dear ${n} your age is ${a}`})
    }
    else{
        res.status(200).json({message:'not'})
    }
})
app.get('/age/:age?',(req,res,next)=>{
    let a = req.params.age;
    if(a){
        res.status(200).json({message:`your age is ${a}`})
    }
    else{
        res.status(200).json({message:'You did not enter an age'})
    }
})
app.get('/number/:number',(req,res,next)=>{
   
    let number = req.params.number;
    switch(number){
      

    case '20' :
        res.status(200).json({message:'twenty'})
        break;
    case 19 :
        res.status(200).json({message:'nineteen'}) 
        break;
    case 18 :
        res.status(200).json({message:'eighteen'})
        break;
    case 17 :
        res.status(200).json({message:'seventeen'})
    default:
        res.status(200).json({message:'ok'})    
}

})
app.get('/numbers/:number1/:number2',(req,res,next)=>{
    let number1 =Number(req.params.number1);                 //Number = + = parsiinit
    let number2 =Number(req.params.number2);
    res.status(200).json({message:number1 + number2})
    
})

//REGISTER
// app.get('/register/:name/:lastName/:phoneNumber/:password/:repeatThePassword/:gender',(req,res,next)=>{
//     let name = req.params.name
//     let lastName = req.params.lastName
//     let phoneNumber = req.params.phoneNumber
//     let password = req.params.password
//     let repeatThePassword = req.params.repeatThePassword
//     let gender = req.params.gender
    
//     if(phoneNumber.length==11){
//         if(password.length>=3 && password.length<=7){
//             if(repeatThePassword==password){
//                 if(gender=='male'|| gender=='famle'){
//                     res.status(200).json({message:`welcom ${name} ${lastName} your phone number is ${phoneNumber} and your password is ${password}`})
//                 }
//                 else{
//                     res.status(200).json({message:"not register"})
//                 }
//             }
//             else{
//                 res.status(200).json({message:"your password is wrong"})
//             }
//         }
//         else{
//             res.status(200).json({message:'your password is wrong'})
//         }
//     }
//     else{
//         res.status(200).json({message:"Your phone number is wrong"})
//     }

// })  


//TEST
app.get('/test/:gender/:favoritecolor',(req,res,next)=>{
    let gender = req.params.gender
    let favoritecolor = req.params.favoritecolor
    if(gender=="famale"|| gender=="male"){
        if(favoritecolor=="red"||favoritecolor=="blue"||favoritecolor=="brown"||favoritecolor=="yellow"){
            if(gender=="famale" && favoritecolor=="yellow" ||favoritecolor=="blue"){
                res.status(200).json({message:"You are a lady of good taste"})
            }
            // else if(gender=="famale" && favoritecolor=="blue" ){
            //     res.status(200).json({message:"You are a lady of good taste"})
            // }
            else if(gender=="male"&& favoritecolor=="brown"){
                res.status(200).json({message:"You are a man of bad taste"})
            }
            else if(gender=="male"&& favoritecolor=="red"){
                res.status(200).json({message:"You are a man of bad taste"})
            }
            else{
                res.status(200).json({message:"You are a man or woman indifferent to colors"})
            }
        }
        else{
            res.status(200).json({message:"your information is not true"})
        }
    }
    else{
        res.status(200).json({message:"your information is not true"})
    }
})


//LOGIN
app.get('/login/:name/:lastName/:username/:password',(req,res,next)=>{
    let name = req.params.name
    let lastname = req.params.lastName
    let username = req.params.username
    let password = req.params.password
    if(username.length>=4 && username.length<=9){
        if(password.length>3 && password.length<8){
            if(username=="sajjad" && password=="2357"){
                res.status(200).json({message: `welcome ${name} ${lastname}`})
            }
            else{
                res.status(200).json({message:"your information is false"})
            }
        }
        else{
            res.status(200).json({message:"your password is incorrect"})
        }
    }
    else{
        res.status(200).json({message:"your username is incorrect"})
    }
})

//INFORMATION
app.get('/information/:username/:password/:phonenumber?',(req,res,next)=>{
    let username = req.params.username
    let password = req.params.password
    let phonenumber = req.params.phonenumber
    if(username.length>4){
        if(password.length>=4 && password.length<=9){
            if(phonenumber){
                res.status(200).json({message:`The information is correct and the mobile number is ${phonenumber}`})
            }
            else{
                res.status(200).json({message:"The information is correct, but you did not enter the mobile number"})
            }
        }
        else{
            res.status(200).json({message:"Please be careful in entering the information"})
        }
    }
    else{
        res.status(200).json({message:"Please be careful in entering the information"})
    }
})
app.get('/register/:name/:lastName/:phoneNumber/:password/:repeatThePassword/:gender',(req,res,next)=>{
    
        let name = req.params.name
        let lastName = req.params.lastName
        let phoneNumber = req.params.phoneNumber
        let password = req.params.password
        let repeatThePassword = req.params.repeatThePassword
        let gender = req.params.gender
        
        if(phoneNumber.length!=11){
            res.status(200).json({message:"Your phone number is wrong"})
        }
        if(password.length<3 && password.length>7){
            res.status(200).json({message:'your password is wrong'})
        }
        if(password!=repeatThePassword){
            res.status(200).json({message:'your password is wrong'})
        }
        if(gender!="male" && gender!="fmale"){
            res.status(200).json({message:"you are not register"})
        }
        else{
            res.status(200).json({message:`welcom ${name} ${lastName} your phone number is ${phoneNumber} and your password is ${password}`})
        }
    })  
    app.get('/test/person/:name/:lastname/:password/:gender',(req,res,next)=>{
        let name = req.params.name
        let lastname = req.params.lastname
        let password = req.params.password
        let gender = req.params.gender

        if(name.length<=3){
            res.status(200).json({message:"your name is false"})
        }
        if(password.length<4 && password.length>8){
            res.status(200).json({message:"you password is not true"})
        }
        if(gender!="male" && gender!="fmale"){
            res.status(200).json({message:"you are not a realy person"})
        }
        else{
            let person ={
                name:name,
                lastname:lastname,
                password:password,
                gender:gender
            }
            res.status(200).json({message:person})
        }

    })
    
    //USERINFO
    app.get('/userinfo/:username/:password',(req,res,next)=>{
        let username = req.params.username
        let password = req.params.password
        if(username.length<3 || username.length>8){
            res.status(200).json({message:"your username is not true"})
        }
        if(password.length<4 || password.length>10){
            res.status(200).json({message:"your password is false"})
        }
        if(username=="ali" && password=="3875"){
            res.status(200).json({message:"hi maneger"})
        }
        else if(username=="reza" && password=="54382"){
            res.status(200).json({message:"hi officer"})
        }
        else(
            res.status(200).json({message:"hi human"})
        )
    })



    //USERREGISTER
    app.get('/userregister/:username/:password/:age/:phonenumber',(req,res,next)=>{
        let username = req.params.username
        let password = req.params.password
        let age = req.params.age
        let phonenumber = req.params.phonenumber
        if(username.length>=3 && username.length<=7 && username[2]=='a'||username[2]=='b'||username=="c"){
            if(password.length>=3 && password.length<=8 && (password[2]=="1"||password[2]=="2"||password[2]=="8"||password[2]=="9")){
                if(age>=23){
                    if(phonenumber.length==10 && phonenumber[0]!="0"){
                        res.status(200).json({message:`dear ${username} welcome to our website`})
                    }
                    else{
                        res.status(200).json({message:"not register"})
                    }
                    
                }
                else{
                    res.status(200).json({message:"your are a kids"})
                }
            }
            else{
                res.status(200).json({message:"your password is incorrect"})
            }
        }
        else{
            res.status(200).json({message:"your username is incorrect"})
        }

    })
    let users=[];
    //GET INFORAMTION
    app.get('/getinformation/:name/:lastname/:username/:password/:phonenumber',(req,res,next)=>{
        
        let name = req.params.name
        let lastName = req.params.lastname
        let username = req.params.username
        let password = req.params.password
        let phonenumber = req.params.phonenumber
        if(name.length<4){
            res.status(200).json({message:"Your name is less than 4 letters "})
        }
        if(lastName.length<3){
            res.status(200).json({message:"Your family name is less than 3 letters "})
        }
        if(username.length<4 || username.length>12){
            res.status(200).json({message:"Your username must be between 4 and 12"})
        }
        if(password.length<3 || password.length>12){
            res.status(200).json({message:"Your password must be between 3 and 12"})
        }
        if(phonenumber.length!==10 && phonenumber[0]=="0"){
            res.status(200).json({message:"Your information is incorrect"})
        }
        else{
            let get={
                name:name,
                lastName:lastName,
                username:username,
                password:password,
                phonenumber:phonenumber,


            }
            users.push(get)
            res.status(200).json({message:'success to register'})
        }
    })
    app.get('/Show',(req,res,next)=>{
        res.status(200).json({message:users})
    })
    

    //REGISTERING
    let AGE = [];
    app.get('/registering/:username/:password/:phonenumber/:age',(req,res,next)=>{
        let username = req.params.username
        let password = req.params.password
        let phonenumber = req.params.phonenumber
        let age = req.params.age
        if(username.length<3){
            res.status(200).json({message:"your username is false"})
        }
        if(password.length<5){
            res.status(200).json({message:"your password is false"})
        }
        if(phonenumber.length!=10 && phonenumber[0]=="0"){
            res.status(200).json({message:"your phonenumber is false"})
        }
        else{
            let gets = {
                username:username,
                password:password,
                phonenumber:phonenumber,
                age:age
            }
            AGE.push(gets)
            res.status(200).json({message:"thanks"})
        }
    })
    let getsage = []
    app.get('/showdetails /:Age',(req,res,next)=>{
        let Age = req.params.Age
        for(let a=0;a<AGE.length;++a ){
            if(AGE[a].age>Age){
                getsage.push(AGE[a])
            } 
        }
        res.status(200).json({message:getsage})   
    }) 



    ////REGISTERINGUSERS////
    let registering = [];
    app.get('/registeruser/:username/:password/:phonenumber/:age',(req,res,next)=>{
        let username = req.params.username
        let password = req.params.password
        let phonenumber = req.params.phonenumber
        let age = req.params.age
        let ispasswordok = false
        if(password.length>=4 && password.length<=8){
            for(let d=0; d<password.length; ++d){
                if(password[d]!=0 && password[d]!=1 && password[d]!=2 && password[d]!=3 && password[d]!=4 && password[d]!=5 && password[d]!=6 && password[d]!=7 && password[d]!=8 && password[d]!=9 ){
                    ispasswordok = true
                }
            }
            if(ispasswordok){
                if(username.length>=3 && username.length<=8){
                    if(phonenumber.length==10 && phonenumber[0]!=0){
                        if(registering.length){
                            for(let i=0 ; i<registering.length;++i){
                                if(phonenumber== registering[i].phonenumber){
                                    res.status(200).json({message:"phonenumber is reapeat"})
                                }
                            }
                        }
                        let person = {
                            username:username,
                            password:password,
                            phonenumber:phonenumber,
                            age:age
                        }
                        registering.push(person)
                        res.status(200).json({message:"succsess"})
                    }
                    else{
                        res.status(200).json({message:"your phonenumber is false"})
                    }
                }
                else{
                    res.status(200).json({message:"your username is false"})
                }
            }
            else{
                res.status(200).json({message:"password not strong"})
            }
        }
        else{
            res.status(200).json({message:"password is incorrect"})
        }

    })



//********************//
////SCHOOLREGISTER////
// let school =[]
// app.get('/school/register/:name/:lastname/:age/:NationalCode/:phonenumber',(req,res,next)=>{
//     let name = req.params.name
//     let lastname = req.params.lastname
//     let age = req.params.age
//     let NationalCode = req.params.NationalCode
//     let phonenumber = req.params.phonenumber
    
//     if(age!=10&&age!=11&&age!=12&&age!=13&&age!=14&&age!=15&&age!=16 ){
//         res.status(200).json({message:"You must be between 10 and 16 years old"})
//     }
//     if(NationalCode.length!=10){
//         res.status(200).json({message:"Your national code must be 10 digits"})
//     }
//     if(school.length){
//         for(let i=0;i<school.length;++i){
//             if(NationalCode==school[i].NationalCode){
//                 res.status(200).json({message:"nationalcode is reapeat"})
//             }
//         }
//     }
//     if(phonenumber.length!=10 || phonenumber[0]=="0"){
//         res.status(200).json({message:"Mobile phone must be 10 digits and the first digit must not be zero"})
//     }
//     if(school.length){
//         for(let p=0;p<school.length;++p){
//             if(phonenumber==school[p].phonenumber){
//                 res.status(200).json({message:"phonenumber is reapeat"})
//             }
//         }
//     }
//         let student ={
//             name:name,
//             lastname:lastname,
//             age:age,
//             NationalCode:NationalCode,
//             phonenumber:phonenumber
//             }
//         school.push(student)
//         if(age==10){
//             res.status(200).json({message:`${name} ${lastname} is registered in first class`})
//         }
//         else if(age==11){
//             res.status(200).json({message:`${name} ${lastname} is registered in second class`})
//         }
//         else if(age==12||age==13||age==14||age==15||age==16){
//             res.status(200).json({message:`${name} ${lastname} is registered in sixth class`})
//         }
// })




////SCHOOLREGISTER////
let school =[]
app.get('/school/register/:name/:lastname/:age/:NationalCode/:phonenumber',(req,res,next)=>{

let{name,lastname,age,NationalCode,phonenumber}=req.params;

    // let name = req.params.name
    // let lastname = req.params.lastname
    // let age = req.params.age
    // let NationalCode = req.params.NationalCode
    // let phonenumber = req.params.phonenumber
    
    if(age!=10&&age!=11&&age!=12&&age!=13&&age!=14&&age!=15&&age!=16 ){
       return res.status(200).json({message:"You must be between 10 and 16 years old"})
    }
    if(NationalCode.length!=10){
        return res.status(200).json({message:"Your national code must be 10 digits"})
    }
    if(phonenumber.length!=10 || phonenumber[0]=="0"){
        return res.status(200).json({message:"Mobile phone must be 10 digits and the first digit must not be zero"})
    }
    if(school.length){
        for(let i=0;i<school.length;++i){
            if(NationalCode==school[i].NationalCode){
                return res.status(200).json({message:"nationalcode is reapeat"})
            }
        }
        for(let p=0;p<school.length;++p){
            if(phonenumber==school[p].phonenumber){
                return res.status(200).json({message:"phonenumber is reapeat"})
            }
        }
    }
    
    let graide=0;
    switch(age){
        case "10":
            graide=1
            break;
        case "11":
            graide=2
            break
        case "12":
            graide=3
            break;
        case "13":
                graide=4
                break;
        case "14":
            graide=5
            break;
        case "15":
            graide=6
            break;s
        case "16":
            graide=7
            break
    }
    
    let shownumber = []
    if(school.length){
        for(i=0;i<school.length;++i){
            if(school[i].graide==graide){
                shownumber.push(school[i])
            }
        }
    }
    if(shownumber.length>=3){
        return res.status(200).json({message:" class is full"})
            }
    
   
    
        let student ={
            name,
            lastname,
            age,
            NationalCode,
            phonenumber,
            graide
            }
        school.push(student)
        return res.status(200).json({message:school})
})
//searchStudent
app.get('/searchStudent/:grade?',(req,res,next)=>{
    let meanger = []
    let GRADE = req.params.grade
    if(GRADE){
        for(let d=0;d<school.length;++d){
            if(school[d].graide==GRADE){
                meanger.push(school[d])
            }
        }
      return  res.status(200).json({message:meanger})  
    }
    else{
        meanger.push(school)
        return  res.status(200).json({message:meanger}) 
    }
})




///HOSPITAL///
let mariz = []
app.get('/hospital/:name/:lastName/:nationalCode/:phoneNumber/:age',(req,res,next)=>{
    let{name,lastName,nationalCode,phoneNumber,age} = req.params

    if(name.length<5){
        return res.status(200).json({message:"larege than 5 charactor"})
    }
    if(lastName.length<5){
        return res.status(200).json({message:"You must be between 10 and 16 years old"})
    }
    if(nationalCode.length!=10){
        return res.status(200).json({message:"Your national code must be 10 digits"})
    }
    if(phoneNumber.length!=10 || phoneNumber[0]=="0"){
        return res.status(200).json({message:"Mobile phone must be 10 digits and the first digit must not be zero"})
    }
    if(mariz.length){
        for(let i=0;i<mariz.length;++i){
            if(nationalCode==mariz[i].nationalCode){
                return res.status(200).json({message:"nationalcode is reapeat"})
            }
        }
        for(let p=0;p<mariz.length;++p){
            if(phoneNumber==mariz[p].phoneNumber){
                return res.status(200).json({message:"phonenumber is reapeat"})
            }
        }
    }

    let shakhs = {
        name,
        lastName,
        nationalCode,
        phoneNumber,
        age
    }
    mariz.push(shakhs)
    return res.status(200).json({message:mariz})
})
app.get('/informationHospital/:AGE?/:AGETWO?',(req,res,next)=>{
    let modiriat = []
    let AGE = req.params.AGE
    let AGETWO = req.params.AGETWO
    if(AGE){
        for(let d=0;d<mariz.length;++d){
            if(mariz[d].age>AGE){
                modiriat.push(mariz[d])
            }
        }
      return  res.status(200).json({message:modiriat})  
    }
    else if(AGE && AGETWO){
        for(g=0;g<mariz.length;++g){
            if(mariz[d].age>AGE && mariz[d].age<AGETWO){
                modiriat.push(mariz[d])
        }    
    }
    return  res.status(200).json({message:modiriat})
 }
    else{
        modiriat.push(mariz)
        return  res.status(200).json({message:modiriat}) 
    }

})

// // // POST // // //
let post = []
app.post('/sender',(req,res,next)=>{
    let{name,lastName,age} = req.body
    console.log(age);
    if(age<20){
        return res.status(200).json({message:"false"})
    }
    else{
        let person = {
            name,
            lastName,
            age
        }
        post.push(person)
    }

    return res.status(200).json({message:post})
})

let registion = []
app.post('/office/register',(req,res,next)=>{
    let{name,lastName,age,nationalCode,phoneNumber}=req.body
    if(name.length<3){
        return res.status(200).json({message:"The name must be more than 3 numbers or more"})
    }
    if(lastName.length<3){
        return res.status(200).json({message:"The name must be more than 3 numbers or more"})
    }
    if(age<18){
        return res.status(200).json({message:"Age must be more than 18"})
    }
    if(nationalCode.length!=10){
        return res.status(200).json({message:"Your national code must be 10 digits"})
    }
    if(phoneNumber.length!=10 || phoneNumber[0]=="0"){
        return res.status(200).json({message:"Mobile phone must be 10 digits and the first digit must not be zero"})
    }
    if(registion.length){
        for(let i=0;i<registion.length;++i){
            if(nationalCode==registion[i].nationalCode){
                return res.status(200).json({message:"nationalcode is reapeat"})
            }
        }
        for(let p=0;p<registion.length;++p){
            if(phoneNumber==registion[p].phoneNumber){
                return res.status(200).json({message:"phonenumber is reapeat"})
            }
        }
    }
    
    let employye = {
        name,
        lastName,
        age,
        nationalCode,
        phoneNumber
    }
    registion.push(employye)
    return res.status(200).json({message:"Your registration was successful"})
})

app.get("/officeseurch/:nationalcode",(req,res,next)=>{
    // let seurch = []
    let nationalcode = req.params.nationalcode
    // if(nationalcode){
        for(let a=0;a<registion.length;++a){
            if(nationalcode==registion[a].nationalCode){
                return res.status(200).json({message:registion[a]})
            }
          
      //  }
    }
    // if(seurch.length==0){
    //     res.status(200).json({message:"No one has registered"})
    // }
    res.status(200).json({message:'no person'})
})
app.get('/officeer/:age?',(req,res,next)=>{ 
    let age = req.params.age
    if(age){
        let seurchs = []
        for(let b=0;b<registion.length;++b){
            if(age<registion[b].age){
                seurchs.push(registion[b])
            }
        }
        return res.status(200).json({message:seurchs}) 
    }
    else{
       // seurchs.push(registion)
        return res.status(200).json({message:registion})  
    }
})






///// TICKET ///////
let ticket = []
app.post('/register/ticket',(req,res,next)=>{
    let{name,lastName,phoneNumber,nationalCode,age,destination} = req.body
    if(name.length<3 || name.length>15){
        return res.status(200).json({message:"Your name must be between 3 and 15"}) 
    }
    if(lastName.length<3 || lastName.length>30){
        return res.status(200).json({message:"Your lastname must be between 3 and 15"})
    }
    if(phoneNumber.length!=10 || phoneNumber[0]=="0"){
        return res.status(200).json({message:"Mobile phone must be 10 digits and the first digit must not be zero"})
    }
    if(age<=10){
        return res.status(200).json({message:"You must be over 10 years old"})
    }
    if(nationalCode.length!=10){
        return res.status(200).json({message:"our national code must be 10 digits"})
    }
    if(ticket.length){
        for(let t=0;t<ticket.length;++t){
            if(nationalCode==ticket[t].nationalCode){
                return res.status(200).json({message:"nationalcode is reapeat"})
            }
        }
        for(let i=0;i<ticket.length;++i){
            if(phoneNumber==ticket[i].phoneNumber){
                return res.status(200).json({message:"phonenumber is reapeat"})
            }
        }
    }

    let Passenger ={
        name,
        lastName,
        phoneNumber,
        nationalCode,
        age,
        destination
    }
    
    ticket.push(Passenger)
    return res.status(200).json({message:"Your registration was successful"})

})

app.get('/ticketd/:destination',(req,res,next)=>{
    let destination = req.params.destination
    let des=[]
  
        for(let l=0;l<ticket.length;++l){
            if(destination==ticket[l].destination){
                des.push(ticket[l])
            }
            
        }
        if(des.length==0){
            return res.status(200).json({message:"no destination"}) 
        }
        return res.status(200).json({message:des}) 
   
     
})

app.get('/ticketn/:nationalCode',(req,res,next)=>{
    let nationalCode = req.params.nationalCode
    for(let n=0;n<ticket.length;++n){
        if(nationalCode==ticket[n].nationalCode){
            return res.status(200).json({message:ticket[n]})
        }
    }
    res.status(200).json({message:'no person'})
})

app.get('/ticketa/:age?',(req,res,next)=>{
    let age = req.params.age
    if(age){
        let byage = []
        for(let b=0;b<ticket.length;++b){
            if(age<ticket[b].age){
                byage.push(ticket[b])
            }
        }
        return res.status(200).json({message:byage.sort(function(a,b){return a.age-b.age})}) 
    }
    else{
        return res.status(200).json({message:ticket.sort(function(a,b){return a.age-b.age})})  
    }
})


//// DATE AND CLOCK /////
app.get('/clock',(req,res,next)=>{
let today = new Date().toLocaleDateString('fa-IR');
// res.status(200).json({message:today})
let todays = new Date().toLocaleDateString();
return res.status(200).json({inWord:todays ,inIran:today})
})



///BANK////
let bank = []
app.post('/register/bank',(req,res,next)=>{
    let{name,lastName,nationalCode,phoneNumber} = req.body
    if(name<3){
        return res.status(200).json({message:"Your name must be greater than three digits"})
    }
    if(lastName<3){
        return res.status(200).json({message:"Your name must be greater than three digits"})
    }
    if(nationalCode.length!=10){
        return res.status(200).json({message:"Your national code must be 10 digits"}) 
    }
    if(phoneNumber.length!=10 || phoneNumber[0]=="0"){
        return res.status(200).json({message:"Mobile phone must be 10 digits and the first digit must not be zero"})
    }
    if(bank.length){
        for(let b=0;b<bank.length;++b){
            if(nationalCode==bank[b].nationalCode){
                return res.status(200).json({message:"nationalcode is reapeat"})
            }
        }
        for(let k=0;k<bank.length;++k){
            if(phoneNumber==bank[k].phoneNumber){
                return res.status(200).json({message:"phoneNumber is reapeat"})
            }
        }
    }
    let date = new Date()

    let personbank = {
        name,
        lastName,
        nationalCode,
        phoneNumber,
        date
     }
     bank.push(personbank)
     return res.status(200).json({message:"Your registration was successful"})
})

app.get('/seebank/:nationalCode',(req,res,next)=>{
    let nationalCode = req.params.nationalCode
    if(nationalCode.length!=10){
        return res.status(200).json({message:"Your national code must be 10 digits"}) 
    }
    for(let m=0;m<bank.length;++m){
        let date = new Date(bank[m].date).toLocaleDateString('fa-IR')
        if(nationalCode==bank[m].nationalCode){
            return res.status(200).json({name:bank[m].name , lastName:bank[m].lastName , date:date}) 
        }
    }
    return res.status(200).json({message:"ni person"}) 
})






///OFFICER REGISTER////
let office = []
app.post('/officer/register',(req,res,next)=>{
    
    let{username,password,phoneNumber,gender} = req.body

    if(username.length<3 || username.length>8){
        return res.status(200).json({message:"between 3 and 8 "}) 
    }
    if(password.length<3  || password.length>8){
        return res.status(200).json({message:"between 3 and 8 "}) 
    }
    if(gender!="male" && gender!="fmale"){
        return res.status(200).json({message:"your gender is false"}) 
    }
    if(phoneNumber.length!=10 || phoneNumber[0]=="0"){
        return res.status(200).json({message:"Mobile phone must be 10 digits and the first digit must not be zero"})

    }
    if(office.length){
        for(let d=0 ;d<office.length;++d){
            if(phoneNumber==office[d].phoneNumber){
                return res.status(200).json({message:"phoneNumber reapeatet"}) 
            }
        }
        for(let t=0;t<office.length;++t){
            if(username==office[t].username){
                return res.status(200).json({message:"username reapeatet"}) 
            }
        }
    }
    let date = new Date()
    let OFFICER = {
        username,
        password,
        phoneNumber,
        gender,
        date
    }
    office.push(OFFICER)
    return res.status(200).json({message:"Your registration was successful"}) 
})
app.post('/officer/login',(req,res,next)=>{
    let{username,password} = req.body
    if(username.length<3 || username.length>8){
        return res.status(200).json({message:"between 3 and 8 "}) 
    }
    if(password.length<3 || password.length>8){
        return res.status(200).json({message:"between 3 and 8 "}) 
    }
    for(let y=0;y<office.length;++y){
        let dateregister = new Date(office[y].date).toLocaleDateString('fa-Ir')
        if(username==office[y].username && password==office[y].password){
            return res.status(200).json({username:office[y].username , password:office[y].password , gender:office[y].gender ,date:dateregister }) 
        }
    }
    return res.status(200).json({message:"NO PERSON "})

})









    


app.listen("4000");
