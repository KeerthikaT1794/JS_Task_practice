
        function addRow() {
          var table = document.getElementById("myTableBody");
          var row = table.insertRow();
          var nameCell = row.insertCell(0);
          var ageCell = row.insertCell(1);
          var genderCell = row.insertCell(2);
          var actionCell = row.insertCell(3);
          nameCell.innerHTML = "<input type='text'>";
          ageCell.innerHTML = "<input type='text'>";
          genderCell.innerHTML = "<input type='text'>";
          actionCell.innerHTML = "<button onclick='editRow(this)'>Edit</button><button onclick='saveRow(this)'>Save</button><button onclick='deleteRow(this)'>Delete</button>";
        }
      
        function saveRow(button) {
          var row = button.parentNode.parentNode;
          var cells = row.getElementsByTagName("td");
          for (var i = 0; i < cells.length - 1; i++) {
            var input = cells[i].getElementsByTagName("input")[0];
            cells[i].innerHTML = input.value;
          }
          button.innerHTML = "Save";
          button.onclick = editRow;
        }
      
        function editRow(button) {
          var row = button.parentNode.parentNode;
          var cells = row.getElementsByTagName("td");
          for (var i = 0; i < cells.length - 1; i++) {
            var input = document.createElement("input");
            input.type = "text";
            input.value = cells[i].innerHTML;
            cells[i].innerHTML = "";
            cells[i].appendChild(input);
          }
          button.innerHTML = "Save";
          button.onclick = function() { saveEditedRow(this); };
        }
      
        function saveEditedRow(button) {
          var row = button.parentNode.parentNode;
          var cells = row.getElementsByTagName("td");
          for (var i = 0; i < cells.length - 1; i++) {
            var input = cells[i].getElementsByTagName("input")[0];
            cells[i].innerHTML = input.value;
          }
          button.innerHTML = "Edit";
          button.onclick = editRow;
        }
      
        function deleteRow(button) {
          var row = button.parentNode.parentNode;
          row.parentNode.removeChild(row);
        }
