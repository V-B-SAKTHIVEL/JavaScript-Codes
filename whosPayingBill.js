function whosPaying(names) {
    var nameIndex = Math.floor((Math.random() * 5));
    return names[nameIndex] + " is going to buy lunch today!";  
}

whosPaying(['Michael', 'Steve', 'Peter', 'James', 'John']);
