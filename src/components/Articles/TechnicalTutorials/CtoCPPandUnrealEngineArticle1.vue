<template>
  <div>
    <link href="/static/CSSfiles/MarkDown.css" rel="stylesheet">
    <div class='typora-export-content'>
      <div id='write' class=''><h1 id='c中的对象和类-从c语言过渡到c和虚幻引擎中的c编程教程②'><span>C++中的对象和类 《从C语言过渡到C++和虚幻引擎中的C++编程》教程②</span>
      </h1>
        <p>&nbsp;</p>
        <h2 id='一面向对象编程object-oriented-programmingoop）'><strong><span>一、面向对象编程</span></strong><span>（Object Oriented Programming，OOP）</span>
        </h2>
        <p><span>在序章中我们提到：</span></p>
        <p>&nbsp;</p>
        <p><strong><span>如果我们能把程序的每类功能都分门别类，解决某一类问题就用某一类的程序，同类的功能可以从同类中创建一个一样的实例对象来用，并且使用某一类程序的时候有相应的访问权限防止其他程序员错用，然后与该程序功能相似的程序可以通过在该程序的基础上增删查改一部分内容来实现的话，就能大大降低程序员的思维负担。</span></strong>
        </p>
        <p>&nbsp;</p>
        <p>
          <strong><span>面向对象编程就是把构成问题事务分解成各个对象，建立对象的目的不是为了完成一个步骤，而是为了描述某个事物在整个解决问题的步骤中的行为。</span></strong>
        </p>
        <p>&nbsp;</p>
        <p>
          <span>在游戏开发中，我们会发现有大量的事物是具有共性，并且可以划为一类的，比如玩家和敌人，都属于角色人物，都具有移动、攻击等等相同的功能和血量、攻击力等类型相同但值不同的参数。</span>
        </p>
        <p>&nbsp;</p>
        <p>
          <span>如果使用面向过程的编程语言制作以上功能，我们就需要给角色写一遍控制移动的函数，给敌人也要写一遍控制移动的函数</span><strong><span>，</span></strong><span>同样的功能，就因为</span><strong><span>作用对象不同</span></strong><span>，我们可能就需要写几种不同的移动函数出来实现，非常麻烦。</span>
        </p>
        <p>&nbsp;</p>
        <p><span>而使用面向对象的编程语言，我们可以先写出玩家和敌人都拥有的功能和属性，也就是角色类的代码，那么玩家类和敌人类的代码就可以继承角色类的代码并且在其基础上增删查改一部分内容实现。这样就能实现代码的复用和减轻程序员的思维负担。</span>
        </p>
        <p>&nbsp;</p>
        <h2 id='二c中的类'><span>二、C++中的类</span></h2>
        <p>
          <span>C++中的类是从C语言中的结构体进化而来的，在C语言的结构体中我们学到，结构体可以把一些数据封装打包整理到一起，在程序中我们就可以把一些数据打包在结构体中，就可以很方便地对大量的数据进行增删查改的操作。</span>
        </p>
        <p>&nbsp;</p>
        <p>
          <span>例如，在写贪吃蛇程序的时候，我们可以把贪吃蛇身上每一个节点的坐标数据存储到结构体中，就可以很方便地对每个节点的坐标信息进行整体赋值，而不需要手动再对一个个参数进行：</span>
        </p>
        <pre class="md-fences md-end-block ty-contain-cm modeLoaded" spellcheck="false" lang="cpp"><div
          class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap" lang="cpp"><div
          style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 9.33333px; left: 8px;"><textarea
          autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0"
          style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div
          class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler"
                                                                               cm-not-content="true"></div><div
          class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer"
                                                       style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div
          style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation"
                                                                                                       style="position: relative; outline: none;"><div
          class="CodeMirror-measure"></div><div class="CodeMirror-measure"></div><div
          style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation"><div
          class="CodeMirror-activeline" style="position: relative;"><div
          class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div
          class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-variable">position</span>[<span class="cm-number">0</span>][<span class="cm-number">1</span>]<span
          class="cm-operator">=</span><span class="cm-variable">position</span>[<span class="cm-number">1</span>][<span
          class="cm-number">1</span>]</span></pre></div></div></div></div></div></div><div
          style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 23px;"></div><div
          class="CodeMirror-gutters" style="display: none; height: 23px;"></div></div></div></pre>
        <p><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw=="
                referrerpolicy="no-referrer" alt="点击并拖拽以移动"></p>
        <p><span>就像这样：</span></p>
        <pre class="md-fences md-end-block ty-contain-cm modeLoaded" spellcheck="false" lang="cpp"
             style="break-inside: unset;"><div class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap" lang="cpp"><div
          style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 9.33333px; left: 8px;"><textarea
          autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0"
          style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div
          class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler"
                                                                               cm-not-content="true"></div><div
          class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer"
                                                       style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div
          style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation"
                                                                                                       style="position: relative; outline: none;"><div
          class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div
          style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation" style=""><div
          class="CodeMirror-activeline" style="position: relative;"><div
          class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div
          class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-meta">#include&lt;stdio.h&gt;</span></span></pre></div><pre class=" CodeMirror-line "
                                                                                role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">struct</span> <span class="cm-def">SnakeNode</span></span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation"
                                                              style="padding-right: 0.1px;">{</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-variable-3">int</span> <span
          class="cm-variable">position</span>[<span class="cm-number">2</span>];<span
          class="cm-comment">//用以表示蛇节点的x,y轴坐标</span></span></pre><pre class=" CodeMirror-line "
                                                                                 role="presentation"><span
          role="presentation" style="padding-right: 0.1px;">};</span></pre><pre class=" CodeMirror-line "
                                                                                role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-variable-3">int</span> <span
          class="cm-def">main</span>()</span></pre><pre class=" CodeMirror-line " role="presentation"><span
          role="presentation" style="padding-right: 0.1px;">{</span></pre><pre class=" CodeMirror-line "
                                                                               role="presentation"><span role="presentation"
                                                                                                         style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-keyword">struct</span> <span
          class="cm-def">SnakeNode</span> <span class="cm-def">snake</span>[<span
          class="cm-number">100</span>];</span></pre><pre class=" CodeMirror-line " role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation"
                                                                  cm-text="	">    </span><span
          class="cm-variable">snake</span>[<span class="cm-number">0</span>].<span class="cm-variable">position</span>[<span
          class="cm-number">0</span>] <span class="cm-operator">=</span> <span class="cm-number">1</span>;</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-variable">snake</span>[<span
          class="cm-number">0</span>].<span class="cm-variable">position</span>[<span class="cm-number">1</span>] <span
          class="cm-operator">=</span> <span class="cm-number">2</span>;</span></pre><pre class=" CodeMirror-line "
                                                                                          role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation"
                                                                  cm-text="	">    </span><span
          class="cm-variable">snake</span>[<span class="cm-number">1</span>] <span class="cm-operator">=</span> <span
          class="cm-variable">snake</span>[<span class="cm-number">0</span>];<span
          class="cm-comment">//让蛇的第二个节点坐标等于第一个节点的坐标</span></span></pre><pre class=" CodeMirror-line "
                                                                                                role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation"
                                                                  cm-text="	">    </span><span
          class="cm-variable">printf</span>(<span class="cm-string">"snake.position[0]=[%d,%d]\n"</span>, <span
          class="cm-variable">snake</span>[<span class="cm-number">0</span>].<span class="cm-variable">position</span>[<span
          class="cm-number">0</span>], <span class="cm-variable">snake</span>[<span class="cm-number">0</span>].<span
          class="cm-variable">position</span>[<span class="cm-number">1</span>]);</span></pre><pre class=" CodeMirror-line "
                                                                                                   role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation"
                                                                  cm-text="	">    </span><span
          class="cm-variable">printf</span>(<span class="cm-string">"snake.position[1]=[%d,%d]\n"</span>, <span
          class="cm-variable">snake</span>[<span class="cm-number">1</span>].<span class="cm-variable">position</span>[<span
          class="cm-number">0</span>], <span class="cm-variable">snake</span>[<span class="cm-number">1</span>].<span
          class="cm-variable">position</span>[<span class="cm-number">1</span>]);</span></pre><pre class=" CodeMirror-line "
                                                                                                   role="presentation"><span
          role="presentation" style="padding-right: 0.1px;">}</span></pre></div></div></div></div></div><div
          style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 363px;"></div><div
          class="CodeMirror-gutters" style="display: none; height: 363px;"></div></div></div></pre>
        <p><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw=="
                referrerpolicy="no-referrer" alt="点击并拖拽以移动"></p>
        <p><span>输出结果为： </span></p>
        <pre class="md-fences md-end-block ty-contain-cm modeLoaded" spellcheck="false" lang="cpp"><div
          class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap" lang="cpp"><div
          style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 9.33333px; left: 8px;"><textarea
          autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0"
          style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div
          class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler"
                                                                               cm-not-content="true"></div><div
          class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer"
                                                       style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div
          style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation"
                                                                                                       style="position: relative; outline: none;"><div
          class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div
          style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation"><div
          class="CodeMirror-activeline" style="position: relative;"><div
          class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div
          class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-variable">snake</span>.<span class="cm-variable">position</span>[<span class="cm-number">0</span>]<span
          class="cm-operator">=</span>[<span class="cm-number">1</span>,<span class="cm-number">2</span>]</span></pre></div><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-variable">snake</span>.<span class="cm-variable">position</span>[<span class="cm-number">1</span>]<span
          class="cm-operator">=</span>[<span class="cm-number">1</span>,<span class="cm-number">2</span>]</span></pre></div></div></div></div></div><div
          style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 45px;"></div><div
          class="CodeMirror-gutters" style="display: none; height: 45px;"></div></div></div></pre>
        <p><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw=="
                referrerpolicy="no-referrer" alt="点击并拖拽以移动"></p>
        <p>
          <span>但是我们可以发现，C语言的结构体作为一种数据结构，只能作为存储信息的单元，C语言的结构体内只能定义成员变量，不能定义“函数”或者说成员方法，自身并不具有操作数据、进行计算的能力，只能由外部的代码去修改它。</span>
        </p>
        <p>&nbsp;</p>
        <p>
          <span>而C++中的类相对于C语言的结构体，增加了成员方法（或者说成员函数）和访问权限控制，并且拥有了继承、重写等功能。这意味着，它不仅可以像C语言的结构体一样可以存储数据，还拥有操纵数据、进行计算等能力。</span>
        </p>
        <p>&nbsp;</p>
        <p><strong><span>假如我们要制作的游戏里面有玩家和敌人两类角色，我们可以先写出玩家和敌人都拥有的功能和属性，也就是角色类的代码,然后将玩家类和敌人类继承于角色类，这样玩家和敌人就具有了和其父类，即角色类拥有的成员变量和成员方法。</span></strong>
        </p>
        <p><span>代码如下：</span></p>
        <pre class="md-fences md-end-block ty-contain-cm modeLoaded" spellcheck="false" lang="cpp"
             style="break-inside: unset;"><div class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap" lang="cpp"><div
          style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 9.33333px; left: 8px;"><textarea
          autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0"
          style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div
          class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler"
                                                                               cm-not-content="true"></div><div
          class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer"
                                                       style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div
          style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation"
                                                                                                       style="position: relative; outline: none;"><div
          class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div
          style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation" style=""><div
          class="CodeMirror-activeline" style="position: relative;"><div
          class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div
          class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-meta">#include&lt;iostream&gt;</span></span></pre></div><pre class=" CodeMirror-line "
                                                                                 role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span
          class="cm-comment">//class关键词用于声明类</span></span></pre><pre class=" CodeMirror-line "
                                                                             role="presentation"><span role="presentation"
                                                                                                       style="padding-right: 0.1px;"><span
          class="cm-keyword">class</span> <span class="cm-def">Character</span><span
          class="cm-comment">//玩家类和敌人类共有的父类——角色类</span></span></pre><pre class=" CodeMirror-line "
                                                                                        role="presentation"><span
          role="presentation" style="padding-right: 0.1px;">{</span></pre><pre class=" CodeMirror-line "
                                                                               role="presentation"><span role="presentation"
                                                                                                         style="padding-right: 0.1px;"><span
          class="cm-keyword">private</span>:<span
          class="cm-comment">//在此后面定义的方法和变量都是私有的</span></span></pre><pre class=" CodeMirror-line "
                                                                                          role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation"
                                                                  cm-text="	">    </span><span
          class="cm-variable-3">float</span> <span class="cm-variable">blood_</span>;<span
          class="cm-comment">//玩家和敌人都会有的血量值</span></span></pre><pre class=" CodeMirror-line "
                                                                                role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">public</span>:<span class="cm-comment">//在此后面定义的方法和变量都是公有的</span></span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span><span
          class="cm-comment">//玩家和敌人类都需要的方法：</span></span></pre><pre class=" CodeMirror-line "
                                                                                 role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation"
                                                                  cm-text="	">    </span><span
          class="cm-variable-3">float</span> <span class="cm-variable">getBlood</span>()</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span>{</span></pre><pre class=" CodeMirror-line "
                                                                                        role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation"
                                                                  cm-text="	">    </span><span class="cm-tab"
                                                                                                role="presentation"
                                                                                                cm-text="	">    </span><span
          class="cm-keyword">return</span> <span class="cm-variable">blood_</span>;</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span>}</span></pre><pre class=" CodeMirror-line "
                                                                                        role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation"
                                                                  cm-text="	">    </span><span
          class="cm-variable-3">float</span> <span class="cm-variable">setBlood</span>(<span
          class="cm-variable-3">float</span> <span class="cm-variable">blood</span>)</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span>{</span></pre><pre class=" CodeMirror-line "
                                                                                        role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation"
                                                                  cm-text="	">    </span><span class="cm-tab"
                                                                                                role="presentation"
                                                                                                cm-text="	">    </span><span
          class="cm-variable">blood_</span> <span class="cm-operator">=</span> <span
          class="cm-variable">blood</span>;</span></pre><pre class=" CodeMirror-line " role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation"
                                                                  cm-text="	">    </span><span class="cm-tab"
                                                                                                role="presentation"
                                                                                                cm-text="	">    </span><span
          class="cm-keyword">return</span> <span class="cm-variable">blood_</span>;</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span>}</span></pre><pre class=" CodeMirror-line "
                                                                                        role="presentation"><span
          role="presentation" style="padding-right: 0.1px;">};</span></pre><pre class=" CodeMirror-line "
                                                                                role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span
          class="cm-comment">//注意这里是public继承方式</span></span></pre><pre class=" CodeMirror-line "
                                                                                role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span
          class="cm-comment">//后面会讲到几种继承方式的区别</span></span></pre><pre class=" CodeMirror-line "
                                                                                    role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">class</span> <span class="cm-def">Player</span> :<span
          class="cm-keyword">public</span> <span class="cm-variable">Character</span></span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation"
                                                              style="padding-right: 0.1px;">{</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation"
                                                              style="padding-right: 0.1px;">};</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-keyword">class</span> <span class="cm-def">Enemy</span> :<span class="cm-keyword">public</span> <span
          class="cm-variable">Character</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span
          role="presentation" style="padding-right: 0.1px;">{</span></pre><pre class=" CodeMirror-line "
                                                                               role="presentation"><span role="presentation"
                                                                                                         style="padding-right: 0.1px;">};</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-variable-3">int</span> <span class="cm-def">main</span>()</span></pre><pre class=" CodeMirror-line "
                                                                                               role="presentation"><span
          role="presentation" style="padding-right: 0.1px;">{</span></pre><pre class=" CodeMirror-line "
                                                                               role="presentation"><span role="presentation"
                                                                                                         style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-variable">Character</span> <span
          class="cm-variable">character</span> <span class="cm-operator">=</span> <span class="cm-variable">Character</span>();</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-variable">character</span>.<span
          class="cm-variable">setBlood</span>(<span class="cm-number">1.0</span>);</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-variable">Player</span> <span
          class="cm-variable">player</span> <span class="cm-operator">=</span> <span
          class="cm-variable">Player</span>();</span></pre><pre class=" CodeMirror-line " role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation"
                                                                  cm-text="	">    </span><span
          class="cm-variable">player</span>.<span class="cm-variable">setBlood</span>(<span
          class="cm-number">2.0</span>);</span></pre><pre class=" CodeMirror-line " role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation"
                                                                  cm-text="	">    </span><span
          class="cm-variable">Enemy</span> <span class="cm-variable">enemy</span> <span class="cm-operator">=</span> <span
          class="cm-variable">Enemy</span>();</span></pre><pre class=" CodeMirror-line " role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation"
                                                                  cm-text="	">    </span><span
          class="cm-variable">enemy</span>.<span class="cm-variable">setBlood</span>(<span
          class="cm-number">3.0</span>);</span></pre><pre class=" CodeMirror-line " role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation"
                                                                  cm-text="	">    </span><span class="cm-variable">std::cout</span> <span
          class="cm-operator">&lt;&lt;</span> <span class="cm-variable">character</span>.<span
          class="cm-variable">getBlood</span>() <span class="cm-operator">&lt;&lt;</span> <span class="cm-variable">std::endl</span>;</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-variable">std::cout</span> <span
          class="cm-operator">&lt;&lt;</span> <span class="cm-variable">player</span>.<span
          class="cm-variable">getBlood</span>() <span class="cm-operator">&lt;&lt;</span> <span class="cm-variable">std::endl</span>;</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-variable">std::cout</span> <span
          class="cm-operator">&lt;&lt;</span> <span class="cm-variable">enemy</span>.<span
          class="cm-variable">getBlood</span>() <span class="cm-operator">&lt;&lt;</span> <span class="cm-variable">std::endl</span>;</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation"
                                                              style="padding-right: 0.1px;">}</span></pre></div></div></div></div></div><div
          style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 861px;"></div><div
          class="CodeMirror-gutters" style="display: none; height: 861px;"></div></div></div></pre>
        <p><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw=="
                referrerpolicy="no-referrer" alt="点击并拖拽以移动"></p>
        <p><span>输出结果为： </span></p>
        <pre class="md-fences md-end-block ty-contain-cm modeLoaded" spellcheck="false" lang="cpp"><div
          class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap" lang="cpp"><div
          style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 9.33333px; left: 8px;"><textarea
          autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0"
          style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div
          class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler"
                                                                               cm-not-content="true"></div><div
          class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer"
                                                       style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div
          style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation"
                                                                                                       style="position: relative; outline: none;"><div
          class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div
          style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation"><div
          class="CodeMirror-activeline" style="position: relative;"><div
          class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div
          class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-number">1</span></span></pre></div><pre class=" CodeMirror-line " role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-number">2</span></span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-number">3</span></span></pre></div></div></div></div></div><div
          style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 68px;"></div><div
          class="CodeMirror-gutters" style="display: none; height: 68px;"></div></div></div></pre>
        <p><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw=="
                referrerpolicy="no-referrer" alt="点击并拖拽以移动"></p>
        <h2 id='在c中成员方法和成员变量有三种访问权限分别为'>
          <span> </span><strong><span>在C++中，成员方法和成员变量有三种访问权限，分别为：</span></strong></h2>
        <p><strong><span>(1)public:</span></strong></p>
        <p>
          <strong><span>在此关键字后声明的成员方法和成员变量是公有的，公有成员不仅可以在类内可以被访问，在类外和其派生类（子类）也是可以被访问的，是类对外提供的可访问接口。</span></strong>
        </p>
        <p>
          <span>在上述代码中，我们可以看到主函数的代码创建了Character类的一个实例即character之后，便可以通过实例character访问getBlood()和setBlood()成员方法。</span>
        </p>
        <p>&nbsp;</p>
        <p><strong><span>(2)protected:</span></strong></p>
        <p>
          <strong><span>在此关键字后声明的成员方法和成员变量是受保护的，保护成员在类体外同样是隐藏状态，但是对于该类的派生类（子类）来说，相当于公有成员，在派生类中可以被访问。</span></strong>
        </p>
        <p>&nbsp;</p>
        <p><strong><span>(3)privated:</span></strong></p>
        <p>
          <strong><span>在此关键字后声明的成员方法和成员变量是私有的，私有成员仅在类内可以被访问，在类体外是隐藏状态，其派生类（子类）也无法访问。</span></strong>
        </p>
        <p><span>C++的类中，当我们前面没有声明任何访问权限时，该成员的默认访问权限将会是私有的。</span></p>
        <p>&nbsp;</p>
        <h2 id='类的继承方式'><strong><span>类的继承方式：</span></strong></h2>
        <p><strong><span>(1) public继承方式</span></strong></p>
        <pre class="md-fences md-end-block ty-contain-cm modeLoaded" spellcheck="false" lang="cpp"><div
          class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap" lang="cpp"><div
          style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 9.33333px; left: 8px;"><textarea
          autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0"
          style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div
          class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler"
                                                                               cm-not-content="true"></div><div
          class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer"
                                                       style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div
          style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation"
                                                                                                       style="position: relative; outline: none;"><div
          class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div
          style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation"><div
          class="CodeMirror-activeline" style="position: relative;"><div
          class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div
          class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-keyword">class</span> <span class="cm-def">B</span>:<span class="cm-keyword">public</span> <span
          class="cm-variable">A</span></span></pre></div></div></div></div></div></div><div
          style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 23px;"></div><div
          class="CodeMirror-gutters" style="display: none; height: 23px;"></div></div></div></pre>
        <p><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw=="
                referrerpolicy="no-referrer" alt="点击并拖拽以移动"></p>
        <ul>
          <li><span>基类中所有 public 成员在派生类中为 public 属性；</span></li>
          <li><span>基类中所有 protected 成员在派生类中为 protected 属性；</span></li>
          <li><span>基类中所有 private 成员在派生类中不能使用。</span></li>
        </ul>
        <p>
          <span> </span><strong><span>(2) protected继承方式</span></strong></p>
        <pre class="md-fences md-end-block ty-contain-cm modeLoaded" spellcheck="false" lang="cpp"><div
          class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap" lang="cpp"><div
          style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 9.33333px; left: 8px;"><textarea
          autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0"
          style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div
          class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler"
                                                                               cm-not-content="true"></div><div
          class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer"
                                                       style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div
          style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation"
                                                                                                       style="position: relative; outline: none;"><div
          class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div
          style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation"><div
          class="CodeMirror-activeline" style="position: relative;"><div
          class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div
          class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-keyword">class</span> <span class="cm-def">B</span>:<span class="cm-keyword">protected</span> <span
          class="cm-variable">A</span></span></pre></div></div></div></div></div></div><div
          style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 23px;"></div><div
          class="CodeMirror-gutters" style="display: none; height: 23px;"></div></div></div></pre>
        <p><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw=="
                referrerpolicy="no-referrer" alt="点击并拖拽以移动"></p>
        <ul>
          <li><span>基类中的所有 public 成员在派生类中为 protected 属性；</span></li>
          <li><span>基类中的所有 protected 成员在派生类中为 protected 属性；</span></li>
          <li><span>基类中的所有 private 成员在派生类中不能使用。</span></li>
        </ul>
        <p>
          <span> </span><strong><span>(3) private继承方式</span></strong></p>
        <pre class="md-fences md-end-block ty-contain-cm modeLoaded" spellcheck="false" lang="cpp"><div
          class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap" lang="cpp"><div
          style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 9.33333px; left: 8px;"><textarea
          autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0"
          style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div
          class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler"
                                                                               cm-not-content="true"></div><div
          class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer"
                                                       style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div
          style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation"
                                                                                                       style="position: relative; outline: none;"><div
          class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div
          style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation"><div
          class="CodeMirror-activeline" style="position: relative;"><div
          class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div
          class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-keyword">class</span> <span class="cm-def">B</span>:<span class="cm-keyword">private</span> <span
          class="cm-variable">A</span></span></pre></div></div></div></div></div></div><div
          style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 23px;"></div><div
          class="CodeMirror-gutters" style="display: none; height: 23px;"></div></div></div></pre>
        <p><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw=="
                referrerpolicy="no-referrer" alt="点击并拖拽以移动"></p>
        <ul>
          <li><span>基类中的所有 public 成员在派生类中均为 private 属性；</span></li>
          <li><span>基类中的所有 protected 成员在派生类中均为 private 属性；</span></li>
          <li><span>基类中的所有 private 成员在派生类中不能使用。</span></li>
        </ul>
        <p><strong><span>(4)默认继承方式</span></strong></p>
        <pre class="md-fences md-end-block ty-contain-cm modeLoaded" spellcheck="false" lang="cpp"><div
          class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap" lang="cpp"><div
          style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 9.33333px; left: 8px;"><textarea
          autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0"
          style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div
          class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler"
                                                                               cm-not-content="true"></div><div
          class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer"
                                                       style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div
          style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation"
                                                                                                       style="position: relative; outline: none;"><div
          class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div
          style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation"><div
          class="CodeMirror-activeline" style="position: relative;"><div
          class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div
          class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-keyword">class</span> <span class="cm-def">B</span>:<span
          class="cm-variable">A</span></span></pre></div></div></div></div></div></div><div
          style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 23px;"></div><div
          class="CodeMirror-gutters" style="display: none; height: 23px;"></div></div></div></pre>
        <p><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw=="
                referrerpolicy="no-referrer" alt="点击并拖拽以移动"></p>
        <ul>
          <li><span> 和private继承方式相同，即C++默认继承方式为私有继承方式</span></li>
        </ul>
        <h2 id='c中的多继承'><span>C++中的多继承</span></h2>
        <p>
          <span>在前面的例子中，派生类都只有一个基类，称为</span><strong><span>单继承（Single Inheri</span><span>*</span><em><a
          href='http://c.biancheng.net/ref/tan.html'><span>tan</span></a><span>*</span></em><span>ce）</span></strong><span>。除此之外，</span><a
          href='http://c.biancheng.net/cplus/'><span>C++</span></a><span>也支持</span><strong><span>多继承（Multiple Inheritance）</span></strong><span>，即一个派生类可以有两个或多个基类。</span>
        </p>
        <blockquote><p><span>多继承容易让代码逻辑复杂、思路混乱，一直备受争议，中小型项目中较少使用，后来的 </span><a
          href='http://c.biancheng.net/java/'><span>Java</span></a><span>、</span><a
          href='http://c.biancheng.net/csharp/'><span>C#</span></a><span>、</span><a
          href='http://c.biancheng.net/php/'><span>PHP</span></a><span> 等干脆取消了多继承。</span></p></blockquote>
        <p><span>多继承的语法也很简单，将多个基类用逗号隔开即可。例如已声明了类A、类B和类C，那么可以这样来声明派生类D：</span>
        </p>
        <pre class="md-fences md-end-block ty-contain-cm modeLoaded" spellcheck="false" lang="cpp"><div
          class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap" lang="cpp"><div
          style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 9.33333px; left: 8px;"><textarea
          autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0"
          style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div
          class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler"
                                                                               cm-not-content="true"></div><div
          class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer"
                                                       style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div
          style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation"
                                                                                                       style="position: relative; outline: none;"><div
          class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div
          style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation"><div
          class="CodeMirror-activeline" style="position: relative;"><div
          class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div
          class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-keyword">class</span> <span class="cm-def">D</span>: <span class="cm-keyword">public</span> <span
          class="cm-variable">A</span>, <span class="cm-keyword">private</span> <span class="cm-variable">B</span>, <span
          class="cm-keyword">protected</span> <span class="cm-variable">C</span></span></pre></div><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation"
                                                              style="padding-right: 0.1px;">{</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span
          class="cm-comment">//类D新增加的成员</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span
          role="presentation" style="padding-right: 0.1px;">};</span></pre></div></div></div></div></div><div
          style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 91px;"></div><div
          class="CodeMirror-gutters" style="display: none; height: 91px;"></div></div></div></pre>
        <p><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw=="
                referrerpolicy="no-referrer" alt="点击并拖拽以移动"></p>
        <p>&nbsp;</p>
        <h2 id='三虚幻引擎中的c类'><span>三、虚幻引擎中的C++类</span></h2>
        <p><span>我这里使用的是虚幻4.27.2进行示范，虚幻5同理，代码差别不大。</span></p>
        <p><span>在虚幻引擎中，你需要创建类的话，需要在引擎中点左上角的文件选择创建C++类，才能创建</span></p>
        <p><img src="https://img-blog.csdnimg.cn/cc70d1444a914ac289486824e4a152cc.png" referrerpolicy="no-referrer"
                alt="img"><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw=="
                               referrerpolicy="no-referrer" alt="点击并拖拽以移动"><span>编辑</span></p>
        <p><span> 我们可以看到在虚幻引擎中创建C++类时会要求你选择一个父类，一般来说虚幻引擎中的gameplay层（也就是游戏逻辑代码）中的类，追根溯源一般都继承于UObject类，以UObject为父类创建的子类，都拥有垃圾回收（什么是垃圾回收请自行百度）、反射（什么是反射机制请自行百度）等功能。</span>
        </p>
        <h2 id='编辑-1'><img src="https://img-blog.csdnimg.cn/5730d1328377452b91009ab54ca44d79.png"
                             referrerpolicy="no-referrer" alt="img"><img
          src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw=="
          referrerpolicy="no-referrer" alt="点击并拖拽以移动"><span>编辑</span></h2>
        <p><span>关于虚幻引擎中的重要基类的继承关系可以看此图：</span></p>
        <p><img
          src="https://img-blog.csdnimg.cn/20200711190438384.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zOTUzODI1Mw==,size_16,color_FFFFFF,t_70"
          referrerpolicy="no-referrer" alt="在这里插入图片描述"><img
          src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw=="
          referrerpolicy="no-referrer" alt="点击并拖拽以移动"><span>编辑</span></p>
        <p>&nbsp;</p>
        <h2 id='编辑-2'><img src="https://img-blog.csdnimg.cn/2e0a906b08304cb2bc49e91e5d494404.png"
                             referrerpolicy="no-referrer" alt="img"><img
          src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw=="
          referrerpolicy="no-referrer" alt="点击并拖拽以移动"><span>编辑</span></h2>
        <p>
          <span>这里我以创建了一个Actor的派生类MyActor，在代码编译成功后它会自动打开Visual Studio，我们可以看到刚刚创建好的代码：</span>
        </p>
        <pre class="md-fences md-end-block ty-contain-cm modeLoaded" spellcheck="false" lang="cpp"
             style="break-inside: unset;"><div class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap" lang="cpp"><div
          style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 9.33333px; left: 8px;"><textarea
          autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0"
          style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div
          class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler"
                                                                               cm-not-content="true"></div><div
          class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer"
                                                       style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div
          style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation"
                                                                                                       style="position: relative; outline: none;"><div
          class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div
          style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation" style=""><div
          class="CodeMirror-activeline" style="position: relative;"><div
          class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div
          class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-comment">// Fill out your copyright notice in the Description page of Project Settings.</span></span></pre></div><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          cm-text="" cm-zwsp="">
