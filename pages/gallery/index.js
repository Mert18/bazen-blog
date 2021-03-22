import Image from 'next/image';
import classes from './gallery.module.css'


function GalleryPage() {

    return (
        <div className={classes.gallery}>
            <div className={`${classes.one} ${classes.large}`}>
                <Image
                    src="/images/1.jpg"
                    width={800}
                    height={400}
                />
            </div>

            <div className={`${classes.two} ${classes.small}`}>
                <Image
                    src="/images/2.jpg"
                    width={400}
                    height={800}
                />
            </div>

            <div className={`${classes.three} ${classes.small}`}>
                <Image
                    src="/images/3.jpg"
                    width={400}
                    height={800}
                />
            </div>


        </div>
    )
}

export default GalleryPage;