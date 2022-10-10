import { w2popup,w2alert,w2confirm,w2prompt, w2utils, w2toolbar, query, w2layout, w2sidebar, w2field } from 'https://rawgit.com/vitmalina/w2ui/master/dist/w2ui.es6.min.js'

window.popup2 = function() {
    w2popup.open({
        title: 'Plasma Editor',
        width: 800,
        height: 500,
        text: '<textarea id="plasma-editor" style="width: 780px; height: 370px; resize: none;" autocomplete="on"></textarea>',
        actions: ['Show Message'],
        //showMax: true
    })
	    .showMessage(() => {
        showMessage('Plasma Editor Beta 2 by Badless and qubiX00')
    })
}

let config = {
    layout: {
        name: 'layout',
        padding: 0,
        panels: [
            { type: 'left', size: 200, resizable: false, minSize: 120 },
            { type: 'main', minSize: 350, overflow: 'hidden' }
        ]
    },
    sidebar: {
        name: 'sidebar',
        nodes: [
            { id: 'general', text: 'General', group: true, expanded: true,
                nodes: [
                    { id: 'html', text: 'Welcome', icon: 'w2ui-icon-info', selected: true },
                    { id: 'html2', text: 'Appearance', icon: 'w2ui-icon-settings' }
                ]
            }
        ],
        onClick(event) {
            switch (event.target) {
                case 'html':
                    layout.html('main', html)
                    break
                case 'html2':
                    layout.html('main', html2)
                    break
            }
        }
    }
}

// initialization in memory
let layout = new w2layout(config.layout)
let sidebar = new w2sidebar(config.sidebar)
let html = `
<center><img src="../images/welcome.png" width=100px height=100px />
<br><h2 style="height: 30px">Welcome to NeuOS: Open Source OS runnable in your browser!</h2><br>
<button class="w2ui-btn" style="cursor: pointer; width: 128px; height: 128px;" onclick="window.open("https://discord.gg/aj88jARKux", "_self")">
<img style="cursor: pointer;" src="../images/logo_64x64.png"/>
<p>Our Discord</p>
</button>
<br><br>
<p>
Our OS doesn't have any ads, its free to use and we don't want to change it!<br>
Please consider <a href="https://paypal.me/badlesstv">donating</a> to help us get domain. Thanks :)
</p>
</center>
`;
let html2 = `
<center>
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="https://rawgit.com/vitmalina/w2ui/master/dist/w2ui.min.css">
</head>
<body>

<div style="height: 20px"></div>
<div class="w2ui-field w2ui-span3">
    <label>Theme:</label>
    <div>
        <input type="theme" placeholder="Type to search">
    </div>
</div>
<div style="height: 10px"></div>
<style>
.w2ui-field input {
    width: 200px;
}
.w2ui-field > div > span {
    margin-left: 20px;
}
</style>

<script type="module">
import { w2field, query } from 'https://rawgit.com/vitmalina/w2ui/master/dist/w2ui.es6.min.js'

let themes = ['Coming Soon!', 'Coming Soon!'];
themes.sort();
new w2field('list', { el: query('input[type=theme]')[0], items: themes, match: 'contain', markSearch: true })
</script>

</body>
</html>
</center>
`;

window.openPopup = function openPopup() {
    w2popup.open({
        title: 'Settings',
        width: 800,
        height: 600,
        showMax: false,
        body: '<div id="main" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px;"></div>'
    })
    .then(() => {
        layout.render('#w2ui-popup #main')
        layout.html('left', sidebar)
        layout.html('main', html)
    })
}

window.showMessage = function(text) {
    w2popup.message({
        text,
        width: 400,
        height: 180,
        hideOn: ['esc', 'click']
    });
}

window.popup3 = function() {
    w2popup.open({
        title: 'Plasma Software',
        width: 400,
        height: 250,
        text: `<h1>Coming Soon!</h1>`
    })
}

