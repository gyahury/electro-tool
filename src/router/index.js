import { createWebHashHistory, createRouter } from 'vue-router';
import FileNameList from '@/components/FileNameList.vue'
import XlsxToCsv from '@/components/XlsxToCsv.vue'
import CsvToXlsx from '@/components/CsvToXlsx.vue'

const router = createRouter({
    history : createWebHashHistory(),
    routes:[
      {
        path:'/'
        ,component:FileNameList
      },
      {
        path:'/FileNameList'
        ,component:FileNameList
      },
      {
        path:'/XlsxToCsv'
        ,component:XlsxToCsv
      },
      {
        path:'/CsvToXlsx'
        ,component:CsvToXlsx
      },
    ]
  })

  export default router;