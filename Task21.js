let drumKit = document.querySelector('div');

        document.addEventListener('keypress',function(event) {
            let sound;
            switch (event.key) {
                case 'q':
                    sound = new Audio('sounds/crash.mp3');
                    drumKit
                    break;
                case 'w':
                    sound = new Audio('sounds/kick-bass.mp3');
                    break;
                case 'e':
                    sound = new Audio('sounds/snare.mp3');
                    break;
                case 'r':
                    sound = new Audio('sounds/tom-1.mp3');
                    break;
                case 't':
                    sound = new Audio('sounds/tom-2.mp3');
                    break;
                case 'y':
                    sound = new Audio('sounds/tom-3.mp3');
                    break;
                case 'u':
                    sound = new Audio('sounds/tom-4.mp3');
                    break;
                default:
                    break;
            }
            if(sound) {
            sound.play();
            }
        })