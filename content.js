(function () {
    const ARROW_KEYS = ['ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown'];
    const VIDEO_SELECTOR = 'video';
    const CONTROLS_CLASS_NAME = 'ytp-chrome-bottom';

    const handler = (e) => {
        // isTrusted is the cloned event
        if (!e.isTrusted || !ARROW_KEYS.includes(e.key)) {
            return;
        }

        const video = document.querySelector(VIDEO_SELECTOR);
        const controls = document.getElementsByClassName(CONTROLS_CLASS_NAME)[0];

        if (!video || !controls) {
            return;
        }

        if (controls.contains(document.activeElement)) {
            e.preventDefault();
            const clone = new KeyboardEvent(e.type, e);
            video.dispatchEvent(clone);
        }
    };

    document.addEventListener('keydown', handler, true);
})();
