function whiten(string) {
    return '<span style="color: #f0f4f8;">' + string + '</span>';
}

function typeOnTerminal() {
    var waitAndBreak = '^600 <br/>';
    var start = '<span class="prompt">➜</span>';
    var myStack =
        start +
        whiten('Skill set?') +
        waitAndBreak +
        [
            'Laravel',
            'Vue.js',
            'PHP',
            'JavaScript',
            'AWS Cloud',
            'Docker',
            'CI/CD',
            'MySQL / Postgres',
            'REST APIs',
            'DevOps'
        ].join(',^400 ');

    var yearsOfExperience =
        waitAndBreak + start + whiten('Experience?') + waitAndBreak + '7 years 8 months';

    var focus =
        waitAndBreak +
        start +
        whiten('Focus?') +
        waitAndBreak +
        'Full Stack Software Engineer — Laravel, Vue.js, Cloud.';

    if (typeof jQuery === 'undefined' || !jQuery.fn.typed) {
        return;
    }

    jQuery('.typed').typed({
        strings: [myStack + yearsOfExperience + focus],
        typeSpeed: 28,
        backDelay: 1200,
        showCursor: true,
        cursorChar: '▋'
    });
}

document.getElementById('year') &&
    (document.getElementById('year').textContent = new Date().getFullYear());
