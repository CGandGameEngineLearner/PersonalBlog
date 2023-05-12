<template>
  <div>
    <link href="/static/CSSfiles/MarkDown.css" rel="stylesheet">
    <div class="typora-export-content">
      <div id="write" class="">
        <h1 id="《从C语言过渡到C++和虚幻引擎中的C++编程》教程①"><span>《从C语言过渡到C++和虚幻引擎中的C++编程》教程①</span></h1>
        <p>
        <span>本系列文字教程的受众对象是刚刚经历完大一上的C语言期末考试的、仅具有一定C语言基础的新生。</span></p>
        <p>
          <span>如果您是上述对象，在看完本系列教程之后，您将收获C++编程入门和虚幻引擎中的C++编程入门知识以及一些游戏开发中常用的数据结构与算法。</span>
        </p>
        <h1 id="序章"><span>序章</span></h1>
        <h2 id="一c是怎么来的"><span>一、C++是怎么来的?</span></h2>
        <p><span>C++是一种计算机高级程序设计语言，由C语言扩展升级而产生，最早于1979年由本贾尼·斯特劳斯特卢普（Bjarne Stroustrup，1950年6月11日-）在AT&amp;T贝尔工作室研发。</span>
          <span>C++既可以进行C语言的过程化程序设计，又可以进行以抽象数据类型为特点的基于对象的程序设计，还可以进行以继承和多态为特点的面向对象的程序设计。C++擅长面向对象程序设计的同时，还可以进行基于过程的程序设计。</span>
        </p>
        <h2 id="二何为面向过程何为面向对象"><span>二、何为面向过程？何为面向对象？</span></h2>
        <p><span>在使用计算机解决一些问题时，你会发现很多问题它会用到相似甚至一样的计算机指令，如果每次用到这些指令的时候都新写一遍，肯定是是非常低效的，自然而然地，人们就想到了数学中的一个常用的概念——函数，我们可以把一个问题的答案写成由多个函数组成的表达式，这样就可以把一个问题进行拆解。</span>
        </p>
        <p>
          <em><strong><span>同样我们编程的时候，也可以先分析出解决问题所需要的步骤，然后用函数把这些步骤一步一步实现，使用的时候一个一个依次调用就可以解决问题了。这就是面向过程编程的思想。</span></strong></em>
        </p>
        <p><span>C语言就是基于这样的思路设计的语言，而C++再此基础上增加了面向对象的编程思想。</span></p>
        <p><span>随着计算机技术的发展，程序越来越大，很多大型计算机程序一个人是无法写完的。大型项目要解决的问题如果只用函数来拆解，会拆解出非常多的个函数，并且每个函数之间是并列关系，如果程序员忘记或者错用了应有的调用方式，那么就是一场灾难。</span>
        </p>
        <p><span>但是如果我们能把程序的每类功能都分门别类，解决某一类问题就用某一类的程序，同类的功能可以从同类中创建一个一样的实例对象来用，并且使用某一类程序的时候有相应的访问权限防止其他程序员错用，然后与该程序功能相似的程序可以通过在该程序的基础上增删查改一部分内容来实现的话，就能大大降低程序员的思维负担。因此，面向对象的编程思维就诞生了。</span>
        </p>
        <p>
          <em><strong><span>面向对象编程就是把构成问题事务分解成各个对象，建立对象的目的不是为了完成一个步骤，而是为了描述某个事物在整个解决问题的步骤中的行为。</span></strong></em>
        </p>
        <p><span>C++便是在这样的编程思想下诞生的。</span></p>
        <h1 id="三流行的c编译器有哪些"><span>三、流行的C++编译器有哪些？</span></h1>
        <h2 id="msvc"><span>MSVC</span></h2>
        <p>
          <span>Microsoft Visual C++（简称Visual C++、MSVC、VS或VC）是微软公司的免费C++开发工具，具有集成开发环境，可提供编辑C语言，C++以及C++/CLI等编程语言。</span>
        </p>
        <p>
          <em><strong><span>我们所熟知的Visual Studio和Visual Studio Code默认装载的C++编译器就是MSVC</span></strong></em>
        </p>
        <h2 id="gcc"><span>GCC</span></h2>
        <p><span>GCC（GNU Compiler Collection，GNU编译器套件）是由GNU开发的编程语言编译器。GNU编译器套件包括C、C++、 Objective-C、 Fortran、Java、Ada和Go语言前端，也包括了这些语言的库（如libstdc++，libgcj等。）</span>
        </p>
        <p>
          <span>GCC的初衷是为GNU操作系统专门编写的一款编译器。GNU系统是彻底的自由软件。此处，“自由”的含义是它尊重用户的自由。</span>
        </p>
        <p>
          <strong><em><span>网上经常说的g++就是指的GCC的C++编译器</span></em><span>，Dev-C++使用的便是GCC内核</span></strong>
        </p>
        <h2 id="clang"><span>Clang</span></h2>
        <p>
          <span>Clang是一个C语言、C++、Objective-C语言的轻量级编译器。源代码发布于BSD协议下。Clang将支持其普通lambda表达式、返回类型的简化处理以及更好的处理constexpr关键字。</span>
        </p>
        <p><em><strong><span>MAC系统上的Xcode默认使用Clang作为其C/C++编译器，此外它还拥有GCC</span></strong></em></p>
        <p>
          <em><strong><span>本教程推荐使用Visual  Studio进行C++的学习，因为它与虚幻引擎较为适配且网上拥有丰富的相关教程</span></strong></em>
        </p>
        <h1 id="四你的第一个c程序"><span>四、你的第一个C++程序</span></h1>
        <pre class="md-fences md-end-block ty-contain-cm modeLoaded" spellcheck="false" lang="c++"><div
          class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap" lang="c++"><div
          style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 9.33333px; left: 8px;"><textarea
          autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0"
          style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div
          class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler"
                                                                               cm-not-content="true"></div><div
          class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer"
                                                       style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div
          style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div
          role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"></div><div
          class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div
          class="CodeMirror-code" role="presentation" style=""><div class="CodeMirror-activeline"
                                                                    style="position: relative;"><div
          class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div
          class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-meta">#include&lt;iostream&gt;</span><span
          class="cm-comment">//C++标准库相较于C语言新增的流式输入输出</span></span></pre></div><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-keyword">using</span> <span class="cm-keyword">namespace</span> <span
          class="cm-def">std</span>;<span class="cm-comment">//使用命名空间:std(C++标准库的命名空间)，为了避免大型项目中命名污染的问题所以C++比C语言多了命名空间的概念，指定当前使用的是哪个命名空间内的名称，这就避免了不同的库存在相同的函数名或者变量名时，编译器不知道你指定的是哪一个的问题</span></span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span
          class="cm-variable-3">int</span> <span class="cm-def">main</span>()</span></pre><pre class=" CodeMirror-line "
                                                                                               role="presentation"><span
          role="presentation" style="padding-right: 0.1px;">{</span></pre><pre class=" CodeMirror-line "
                                                                               role="presentation"><span
          role="presentation" style="padding-right: 0.1px;"> &nbsp; <span class="cm-variable">cout</span><span
          class="cm-operator">&lt;&lt;</span><span class="cm-string">"Hello world!"</span><span class="cm-operator">&lt;&lt;</span><span
          class="cm-variable">endl</span>;<span class="cm-comment">//&lt;&lt;操作符朝向cout为输出，朝向变量为向这个变量输入值；endl意思是"end line"；即结束一行并回车</span></span></pre><pre
          class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">}</span></pre></div></div></div></div></div><div
          style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 204px;"></div><div
          class="CodeMirror-gutters" style="display: none; height: 204px;"></div></div></div></pre>
        <h1 id="五虚幻引擎的安装"><span>五、虚幻引擎的安装</span></h1>
        <p><span>可以去看B站教程</span>
          <a
            href="https://www.bilibili.com/video/BV1zY4y1H7PF?p=2&amp;vd_source=8f8b8a3412a60a8cb7c4b53e96b474c7"><span>虚幻5引擎安装教程</span></a>
        </p></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CtoCPPandUnrealEngineArticle0'
}
</script>

<style scoped>

</style>
