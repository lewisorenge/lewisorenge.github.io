/* Typed.js */

function whiten(string) {
    return '<span style="color: white;">' + string + '</span>'
}

function getYearsBetween(sdt) {
    var date_difference = new Date(new Date() - sdt);
    var years = date_difference.toISOString().slice(0, 4) - 1970;
    var months = function (months) {
        if (months == 0) return '';
        if (months > 11) {
            years += 1;
            return '';
        }
        if (months == 1) {
            return ' and ' + months + ' Month';
        }
        return ' and ' + months + ' Months';
    };
    return years + ' Years' + months(date_difference.getMonth() + 1);
}

function typeOnTerminal() {

    var waitAndBreak = '^700 <br/>';
    var start = '<span class="margin-left--10 color-blue font-size-14 !important">➜:~</span>';
    var myStack = start + whiten('Skill Set?') + waitAndBreak + ['Kotlin', 'Java', 'Angular/Typescript', 'Django/Python', 'ReST API',  'MySQL', 'Postgres', 'Shell Scripting', 'HTML5/Bootstrap/CSS Ninja'].join(',^500 ');
    var experience = getYearsBetween(new Date("February 1 2019 00:00"));
    var yearsOfExperience = waitAndBreak + start + whiten('Experience?') + waitAndBreak + experience;
    var funGames = ['Travelling,' + ' Music and ' + 'Dancing'].join('^500, ');
    var currentStatus = waitAndBreak + start + whiten('My Fun time?') + waitAndBreak + funGames;
    var coolStuff = ['I volunteer to tutor orphans and also like telling stories to friends and collegues.'];
    var someOtherCoolStuffICanDo = waitAndBreak + start + whiten('Any cool stuff I can do?') + waitAndBreak + coolStuff;
    $('.typed').typed({
        strings: [myStack + yearsOfExperience + currentStatus],

    });
}


setInterval(draw, 100);

var images = ['trivial.png', 'wera.png', 'black.png'];
var imageBorders = ['border-color-coral', 'border-color-green', 'border-color-blue']

function switchMe() {
    document.getElementById('me-pic').src = '/images/logo/' + images[Math.floor(Math.random() * images.length)];
    var e = document.getElementById('me-pic-wrapper');
    var newClassName = imageBorders[Math.floor(Math.random() * imageBorders.length)];
    var list = e.className.split(' ').filter(function(className){
        return !className.match('border-color');
    });
    list.push(newClassName);
    e.className = list.join(' ');
}

setInterval(function () {
    switchMe();
}, 8000);
