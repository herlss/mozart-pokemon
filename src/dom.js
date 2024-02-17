const audio_player = document.getElementById('audio_player')
const timer_div = document.getElementById('timer')
const options = document.querySelectorAll('.option')
const result_div = document.getElementById('result')
const question_div = document.getElementById('question')
const next_button = document.getElementById('next_button')
const iframe = document.getElementById('result_video')
const result_name = document.getElementById('result_name')
const result_type = document.getElementById('result_type')
const question_number = document.getElementById('question_number')
const question_sheet = document.getElementById('question_sheet')
const game_over = document.getElementById('game_over')

const dom = {   
    audio_player,
    timer_div,
    options,
    result_div,
    question_div,
    next_button,
    iframe,
    result_name,
    result_type,
    question_number,
    question_sheet,
    game_over
}   

export default dom