Slide.prototype.changeTransition = function(num) {
    this.main.children[0].style.transition = "all " + num + "s";
}

var a = new Slide("sertifikat");
var b = new Slide("team");

a.changeTransition(0.12);

b.changeTransition(4);

var person = new Human('Kamran', 'Cebiyev', 27);

console.log(person);

Human.prototype.setBirthday = function(dogum_ili) {
    this.birthday = dogum_ili;
}

Human.prototype.getBirthday = function() {
    return this.birthday;
}


var person1 = new Human('Isa', 'Abbasli', 21);

person1.setBirthday('1996');

console.log(person1);