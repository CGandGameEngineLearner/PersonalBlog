import Vue from 'vue'
import VueRouter from 'vue-router'
import InterviewExperience from '../components/InterviewExperience'
import MainPage from '../components/MainPage.vue'
import TechnicalTutorials from '../components/TechnicalTutorials'
import News from '../components/News.vue'
import Chat from '../components/Chat.vue'

import NetEasesFaceExperience0 from '../components/Articles/InterviewExperienceArticles/NetEasesFaceExperience0.vue'
import NetEasesFaceExperience1 from '../components/Articles/InterviewExperienceArticles/NetEasesFaceExperience1.vue'
import TechnicalArticle1 from '../components/Articles/TechnicalTutorials/TechnicalArticle1.vue'

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/InterviewExperience',
    name: 'InterviewExperience',
    component: InterviewExperience
  },
  {
    path: '/TechnicalTutorials',
    name: 'TechnicalTutorials',
    component: TechnicalTutorials
  },
  {
    path: '/News',
    name: 'News',
    component: News
  },
  {
    path: '/Chat',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/InterviewExperienceArticles/NetEasesFaceExperience0',
    name: 'NetEasesFaceExperience0',
    component: NetEasesFaceExperience0
  },
  {
    path: '/InterviewExperienceArticles/NetEasesFaceExperience1',
    name: 'NetEasesFaceExperience1',
    component: NetEasesFaceExperience1
  },
  {
    path: '/TechnicalTutorials/TechnicalArticle1',
    name: 'TechnicalArticle1',
    component: TechnicalArticle1
  }
]

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
