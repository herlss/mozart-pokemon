import songs from "./src/songs.js" 
import dom from "./src/dom.js"

// Setting up current song data
var currentSong = 0
var audio = new Audio(songs[currentSong].path)

// Setting up the 30 sec timer
var timeInterval;
var timer = 30

function start_audio() {
    // Removing audio player and bringing up timer
    dom.audio_player.style.display = 'none'

    dom.timer_div.style.display = 'flex'
    dom.timer_div.textContent = timer

    audio.play()

    timeInterval = setInterval(update_time, 1000)
}

function update_time() {
    // Checking the timer to stop the music and show the answers at 1 sec
    if (timer == 1){
        clearInterval(timeInterval)
        give_options()
        return
    }
    timer --
    dom.timer_div.textContent = timer
}

function give_options() {
    dom.timer_div.textContent = 'Escolha uma das opcoes no titulo!!'
    dom.timer_div.classList.add('done')
}

function show_results() {
    // Switching pages
    dom.result_div.style.display = 'block'
    dom.question_div.style.display = 'none'

    // Setting up the result page's data with the id of the current song
    dom.result_type.textContent = songs[currentSong].answer
    dom.result_name.textContent = songs[currentSong].name
    dom.iframe.src = songs[currentSong].youtube
}

function next_song() {
    // Next song
    currentSong ++

    // Resetting time
    timer = 30
    
    reset_question_page()

    // Setting up the question page's data with the id of the current song
    dom.question_number.textContent = songs[currentSong].position
    dom.question_sheet.src = songs[currentSong].sheet
    audio = new Audio(songs[currentSong].path)
}

function reset_question_page() {
    // Returning the timer div to its normal size
    dom.timer_div.classList.remove('done')

    // Removing the timer div and returning the audio player
    dom.audio_player.style.display = 'flex'
    dom.timer_div.style.display = 'none'

    // Switching pages
    dom.result_div.style.display = 'none'
    dom.question_div.style.display = 'block'
}

function finish_game() {
    // Switching pages
    dom.result_div.style.display = 'none'
    dom.question_div.style.display = 'none'

    dom.game_over.style.display = 'block'
}

dom.next_button.addEventListener('click', () => {
    // Checking if song is the last
    if (songs[currentSong].position == songs.length){
        finish_game()
        return
    }
    next_song()
})

dom.audio_player.addEventListener('click', () => {
    start_audio()
})

dom.options.forEach(opt => {
    opt.addEventListener('click', () => {
        show_results()

        clearInterval(timeInterval)
        
        audio.pause();
        audio.currentTime = 0;
    })
})