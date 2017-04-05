function Noqte(idName, setting = {}) {
    var self = this;



    self.main = document.getElementById(idName);
    self.img = self.main.children[0];

    self.img.addEventListener('click', function(event) {
        self.x = event.x;
        self.y = event.y;

        self.span = document.createElement('span');
        self.span.className = 'badge';
        self.span.style.top = self.y;
        self.span.style.left = self.x;
        if (setting.width !== 'undefined') {
            self.span.style.width = setting.width;
        }

        if (setting.background !== 'undefined') {
            self.span.style.background = setting.background;
        }

        if (setting.height !== 'undefined') {
            self.span.style.height = setting.height;
        }
        self.main.appendChild(self.span);
    });

    self.main.addEventListener('click', function(event) {
        if (event.target.className == 'badge') {
            self.main.removeChild(event.target);
        }
    })
}