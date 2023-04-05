<template>
    <div>
        <input type="file" @change="onFileInputChange" multiple accept=".xlsx,.xls">
    </div>
    <v-btn class="mt-6" @click="downloadConvertedFiles(fileNames)">
        <v-icon left>mdi-download</v-icon>
        &nbsp;CONVERT CSV
    </v-btn>
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
            // 사용 가능한 확장자 목록을 정의합니다.
            const allowedExtensions = ['.xlsx', '.xls'];

            // 선택된 파일 목록 중 올바른 파일 형식을 가진 파일들만 저장합니다.
            const validFiles = Array.from(event.target.files).filter((file) => {
                const extension = '.' + file.name.split('.').pop().toLowerCase();
                return allowedExtensions.includes(extension);
            });

            // 올바른 파일 형식을 가진 파일이 하나 이상 선택되었는지 확인합니다.
            if (validFiles.length === 0) {
                alert('올바른 파일 형식이 아닌 파일이 포함되어 있습니다.');
                return;
            }

            // 선택된 파일 목록을 저장합니다.
            this.fileNames = validFiles;
        },

        async downloadConvertedFiles(fileNames) {
            if (this.fileNames.length === 0) {
                alert('선택된 파일이 없거나 파일이 존재하지 않습니다. 다시 시도해주세요.');
                return false;
            }

            // 각 xlsx 파일을 csv 파일로 변환하고 다운로드합니다.
            for (const file of fileNames) {
                const reader = new FileReader();

                // 파일을 읽은 후 처리할 작업을 정의합니다.
                reader.onload = async (e) => {
                    const data = e.target.result;
                    const workbook = XLSX.read(data, { type: 'binary' });
                    const sheetNames = workbook.SheetNames;

                    let csvData = '';
                    sheetNames.forEach((sheetName, index) => {
                        if (index !== 0) {
                            csvData += '\n\n======\n\n';
                        }
                        csvData += '\uFEFF' + XLSX.utils.sheet_to_csv(workbook.Sheets[sheetName], { FS: ',', RS: '\n' });

                    });
                    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
                    saveAs(blob, `${file.name.split('.').slice(0, -1).join('.')}.csv`);
                };

                // 파일을 읽습니다.
                reader.readAsBinaryString(file);
            }
        },
    },
};

</script>
  
<style>
div {
    font-size: 13px;
    color: rgb(95, 94, 94);
}
</style>
  