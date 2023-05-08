<template>
  <div style="text-align: start">
    <link href="/static/CSSfiles/MarkDown.css" rel="stylesheet">
    <div class='typora-export-content'>
      <div id='write' class=''><h1 id='网易游戏客户端日常实习一面面经'><span>网易游戏客户端日常实习一面面经</span></h1>
        <h2 id='面试形式'><span>面试形式：</span></h2>
        <p><span>用网易招聘官网自带的面试系统 没有现场写代码的笔试 只问问题</span></p>
        <h2 id='面试流程'><span>面试流程：</span></h2>
        <ol start=''>
          <li><span>自我介绍</span></li>
          <li><span>问基础八股</span></li>
          <li><span>依据简历内容从上往下问项目经历、学习经历</span></li>
          <li><span>问游戏经历</span></li>
          <li><span>你有什么问题想问面试官的吗？</span></li>
        </ol>
        <h2 id='自我介绍'><span>自我介绍</span></h2>
        <p>
          <span>不用多说了，面试常规流程。注意自我介绍的时候，自己不熟悉的东西就不要提，自己熟悉的东西就一定要多讲、细讲，让面试官知道你的知识树是什么样的。</span>
        </p>
        <h2 id='面试问题'><span>面试问题</span></h2>
        <p><span>基础底层八股：</span></p>
        <ol start=''>
          <li><p><span>STL源码看过吗?</span></p>
            <p><span>答：只了解了部分，没有完全手撸复刻过。</span></p></li>
          <li><p><span>C++中的各种容器有哪些?</span></p>
            <p><span>不用说了，送分题。</span></p></li>
          <li><p><span>vector和list的区别</span></p>
            <p><span>不用说了，送分题。</span></p></li>
          <li><p><span>vector的缺点</span></p>
            <p><span>主要是扩容的问题。</span></p></li>
          <li><p><span>map的底层原理</span></p>
            <p><span>不用说了，送分题。</span></p></li>
          <li><p><span>红黑树怎么旋转？</span></p>
            <p><span>这我还真没有具体实现过，我只知道大概。</span></p></li>
          <li><p><span>C++中的堆，大根堆或者小根堆是怎么排序的?</span></p>
            <p><span>我没有具体写过堆排序，但是我知道大致思路，讲了一遍。</span></p></li>
          <li><p><span>现在有一个链表，你要删除倒数第n个节点该怎么办?</span></p>
            <p><span>两种办法，栈和快慢指针。</span></p></li>
          <li><p><span>排序算法你了解哪些？</span></p></li>
          <li><p><span>快速排序算法的实现思路？</span></p>
            <p><span>得分关键词：分治、基准数、左区间、右区间</span></p>
            <p><span>全拿到。</span></p></li>
          <li><p><span>对树的了解？</span></p>
            <p><span>我把二叉搜索树、二叉平衡树、红黑树、游戏引擎中的八叉树游戏空间管理，都讲了一遍</span></p></li>
          <li><p><span>二叉树的前、中、后序遍历是怎么样的？</span></p>
            <p><span>不用说了，送分题。</span></p></li>
          <li><p><span>二叉树的前序遍历，你在实际开发中运用过吗？</span></p>
            <p>
              <span>游戏中的角色骨骼信息是一个树状的数据结构，在读取储存角色骨骼动画信息的BVH文件、序列化角色骨骼动画信息或者说保存存储的时候是以前序遍历的顺序，我写过这个东西，讲了一遍过程。</span>
            </p></li>
          <li><p><span>你对C++模板元编程的了解?</span></p>
            <p>
              <span>用过，经常用，只能说常用的用法我会，难的比如说C++模板元编程实现编译期堆排序那些的我就肯定不会了。然后我具体讲了C++中的模板元编程。</span>
            </p></li>
        </ol>
        <p><span>项目经验：</span></p>
        <ol start=''>
          <li><span>问我的人工智能仿真训练平台项目，包括具体内容、职责、用到的设计模式等。</span></li>
          <li><span>问我Gobal GameJam的项目，包括具体内容、职责、用到的设计模式等。</span></li>
          <li><span>看你学过GAMES101和104，而且还有104的证书，那么你了解渲染管线吗?</span>
            <span>答：是的,作业都是做了的，在我的博客上都有作业答案。渲染管线流程的第一步是.....</span>
            <span>面试官直接说可以了，不用说了，学过GAME101的肯定知道，那我问你着色模型了解哪些？</span>
            <span>我说我只了解Blinn-Phong模型，其余的，比如这几年比较流行的二次元卡通渲染的着色模型我        就没了解了。</span>
            <span>因为GAMES101课程主要讲的PBR，用的Blinn-Phong。</span>
            <span>面试官问，那么你知道Blinn-Phong模型的公式吗？</span>
            <span>我说，现在让我立即背公式肯定背不出来，但是我知道大致的原理，然后我讲了一遍。</span>
            <span>Blinn-Phong模型用环境光遮蔽、基础色、金属度（高光）、粗糙度（漫反射）、法线等贴图进        行计算，得到从材质上反射回来的光是什么颜色。</span>
          </li>
          <li><span>游戏经历：</span></li>
          <li><span>玩过哪些游戏？</span></li>
          <li><span>MMO的游戏玩过吗？</span></li>
        </ol>
        <p><span>最后：</span>
          <span>你有什么想问面试官的吗？</span></p>
        <h2 id='面试体验'><span>面试体验</span></h2>
        <p>
          <span>因为在此之前已经面过或者笔试过几家公司了，面试的话术我已经练熟了，感觉面网易面起来没啥压力，很轻松、不紧张。</span>
        </p></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NetEasesFaceExperience0'
}
</script>

<style scoped>

</style>
