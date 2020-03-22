
const cssBallClimbingDot=`
/* BASIC STYLES FOR ALL LOADERS */
:host{
  display: flex;
}
:host([hide]),
:host([hide=true]){
  display:none;
}

.la-ball-climbing-dot,
.la-ball-climbing-dot > div {
    position: relative;
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
}
.la-ball-climbing-dot {
    display: block;
    font-size: 0;
    color: var(--climbing-dot-color, #333);
}

.la-ball-climbing-dot > div {
    display: inline-block;
    float: none;
    background-color: currentColor;
    border: 0 solid currentColor;
}
.la-ball-climbing-dot {
    width: var(--loader-width, 6rem);
    height: var(--loader-height, 3rem);
    margin: var(--loader-margin, 1.5rem 0.25rem);
}
.la-ball-climbing-dot > div:nth-child(1) {
    position: absolute;
    bottom: 32%;
    left: calc(var(--climbing-dot-size, 1rem) * 1.5);
    width: var(--climbing-dot-size, 1rem);
    height: var(--climbing-dot-size, 1rem);
    border-radius: 100%;
    -webkit-transform-origin: center bottom;
       -moz-transform-origin: center bottom;
        -ms-transform-origin: center bottom;
         -o-transform-origin: center bottom;
            transform-origin: center bottom;
    -webkit-animation: ball-climbing-dot-jump .6s ease-in-out infinite;
       -moz-animation: ball-climbing-dot-jump .6s ease-in-out infinite;
         -o-animation: ball-climbing-dot-jump .6s ease-in-out infinite;
            animation: ball-climbing-dot-jump .6s ease-in-out infinite;
}
.la-ball-climbing-dot > div:not(:nth-child(1)) {
    position: absolute;
    top: 0;
    right: 0;
    width: calc(var(--climbing-dot-size, 1rem) * 1.25);
    height: 2px;
    border-radius: 0;
    -webkit-transform: translate(60%, 0);
       -moz-transform: translate(60%, 0);
        -ms-transform: translate(60%, 0);
         -o-transform: translate(60%, 0);
            transform: translate(60%, 0);
    -webkit-animation: ball-climbing-dot-steps 1.8s linear infinite;
       -moz-animation: ball-climbing-dot-steps 1.8s linear infinite;
         -o-animation: ball-climbing-dot-steps 1.8s linear infinite;
            animation: ball-climbing-dot-steps 1.8s linear infinite;
}
.la-ball-climbing-dot > div:not(:nth-child(1)):nth-child(2) {
    -webkit-animation-delay: 0ms;
       -moz-animation-delay: 0ms;
         -o-animation-delay: 0ms;
            animation-delay: 0ms;
}
.la-ball-climbing-dot > div:not(:nth-child(1)):nth-child(3) {
    -webkit-animation-delay: -600ms;
       -moz-animation-delay: -600ms;
         -o-animation-delay: -600ms;
            animation-delay: -600ms;
}
.la-ball-climbing-dot > div:not(:nth-child(1)):nth-child(4) {
    -webkit-animation-delay: -1200ms;
       -moz-animation-delay: -1200ms;
         -o-animation-delay: -1200ms;
            animation-delay: -1200ms;
}
/* NOT USED
.la-ball-climbing-dot.la-sm {
    width: 20px;
    height: 16px;
}
.la-ball-climbing-dot.la-sm > div:nth-child(1) {
    width: 6px;
    height: 6px;
}
.la-ball-climbing-dot.la-sm > div:not(:nth-child(1)) {
    width: 6px;
    height: 1px;
}
.la-ball-climbing-dot.la-2x {
    width: 84px;
    height: 64px;
}
.la-ball-climbing-dot.la-2x > div:nth-child(1) {
    width: 28px;
    height: 28px;
}
.la-ball-climbing-dot.la-2x > div:not(:nth-child(1)) {
    width: 28px;
    height: 4px;
}
.la-ball-climbing-dot.la-3x {
    width: 126px;
    height: 96px;
}
.la-ball-climbing-dot.la-3x > div:nth-child(1) {
    width: 42px;
    height: 42px;
}
.la-ball-climbing-dot.la-3x > div:not(:nth-child(1)) {
    width: 42px;
    height: 6px;
}
*/
/*
 * Animations
 */
@-webkit-keyframes ball-climbing-dot-jump {
    0% {
        -webkit-transform: scale(1, .7);
                transform: scale(1, .7);
    }
    20% {
        -webkit-transform: scale(.7, 1.2);
                transform: scale(.7, 1.2);
    }
    40% {
        -webkit-transform: scale(1, 1);
                transform: scale(1, 1);
    }
    50% {
        bottom: 125%;
    }
    46% {
        -webkit-transform: scale(1, 1);
                transform: scale(1, 1);
    }
    80% {
        -webkit-transform: scale(.7, 1.2);
                transform: scale(.7, 1.2);
    }
    90% {
        -webkit-transform: scale(.7, 1.2);
                transform: scale(.7, 1.2);
    }
    100% {
        -webkit-transform: scale(1, .7);
                transform: scale(1, .7);
    }
}
@-moz-keyframes ball-climbing-dot-jump {
    0% {
        -moz-transform: scale(1, .7);
             transform: scale(1, .7);
    }
    20% {
        -moz-transform: scale(.7, 1.2);
             transform: scale(.7, 1.2);
    }
    40% {
        -moz-transform: scale(1, 1);
             transform: scale(1, 1);
    }
    50% {
        bottom: 125%;
    }
    46% {
        -moz-transform: scale(1, 1);
             transform: scale(1, 1);
    }
    80% {
        -moz-transform: scale(.7, 1.2);
             transform: scale(.7, 1.2);
    }
    90% {
        -moz-transform: scale(.7, 1.2);
             transform: scale(.7, 1.2);
    }
    100% {
        -moz-transform: scale(1, .7);
             transform: scale(1, .7);
    }
}
@-o-keyframes ball-climbing-dot-jump {
    0% {
        -o-transform: scale(1, .7);
           transform: scale(1, .7);
    }
    20% {
        -o-transform: scale(.7, 1.2);
           transform: scale(.7, 1.2);
    }
    40% {
        -o-transform: scale(1, 1);
           transform: scale(1, 1);
    }
    50% {
        bottom: 125%;
    }
    46% {
        -o-transform: scale(1, 1);
           transform: scale(1, 1);
    }
    80% {
        -o-transform: scale(.7, 1.2);
           transform: scale(.7, 1.2);
    }
    90% {
        -o-transform: scale(.7, 1.2);
           transform: scale(.7, 1.2);
    }
    100% {
        -o-transform: scale(1, .7);
           transform: scale(1, .7);
    }
}
@keyframes ball-climbing-dot-jump {
    0% {
        -webkit-transform: scale(1, .7);
           -moz-transform: scale(1, .7);
             -o-transform: scale(1, .7);
                transform: scale(1, .7);
    }
    20% {
        -webkit-transform: scale(.7, 1.2);
           -moz-transform: scale(.7, 1.2);
             -o-transform: scale(.7, 1.2);
                transform: scale(.7, 1.2);
    }
    40% {
        -webkit-transform: scale(1, 1);
           -moz-transform: scale(1, 1);
             -o-transform: scale(1, 1);
                transform: scale(1, 1);
    }
    50% {
        bottom: 125%;
    }
    46% {
        -webkit-transform: scale(1, 1);
           -moz-transform: scale(1, 1);
             -o-transform: scale(1, 1);
                transform: scale(1, 1);
    }
    80% {
        -webkit-transform: scale(.7, 1.2);
           -moz-transform: scale(.7, 1.2);
             -o-transform: scale(.7, 1.2);
                transform: scale(.7, 1.2);
    }
    90% {
        -webkit-transform: scale(.7, 1.2);
           -moz-transform: scale(.7, 1.2);
             -o-transform: scale(.7, 1.2);
                transform: scale(.7, 1.2);
    }
    100% {
        -webkit-transform: scale(1, .7);
           -moz-transform: scale(1, .7);
             -o-transform: scale(1, .7);
                transform: scale(1, .7);
    }
}
@-webkit-keyframes ball-climbing-dot-steps {
    0% {
        top: 0;
        right: 0;
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        top: 100%;
        right: 100%;
        opacity: 0;
    }
}
@-moz-keyframes ball-climbing-dot-steps {
    0% {
        top: 0;
        right: 0;
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        top: 100%;
        right: 100%;
        opacity: 0;
    }
}
@-o-keyframes ball-climbing-dot-steps {
    0% {
        top: 0;
        right: 0;
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        top: 100%;
        right: 100%;
        opacity: 0;
    }
}
@keyframes ball-climbing-dot-steps {
    0% {
        top: 0;
        right: 0;
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        top: 100%;
        right: 100%;
        opacity: 0;
    }
}

`

export default cssBallClimbingDot