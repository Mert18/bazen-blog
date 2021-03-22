import Image from 'next/image';

import classes from './art.module.css'

function Art() {
    return (
        <section className={classes.art}>

            <div className={classes.singleart}>
                <Image src="/images/bird.svg" width={512} height={512} />
                <button>Download</button>
            </div>

            <div className={classes.singleart}>
                <Image src="/images/carpet.svg" width={412} height={512} />
                <button>Download</button>
            </div>

            <div className={classes.singleart}>
                <Image src="/images/round.svg" width={412} height={512} />
                <button>Download</button>
            </div>

        </section>
    )
}

export default Art