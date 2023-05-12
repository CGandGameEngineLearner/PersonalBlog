<template>
  <div>
    <link href="/static/CSSfiles/Main.css" rel="stylesheet">

    <div>
      <div class="navigation-bar-container">
        <header class="navigation-bar">
          <div class="sidebar-button">
            <img src="./assets/Icon/MainLogo.png" width="40px">
          </div>
          <nav class="nav-links">
            <div class="nav-item">
              <router-link to="/">
                首页
              </router-link>
            </div>
            <div class="nav-item">
              <router-link to="/TechnicalTutorials">
                技术教程
              </router-link>
            </div>
            <div class="nav-item">
              <router-link to="/InterviewExperience">
                面试经验
              </router-link>
            </div>
            <div class="nav-item">
              <router-link to="/Chat">
                聊聊别的
              </router-link>
            </div>
          </nav>
        </header>
      </div>
      <main>

        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
