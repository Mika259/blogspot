/*
Template by : Daniel Hakim
Follow for more news hehe
*/

function copyText(elementId) {
            var element = document.getElementById(elementId);
            var text = element.getAttribute("data-copytext");
            var tempInput = document.createElement("input");
            tempInput.value = text;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand("copy");
            document.body.removeChild(tempInput);
            alert("copied to clipboard: " + text);
        }
function copyText() {
            var element = document.getElementById("myElement");
            var text = element.innerText || element.textContent;
            var tempInput = document.createElement("input");
            tempInput.value = text;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand("copy");
            document.body.removeChild(tempInput);
        }

function closeToast() {
  var toast = document.getElementById("toast");
  toast.style.display = "none";
  alert('I hope you already read it.')
}

window.addEventListener("DOMContentLoaded", function() {
  var toast = document.getElementById("toast");
  toast.style.display = "block";
})
