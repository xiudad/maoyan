import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Singer from './components/Singer';
import Rec from "./components/Rec";
import Rank from "./components/Rank";
import Search from "./components/Search";



const router  = new Router ({
    
    routes:[{
            path:"/",
            redirect:"/rec"
    },
        
      
        {
            path:'/rec',
            component:Rec
        },{
            path:'/singer',
            component:Singer
        },{
            path:'/rank',
            component:Rank
        },{
            path:'/search',
            component:Search
        },

    ]
})


export default router