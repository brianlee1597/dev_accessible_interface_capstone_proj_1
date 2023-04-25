from flask import Flask
from flask import render_template
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('main.html')

@app.route('/quiz')
def quiz():
    return render_template('quiz.html')

@app.route('/learn/korean')
def language():
    return render_template('learn.html')

if __name__ == '__main__':
   app.run(debug = True)