</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation"
                                                                             style="padding-right: 0.1px;"><span
          class="cm-meta">#pragma once</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span cm-text="" cm-zwsp="">
</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation"
                                                                             style="padding-right: 0.1px;"><span
          class="cm-meta">#include "CoreMinimal.h"</span></span></pre><pre class=" CodeMirror-line "
                                                                           role="presentation"><span role="presentation"
                                                                                                     style="padding-right: 0.1px;"><span
          class="cm-meta">#include "GameFramework/Actor.h"</span></span></pre><pre class=" CodeMirror-line "
                                                                                   role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span
          class="cm-meta">#include "MyActor.generated.h"</span></span></pre><pre class=" CodeMirror-line "
                                                                                 role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span cm-text="" cm-zwsp="">
</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation"
                                                                             style="padding-right: 0.1px;"><span
          class="cm-variable">UCLASS</span>()</span></pre><pre class=" CodeMirror-line " role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">class</span> <span class="cm-def">CPPTESTPROJECT_API</span> <span
          class="cm-def">AMyActor</span> : <span class="cm-keyword">public</span> <span
          class="cm-variable">AActor</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span
          role="presentation" style="padding-right: 0.1px;">{</span></pre><pre class=" CodeMirror-line "
                                                                               role="presentation"><span role="presentation"
                                                                                                         style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span><span
          class="cm-variable">GENERATED_BODY</span>()</span></pre><pre class=" CodeMirror-line " role="presentation"><span
          role="presentation" class="cm-tab-wrap-hack" style="padding-right: 0.1px;"><span class="cm-tab"
                                                                                           role="presentation"
                                                                                           cm-text="	">    </span></span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" class="cm-tab-wrap-hack"
                                                              style="padding-right: 0.1px;"><span
          class="cm-keyword">public</span>:<span class="cm-tab" role="presentation" cm-text="	"> </span></span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-comment">// Sets default values for this actor's properties</span></span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span><span
          class="cm-variable">AMyActor</span>();</span></pre><pre class=" CodeMirror-line " role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span cm-text="" cm-zwsp="">
</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation"
                                                                             style="padding-right: 0.1px;"><span
          class="cm-keyword">protected</span>:</span></pre><pre class=" CodeMirror-line " role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation"
                                                                  cm-text="	">    </span><span class="cm-comment">// Called when the game starts or when spawned</span></span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-keyword">virtual</span> <span
          class="cm-variable-3">void</span> <span class="cm-variable">BeginPlay</span>() <span
          class="cm-keyword">override</span>;</span></pre><pre class=" CodeMirror-line " role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span cm-text="" cm-zwsp="">
</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation"
                                                                             class="cm-tab-wrap-hack"
                                                                             style="padding-right: 0.1px;"><span
          class="cm-keyword">public</span>:<span class="cm-tab" role="presentation" cm-text="	"> </span></span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span><span
          class="cm-comment">// Called every frame</span></span></pre><pre class=" CodeMirror-line "
                                                                           role="presentation"><span role="presentation"
                                                                                                     style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-keyword">virtual</span> <span
          class="cm-variable-3">void</span> <span class="cm-variable">Tick</span>(<span
          class="cm-variable-3">float</span> <span class="cm-variable">DeltaTime</span>) <span
          class="cm-keyword">override</span>;</span></pre><pre class=" CodeMirror-line " role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span cm-text="" cm-zwsp="">
</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation"
                                                                             style="padding-right: 0.1px;">};</span></pre></div></div></div></div></div><div
          style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 589px;"></div><div
          class="CodeMirror-gutters" style="display: none; height: 589px;"></div></div></div></pre>
        <p><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw=="
                referrerpolicy="no-referrer" alt="点击并拖拽以移动"></p>
        <p><span>我们可以发现虚幻引擎中的UObeject类的派生类在创建之后都会自带UCLASS()和 GENERATED_BODY()的宏标签，带有此标签的类会自带虚幻引擎的垃圾回收和反射功能。</span>
        </p>
        <p>&nbsp;</p>
        <p><span>我们还发现虚幻引擎中，AActor的子类都会带前缀A，表示它是Actor的子类，Actor类是一种可以放置在游戏场景中的内。在场景后，我们可以将它在内容浏览器内拖出，摆放到场景中。一般游戏空间中存在的物体，都是Actor类的子类。</span>
        </p>
        <p>&nbsp;</p>
        <h2 id='类的构造函数和析构函数'><span>类的构造函数和析构函数</span></h2>
        <p>&nbsp;</p>
        <p><span>在C++中，每一个类默认都会有构造函数和析构函数，他们必须都属于该类的公共成员方法（或者说成员函数），否则你无法创建这个类的实例。如果你没有声明构造函数或析构函数，编译器会自动帮你在编译时添加一个无参的构造函数或析构函数，编译器自己给你的无参构造函数中不会执行任何操作。</span>
        </p>
        <p>&nbsp;</p>
        <p>
          <span>在游戏开发中，既然我们已经写好了玩家类和敌人类，那么在游戏开始运行的时候可能就会创建许多玩家或者敌人，就需要用到构造函数，设置好玩家或者敌人的实例的初始信息，才能运行它们。</span>
        </p>
        <p>&nbsp;</p>
        <p>
          <span>而析构函数是我们在需要删除这一对象时，处理对象死亡善后工作的函数，在游戏开发中用于删除死亡后的角色实体等等操作。</span>
        </p>
        <p>&nbsp;</p>
        <p><span>类的构造函数需要和类同名，而析构函数的名字是在类名前加~</span></p>
        <p>&nbsp;</p>
        <p><span>C++中类的构造函数的几种写法</span></p>
        <pre class="md-fences md-end-block ty-contain-cm modeLoaded" spellcheck="false" lang="cpp"
             style="break-inside: unset;"><div class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap" lang="cpp"><div
          style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 9.33333px; left: 8px;"><textarea
          autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0"
          style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div
          class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler"
                                                                               cm-not-content="true"></div><div
          class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer"
                                                       style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div
          style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation"
                                                                                                       style="position: relative; outline: none;"><div
          class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div
          style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation" style=""><div
          class="CodeMirror-activeline" style="position: relative;"><div
          class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div
          class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-meta">#include &lt;iostream&gt;</span></span></pre></div><pre class=" CodeMirror-line "
                                                                                  role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">using</span> <span class="cm-keyword">namespace</span> <span
          class="cm-def">std</span>;</span></pre><pre class=" CodeMirror-line " role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span cm-text="" cm-zwsp="">
