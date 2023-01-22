console.log('hello')

nums = [2,7,11,15];

target = 9;

for (let i = 0; i < nums.length; i++) {
    const elementi = nums[i];
    for (let j = i+1 ; j < nums.length; j++) {
        const elementj = nums[j];
        if(elementi + elementj == target) {
            console.log([i, j])
            return
        }
    }
    
}
//not sure about the complexity