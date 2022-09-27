function solution(cacheSize, cities) {
    let answer = 0;
    let items = [];
  
    for (let i = 0; i < cities.length; i++) {
      let current = cities[i].toLowerCase();
      if (!items.includes(current)) {
        items.push(current)
        if (items.length > cacheSize) {
          items.shift()
        }
        answer += 5;
      } else {
        items = items.filter((city) => city !== current);
        items.push(current); 
        answer++; 
      }
    }
  
    return answer;
  }