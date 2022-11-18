import styles from './Links.module.scss'

export const Links = () => {

    return (
        <div className={styles.links}>
            <div className={styles.poweredBy}>
                <span className={styles.text}>powered by</span>
                <svg className={styles.img} width="137" height="42" viewBox="0 0 137 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M47.2845 20.7161C47.2449 19.7401 47.399 18.766 47.7379 17.8498C48.0767 16.9337 48.5936 16.0937 49.2587 15.3784C49.9239 14.663 50.7241 14.0865 51.6132 13.682C52.5023 13.2775 53.4627 13.053 54.439 13.0216H54.7423C58.5156 13.0216 60.7426 15.2412 61.4011 17.8381L59.0557 18.6223C58.845 17.6546 58.2934 16.7949 57.5016 16.2C56.7097 15.6051 55.7304 15.3147 54.7423 15.3817C52.3008 15.3817 49.8518 17.1648 49.8518 20.7605C49.8518 24.3563 52.2416 26.0727 54.7719 26.0727C55.7649 26.0999 56.7384 25.7931 57.5365 25.2016C58.3346 24.6101 58.9112 23.7679 59.1741 22.8099L61.475 23.5498C61.0779 25.0112 60.1944 26.2935 58.9704 27.1853C57.7465 28.077 56.2551 28.5249 54.7423 28.4551C52.7989 28.4907 50.9209 27.7533 49.521 26.4047C48.1212 25.0562 47.3141 23.207 47.2771 21.2636C47.2697 21.0861 47.2771 20.9011 47.2845 20.7161Z" fill="white"/>
                    <path d="M66.0399 28.1147H63.6132V12.9772H66.0399V18.8961C66.3922 18.4782 66.8353 18.1464 67.3353 17.9258C67.8354 17.7053 68.3793 17.6019 68.9254 17.6235C71.4335 17.6235 72.6247 19.4214 72.6247 21.6631V28.1147H70.2867V22.0923C70.3568 21.5789 70.2223 21.0585 69.9123 20.6433C69.6023 20.2281 69.1416 19.9514 68.6294 19.8727C68.4843 19.8578 68.338 19.8578 68.1929 19.8727C67.6317 19.8727 67.0935 20.0956 66.6967 20.4924C66.2998 20.8893 66.0769 21.4275 66.0769 21.9887C66.0732 22.0503 66.0732 22.112 66.0769 22.1736L66.0399 28.1147Z" fill="white"/>
                    <path d="M78.0701 22.2846L80.6744 21.8777C81.2663 21.8037 81.4143 21.5004 81.4143 21.1378C81.4143 20.2796 80.8372 19.5915 79.4906 19.5915C78.9821 19.5504 78.4778 19.7114 78.0873 20.0397C77.6967 20.368 77.4512 20.837 77.4042 21.345V21.456L75.1846 20.9603C75.3696 19.1994 76.9677 17.6309 79.4684 17.6309C82.6054 17.6309 83.7966 19.4066 83.7966 21.4782V26.5314C83.7941 27.079 83.8361 27.6258 83.9224 28.1665H81.7028C81.6228 27.7373 81.5906 27.3006 81.6066 26.8644C81.2697 27.3829 80.8028 27.804 80.2523 28.0857C79.7019 28.3674 79.0872 28.4998 78.4696 28.4699C77.6261 28.5395 76.7894 28.2717 76.143 27.7252C75.4966 27.1787 75.0934 26.3982 75.0219 25.5548C75.0219 25.503 75.0219 25.4512 75.0219 25.4068C74.9849 23.535 76.324 22.5288 78.0701 22.2846ZM81.4291 23.9197V23.4536L78.773 23.8531C78.4124 23.8646 78.0702 24.0149 77.8179 24.2727C77.5656 24.5306 77.4227 24.8759 77.419 25.2367C77.4219 25.4154 77.4603 25.5918 77.532 25.7556C77.6038 25.9193 77.7074 26.0671 77.8369 26.1904C77.9663 26.3137 78.1191 26.41 78.2861 26.4736C78.4532 26.5372 78.6313 26.5669 78.81 26.561H78.9209C79.2238 26.5927 79.5299 26.5642 79.8217 26.4771C80.1134 26.3899 80.3851 26.2459 80.621 26.0534C80.8569 25.8608 81.0523 25.6235 81.1961 25.3551C81.3398 25.0867 81.4291 24.7925 81.4587 24.4894C81.4692 24.2987 81.4568 24.1074 81.4217 23.9197H81.4291Z" fill="white"/>
                    <path d="M87.9249 12.77C88.1334 12.7671 88.3405 12.8054 88.5342 12.8827C88.7279 12.96 88.9044 13.0748 89.0536 13.2206C89.2028 13.3663 89.3217 13.5401 89.4035 13.732C89.4853 13.9238 89.5284 14.1299 89.5304 14.3385C89.5303 14.6507 89.438 14.9559 89.265 15.2158C89.092 15.4756 88.846 15.6786 88.558 15.799C88.27 15.9195 87.9528 15.9521 87.6463 15.8928C87.3397 15.8335 87.0576 15.6849 86.8353 15.4657C86.613 15.2465 86.4605 14.9664 86.3969 14.6608C86.3334 14.3551 86.3616 14.0375 86.478 13.7478C86.5945 13.4581 86.7939 13.2094 87.0514 13.0327C87.3088 12.8561 87.6127 12.7596 87.9249 12.7552V12.77ZM86.7411 28.1591V17.9342H89.1678V28.1147L86.7411 28.1591Z" fill="white"/>
                    <path d="M94.6947 28.1147H92.2754V17.9342H94.6355V19.2882C94.9432 18.7683 95.3852 18.3408 95.915 18.0505C96.4448 17.7602 97.043 17.6178 97.6468 17.6383C100.133 17.6383 101.346 19.4362 101.346 21.6779V28.1147H98.9267V22.0923C98.9267 20.8419 98.3571 19.8283 96.8329 19.8283C96.5512 19.8302 96.2725 19.8876 96.013 19.9973C95.7534 20.1069 95.518 20.2665 95.3201 20.4672C95.1222 20.6678 94.9658 20.9054 94.8598 21.1665C94.7538 21.4275 94.7002 21.7069 94.7021 21.9887C94.7021 22.0701 94.7021 22.1514 94.7021 22.2328L94.6947 28.1147Z" fill="white"/>
                    <path d="M104.276 28.1147V12.9772H106.703V28.1147H104.276Z" fill="white"/>
                    <path d="M111.031 12.77C111.343 12.7686 111.649 12.8599 111.909 13.0325C112.169 13.2051 112.373 13.4512 112.493 13.7394C112.613 14.0277 112.645 14.3452 112.584 14.6516C112.524 14.9579 112.373 15.2394 112.153 15.4603C111.932 15.6811 111.65 15.8313 111.344 15.8919C111.037 15.9525 110.72 15.9206 110.432 15.8005C110.143 15.6803 109.897 15.4771 109.725 15.2168C109.552 14.9566 109.461 14.6509 109.462 14.3385C109.466 13.9237 109.633 13.527 109.926 13.2337C110.219 12.9404 110.616 12.7739 111.031 12.77ZM109.84 28.1592V17.9343H112.244V28.1148L109.84 28.1592Z" fill="white"/>
                    <path d="M117.808 28.1148H115.381V17.9343H117.741V19.2882C118.05 18.7689 118.492 18.3418 119.021 18.0515C119.551 17.7613 120.149 17.6186 120.753 17.6383C123.239 17.6383 124.452 19.4362 124.452 21.678V28.1148H122.025V22.0923C122.095 21.5789 121.961 21.0585 121.651 20.6434C121.341 20.2282 120.88 19.9514 120.368 19.8727C120.22 19.8579 120.072 19.8579 119.924 19.8727C119.359 19.8786 118.819 20.1072 118.421 20.5089C118.024 20.9107 117.801 21.4531 117.801 22.0183C117.793 22.1045 117.793 22.1911 117.801 22.2773L117.808 28.1148Z" fill="white"/>
                    <path d="M132.731 22.2328L137 28.1517H134.04L131.081 23.9567L129.831 25.2737V28.1147H127.426V12.9772H129.831V22.0479L133.737 17.9342H136.956L132.731 22.2328Z" fill="white"/>
                    <path d="M18.5556 8.87834L29.0469 14.9008V27.0049L18.5852 33.0644L8.1014 27.0567V14.96L18.5556 8.87834ZM18.5556 0L14.7084 2.21958L4.23192 8.30124L0.384644 10.5208V31.5107L4.23192 33.7303L14.7232 39.7527L18.5704 41.9723L22.4177 39.7527L32.872 33.6859L36.7192 31.4663V10.4468L32.872 8.22726L22.3881 2.21958L18.5408 0H18.5556Z" fill="white"/>
                </svg>

                <span className={styles.on}>on</span>
                <img className={styles.gifEth} src="/images/etherium.gif" alt=""/>
            </div>

            <a className={styles.link} href="#">
                ETHERSCAN
                {/*<img*/}
                {/*    style={{width: '127px'}}*/}
                {/*    src="/images/links/etherscan-4x.png"*/}
                {/*    alt="etherscan"*/}
                {/*/>*/}
            </a>

            <a className={styles.link} href="#">
                FAQ
                {/*<img*/}
                {/*    style={{width: '50px'}}*/}
                {/*    src="/images/links/faq-4x.png"*/}
                {/*    alt="FAQ"*/}
                {/*/>*/}
            </a>
        </div>
    );
};