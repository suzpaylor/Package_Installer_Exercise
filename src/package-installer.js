export function packageInstaller(input) {
 
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
result = Array.from(result).join(', ');
return result; // Convert Set to Array
}

export default packageInstaller;