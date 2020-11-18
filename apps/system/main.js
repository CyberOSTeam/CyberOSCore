            function myFunction() {
                document.getElementById("Info-Tab").style.display = "inline";
            }
            function mysecondFunction() {
                document.getElementById("Info-Tab").style.display = "none";
            }
            function mythirdFunction() {
                document.getElementById("settings-Tab").style.display = "inline";
            }
            function myfourthFunction() {
                document.getElementById("settings-Tab").style.display = "none";
            }
            function myfifthFunction() {
                document.getElementById("hackergame-Tab").style.display = "inline";
            }
            function mysixthFunction() {
                document.getElementById("hackergame-Tab").style.display = "none";
            }
            $(switchBackground);
            var oFReader = new FileReader(),
                rFilter = /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i;

            oFReader.onload = function (oFREvent) {
                localStorage.setItem('b', oFREvent.target.result);
                switchBackground();
            };

            function switchBackground() {
                var backgroundImage = localStorage.getItem('b');
                if (backgroundImage) {
                    $('body').css('background-image', 'url(' + backgroundImage + ')');
                }
            }

            function loadImageFile(testEl) {
                if (! testEl.files.length) {
                    return;
                }
                var oFile = testEl.files[0];
                if (! rFilter.test(oFile.type)) {
                    alert("You must select a valid image file!");
                    return;
                }
                oFReader.readAsDataURL(oFile);
            }
            function startTime() {
                var today = new Date();
                var h = today.getHours();
                var m = today.getMinutes();
                var s = today.getSeconds();
                m = checkTime(m);
                s = checkTime(s);
                document.getElementById('time-clock').innerHTML = h + ":" + m + ":" + s;
                var t = setTimeout(startTime, 500);
            }
            function checkTime(i) {
                if (i < 10) {
                    i = "0" + i
                };
                return i;
            }