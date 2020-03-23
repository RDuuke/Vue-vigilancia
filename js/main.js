const routes = [
    {
        path : '/', component: home
    },
    {
        path : '/sifilis', component: sifilis
    },
    {
        path : '/vih', component : vih
    },
    {
        path : '/hepatitis', component : hepatitis
    }
]

const router = new VueRouter({
    routes,
    linkExactActiveClass: "active"
});

const App = new Vue(
    {
        router,
        data : {
            interna : true
        },
        methods : {
            showHeader() {
                console.log("Yeah!!!")
            }
        }
    }
).$mount("#app");
