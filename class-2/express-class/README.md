# Your logic is like doctor

# Request methods

```
1. GET - Going for consultation to get a check up 
2. POST - Going to get a new kidney inserted 
3. PUT - Going to get a kidney replaced
4. DELETE - Going to get a kidney removed 

```

# Status Codes

```
1. 200 - Evertying went fine
2. 404 - Doctor is not in hospital
3. 500 - Mid Surgery light went away
4. 411 - Inputs were incorrect, wrong person came to surgery
5. 403 - You were banned from the hospital

```

# Create an in memory hospital 

```
1. GET - User can check 4 routes (4 things that the hospital can do)
2. POST - User can add a new kidney 
3. PUT - User can replace a kidney, make it healthy
4. DELETE - User can remove a kidney 

```

# Creating an in memory array that looks like this :

```
var users = [{
    name: "Jhon",
    kidneys: [{
        healthy: false
    },{
        health: true
    }]
}]

console.log(users[0]);

```



# Http server for file

```
const express = require("express");
const fs = require("fs");

const app = express();

// for widcard within that route "/:name"

app.get("/files/:fileName", function(req, res){
    const name = req.params.fileName;
    console.log(name);
    fs.readFile(name, "utf-8", function (err, data){
        res.json({
            data
        });
    })
});

app.listen(3000);
```