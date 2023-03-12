<template>
    <div>
      <input type="file" id="directory_upload" webkitdirectory>
    </div>
    <div class="file_list">
      <p></p>
    </div>
</template>

<script>
 
  window.onload = function(){
  const input = document.querySelector('input');
  const preview = document.querySelector('.file_list');

    if(input){
      input.addEventListener('change', showTextFile);
    }
    

    function showTextFile() {
      const selectedFiles = input.files;
      const list = document.createElement('ul');
      preview.appendChild(list);

      for(const file of selectedFiles) {
          const listItem = document.createElement('li');
          const summary = document.createElement('div');

          summary.textContent = file.webkitRelativePath;

          listItem.appendChild(summary);
          list.appendChild(listItem);
      }
  }
  }
  
  
</script>

<style>
  .file_list{
    margin-top: 20px; 
  }
  li{
    list-style-type: none;
  }
</style>