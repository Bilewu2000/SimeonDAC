        var navlinks = document.getElementById("navlinks");
        
        function showMenu(){
            navlinks.style.right ="0";
            navlinks.style.display="block";
        }

        function hideMenu(){
            navlinks.style.right= "-200px";
            navlinks.style.display="none";
        }

        var acc = document.getElementsByClassName("accordion");var i;
        for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");

            /* Toggle between hiding and showing the active panel */
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
            panel.style.display = "none";
            } else {
            panel.style.display = "block";
            }
        });
        }