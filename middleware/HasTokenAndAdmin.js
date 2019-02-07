export default function (context) {
    if (process.client) {
        if (localStorage.getItem('token')) {
            context.store.state.token = localStorage.getItem('token');
            context.store.state.isAdmin = Boolean(localStorage.getItem('isAdmin'));
            if (context.store.state.isAdmin) {
                context.redirect('/admin')
            } else {
                context.redirect('/posts')
            }
        }
    }
}
