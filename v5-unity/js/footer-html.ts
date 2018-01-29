export var footerHtml = `
<!-- 
--Using POST requests to allow for longer code for now, embeds and permalinks will not currently work--

<p>
  <button id="genUrlBtn" class="smallBtn" type="button">Gerar link permanente</button> <input type="text" id="urlOutput" size="70"/>
</p>
<p>
  <button id="genUrlShortenedBtn" class="smallBtn" type="button">Encurtar link</button> <input type="text" id="urlOutputShortened" size="25"/>
</p>

<p>Clique no botão acima para gerar um endereço permanente para sua
visualização. Para informar um bug, copie o link gerado com uma breve
descrição e envie um email para giandroberto@yahoo.com.br</p>

<div id="embedLinkDiv">
<p>
  <button id="genEmbedBtn" class="smallBtn" type="button">Gerar código de embed</button> <input type="text" id="embedCodeOutput" size="70"/>
</p>

<p>Para incluir essa visualização em uma página web, clique no botão
'Gerar código de embed' acima e cole o código HTML resultante na sua
página. Ajuste os parâmetros de largura e altura (width/height) e
mude o link para <b>https://</b> se necessário.</p>
</div>
-->

<p style="margin-top: 25px;">
<a href="http://pythontutor.com/">Python Tutor</a> (<a href="https://github.com/pgbovine/OnlinePythonTutor">código no GitHub</a>) suporta sete
linguagens (apesar do nome):</p>

<p>1. Python <a href="https://docs.python.org/2.7/">2.7</a> e <a
href="https://docs.python.org/3.6/">3.6</a> com imports de módulos
limitados e sem suporte a entrada do usuário.
Os módulos a seguir podem ser importados: 
bisect,
collections,
copy,
datetime,
functools,
hashlib,
heapq,
itertools,
json,
math,
operator,
random,
re,
string,
time,
typing,
io/StringIO.
<a
href="https://github.com/pgbovine/OnlinePythonTutor/tree/master/v3">Código do backend</a>.
</p>

<p>2. Java usando Java 8 da Oracle. O<a
href="http://cscircles.cemc.uwaterloo.ca/java_visualize/">
visualizador Java</a> original foi criado por <a href="https://github.com/daveagp">David Pritchard</a> e Will Gwozdz.
Ele suporta
<code><a href="http://introcs.cs.princeton.edu/java/stdlib/javadoc/StdIn.html">StdIn</a></code>, 
<code><a href="http://introcs.cs.princeton.edu/java/stdlib/javadoc/StdOut.html">StdOut</a></code>, 
a maioria das outras <a href="http://introcs.cs.princeton.edu/java/stdlib">bibliotecas <tt>stdlib</tt></a>,
<a href="http://introcs.cs.princeton.edu/java/43stack/Stack.java.html"><tt>Stack</tt></a>,
<a href="http://introcs.cs.princeton.edu/java/43stack/Queue.java.html"><tt>Queue</tt></a>,
e <a href="http://introcs.cs.princeton.edu/java/44st/ST.java.html"><tt>ST</tt></a>.
(Para acessar as classes <tt>Stack</tt>/<tt>Queue</tt> do Java, escreva
<tt>import java.util.Stack;</tt> &mdash; atenção, <tt>import
java.util.*;</tt> não funcionará.)
<a
href="https://github.com/pgbovine/OnlinePythonTutor/tree/master/v4-cokapi/backends/java">Código do backend</a>.</p>

<p>3. JavaScript rodando em Node.js v6.0.0 com suporte limitado para ES6. <a
href="https://github.com/pgbovine/OnlinePythonTutor/tree/master/v4-cokapi/backends/javascript">Código do backend</a>.</p>

<p>4. <a href="http://www.typescriptlang.org">TypeScript</a> 1.4.1 rodando em Node.js v6.0.0. <a
href="https://github.com/pgbovine/OnlinePythonTutor/tree/master/v4-cokapi/backends/javascript">Código do backend</a>.</p>

<p>5. Ruby 2 usando MRI 2.2.2. <a
href="https://github.com/pgbovine/OnlinePythonTutor/tree/master/v4-cokapi/backends/ruby">Código do backend</a>.</p>

<p>6. C usando gcc 4.8, C11, e Valgrind Memcheck.
<a href="https://github.com/pgbovine/opt-cpp-backend">Código do backend</a>.</p>

<p>7. C++ usando gcc 4.8, C++11, e Valgrind Memcheck.
<a href="https://github.com/pgbovine/opt-cpp-backend">Código do backend</a>.</p>

<p>Use este website sob sua conta e risco. Os desenvolvedores do Python Tutor e do
Tutor TuPy não se responsabilizam por quaisquer danos causados pelo uso deste
site.</p>

<p style="margin-top: 25px;">
Copyright &copy; <a href="http://www.pgbovine.net/">Philip Guo</a> e Giancarlo França. Todos os direitos reservados.
</p>
`;
