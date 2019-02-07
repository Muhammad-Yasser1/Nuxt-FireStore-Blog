export const state = () => ({
    articles: [],
    token: '',
    isAdmin: false,
    // article: null,
    editMode: true
})


export const mutations = {
    authenticateUsers(state, payload) {
        let fbUrl = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=";
        if (payload.loginMode) {
            fbUrl =
                "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=";
        }
        this.$axios
            .$post(fbUrl + process.env.apiKey, {
                email: payload.user.email,
                password: payload.user.password,
                returnSecureToken: true
            })
            .then(res => {
                state.token = res.idToken;
                window.localStorage.setItem('token', res.idToken);
                if (res.email == 'admin@admin.com') {
                    state.isAdmin = true;
                    window.localStorage.setItem('isAdmin', true);
                    return this.$router.push({
                        path: "/admin"
                    });
                } else {
                    state.isAdmin = false;
                    window.localStorage.removeItem('isAdmin');
                    this.$router.push({
                        path: "/posts"
                    });
                }
            })
    },
    logout(state) {
        state.token = null;
        state.isAdmin = false;
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('isAdmin');
        this.$router.push('/')
    },
    createArticle(state, payload) {
        // this.$axios.post('https://nuxt-73661.firebaseio.com/articles.json?auth=' + state.token, payload).then(res => {
        //     state.articles.push(payload);
        //     this.$router.push({
        //         name: 'admin'
        //     })
        // });
        state.articles.push(payload);
        this.$router.push({
            name: 'admin'
        })
    },
    updateArticle(state, payload) {
        // this.$axios.put('https://nuxt-73661.firebaseio.com/articles/' + payload.id + '?auth=' + state.token, payload).then(res => {
        //     const target = state.articles.findIndex(x => x.id == payload.id);
        //     state.articles[target] = payload
        //     this.$router.push({
        //         name: 'admin'
        //     })
        // });
        const target = state.articles.findIndex(x => x.id == payload.id);
        state.articles[target] = payload
        this.$router.push({
            name: 'admin'
        })
    },
    deleteArticle(state, payload) {
        // this.$axios.delete('https://nuxt-73661.firebaseio.com/articles/' + payload.id + '?auth=' + state.token, payload).then(res => {
        //     const target = state.articles.findIndex(x => x.id == payload.id);
        //     state.articles.splice(state.articles[target], 1)
        //     this.$router.push({
        //         name: 'admin'
        //     })
        // });
        const target = state.articles.findIndex(x => x.id == payload.id);
        state.articles.splice(target, 1)
        this.$router.push({
            name: 'admin'
        })
    }
}


export const actions = {
    nuxtServerInit(vuexContext, nuxtContext) {
        return nuxtContext.$axios.get('https://nuxt-73661.firebaseio.com/articles.json').then(res => {
            for (const articlekey in res.data) {
                if (res.data.hasOwnProperty(articlekey)) {
                    const val = res.data[articlekey];
                    vuexContext.state.articles.push({
                        id: articlekey,
                        ...val
                    });
                }
            }
        })
    },
    authenticateUsers(vuexContext, payload) {
        vuexContext.commit('authenticateUsers', payload);
    },
    createArticle(vuexContext, payload) {
        vuexContext.commit('createArticle', payload)
    },
    updateArticle(vuexContext, payload) {
        vuexContext.commit('updateArticle', payload)
    },
    deleteArticle(vuexContext, payload) {
        vuexContext.commit('deleteArticle', payload)
    }
}

export const strict = false
