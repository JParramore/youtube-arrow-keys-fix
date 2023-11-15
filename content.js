(function() {
    const ARROW_KEYS_AND_SPACE = ['ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', ' '];
    const VIDEO_SELECTOR = 'video';
    const CONTROLS_CLASS_NAME = 'ytp-chrome-bottom';

    const handler = (e) => {
        // isTrusted is the cloned event
        if (!e.isTrusted || !ARROW_KEYS_AND_SPACE.includes(e.key)) {
            return;
        }

        const video = document.querySelector(VIDEO_SELECTOR);
        const controls = document.getElementsByClassName(CONTROLS_CLASS_NAME)[0];

        if (!video || !controls) {
            return;
        }

        if (controls.contains(document.activeElement)) {
            e.preventDefault();

            // simulate the 'k' letter (pause) if space is pressed 
            const clone = (e.key === ' ') ? new KeyboardEvent('keydown', {
                    code: 'KeyK',
                    key: 'k',
                    keyCode: 75,
                    which: 75,
                    ctrlKey: false,
                    altKey: false,
                    shiftKey: false,
                    metaKey: false,
                    bubbles: true,
                    cancelable: true
                }) :
                new KeyboardEvent(e.type, e);
            video.dispatchEvent(clone);
        }
    };

    document.addEventListener('keydown', handler, true);
})();
