export default function (context) {
    if (process.client) {
        if (localStorage.getItem('token') && !localStorage.getItem('isAdmin')) {
            context.redirect('/posts')
        }
        if (!localStorage.getItem('token')) {
            context.redirect('/')
        }
    }
}
