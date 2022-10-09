import { w2popup,w2alert,w2confirm,w2prompt, w2utils, w2toolbar, query } from 'https://rawgit.com/vitmalina/w2ui/master/dist/w2ui.es6.min.js'

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

window.popup3 = function() {
    w2popup.open({
        title: 'Welcome',
        text: 'Welcome to NeuOS: Open Source OS runnable in your browser!'
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

new w2toolbar({
    box: '#toolbar',
    name: 'toolbar',
    items: [
        { type: 'button', id: 'item1', icon: 'w2ui-icon-search' },
		{ type: 'break' },
        { type: 'button', id: 'item2', text: 'Welcome', icon: 'w2ui-icon-info' },
        { type: 'button', id: 'item3', text: 'Editor', icon: 'w2ui-icon-pencil' },
        { type: 'button', id: 'item4', text: 'Tetris', icon: 'w2ui-icon-columns' },
        { type: 'break' },
        { type: 'drop',  id: 'item4', text: 'Power', icon: 'w2ui-icon-settings',
            html: '<button onclick="self.close()">Log Off</button>'
        },
        { type: 'break' },
    ],
    onClick(event) {
        if (event.target == 'item1') {
            let where = query('#in-the-box').prop('checked') ? '#preview-box' : undefined
            w2utils.notify('Coming Soon!', { timeout: 2000, where: query('#preview-box'), where });
        }
        if (event.target == 'item2') {
            popup3();
        }
        if (event.target == 'item3') {
            popup2();
        }
        if (event.target == "item4") {
            popup4();
        }
    }
})