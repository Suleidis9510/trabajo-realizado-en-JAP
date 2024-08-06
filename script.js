
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.style.backgroundColor = '#555';
}


document.getElementsByClassName("tablink")[0].click();
// para cambiar el modo claro vs oscuro
  function toggleDarkMode() {
            const body = document.body;
            const icon = document.getElementById('toggle-icon');
            body.classList.toggle('dark-mode');
           body.classList.toggle('light-mode');
            if (body.classList.contains('dark-mode')) {
                icon.src = 'https://img.icons8.com/ios-glyphs/30/ffffff/light-off.png';
            } else {
                icon.src = 'https://img.icons8.com/ios-glyphs/30/000000/light-on.png';
            }
        }