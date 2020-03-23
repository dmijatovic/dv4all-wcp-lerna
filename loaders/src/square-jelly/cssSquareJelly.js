/*!
 * Load Awesome v1.1.0 (http://github.danielcardoso.net/load-awesome/)
 * Copyright 2015 Daniel Cardoso <@DanielCardoso>
 * Licensed under MIT
 */
export default `
/* BASIC STYLES FOR ALL LOADERS */
:host{
  display: flex;
}
:host([hide]),
:host([hide=true]){
  display:none;
}

.la-square-jelly-box,
.la-square-jelly-box > div {
    position: relative;
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
}
.la-square-jelly-box {
    display: block;
    font-size: 0;
    width: var(--square-jelly-size, 3rem);
    height: var(--square-jelly-size, 3rem);
    color: var(--square-jelly-color, #333);
    margin: var(--square-jelly-margin, 1rem auto);
}
.la-square-jelly-box > div {
    display: inline-block;
    float: none;
    background-color: currentColor;
    border: 0 solid currentColor;
}
.la-square-jelly-box > div:nth-child(1),
.la-square-jelly-box > div:nth-child(2) {
    position: absolute;
    left: 0;
    width: 100%;
}
.la-square-jelly-box > div:nth-child(1) {
    top: -25%;
    z-index: 1;
    height: 100%;
    border-radius: 10%;
    -webkit-animation: square-jelly-box-animate .6s -.1s linear infinite;
       -moz-animation: square-jelly-box-animate .6s -.1s linear infinite;
         -o-animation: square-jelly-box-animate .6s -.1s linear infinite;
            animation: square-jelly-box-animate .6s -.1s linear infinite;
}
.la-square-jelly-box > div:nth-child(2) {
    bottom: -9%;
    height: 10%;
    background: #000;
    border-radius: 50%;
    opacity: .2;
    -webkit-animation: square-jelly-box-shadow .6s -.1s linear infinite;
       -moz-animation: square-jelly-box-shadow .6s -.1s linear infinite;
         -o-animation: square-jelly-box-shadow .6s -.1s linear infinite;
            animation: square-jelly-box-shadow .6s -.1s linear infinite;
}
/*
 * Animations
 */
@-webkit-keyframes square-jelly-box-animate {
    17% {
        border-bottom-right-radius: 10%;
    }
    25% {
        -webkit-transform: translateY(25%) rotate(22.5deg);
                transform: translateY(25%) rotate(22.5deg);
    }
    50% {
        border-bottom-right-radius: 100%;
        -webkit-transform: translateY(50%) scale(1, .9) rotate(45deg);
                transform: translateY(50%) scale(1, .9) rotate(45deg);
    }
    75% {
        -webkit-transform: translateY(25%) rotate(67.5deg);
                transform: translateY(25%) rotate(67.5deg);
    }
    100% {
        -webkit-transform: translateY(0) rotate(90deg);
                transform: translateY(0) rotate(90deg);
    }
}
@-moz-keyframes square-jelly-box-animate {
    17% {
        border-bottom-right-radius: 10%;
    }
    25% {
        -moz-transform: translateY(25%) rotate(22.5deg);
             transform: translateY(25%) rotate(22.5deg);
    }
    50% {
        border-bottom-right-radius: 100%;
        -moz-transform: translateY(50%) scale(1, .9) rotate(45deg);
             transform: translateY(50%) scale(1, .9) rotate(45deg);
    }
    75% {
        -moz-transform: translateY(25%) rotate(67.5deg);
             transform: translateY(25%) rotate(67.5deg);
    }
    100% {
        -moz-transform: translateY(0) rotate(90deg);
             transform: translateY(0) rotate(90deg);
    }
}
@-o-keyframes square-jelly-box-animate {
    17% {
        border-bottom-right-radius: 10%;
    }
    25% {
        -o-transform: translateY(25%) rotate(22.5deg);
           transform: translateY(25%) rotate(22.5deg);
    }
    50% {
        border-bottom-right-radius: 100%;
        -o-transform: translateY(50%) scale(1, .9) rotate(45deg);
           transform: translateY(50%) scale(1, .9) rotate(45deg);
    }
    75% {
        -o-transform: translateY(25%) rotate(67.5deg);
           transform: translateY(25%) rotate(67.5deg);
    }
    100% {
        -o-transform: translateY(0) rotate(90deg);
           transform: translateY(0) rotate(90deg);
    }
}
@keyframes square-jelly-box-animate {
    17% {
        border-bottom-right-radius: 10%;
    }
    25% {
        -webkit-transform: translateY(25%) rotate(22.5deg);
           -moz-transform: translateY(25%) rotate(22.5deg);
             -o-transform: translateY(25%) rotate(22.5deg);
                transform: translateY(25%) rotate(22.5deg);
    }
    50% {
        border-bottom-right-radius: 100%;
        -webkit-transform: translateY(50%) scale(1, .9) rotate(45deg);
           -moz-transform: translateY(50%) scale(1, .9) rotate(45deg);
             -o-transform: translateY(50%) scale(1, .9) rotate(45deg);
                transform: translateY(50%) scale(1, .9) rotate(45deg);
    }
    75% {
        -webkit-transform: translateY(25%) rotate(67.5deg);
           -moz-transform: translateY(25%) rotate(67.5deg);
             -o-transform: translateY(25%) rotate(67.5deg);
                transform: translateY(25%) rotate(67.5deg);
    }
    100% {
        -webkit-transform: translateY(0) rotate(90deg);
           -moz-transform: translateY(0) rotate(90deg);
             -o-transform: translateY(0) rotate(90deg);
                transform: translateY(0) rotate(90deg);
    }
}
@-webkit-keyframes square-jelly-box-shadow {
    50% {
        -webkit-transform: scale(1.25, 1);
                transform: scale(1.25, 1);
    }
}
@-moz-keyframes square-jelly-box-shadow {
    50% {
        -moz-transform: scale(1.25, 1);
             transform: scale(1.25, 1);
    }
}
@-o-keyframes square-jelly-box-shadow {
    50% {
        -o-transform: scale(1.25, 1);
           transform: scale(1.25, 1);
    }
}
@keyframes square-jelly-box-shadow {
    50% {
        -webkit-transform: scale(1.25, 1);
           -moz-transform: scale(1.25, 1);
             -o-transform: scale(1.25, 1);
                transform: scale(1.25, 1);
    }
}
`