<template>
  <div>
    <h1 class="header">폴더 내 파일 목록 다운로드</h1>
    <input class="mt-6" type="file" @change="onFileInputChange" webkitdirectory>
  </div>
  <v-btn class="mt-6" @click="downloadExcelFile(fileNames)">
    <v-icon left>mdi-download</v-icon>
    &nbsp;Download Excel
  </v-btn>
  <div class="mt-6">※ 현재 버전에서는 선택된 폴더 안에 존재하는 모든 파일을 불러옵니다. <br />폴더 안 다른 폴더의 파일도 불러오기 때문에 개수가 많아질 수 있습니다.</div>
</template>

<script>
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

export default {
  data() {
    return {
      fileNames: [],
    };
  },
  methods: {
    onFileInputChange(event) {
      // 입력된 파일의 이름을 저장합니다.
      this.fileNames = Array.from(event.target.files).map((file) => file.name);
    },

    downloadExcelFile(fileNames) {
      if (this.fileNames.length === 0) {
        alert('선택된 폴더가 없거나 파일이 존재하지 않습니다. 다시 시도해주세요.');
        return false;
      }
      // 워크북 생성
      const workbook = XLSX.utils.book_new();

      // 워크시트 생성 및 파일 이름 추가
      const worksheet = XLSX.utils.json_to_sheet(fileNames.map((fileName) => ({ Name: fileName })));

      // 워크북에 워크시트 추가
      XLSX.utils.book_append_sheet(workbook, worksheet, 'FileNames');

      // 엑셀 파일로 변환
      const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

      // 다운로드를 위해 Blob 생성
      const data = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });

      // 파일 저장
      saveAs(data, 'FileNames.xlsx');
    },
  }
}

</script>

<style></style>