function PathStetcher({ path }) {
    const d = path.getAttribute('d')
    const cd = path.getAttribute('data-complete-d')

    const gsapTo = gsap.to(path, { paused: true, attr: { d: cd }, ease: 'Power1.easeIn' })
    gsapTo.progress(1)

    let rect = path.getBoundingClientRect()
    let centerX = rect.x + rect.width / 2

    window.addEventListener('resize', () => {
    rect = path.getBoundingClientRect()
    centerX = rect.x + rect.width / 2
    })

    this.animate = (clientX) => {
      gsapTo.progress(Math.abs((clientX - centerX) / (rect.width * 2.2)))
    }
}

const textStretcher1 = new PathStetcher({ path: document.querySelector('#path_1') })
const textStretcher2 = new PathStetcher({ path: document.querySelector('#path_2') })
const textStretcher3 = new PathStetcher({ path: document.querySelector('#path_3') })
const textStretcher4 = new PathStetcher({ path: document.querySelector('#path_4') })
const textStretcher5 = new PathStetcher({ path: document.querySelector('#path_5') })
const textStretcher6 = new PathStetcher({ path: document.querySelector('#path_6') })
const textStretcher7 = new PathStetcher({ path: document.querySelector('#path_7') })
const textStretcher8 = new PathStetcher({ path: document.querySelector('#path_8') })
const textStretcher9 = new PathStetcher({ path: document.querySelector('#path_9') })
const textStretcher10 = new PathStetcher({ path: document.querySelector('#path_10') })
const textStretcher11 = new PathStetcher({ path: document.querySelector('#path_11') })
const textStretcher12 = new PathStetcher({ path: document.querySelector('#path_12') })
const textStretcher13 = new PathStetcher({ path: document.querySelector('#path_13') })
const textStretcher14 = new PathStetcher({ path: document.querySelector('#path_14') })
const textStretcher15 = new PathStetcher({ path: document.querySelector('#path_15') })
const textStretcher16 = new PathStetcher({ path: document.querySelector('#path_16') })
const textStretcher17 = new PathStetcher({ path: document.querySelector('#path_17') })
const textStretcher18 = new PathStetcher({ path: document.querySelector('#path_18') })

const animatePaths = clientX => {
textStretcher1.animate(clientX)
textStretcher2.animate(clientX)
textStretcher3.animate(clientX)
textStretcher4.animate(clientX)
textStretcher5.animate(clientX)
textStretcher6.animate(clientX)
textStretcher7.animate(clientX)
textStretcher8.animate(clientX)
textStretcher9.animate(clientX)
textStretcher10.animate(clientX)
textStretcher11.animate(clientX)
textStretcher12.animate(clientX)
textStretcher13.animate(clientX)
textStretcher14.animate(clientX)
textStretcher15.animate(clientX)
textStretcher16.animate(clientX)
textStretcher17.animate(clientX)
textStretcher18.animate(clientX)
}

window.addEventListener('mousemove', e => animatePaths(e.clientX))
window.addEventListener('touchmove', e => animatePaths(e.touches[0].clientX))
window.addEventListener('touchend', () => animatePaths(-100))
window.addEventListener('load',     () => animatePaths(innerWidth / 2))