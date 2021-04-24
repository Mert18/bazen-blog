import classes from './hero.module.css'

function Hero() {
    return (
        <div className={classes.container}>
            <div className={classes.entrance}>
                <h1>Mert Uygur</h1>
                <a href="https://github.com/Mert18" target="_blank" rel="noreferrer">
                    <img src="/images/icons8-github.svg" alt="github icon" width="75px" />
                </a>
                <a href="https://www.linkedin.com/in/mert-u-8248ab135/" target="_blank" rel="noreferrer">
                    <img src="/images/icons8-linkedin.svg" alt="linkedin icon" width="75px" />
                </a>
            </div>
        </div>
    )
}

export default Hero;