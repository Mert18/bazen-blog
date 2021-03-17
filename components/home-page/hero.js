import classes from './hero.module.css'

function Hero() {
    return (
        <div className={classes.container}>
            <div className={classes.entrance}>
                <h1>Mert</h1>
                <p>mertuygur02@gmail.com</p>
            </div>
        </div>
    )
}

export default Hero;