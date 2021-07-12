/*
 * @Author: renya.zyc
 * @Date: 2021-07-12 17:35:56
 * @LastEditors: renya.zyc
 * @LastEditTime: 2021-07-12 17:36:08
 * @FilePath: /nextjs-blog/components/date.js
 * @Description: 
 */
import { parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}