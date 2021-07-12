/*
 * @Author: renya.zyc
 * @Date: 2021-07-12 17:56:10
 * @LastEditors: renya.zyc
 * @LastEditTime: 2021-07-12 17:56:10
 * @FilePath: /nextjs-blog/pages/api/hello.js
 * @Description: 
 */
export default (req, res) => {
  res.status(200).json({ text: 'Hello' })
}