console.log('A S Y N C')

// # 1-Place the orderv-> 2 sec
// # 2-Cut the fruit -> 2 sec
// # 2-Add water and ice -> 1 sec
// # 3-Start the machine -> 1 sec
// # 4-Select container -> 2 sec
// # 5-Select Toppings -> 3 sec
// # 6-Serve Ice cream -> 2 sec



// order from customer
// fetch ingredients
// start production
// serve

let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
};

/*
let order = (fruit_name,call_production) => {
    console.log('order placed');
    setTimeout(()=>{
        console.log(`${stocks.Fruits[fruit_name]} is selected`);
        call_production();
    },2000)
    
}

let production = () => {
    setTimeout(()=>{
        console.log('production started');
        setTimeout(()=>{
            console.log('the fruits has been chopped');
            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} is added`);
                setTimeout(()=>{
                    console.log('machine has been started');
                    setTimeout(()=>{
                        console.log(`${stocks.holder[0]} has been selected`);
                        setTimeout(()=>{
                            console.log(`${stocks.toppings[0]} is added as topping`);
                            setTimeout(()=>{
                                console.log('ice cream served');
                            },2000)
                        },3000);
                    },2000)
                },1000)
            },1000)
        },2000)
    },0)
}

order(0,production);

*/


/*

-> relationship between time and work
-> promise chaining
-> error handling
-> finally handler

*/ 

let is_shop_open = true;

let order = (time,work) => {
    return new Promise((resolve,reject)=>{
        if(is_shop_open){
            setTimeout(()=>{
                resolve(work());
            },time)
        }
        else{
            reject(console.log('our shop is closed'));
        }
    } )
}


order(2000, ()=>console.log(`${stocks.Fruits[2]} was selected`))
.then(()=>{
    return order(2000,()=>{
        console.log('production is started');
    })
})
.then(()=>{
    return order(1000,()=>{
        console.log('fruits are chopped');
    })
})

