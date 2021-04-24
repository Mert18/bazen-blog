
import React, { useEffect, useState } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import axios from 'axios';

import classes from './about.module.css';

const url = "https://blog-turkce.vercel.app";

const About = () => {

    const [data, getData] = useState([]);

    const getAllData = () => {
        axios.get(`${url}/api/about`)
            .then((response) => {
                const allData = response.data;
                getData(allData);
            })
            .catch(error => console.error("can not fetch items."))
    }

    useEffect(() => {
        getAllData();
    }, [])


    return (
        <section className={classes.about}>
            <div className={classes.about__data}>
                <div className={classes.data__title}>
                    <h2>Dünya Mutluluk Endeksi ile hiçbir ilişkim yoktur. Benim mutluluk endeksim aşağıdadır.</h2>
                </div>
                <div className={classes.data__chart}>
                    <LineChart width={1000} height={400} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }} >
                        <Line type="monotone" dataKey="game" stroke="magenta" strokeDasharray="7 7" dot={false} />
                        <Line type="monotone" strokeDasharray="7 7" dataKey="work" stroke="green" dot={false} />
                        <Line type="monotone" strokeDasharray="7 7" dataKey="leisure" stroke="blue" dot={false} />
                        <Line type="monotone"  dataKey="happiness" stroke="orange" strokeWidth={3} dot={false} />
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Legend />
                        <Tooltip  />
                    </LineChart>
                </div>
            </div>

            <div className={classes.aboutstack}>
                <h2>Bunları biliyorum ve daha önce bir projede kullandım.</h2>

                <div className={classes.aboutstack__stack}>
                    <div className={classes.tech}>
                        <img src="/images/icons/html5.svg" width="100px" alt="html icon" />
                    </div>
                    <div className={classes.tech}>
                        <img src="/images/icons/css3.svg" width="100px" alt="css icon" />
                    </div>
                    <div className={classes.tech}>
                        <img src="/images/icons/sass-1.svg" width="100px" alt="sass icon" />
                    </div>
                    <div className={classes.tech}>
                        <img src="/images/icons/logo-javascript.svg" width="100px" alt="js icon" />
                    </div>
                    <div className={classes.tech}>
                        <img src="/images/icons/react-2.svg" width="100px" alt="react icon" />
                    </div>
                    <div className={classes.tech}>
                        <img src="/images/icons/nodejs-icon.svg" width="100px" alt="nodejs icon" />
                    </div>
                    <div className={classes.tech}>
                        <img src="/images/icons/mongodb.svg" width="100px" alt="mongodb icon" />
                    </div>
                    <div className={classes.tech}>
                        <img src="/images/icons/git-icon.svg" width="100px" alt="git icon" />
                    </div>

                </div>

                <h2>Bunlara aşinalığım var ve / veya öğrenme aşamasındayım.</h2>

                <div className={classes.aboutstack__stack}>
                    <div className={classes.tech}>
                        <img src="/images/icons/postgresql.svg" width="100px" alt="postgresql icon" />
                    </div>

                    <div className={classes.tech}>
                        <img src="/images/icons/linux-tux.svg" width="100px" alt="linux icon" />
                    </div>

                    <div className={classes.tech}>
                        <img src="/images/icons/next-js.svg" width="100px" alt="nextjs icon" />
                    </div>

                    
                </div>

                <h2>Yakın gelecekte bunları öğrenmeyi planlıyorum.</h2>

                <div className={classes.aboutstack__stack}>
                    <div className={classes.tech}>
                        <img src="/images/icons/php-1.svg" width="100px" alt="postgresql icon" />
                    </div>

                    <div className={classes.tech}>
                        <img src="/images/icons/typescript.svg" width="100px" alt="linux icon" />
                    </div>

                    <div className={classes.tech}>
                        <img src="/images/icons/graphql.svg" width="100px" alt="mongodb icon" />
                    </div>
                </div>
            </div>

            <div className={classes.really}>
                <h2>Kimim ben?</h2>
                <div className={classes.reallytext}>
                    <p>20 Mart 2000 yılında Hatay'da doğdum.</p><br />
                    <p>Bilgisayarlara olan merakımdan dolayı 2018 Haziranda Gazi Üniversitesi'nde Bilgisayar Mühendisliği bölümüne giriş yaptım.</p><br />
                    <p>Mayıs 2020'de tamamen tesadüfen karşılaştığım birisi tarafından web geliştirmeyle tanıştım ve o zamandan beri öğreniyorum.</p><br />
                </div>
            </div>
        </section>
    )
}

export default About
