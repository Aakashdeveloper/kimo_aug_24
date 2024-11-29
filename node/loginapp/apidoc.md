// Register User
// LoginUser
// Get User Info
// Get all users

*GetAllUser/ (GET)

http://localhost:6001/api/auth/users

/*Register/ (POST)

https://localhost:6001m/api/auth/register 
(body) => {"name":"Aakash", "email":"aa@gmail.com","password":"12345678","phone":343432,role?":"user"}

*Login (POST)

https://localhost:6001/api/auth/login 
(body) => {"email":"aa@gmail.com","password":"12345678"} 
(response)=> {auth:true,token:'dgsdg'}

/*UserInfo/ (GET)

https://localhost:6001/api/auth/userinfo (Header) => {'x-access-token':'token value from login'}