</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation"
                                                                             style="padding-right: 0.1px;"><span
          class="cm-keyword">class</span> <span class="cm-def">Student</span> {</span></pre><pre class=" CodeMirror-line "
                                                                                                 role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">public</span>:</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span
          class="cm-variable-3">int</span> <span class="cm-variable">m_age</span>;</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span
          class="cm-variable-3">int</span> <span class="cm-variable">m_score</span>;</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span
          class="cm-variable-3">float</span> <span class="cm-variable">m_money</span><span class="cm-operator">=</span><span
          class="cm-number">0</span>;</span></pre><pre class=" CodeMirror-line " role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span cm-text="" cm-zwsp="">
</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation"
                                                                             style="padding-right: 0.1px;"> &nbsp; &nbsp;<span
          class="cm-comment">//类的构造函数可以写多种不同参数的形式，调用时可以选择你想要的调用</span></span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span
          class="cm-comment">// 初始化列表方式，初始化列表</span></span></pre><pre class=" CodeMirror-line "
                                                                                  role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-comment">//C++规定，对象的成员变量的初始化动作发生在进入构造函数本体之前。</span></span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span
          class="cm-comment">//也就是说采用初始化列表的话，构造函数本体实际上不需要有任何操作，因此效率更高。</span></span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span
          class="cm-variable">Student</span>(<span class="cm-variable-3">int</span> <span
          class="cm-variable">age</span>, <span class="cm-variable-3">int</span> <span
          class="cm-variable">score</span>) :</span></pre><pre class=" CodeMirror-line " role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp;<span
          class="cm-variable">m_age</span>(<span class="cm-variable">age</span>),</span></pre><pre class=" CodeMirror-line "
                                                                                                   role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp;<span
          class="cm-variable">m_score</span>(<span class="cm-variable">score</span>)</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp;  {}</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          cm-text="" cm-zwsp="">
</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation"
                                                                             style="padding-right: 0.1px;"> &nbsp; &nbsp;<span
          class="cm-comment">// 内部赋值方式</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-variable">Student</span>(<span
          class="cm-variable-3">int</span> <span class="cm-variable">age</span>, <span
          class="cm-variable-3">int</span> <span class="cm-variable">score，float</span> <span
          class="cm-variable">money</span>) </span></pre><pre class=" CodeMirror-line " role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"> &nbsp;  {</span></pre><pre class=" CodeMirror-line "
                                                                                        role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp;<span
          class="cm-variable">m_age</span> <span class="cm-operator">=</span> <span
          class="cm-variable">age</span>;</span></pre><pre class=" CodeMirror-line " role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp;<span
          class="cm-variable">m_score</span> <span class="cm-operator">=</span> <span
          class="cm-variable">score</span>;</span></pre><pre class=" CodeMirror-line " role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp;<span
          class="cm-variable">m_money</span><span class="cm-operator">=</span><span class="cm-variable">money</span>;</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation"
                                                              style="padding-right: 0.1px;"> &nbsp;  }</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation"
                                                              style="padding-right: 0.1px;">};</span></pre></div></div></div></div></div><div
          style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 612px;"></div><div
          class="CodeMirror-gutters" style="display: none; height: 612px;"></div></div></div></pre>
        <p><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw=="
                referrerpolicy="no-referrer" alt="点击并拖拽以移动"></p>
        <p><span>C++中类的析构函数：</span></p>
        <pre class="md-fences md-end-block ty-contain-cm modeLoaded" spellcheck="false" lang="cpp"
             style="break-inside: unset;"><div class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap" lang="cpp"><div
          style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 9.33333px; left: 8px;"><textarea
          autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0"
          style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div
          class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler"
                                                                               cm-not-content="true"></div><div
          class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer"
                                                       style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div
          style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation"
                                                                                                       style="position: relative; outline: none;"><div
          class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div
          style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation" style=""><div
          class="CodeMirror-activeline" style="position: relative;"><div
          class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div
          class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-meta">#include&lt;iostream&gt;</span></span></pre></div><pre class=" CodeMirror-line "
                                                                                 role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">class</span> <span
          class="cm-def">A</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation"
                                                                                                       style="padding-right: 0.1px;">{</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-variable-3">int</span> <span
          class="cm-variable">a</span>;</span></pre><pre class=" CodeMirror-line " role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation"
                                                                  cm-text="	">    </span><span class="cm-variable">A</span> <span
          class="cm-operator">*</span><span class="cm-variable">b</span>;</span></pre><pre class=" CodeMirror-line "
                                                                                           role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">public</span>:</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-variable">A</span>()<span
          class="cm-comment">//A的无参构造函数</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation"
                                                                  cm-text="	">    </span>{</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-tab" role="presentation"
                                                                           cm-text="	">    </span><span
          class="cm-variable">std::cout</span> <span class="cm-operator">&lt;&lt;</span> <span
          class="cm-string">"你创建了个A的实例"</span> <span class="cm-operator">&lt;&lt;</span> <span class="cm-variable">std::endl</span>;</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span>}</span></pre><pre class=" CodeMirror-line "
                                                                                        role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation"
                                                                  cm-text="	">    </span><span class="cm-variable">A</span>(<span
          class="cm-variable-3">int</span> <span class="cm-variable">x</span>)<span class="cm-comment">//构造函数可以有多种参数配置，可以选择你想要的方式构造类的实例</span></span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span>{</span></pre><pre class=" CodeMirror-line "
                                                                                        role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation"
                                                                  cm-text="	">    </span><span class="cm-tab"
                                                                                                role="presentation"
                                                                                                cm-text="	">    </span><span
          class="cm-variable">a</span> <span class="cm-operator">=</span> <span class="cm-variable">x</span>;</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-tab" role="presentation"
                                                                           cm-text="	">    </span><span
          class="cm-variable">std::cout</span> <span class="cm-operator">&lt;&lt;</span> <span class="cm-variable">a</span> <span
          class="cm-operator">&lt;&lt;</span> <span class="cm-variable">std::endl</span>;<span
          class="cm-comment">//输出A</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation"
                                                                  cm-text="	">    </span><span class="cm-tab"
                                                                                                role="presentation"
                                                                                                cm-text="	">    </span><span
          class="cm-variable">b</span> <span class="cm-operator">=</span> <span class="cm-keyword">new</span> <span
          class="cm-variable">A</span>();<span class="cm-comment">//让指针b指向一个新创建的A类的一个实例</span></span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span>}</span></pre><pre class=" CodeMirror-line "
                                                                                        role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation"
                                                                  cm-text="	">    </span><span
          class="cm-variable">~A</span>()<span class="cm-comment">//A的析构函数 注意析构函数都不能带参数</span></span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span>{</span></pre><pre class=" CodeMirror-line "
                                                                                        role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation"
                                                                  cm-text="	">    </span><span class="cm-tab"
                                                                                                role="presentation"
                                                                                                cm-text="	">    </span><span
          class="cm-keyword">delete</span> <span class="cm-variable">b</span>;<span
          class="cm-comment">//删除b指针，即释放b指针指向的对象</span></span></pre><pre class=" CodeMirror-line "
                                                                                       role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation"
                                                                  cm-text="	">    </span>}</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation"
                                                              style="padding-right: 0.1px;">};</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-variable-3">int</span> <span class="cm-def">main</span>()</span></pre><pre class=" CodeMirror-line "
                                                                                               role="presentation"><span
          role="presentation" style="padding-right: 0.1px;">{</span></pre><pre class=" CodeMirror-line "
                                                                               role="presentation"><span role="presentation"
                                                                                                         style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-variable">A</span> <span
          class="cm-variable">a</span> <span class="cm-operator">=</span> <span class="cm-variable">A</span>(<span
          class="cm-number">5</span>);</span></pre><pre class=" CodeMirror-line " role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation"
                                                                  cm-text="	">    </span><span class="cm-comment">//调用A的构造方法创建A的实例a，</span></span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span><span
          class="cm-comment">//你也可以像数组一样创建一组A的实例:</span></span></pre><pre class=" CodeMirror-line "
                                                                                          role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation"
                                                                  cm-text="	">    </span><span class="cm-comment">//例如A *a = new A[6](5);</span></span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span><span
          class="cm-comment">//或A a[2] = {A(5),A(6)};</span></span></pre><pre class=" CodeMirror-line "
                                                                               role="presentation"><span role="presentation"
                                                                                                         style="padding-right: 0.1px;">}</span></pre></div></div></div></div></div><div
          style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 657px;"></div><div
          class="CodeMirror-gutters" style="display: none; height: 657px;"></div></div></div></pre>
        <p><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw=="
                referrerpolicy="no-referrer" alt="点击并拖拽以移动"></p>
        <p><span>运行结果为： </span></p>
        <pre class="md-fences md-end-block ty-contain-cm modeLoaded" spellcheck="false" lang="cpp"><div
          class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap" lang="cpp"><div
          style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 9.33333px; left: 8px;"><textarea
          autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0"
          style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div
          class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler"
                                                                               cm-not-content="true"></div><div
          class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer"
                                                       style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div
          style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation"
                                                                                                       style="position: relative; outline: none;"><div
          class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div
          style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation"><div
          class="CodeMirror-activeline" style="position: relative;"><div
          class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div
          class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-number">5</span></span></pre></div><pre class=" CodeMirror-line " role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-variable">你创建了个A的实例</span></span></pre></div></div></div></div></div><div
          style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 45px;"></div><div
          class="CodeMirror-gutters" style="display: none; height: 45px;"></div></div></div></pre>
        <p><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw=="
                referrerpolicy="no-referrer" alt="点击并拖拽以移动"></p>
        <p><span>注意析构函数不能拥有任何形式参数。</span></p>
        <p><span>在析构函数中我们往往需要完成的工作是手动delete类的成员变量中的指针类型的变量，例如上面这个例子中的char* b，因为指针类型的变量指向的对象可能是在程序运行的过程中使用new关键字动态创建的，就像C语言中的malloc()函数，是在程序运行的过程中动态分配的内存空间装下的这个对象。</span>
        </p>
        <p><span>C++并没有像java那样的语言拥有垃圾回收机制，能自动删除不用的对象。如果你在程序的运行过程中new了大量的A类的实例，在析构它们的时候没有delete完它们的成员变量中的指针指向的对象，那么那些没被删除的对象会一直占用你的内存，但因为你删除了A类的实例，导致你无法提供A类的实例去访问那些对象并删除他们，他们就会一直占用那块内存，直到程序运行结束或电脑内存用完，这就是C++中常见的</span><strong><span>内存泄漏</span></strong><span>问题。</span>
        </p>
        <p>&nbsp;</p>
        <p><span>回到我们的虚幻引擎，你会发现虚幻引擎中Actor的子类除了拥有构建函数以外，还新增了 </span></p>
        <pre class="md-fences md-end-block ty-contain-cm modeLoaded" spellcheck="false" lang="cpp"><div
          class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap" lang="cpp"><div
          style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 9.33333px; left: 8px;"><textarea
          autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0"
          style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div
          class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler"
                                                                               cm-not-content="true"></div><div
          class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer"
                                                       style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div
          style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation"
                                                                                                       style="position: relative; outline: none;"><div
          class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div
          style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation"><div
          class="CodeMirror-activeline" style="position: relative;"><div
          class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div
          class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-keyword">virtual</span> <span
          class="cm-variable-3">void</span> <span class="cm-def">BeginPlay</span>() <span class="cm-keyword">override</span>;</span></pre></div></div></div></div></div></div><div
          style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 23px;"></div><div
          class="CodeMirror-gutters" style="display: none; height: 23px;"></div></div></div></pre>
        <p><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw=="
                referrerpolicy="no-referrer" alt="点击并拖拽以移动"></p>
        <p><span> BeginPlay()是在游戏关卡开始运行的第一帧（也称加载帧）时会被调用的函数，一般用于设置Actor在场景中的初始位置等等，因为尤其是Actor的位置、朝向等某些信息经常需要在场景世界创建完成后才能设置，否则生成时，场景还没有创建完，Actor就不知道该摆哪个场景去，程序就会出错。</span>
        </p>
        <p>&nbsp;</p>
        <p><span>我们发现它还具有virtual关键字，这表示它是一个虚函数，关于虚函数的详解，我们下一次教程中会讲。</span></p>
        <p>&nbsp;</p>
        <p><span>我们打开MyActor对应的cpp文件可以看到BeginPlay()的实现。</span></p>
        <pre class="md-fences md-end-block ty-contain-cm modeLoaded" spellcheck="false" lang="cpp"
             style="break-inside: unset;"><div class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap" lang="cpp"><div
          style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 9.33333px; left: 8px;"><textarea
          autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0"
          style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div
          class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler"
                                                                               cm-not-content="true"></div><div
          class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer"
                                                       style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div
          style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation"
                                                                                                       style="position: relative; outline: none;"><div
          class="CodeMirror-measure"><span><span>​</span>x</span></div><div class="CodeMirror-measure"></div><div
          style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation" style=""><div
          class="CodeMirror-activeline" style="position: relative;"><div
          class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div
          class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-comment">// Fill out your copyright notice in the Description page of Project Settings.</span></span></pre></div><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          cm-text="" cm-zwsp="">
