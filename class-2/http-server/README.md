# Express js for creating server (for backend)

# How do i create an HTTP server ?

```
const express = require("express")

function CalculateSum(n) {
    let ans = 0;
    for (let i=1; i<=n; i++) {
        ans = ans+i;
    }
    return ans;
}

consy app = express();

app.get("/", function(req,res){
    const n = req.query.n;
    const ans = calculateSum(n)
    res.send(ans);
})

app.listen(3000);

```