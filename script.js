var ques = $('.exercises')
var opIndex = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
for (let i = 0; i < questions.length; i++) {
    for (let j = 0; j < questions[i].optAry.length; j++) {
        if (questions[i].answer.search(RegExp(questions[i].optAry[j].id)) >= 0) {
            var queItem = null;
            if ($(ques[i]).find('.iradio_flat-blue').length > 0)
                queItem = $(ques[i]).find('.iradio_flat-blue');
            else
                queItem = $(ques[i]).find('.icheckbox_flat-blue');
            $(queItem[opIndex.indexOf(questions[i].optAry[j].option)]).click()
            console.log(i + 1, questions[i].optAry[j].option);
        }
    }
}
