<template>
  <div>
    <link href="/static/CSSfiles/MarkDown.css" rel="stylesheet">
    <div class='typora-export-content'>
      <div id='write' class=''><h1 id='c-友元-从c语言过渡到c和虚幻引擎中的c编程教程④'><span>C++ 友元 《从C语言过渡到C++和虚幻引擎中的C++编程》教程④</span>
      </h1>
        <p><span>@</span><a href='目录'><span>TOC</span></a></p>
        <h2 id='前言'><span>前言</span></h2>
        <p>
          <span>在有些时候，你希望你创建的类中的某些成员是私有的，让外部的代码无法直接访问它，但是你又希望某些特殊的外部代码能够直接访问它，所以C++提供了友元的功能，让你可以通过友元直接访问到这个类的所有成员。</span>
        </p>
        <p><em><strong><span>友元的关键字为</span></strong></em></p>
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
          class="cm-keyword">friend</span></span></pre></div></div></div></div></div></div><div
          style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 23px;"></div><div
          class="CodeMirror-gutters" style="display: none; height: 23px;"></div></div></div></pre>
        <p><span>友元有三种实现</span></p>
        <ol start=''>
          <li><span>全局函数做友元</span></li>
          <li><span>成员函数做友元</span></li>
          <li><span>类做友元</span></li>
        </ol>
        <h2 id='全局函数做友元'><span>全局函数做友元</span></h2>
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
          role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">using</span> <span class="cm-keyword">namespace</span> <span
          class="cm-def">std</span>;</span></pre><pre class=" CodeMirror-line " role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">class</span> <span
          class="cm-def">A</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation"
                                                                                                       style="padding-right: 0.1px;">{</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-keyword">friend</span> <span
          class="cm-variable-3">void</span> <span class="cm-variable">printM</span>(<span class="cm-variable">A</span><span
          class="cm-operator">*</span> <span class="cm-variable">a</span>);<span class="cm-comment">//声明void printM(A* a)函数是A类的友元函数</span></span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-keyword">private</span>:</span></pre><pre class=" CodeMirror-line " role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation"
                                                                  cm-text="	">    </span><span
          class="cm-variable-3">int</span> <span class="cm-variable">m</span> <span class="cm-operator">=</span> <span
          class="cm-number">1</span>;</span></pre><pre class=" CodeMirror-line " role="presentation"><span
          role="presentation" style="padding-right: 0.1px;">};</span></pre><pre class=" CodeMirror-line "
                                                                                role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-variable-3">void</span> <span class="cm-def">printM</span>(<span
          class="cm-variable">A</span><span class="cm-operator">*</span> <span class="cm-variable">a</span>)</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation"
                                                              style="padding-right: 0.1px;">{</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-variable">cout</span> <span
          class="cm-operator">&lt;&lt;</span> <span class="cm-variable">a</span><span class="cm-operator">-&gt;</span><span
          class="cm-variable">m</span> <span class="cm-operator">&lt;&lt;</span> <span class="cm-variable">endl</span>;<span
          class="cm-comment">//友元函数void printM(A* a)就可以访问A类中的私有成员了</span></span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation"
                                                              style="padding-right: 0.1px;">}</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-variable-3">int</span> <span class="cm-def">main</span>()</span></pre><pre class=" CodeMirror-line "
                                                                                               role="presentation"><span
          role="presentation" style="padding-right: 0.1px;">{</span></pre><pre class=" CodeMirror-line "
                                                                               role="presentation"><span role="presentation"
                                                                                                         style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-variable">A</span><span
          class="cm-operator">*</span> <span class="cm-variable">a</span> <span class="cm-operator">=</span> <span
          class="cm-keyword">new</span> <span class="cm-variable">A</span>();</span></pre><pre class=" CodeMirror-line "
                                                                                               role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation"
                                                                  cm-text="	">    </span><span
          class="cm-variable">printM</span>(<span class="cm-variable">a</span>);</span></pre><pre class=" CodeMirror-line "
                                                                                                  role="presentation"><span
          role="presentation" style="padding-right: 0.1px;">}</span></pre></div></div></div></div></div><div
          style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 385px;"></div><div
          class="CodeMirror-gutters" style="display: none; height: 385px;"></div></div></div></pre>
        <p><span>输出结果：</span></p>
        <pre class="md-fences md-end-block ty-contain-cm modeLoaded" spellcheck="false" lang=""><div
          class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap" lang=""><div
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
          class=" CodeMirror-line " role="presentation"><span role="presentation"
                                                              style="padding-right: 0.1px;">1</span></pre></div></div></div></div></div></div><div
          style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 23px;"></div><div
          class="CodeMirror-gutters" style="display: none; height: 23px;"></div></div></div></pre>
        <p><span>可见全局函数void printM(A* a)在A类中声明friend void printM(A* a)后，其就可以访问A类中的所有成员（无论访问权限如何都可以）。（此时，A类的私有方法其实也可以被void printM(A* a)访问，你可以试试）</span>
        </p>
        <h2 id='成员函数做友元'><span>成员函数做友元</span></h2>
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
          role="presentation" style="padding-right: 0.1px;"><span
          class="cm-meta">#include &lt;string&gt;</span></span></pre><pre class=" CodeMirror-line "
                                                                          role="presentation"><span role="presentation"
                                                                                                    style="padding-right: 0.1px;"><span
          class="cm-keyword">using</span> <span class="cm-keyword">namespace</span> <span class="cm-def">std</span>;</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-keyword">class</span> <span class="cm-def">B</span>;</span></pre><pre class=" CodeMirror-line "
                                                                                          role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">class</span> <span
          class="cm-def">A</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation"
                                                                                                       style="padding-right: 0.1px;">{</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-keyword">public</span>:</span></pre><pre class=" CodeMirror-line " role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation"
                                                                  cm-text="	">    </span><span
          class="cm-variable-3">void</span> <span class="cm-variable">printM</span>(<span class="cm-variable">B</span><span
          class="cm-operator">*</span> <span class="cm-variable">b</span>);</span></pre><pre class=" CodeMirror-line "
                                                                                             role="presentation"><span
          role="presentation" style="padding-right: 0.1px;">};</span></pre><pre class=" CodeMirror-line "
                                                                                role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">class</span> <span
          class="cm-def">B</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation"
                                                                                                       style="padding-right: 0.1px;">{</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-keyword">friend</span> <span
          class="cm-variable-3">void</span> <span class="cm-variable">A::printM</span>(<span
          class="cm-variable">B</span><span class="cm-operator">*</span> <span class="cm-variable">b</span>);<span
          class="cm-comment">//声明A类的printM(B* b)函数是B类的朋友，可以访问B类的私有成员</span></span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-keyword">private</span>:</span></pre><pre class=" CodeMirror-line " role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation"
                                                                  cm-text="	">    </span><span
          class="cm-variable-3">int</span> <span class="cm-variable">m</span><span class="cm-operator">=</span><span
          class="cm-number">6</span>;</span></pre><pre class=" CodeMirror-line " role="presentation"><span
          role="presentation" style="padding-right: 0.1px;">};</span></pre><pre class=" CodeMirror-line "
                                                                                role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-variable-3">void</span> <span class="cm-def">A::printM</span>(<span
          class="cm-variable">B</span><span class="cm-operator">*</span> <span class="cm-variable">b</span>)<span
          class="cm-comment">//在类体外定义A::printM(B* b)</span></span></pre><pre class=" CodeMirror-line "
                                                                                   role="presentation"><span
          role="presentation" style="padding-right: 0.1px;">{</span></pre><pre class=" CodeMirror-line "
                                                                               role="presentation"><span role="presentation"
                                                                                                         style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-variable">cout</span> <span
          class="cm-operator">&lt;&lt;</span> <span class="cm-variable">b</span><span class="cm-operator">-&gt;</span><span
          class="cm-variable">m</span> <span class="cm-operator">&lt;&lt;</span> <span
          class="cm-variable">endl</span>;</span></pre><pre class=" CodeMirror-line " role="presentation"><span
          role="presentation" style="padding-right: 0.1px;">}</span></pre><pre class=" CodeMirror-line "
                                                                               role="presentation"><span role="presentation"
                                                                                                         style="padding-right: 0.1px;"><span
          class="cm-variable-3">int</span> <span class="cm-def">main</span>()</span></pre><pre class=" CodeMirror-line "
                                                                                               role="presentation"><span
          role="presentation" style="padding-right: 0.1px;">{</span></pre><pre class=" CodeMirror-line "
                                                                               role="presentation"><span role="presentation"
                                                                                                         style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-variable">A</span><span
          class="cm-operator">*</span> <span class="cm-variable">a</span> <span class="cm-operator">=</span> <span
          class="cm-keyword">new</span> <span class="cm-variable">A</span>();</span></pre><pre class=" CodeMirror-line "
                                                                                               role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation"
                                                                  cm-text="	">    </span><span class="cm-variable">B</span><span
          class="cm-operator">*</span> <span class="cm-variable">b</span> <span class="cm-operator">=</span> <span
          class="cm-keyword">new</span> <span class="cm-variable">B</span>();</span></pre><pre class=" CodeMirror-line "
                                                                                               role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation"
                                                                  cm-text="	">    </span><span class="cm-variable">a</span><span
          class="cm-operator">-&gt;</span><span class="cm-variable">printM</span>(<span
          class="cm-variable">b</span>);</span></pre><pre class=" CodeMirror-line " role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation"
                                                                  cm-text="	">    </span><span
          class="cm-keyword">return</span> <span class="cm-number">0</span>;</span></pre><pre class=" CodeMirror-line "
                                                                                              role="presentation"><span
          role="presentation" style="padding-right: 0.1px;">}</span></pre></div></div></div></div></div><div
          style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 612px;"></div><div
          class="CodeMirror-gutters" style="display: none; height: 612px;"></div></div></div></pre>
        <p><span>输出结果：</span></p>
        <p><span>···</span>
          <span>6</span>
          <span>···</span></p>
        <p><span>可见A类的成员函数void printM(B* b)在B类中声明其是B类的友元后，就可以访问B类的所有成员（无论访问权限如何都可以）。（此时，B类的私有方法也可以被A类的void printM(B* b)访问，你可以试试）</span>
        </p>
        <h2 id='类做友元'><span>类做友元</span></h2>
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
          role="presentation" style="padding-right: 0.1px;"><span
          class="cm-meta">#include &lt;string&gt;</span></span></pre><pre class=" CodeMirror-line "
                                                                          role="presentation"><span role="presentation"
                                                                                                    style="padding-right: 0.1px;"><span
          class="cm-keyword">using</span> <span class="cm-keyword">namespace</span> <span class="cm-def">std</span>;</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-keyword">class</span> <span class="cm-def">B</span>;</span></pre><pre class=" CodeMirror-line "
                                                                                          role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">class</span> <span
          class="cm-def">A</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation"
                                                                                                       style="padding-right: 0.1px;">{</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-keyword">public</span>:</span></pre><pre class=" CodeMirror-line " role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation"
                                                                  cm-text="	">    </span><span
          class="cm-variable-3">void</span> <span class="cm-variable">printM</span>(<span class="cm-variable">B</span><span
          class="cm-operator">*</span> <span class="cm-variable">b</span>);</span></pre><pre class=" CodeMirror-line "
                                                                                             role="presentation"><span
          role="presentation" style="padding-right: 0.1px;">};</span></pre><pre class=" CodeMirror-line "
                                                                                role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">class</span> <span
          class="cm-def">B</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation"
                                                                                                       style="padding-right: 0.1px;">{</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-keyword">friend</span> <span
          class="cm-keyword">class</span> <span class="cm-def">A</span>;<span class="cm-comment">//声明A类是B类的朋友，那么A类的所有方法都可以访问B类的私有成员</span></span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-keyword">private</span>:</span></pre><pre class=" CodeMirror-line " role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation"
                                                                  cm-text="	">    </span><span
          class="cm-variable-3">int</span> <span class="cm-variable">m</span><span class="cm-operator">=</span><span
          class="cm-number">6</span>;</span></pre><pre class=" CodeMirror-line " role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation"
                                                                  cm-text="	">    </span><span
          class="cm-variable-3">void</span> <span class="cm-variable">Bprint</span>()</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span>{</span></pre><pre class=" CodeMirror-line "
                                                                                        role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation"
                                                                  cm-text="	">    </span><span class="cm-tab"
                                                                                                role="presentation"
                                                                                                cm-text="	">    </span><span
          class="cm-variable">cout</span> <span class="cm-operator">&lt;&lt;</span> <span class="cm-string">"Bprint"</span> <span
          class="cm-operator">&lt;&lt;</span> <span class="cm-variable">endl</span>;</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span>}</span></pre><pre class=" CodeMirror-line "
                                                                                        role="presentation"><span
          role="presentation" style="padding-right: 0.1px;">};</span></pre><pre class=" CodeMirror-line "
                                                                                role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-variable-3">void</span> <span class="cm-def">A::printM</span>(<span
          class="cm-variable">B</span><span class="cm-operator">*</span> <span class="cm-variable">b</span>)<span
          class="cm-comment">//在类体外定义A::printM(B* b)</span></span></pre><pre class=" CodeMirror-line "
                                                                                   role="presentation"><span
          role="presentation" style="padding-right: 0.1px;">{</span></pre><pre class=" CodeMirror-line "
                                                                               role="presentation"><span role="presentation"
                                                                                                         style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-variable">cout</span> <span
          class="cm-operator">&lt;&lt;</span> <span class="cm-variable">b</span><span class="cm-operator">-&gt;</span><span
          class="cm-variable">m</span> <span class="cm-operator">&lt;&lt;</span> <span
          class="cm-variable">endl</span>;</span></pre><pre class=" CodeMirror-line " role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation"
                                                                  cm-text="	">    </span><span class="cm-variable">b</span><span
          class="cm-operator">-&gt;</span><span class="cm-variable">Bprint</span>();</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation"
                                                              style="padding-right: 0.1px;">}</span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-variable-3">int</span> <span class="cm-def">main</span>()</span></pre><pre class=" CodeMirror-line "
                                                                                               role="presentation"><span
          role="presentation" style="padding-right: 0.1px;">{</span></pre><pre class=" CodeMirror-line "
                                                                               role="presentation"><span role="presentation"
                                                                                                         style="padding-right: 0.1px;"><span
          class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-variable">A</span><span
          class="cm-operator">*</span> <span class="cm-variable">a</span> <span class="cm-operator">=</span> <span
          class="cm-keyword">new</span> <span class="cm-variable">A</span>();</span></pre><pre class=" CodeMirror-line "
                                                                                               role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation"
                                                                  cm-text="	">    </span><span class="cm-variable">B</span><span
          class="cm-operator">*</span> <span class="cm-variable">b</span> <span class="cm-operator">=</span> <span
          class="cm-keyword">new</span> <span class="cm-variable">B</span>();</span></pre><pre class=" CodeMirror-line "
                                                                                               role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation"
                                                                  cm-text="	">    </span><span class="cm-variable">a</span><span
          class="cm-operator">-&gt;</span><span class="cm-variable">printM</span>(<span
          class="cm-variable">b</span>);</span></pre><pre class=" CodeMirror-line " role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation"
                                                                  cm-text="	">    </span><span
          class="cm-keyword">return</span> <span class="cm-number">0</span>;</span></pre><pre class=" CodeMirror-line "
                                                                                              role="presentation"><span
          role="presentation" style="padding-right: 0.1px;">}</span></pre></div></div></div></div></div><div
          style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 703px;"></div><div
          class="CodeMirror-gutters" style="display: none; height: 703px;"></div></div></div></pre>
        <p><span>输出结果：</span></p>
        <pre class="md-fences md-end-block ty-contain-cm modeLoaded" spellcheck="false" lang=""><div
          class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap" lang=""><div
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
          class=" CodeMirror-line " role="presentation"><span role="presentation"
                                                              style="padding-right: 0.1px;">6</span></pre></div><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation"
                                                              style="padding-right: 0.1px;">Bprint</span></pre></div></div></div></div></div><div
          style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 45px;"></div><div
          class="CodeMirror-gutters" style="display: none; height: 45px;"></div></div></div></pre>
        <p><span>可见A类做B类的友元时，B类的所有成员无论访问权限如何都可以被A类访问。</span></p></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CtoCPPandUnrealEngineArticle3'
}
</script>

<style scoped>

</style>