</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation"
                                                                             style="padding-right: 0.1px;"><span
          cm-text="" cm-zwsp="">
</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation"
                                                                             style="padding-right: 0.1px;"><span
          class="cm-meta">#include "MyActor.h"</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span cm-text="" cm-zwsp="">
</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation"
                                                                             style="padding-right: 0.1px;"><span
          class="cm-comment">// Sets default values</span></span></pre><pre class=" CodeMirror-line "
                                                                            role="presentation"><span role="presentation"
                                                                                                      style="padding-right: 0.1px;"><span
          class="cm-def">AMyActor::AMyActor</span>()</span></pre><pre class=" CodeMirror-line " role="presentation"><span
          role="presentation" style="padding-right: 0.1px;">{</span></pre><pre class=" CodeMirror-line "
                                                                               role="presentation"><span role="presentation"
                                                                                                         style="padding-right: 0.1px;"> <span
          class="cm-tab" role="presentation" cm-text="	">   </span><span class="cm-comment">// Set this actor to call Tick() every frame.  You can turn this off to improve performance if you don't need it.</span></span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-variable">PrimaryActorTick</span>.<span
          class="cm-variable">bCanEverTick</span> <span class="cm-operator">=</span> <span
          class="cm-atom">true</span>;</span></pre><pre class=" CodeMirror-line " role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span cm-text="" cm-zwsp="">
</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation"
                                                                             style="padding-right: 0.1px;">}</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          cm-text="" cm-zwsp="">
