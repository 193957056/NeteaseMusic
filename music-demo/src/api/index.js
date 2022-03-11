// api文件夹下 各个请求模块js, 都统一来到index.js再向外导出
import { recommendMusic, newMusic } from './Home'
import { hotSearch, searchResultList } from './Search'
import { getSongById, getLyricById } from './Play'

export const recommendMusicAPI = recommendMusic // 请求推荐歌单的

export const newMusicAPI = newMusic // 请求最新歌单的

export const hotSearchAPI = hotSearch //热搜

export const searchResultListAPI = searchResultList //搜索结果

export const getSongByIdAPI = getSongById // 歌曲播放地址

export const getLyricByIdAPI = getLyricById // 歌曲歌词地址