import deleteEmpty from 'delete-empty'
import { paths } from '../config'

const cleanEmptyFolders = () => deleteEmpty(paths.dist.root).catch(console.error)

export default cleanEmptyFolders
