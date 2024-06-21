function skillsMember() {
    var member = {
        name: 'John Doe',
        age: 25,
        skills: ['JavaScript', 'HTML', 'CSS'],
        greet: function() {
            console.log('Hello, I am ' + this.name);
        }
    };

    return member;
}