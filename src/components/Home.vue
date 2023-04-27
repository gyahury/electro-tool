<template>
    <div>
      <header class="header">electro-tool</header>
      <v-divider></v-divider>
      <p class="mt-6">현재 해당 기능들이 제공됩니다.</p>
      <ul class="list-disc mt-6">
        <li>Select folder → Create XLSX file with file name</li>
        <li>Select XLSX → Convert to CSV file</li>
        <li>Select CSV file → Convert to XLSX file</li>
        <li>Select image file → Create XLSX file with image size</li>
      </ul>
    </div>
  </template>
  
  <style scoped>
    ul {
      list-style-type: none;
      margin-top: 1.5rem;
    }
    li {
      margin-top: 0.8rem;
    }
  </style>