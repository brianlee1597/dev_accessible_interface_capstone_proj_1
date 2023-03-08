from flask import Flask, render_template
from string import Template

app = Flask(__name__)

LANGUAGE_TEMPLATE = Template("""
    <h1>${language} page</h1>
""")


@app.route('/')
def index():
    return render_template("index.html", test="test")


@app.route('/<language>')
def language(language):
    return (LANGUAGE_TEMPLATE.substitute(language=language))
