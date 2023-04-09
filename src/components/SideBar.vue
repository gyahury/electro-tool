<template>
    <v-card>
        <v-layout>
            <v-navigation-drawer floating permanent elevation="3" color="rgb(255, 255, 255)">
                <v-list nav>
                    <v-list-item prepend-icon="mdi-home" title="HOME" value="home" @click="toHome"></v-list-item>
                    <v-list-item prepend-icon="mdi-swap-horizontal" title="File Names To XLSX" value="filenamelist"
                        @click="toFileNameList"></v-list-item>
                    <v-list-item prepend-icon="mdi-swap-horizontal" title="XLSX To CSV" value="tocsv"
                        @click="toXlsxToCsv"></v-list-item>
                    <v-list-item prepend-icon="mdi-swap-horizontal" title="CSV To XLSX" value="toxlsx"
                        @click="toCsvToXlsx"></v-list-item>
                    <v-list-item prepend-icon="mdi-swap-horizontal" title="ImgSize To XLSX" value="imgsizelist"
                        @click="toImgSizeList">
                    </v-list-item>
                    <!--<v-list-item prepend-icon="mdi-swap-horizontal" title="이미지 해상도 출력" value="imageresol"></v-list-item>
                    <v-list-item prepend-icon="mdi-swap-horizontal" title="이미지 해상도 변경" value="chgimgresol"></v-list-item>
                    <v-list-item prepend-icon="mdi-swap-horizontal" title="폴더 내 파일 분리" value="sepfile"></v-list-item>
                    <v-list-item prepend-icon="mdi-swap-horizontal" title="폴더/파일명 일괄 변경" value="chafilename"></v-list-item> -->
                </v-list>
            </v-navigation-drawer>
            <v-main style="height: 480px;">
                <v-sheet :height="250" :width="500" class="pa-14">
                    <router-view />
                </v-sheet>
            </v-main>
        </v-layout>
    </v-card>
</template>

<style></style>

<script>
export default {

    methods: {
        toHome() {
            this.$router.push("/Home")
        },
        toFileNameList() {
            this.$router.push("/FileNameList")
        },
        toXlsxToCsv() {
            this.$router.push("/XlsxToCsv")
        },
        toCsvToXlsx() {
            this.$router.push("/CsvToXlsx")
        },
        toCsvToXlsx() {
            this.$router.push("/CsvToXlsx")
        },
        toImgSizeList() {
            this.$router.push("/ImgSizeList")
        }
    }
}
</script>