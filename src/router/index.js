import { createWebHashHistory, createRouter } from 'vue-router';
import Home from '@/components/Home.vue'
import FileNameList from '@/components/FileNameList.vue'
import XlsxToCsv from '@/components/XlsxToCsv.vue'
import CsvToXlsx from '@/components/CsvToXlsx.vue'
import ImgSizeList from '@/components/ImgSizeList.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/'
      , component: Home
    },
    {
      path: '/Home'
      , component: Home
    },
    {
      path: '/FileNameList'
      , component: FileNameList
    },
    {
      path: '/XlsxToCsv'
      , component: XlsxToCsv
    },
    {
      path: '/CsvToXlsx'
      , component: CsvToXlsx
    },
    {
      path: '/ImgSizeList'
      , component: ImgSizeList
    },
  ]
})

export default router;