<template>
    <div>
        <h1 class="header">이미지 크기 다운로드</h1>
        <input class="mt-6" type="file" @change="onFileInputChange" multiple accept="image/*">
    </div>
    <v-btn class="mt-6" @click="downloadImageSizes()">
        <v-icon left>mdi-download</v-icon>
        &nbsp;DOWNLOAD XLSX
    </v-btn>
</template>

<script>
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

export default {
    data() {
        return {
            imageFiles: [],
        };
    },
    methods: {
        onFileInputChange(event) {
            const validFiles = Array.from(event.target.files).filter((file) => file.type.startsWith('image/'));

            if (validFiles.length === 0) {
                alert('이미지 파일이 포함되어 있지 않습니다. 다시 시도해주세요.');
                return;
            }

            this.imageFiles = validFiles;
        },

        async downloadImageSizes() {
            if (this.imageFiles.length === 0) {
                alert('선택된 이미지 파일이 없습니다. 다시 시도해주세요.');
                return false;
            }

            const workbook = XLSX.utils.book_new();
            const sheetData = [['File Name', 'Width', 'Height']];

            for (const file of this.imageFiles) {
                const dimensions = await this.getImageDimensions(file);
                sheetData.push([file.name, dimensions.width, dimensions.height]);
            }

            const worksheet = XLSX.utils.aoa_to_sheet(sheetData);
            XLSX.utils.book_append_sheet(workbook, worksheet, 'Image Sizes');
            const wbout = XLSX.write(workbook, { bookType: 'xlsx', type: 'binary' });

            const s2ab = (s) => {
                const buf = new ArrayBuffer(s.length);
                const view = new Uint8Array(buf);
                for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
                return buf;
            };

            saveAs(new Blob([s2ab(wbout)], { type: 'application/octet-stream' }), 'image_sizes.xlsx');
        },

        getImageDimensions(file) {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = URL.createObjectURL(file);
                img.onload = () => {
                    resolve({ width: img.width, height: img.height });
                };
            });
        },
    },
};
</script>

<style>
</style>