</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation"
                                                                             style="padding-right: 0.1px;"><span
          class="cm-comment">// Called when the game starts or when spawned</span></span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-variable-3">void</span> <span class="cm-def">AMyActor::BeginPlay</span>()</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation"
                                                              style="padding-right: 0.1px;">{</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span><span
          class="cm-variable">Super::BeginPlay</span>();</span></pre><pre class=" CodeMirror-line "
                                                                          role="presentation"><span role="presentation"
                                                                                                    class="cm-tab-wrap-hack"
                                                                                                    style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span></span></pre><pre class=" CodeMirror-line "
                                                                                       role="presentation"><span
          role="presentation" style="padding-right: 0.1px;">}</span></pre><pre class=" CodeMirror-line "
                                                                               role="presentation"><span role="presentation"
                                                                                                         style="padding-right: 0.1px;"><span
          cm-text="" cm-zwsp="">
</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation"
                                                                             style="padding-right: 0.1px;"><span
          class="cm-comment">// Called every frame</span></span></pre><pre class=" CodeMirror-line "
                                                                           role="presentation"><span role="presentation"
                                                                                                     style="padding-right: 0.1px;"><span
          class="cm-variable-3">void</span> <span class="cm-def">AMyActor::Tick</span>(<span
          class="cm-variable-3">float</span> <span class="cm-variable">DeltaTime</span>)</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation"
                                                              style="padding-right: 0.1px;">{</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-variable">Super::Tick</span>(<span
          class="cm-variable">DeltaTime</span>);</span></pre><pre class=" CodeMirror-line " role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span cm-text="" cm-zwsp="">
