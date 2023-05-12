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
import CtoCPPandUnrealEngineArticle0
  from '../components/Articles/TechnicalTutorials/CtoCPPandUnrealEngineArticle0.vue'
import CtoCPPandUnrealEngineArticle1 from '../components/Articles/TechnicalTutorials/CtoCPPandUnrealEngineArticle1.vue'
import CtoCPPandUnrealEngineArticle3 from '../components/Articles/TechnicalTutorials/CtoCPPandUnrealEngineArticle3.vue'

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
  },
  {
    path: '/TechnicalTutorials/CtoCPPandUnrealEngineArticle0',
    name: 'CtoCPPandUnrealEngineArticle0',
    component: CtoCPPandUnrealEngineArticle0
  },
  {
    path: '/TechnicalTutorials/CtoCPPandUnrealEngineArticle1',
    name: 'CtoCPPandUnrealEngineArticle1',
    component: CtoCPPandUnrealEngineArticle1
  },
  {
    path: '/TechnicalTutorials/CtoCPPandUnrealEngineArticle3',
    name: 'CtoCPPandUnrealEngineArticle3',
    component: CtoCPPandUnrealEngineArticle3
  }
]

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
