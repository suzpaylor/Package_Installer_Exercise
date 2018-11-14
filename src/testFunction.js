function packageInstaller(input) {
    let result = new Set(),
        pairs = new Map(input.map(s => s.split(': '))),
        loop = (_, key) => { 
            if (pairs.get(key)) { 
                loop(_, pairs.get(key)); 
                pairs.set(key, null); 
            }
            
            result.add(key);
        };
    pairs.forEach(loop); 
    return [...result];
    
}
let myTestOutput = packageInstaller(["KittenService: ", "Leetmeme: Cyberportal", "Cyberportal: Ice",
    "CamelCaser: KittenService", "Fraudstream: Leetmeme", "Ice: "])
    console.log(myTestOutput);

//First Test in Console - output is an array - change function
