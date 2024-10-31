function skillsMember() {
    var member = {
        name: 'John Doe',
        age: 30,
        skills: ['HTML', 'CSS', 'JS'],
        details: function () {
            console.log(this.name + ' has ' + this.skills.length + ' skills');
        }
    };
    return member;
}