<template>
    <div>
        <h1 class="header">CSV 파일을 XLSX로 변환</h1>
        <input class="mt-6" type="file" @change="onFileInputChange" multiple accept=".csv">
    </div>
    <v-btn class="mt-6" @click="downloadConvertedFiles(fileNames)">
        <v-icon left>mdi-download</v-icon>
        &nbsp;CONVERT XLSX
    </v-btn>
    <div class="mt-6">※ CSV파일의 문자 '======'를 통해 시트가 나뉘어 변환됩니다.</div>
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
            const allowedExtensions = ['.csv'];

            const validFiles = Array.from(event.target.files).filter((file) => {
                const extension = '.' + file.name.split('.').pop().toLowerCase();
                return allowedExtensions.includes(extension);
            });
            if (validFiles.length === 0) {
                alert('올바른 파일 형식이 아닌 파일이 포함되어 있습니다.');
                return;
            }
            this.fileNames = validFiles;
        },

        async downloadConvertedFiles(fileNames) {
            if (this.fileNames.length === 0) {
                alert('선택된 파일이 없거나 파일이 존재하지 않습니다. 다시 시도해주세요.');
                return false;
            }

            for (const file of fileNames) {
                const reader = new FileReader();

                reader.onload = async (e) => {
                    const data = e.target.result;
                    const csvData = new TextDecoder('utf-8').decode(data);
                    const delimiter = '======';
                    const chunks = csvData.split(delimiter);
                    const workbook = XLSX.utils.book_new();
                    chunks.forEach((chunk, index) => {
                        const rows = chunk.trim().split('\n').map(row => row.split(','));
                        const sheet = XLSX.utils.aoa_to_sheet(rows);
                        XLSX.utils.book_append_sheet(workbook, sheet, `Sheet${index + 1}`);
                    });

                    const xlsxData = XLSX.write(workbook, { type: 'binary', bookType: 'xlsx' });
                    const blob = new Blob([s2ab(xlsxData)], { type: 'application/octet-stream' });
                    saveAs(blob, `${file.name.split('.').slice(0, -1).join('.')}.xlsx`);
                };
                reader.readAsArrayBuffer(file);
            }
        },
    },
};
function s2ab(s) {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
}
</script>
