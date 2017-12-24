import cgi
import json
import tupy.Interpreter
import sys

raw_input_json = None
options_json = None

# If you pass in a filename as an argument, then process script from that file ...
if len(sys.argv) > 1:
  user_script = open(sys.argv[1]).read()

# Otherwise act like a CGI script with parameters:
#   user_script
#   raw_input_json
#   options_json
else:
  form = cgi.FieldStorage()
  user_script = form['user_script'].value
  if 'raw_input_json' in form:
    raw_input_json = form['raw_input_json'].value
  if 'options_json' in form:
    options_json = form['options_json'].value

print("Content-type: text/plain; charset=iso-8859-1\n")
tupy.Interpreter.Interpreter.interpret(user_script, trace=True)
