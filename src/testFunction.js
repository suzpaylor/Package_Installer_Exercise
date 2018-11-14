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
    result = Array.from(result).join(', '); // after console test two - realized I need a space here :)
    return result;
    
}
let myTestOutput = packageInstaller(["KittenService: ", "Leetmeme: Cyberportal", "Cyberportal: Ice", "CamelCaser: KittenService", "Fraudstream: ", "Ice: Leetmeme"]);
    console.log(myTestOutput);

//Test Three in Console - Invalid Input is rejected!  Maximum call stack size exceeded at Loop
