function Slide(className) {
    var self = this;

    self.main = document.querySelector('.' + className);
    self.prev_btn = self.main.children[2].children[0];
    self.next_btn = self.main.children[2].children[1];
    self.margin = 0;
    self.prev = 0;

    self.first_slide = self.main.children[0].children[0];

    self.slide_div_length = self.first_slide.clientWidth;
    self.slider_length = self.main.children[0].childElementCount;

    self.main.children[0].style.transition = "all 0.5s";

    self.next_btn.addEventListener("click", function() {
        self.next();
    });

    self.prev_btn.addEventListener('click', function() {
        self.previous();
    });

    self.next = function() {
        self.prev++;
        self.margin -= self.slide_div_length + 20; // burada divin olcusu + margin qeder cixmasi ucun yazdim margini-de "slide_div_length" kimi goturmek olardi
        var slides_div_margin = self.main.children[0].style.marginLeft = self.margin + 'px'; //her click-liyende slides divi-i hereket edir lefte dogru
        if (self.prev >= self.slider_length - 4) {
            self.margin = 0;
            slides_div_margin = self.main.children[0].style.marginLeft = self.margin + 'px'; //her click-liyende slides divi-i hereket edir lefte dogru
            self.prev = 0;
        }
    }

    self.previous = function() {
        self.prev--;
        self.margin += self.slide_div_length + 20;
        var slides_div_margin = self.main.children[0].style.marginLeft = self.margin + 'px'; //her click-liyende slides divi-i hereket edir lefte dogru
        if (self.prev <= 0) {
            self.margin = -(self.slide_div_length + 20) * 4;
            self.prev = 5;
            var slides_div_margin = self.main.children[0].style.marginLeft = self.margin + 'px'; //her click-liyende slides divi-i hereket edir lefte dogru
        }
    }
}


function Human(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;

    this.getFullName = function() {
        return this.name + ' ' + this.surname;
    }
}