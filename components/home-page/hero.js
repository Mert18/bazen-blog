import classes from './hero.module.css'

function Hero() {
    return (
        <div className={classes.container}>
            <div className={classes.entrance}>
                <h2>Full-Stack Developer</h2>
                <h1>Mert</h1>
            </div>
        </div>
    )
}

export default Hero;