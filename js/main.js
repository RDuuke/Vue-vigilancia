
const routes = [
    {
        path : '/sifilis', component: sifilis
    },
    {
        path : '/vih', component : vih
    },
    {
        path : '/hepatitis', component : hepatitis
    },
    {
        path : '/', component: home
    },
]

const router = new VueRouter({
    routes,
    linkExactActiveClass: "color-red",

});
Vue.use(GoTop);
const App = new Vue(
    {
        router,
        data : {
            interna : false
        },
        methods : {
            showHeader : function () {
                this.$data.interna = true;
                console.log(this.$data);

            },
            hideHeader : function () {
                this.$data.interna = false;
                console.log(this.$data);

            }
        }
    }
).$mount("#app");
