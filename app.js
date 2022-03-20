const quiz = [
    {
        question : 'ゲーム市場、最も売れたゲーム機は次の内どれ？',
        answers : [
            'スーパーファミコン',
            'ニンテンドースイッチ',
            'プレイステーション２',
            'ニンテンドーDS'
        ],
        correct: 'ニンテンドーDS'
    },{
        question : '糸井重里が企画に関わった、任天堂の看板ゲームと言えば？',
        answers : [
            'MOTHER2',
            'スーパーマリオブラザーズ３',
            'スーパードンキーコング',
            '星のカービィ'
        ],
        correct: 'MOTHER2'
    },{
        question : 'ファイナルファンタジーⅣの主人公の名前は？',
        answers : [
            'フリオニール',
            'クラウド',
            'ティーダ',
            'セシル'
        ],
        correct: 'セシル'
    }

]


const quizLength = quiz.length;
let quizIndex = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;
const answersLength = quiz[quizIndex].answers.length;
let score = 0;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
    //定数の文字列をHTMLに反映させる
    document.getElementById('js-question').textContent = quiz[quizIndex].question;

    let buttonIndex = 0;
    let buttonLength = $button.length;
    while(buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
//クリックしたときの処理
const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert('正解！');
        score++;
    } else {
        window.alert('不正解！');
    }

    quizIndex++;

    if(quizIndex < quizLength){
        //問題がまだあればこちらを実行
        setupQuiz();
    } else {
        //問題がなければこちらを実行
        window.alert('終了！'+quizLength+'門中、得点は'+score+'点です！');
    }
};



setupQuiz();


//ボタンをクリックしたら正誤判定

handlerIndex = 0;
while(handlerIndex < answersLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
};


