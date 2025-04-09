

let x = (x,y,z) => {
    console.log("fiz Algo",x);
    console.log("fiz Algo",y);
    console.log("fiz Algo",z);
}

x(3,4,5)

function algo(num,f) {
    console.log("f",f);
    f()
}

//setInterval(fazAlgo,1000)
algo(5,fazAlgo())