window.showPrompt = function() {
    w2prompt({
        title: w2utils.lang('Search'),
        width: 400,
        height: 200,
        label: 'Open',
        value: '',
        attrs: 'style="width: 200px" placeholder="Type here..."',
        btn_ok: {
            text: 'Open',
            class: 'ok-class',
            style: 'color: blue'
        },
        btn_cancel: {
            text: 'Cancel',
            class: 'ok-class'
        },
    })
    .change((event) => {
        console.log('change', event.detail.originalEvent.target.value)
    })
    .ok((event) => {
        if (event.detail.value == "plasma-editor") {
            popup2();
        }
    })
    .cancel((event) => {
        console.log('cancel')
    })
}

window.popup4 = function() {
    w2popup.open({
        title: 'Tetris',
        width: 600,
        height: 500,
        text: '<iframe height=440 width=535 src="https://www.freetetris.org/resources/project-freetetrisorg/game/game-25E7B6A99A47F331/if_game_html5.php?p=d&cbidg=25E7B6A99A47F331"></iframe>',
        //showMax: true
    })
}

window.popup5 = function() {
    w2popup.open({
        width: 1280,
        height: 720,
        title: 'Plasma Web',
        text: '<iframe id="urlInput" height=585 width=1250 src="https://www.metacrawler.com/serp?q=Use URL Button (bottom)&sc=o2jmzhEuXvyE20"></iframe>',
        actions: {
            URL() {
                w2prompt('Enter URL:')
                    .ok(event => {
                        document.getElementById("urlInput").src = "https://www.metacrawler.com/serp?q=" + event.detail.value + "&sc=o2jmzhEuXvyE20";
                        console.log('value=', event.detail.value)
                    })
            },
            More() {
                counter = 0
                show()
            }
        },
        showMax: false
    });
}

window.popup6 = function() {
    w2popup.open({
        width: 900,
        height: 600,
        title: 'Minecraft',
        text: '<iframe height=482 width=856 src="https://g.deev.is/eaglercraft/"></iframe>',
        showMax: false,
        actions: ['Fullscreen'],
    })
    .fullscreen(() => {
        window.open("https://g.deev.is/eaglercraft/","_self")
    })
}

new w2toolbar({
    box: '#toolbar',
    name: 'toolbar',
    items: [
        { type: 'button', id: 'item1', icon: 'w2ui-icon-search' },
		{ type: 'break' },
        { type: 'button', id: 'item2', text: 'Settings', icon: 'w2ui-icon-settings' },
        { type: 'button', id: 'item3', text: 'Editor', icon: 'w2ui-icon-pencil' },
        { type: 'button', id: 'item4', text: 'Tetris', icon: 'w2ui-icon-columns' },
		{ type: 'button', id: 'item5', text: 'Web', icon: 'w2ui-icon-drop' },
        { type: 'button', id: 'item6', text: 'Minecraft', icon: 'w2ui-icon-drop' },
        { type: 'button', id: 'item7', text: 'Software', icon: 'w2ui-icon-settings' },
        { type: 'break' },
        { type: 'button', id: 'item8', text: 'Our Discord', icon: 'w2ui-icon-info' },
    ],
    onClick(event) {
        if (event.target == 'item1') {
            let where = query('#in-the-box').prop('checked') ? '#preview-box' : undefined
            w2utils.notify('Coming Soon!', { timeout: 2000, where: query('#preview-box'), where });
        }
        if (event.target == 'item2') {
            openPopup();
        }
        if (event.target == 'item3') {
            popup2();
        }
        if (event.target == "item4") {
            popup4();
        }
		if (event.target == "item5") {
            popup5();
        }
        if (event.target == 'item6') {
            popup6();
        }
        if (event.target == 'item7') {
            popup3();
        }
		if (event.target == 'item8') {
            window.open("https://discord.gg/aj88jARKux", "_self");
        }

    }
})