</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation"
                                                                             style="padding-right: 0.1px;">}</span></pre></div></div></div></div></div><div
          style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 612px;"></div><div
          class="CodeMirror-gutters" style="display: none; height: 612px;"></div></div></div></pre>
        <p><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw=="
                referrerpolicy="no-referrer" alt="点击并拖拽以移动"></p>
        <p>
          <strong><span>如果我们在 void AMyActor::BeginPlay()函数增加一行虚幻引擎中打印Hello world的代码如下。</span></strong>
        </p>
        <pre class="md-fences md-end-block ty-contain-cm modeLoaded" spellcheck="false" lang="cpp"><div
          class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap" lang="cpp"><div
          style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 9.33333px; left: 8px;"><textarea
          autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0"
          style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div
          class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler"
                                                                               cm-not-content="true"></div><div
          class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer"
                                                       style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div
          style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation"
                                                                                                       style="position: relative; outline: none;"><div
          class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div
          style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation" style=""><div
          class="CodeMirror-activeline" style="position: relative;"><div
          class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div
          class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-comment">// Called when the game starts or when spawned</span></span></pre></div><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-variable-3">void</span> <span class="cm-def">AMyActor::BeginPlay</span>()</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation"
                                                              style="padding-right: 0.1px;">{</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span><span
          class="cm-variable">Super::BeginPlay</span>();</span></pre><pre class=" CodeMirror-line "
                                                                          role="presentation"><span role="presentation"
                                                                                                    style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-variable">GEngine</span><span
          class="cm-operator">-&gt;</span><span class="cm-variable">AddOnScreenDebugMessage</span>(<span
          class="cm-operator">-</span><span class="cm-number">1</span>, <span class="cm-number">5.0f</span>, <span
          class="cm-variable">FColor::Yellow</span>, <span class="cm-variable">TEXT</span>(<span class="cm-string">"Hello world"</span>));</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation"
                                                              style="padding-right: 0.1px;">}</span></pre></div></div></div></div></div><div
          style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 159px;"></div><div
          class="CodeMirror-gutters" style="display: none; height: 159px;"></div></div></div></pre>
        <p><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw=="
                referrerpolicy="no-referrer" alt="点击并拖拽以移动"></p>
        <p><strong><span>这时，回到虚幻引擎的编辑界面点击编译按编译按钮</span></strong></p>
        <p><img src="https://img-blog.csdnimg.cn/28ade1f89a89434faa1550a96a9c53b1.png" referrerpolicy="no-referrer"
                alt="img"><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw=="
                               referrerpolicy="no-referrer" alt="点击并拖拽以移动"><span>编辑 </span><strong><span>等编译完成后把MyActor从内容浏览器中拖入场景</span></strong>
        </p>
        <p><img src="https://img-blog.csdnimg.cn/827ad18b660f41fc8bbcddbd2401fbe5.png" referrerpolicy="no-referrer"
                alt="img"><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw=="
                               referrerpolicy="no-referrer" alt="点击并拖拽以移动"><span>编辑</span></p>
        <p><span> </span><strong><span>点击运行按钮</span></strong></p>
        <p><img src="https://img-blog.csdnimg.cn/ef3136881ec74d90b61e9bc64acc34a9.png" referrerpolicy="no-referrer"
                alt="img"><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw=="
                               referrerpolicy="no-referrer" alt="点击并拖拽以移动"><span>编辑</span><strong><span>我们就可以开始运行时，看到屏幕上打印出了Hello world信息</span></strong><img
          src="https://img-blog.csdnimg.cn/b425ee66f92747e18c91688811cca535.jpeg" referrerpolicy="no-referrer"
          alt="img"><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw=="
                         referrerpolicy="no-referrer" alt="点击并拖拽以移动"><span>编辑</span></p>
        <p><span>因为每个Actor的BeginPlay()函数会在关卡开始运行时被调用。于是开始运行后便打印了Hello world</span></p>
        <h2 id='恭喜你写出了你的第一个虚幻c程序'><strong><span>恭喜你写出了你的第一个虚幻C++程序！</span></strong></h2>
        <p><span>参考文献：</span></p>
        <p><span>【1】C++ Primer Plus（第6版）中文版</span></p></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CtoCPPandUnrealEngineArticle1'
}
</script>

<style scoped>

</style>
