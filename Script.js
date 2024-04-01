        let progress = document.getElementById('progress');
        let song = document.getElementById('song');
        let ctrlIcon = document.getElementById('ctrlIcon');

        song.onloadedmetadata = function() {
            progress.max = song.duration;
            progress.value = song.currentTime;
            console.log('loaded meta data')
        }

        function reverse(){
            song.currentTime -= 30
        }

        function playPause(){
            if(ctrlIcon.classList.contains('fa-pause')){
                song.pause();
                ctrlIcon.classList.remove('fa-pause')
                ctrlIcon.classList.add('fa-play')
            }
            else {
                song.play();
                ctrlIcon.classList.remove('fa-play');
                ctrlIcon.classList.add('fa-pause');
            }
        }

        function forward(){
            song.currentTime += 30
        }

        if(song.play()){
            setInterval(() => {
                progress.value = song.currentTime;
            },500)
        }

        progress.onchange = function(){
            song.play();
            song.currentTime = progress.value;
            ctrlIcon.classList.add('fa-pause');
            ctrlIcon.classList.remove('fa-play');
        }