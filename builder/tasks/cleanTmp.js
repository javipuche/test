import glob from 'glob'
import del from 'del'
import { paths } from '../config'

const cleanTmp = () => del(glob.sync(`${paths.dist.css}/**/*.js`), { force: true })

export default cleanTmp
