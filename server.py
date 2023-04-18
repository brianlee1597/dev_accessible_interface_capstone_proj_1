from sre_constants import SUCCESS
from flask import Flask
from flask import render_template
from flask import Response, request, jsonify, flash, redirect
app = Flask(__name__)

# for session
app.secret_key = 'iwashfiuhaihanjxznbviag'

language_dict = {
    'korean': {
        'language': 'Korean',
        'intro': 'Korean Language',
        'words': [
            {
                'word': '행복',
                'img': 'https://cdn.dribbble.com/users/3128810/screenshots/12073708/happy_child_illustration__1_.png',
                'meaning': 'Happiness',
            },
            {
                'word': '사랑',
                'img': 'https://static.vecteezy.com/system/resources/previews/000/240/062/original/couple-in-love-illustration-vector.jpg',
                'meaning': 'Love',
            },
            {
                'word': '친구',
                'img': 'https://i.pinimg.com/originals/2e/e3/e6/2ee3e6df94e4f7cb3e719c440a122fbe.jpg',
                'meaning': 'Friend',
            }
        ],
        'prev': 'chinese',
        'next': 'french',
    }
}

@app.route('/')
def index():
    return render_template('main.html')

@app.route('/quiz')
def quiz():
    return render_template('quiz.html')

@app.route('/learn/korean')
def language():
    return render_template('learn.html', language=language_dict["korean"])

if __name__ == '__main__':
   app.run(debug = True)