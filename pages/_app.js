/*
 * @Author: renya.zyc
 * @Date: 2021-07-06 17:23:33
 * @LastEditors: renya.zyc
 * @LastEditTime: 2021-07-06 17:25:52
 * @FilePath: /nextjs-blog/pages/_app.js
 * @Description: 
 */
import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}