exports.ids=[5],exports.modules={69:function(t,e,o){var content=o(83);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=o(3).default;t.exports.__inject__=function(t){r("26202313",content,!0,t)}},82:function(t,e,o){"use strict";o.r(e);var r=o(69),n=o.n(r);for(var d in r)"default"!==d&&function(t){o.d(e,t,function(){return r[t]})}(d);e.default=n.a},83:function(t,e,o){(t.exports=o(2)(!1)).push([t.i,"h1[data-v-04612b9e]{margin:100px auto 0;text-align:center}form[data-v-04612b9e]{max-width:400px;max-height:400px;margin:80px auto}",""])},90:function(t,e,o){"use strict";o.r(e);var r={middleware:["HasTokenAndAdmin"],layout:"auth",data:()=>({loginMode:!0,user:{email:"",password:""}}),methods:{onSubmit(){this.$store.dispatch("authenticateUsers",{user:this.user,loginMode:this.loginMode})}},created(){0}},n=o(1);var component=Object(n.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"form"},[this._ssrNode('<h1 data-v-04612b9e>Login or Register to continue...</h1> <form data-v-04612b9e><div class="form-group" data-v-04612b9e><label for="email" data-v-04612b9e>Email address</label> <input type="email" id="email" placeholder="Enter your email"'+this._ssrAttr("value",this.user.email)+' class="form-control" data-v-04612b9e></div> <div class="form-group" data-v-04612b9e><label for="password" data-v-04612b9e>Password</label> <input type="password" id="password" placeholder="Password"'+this._ssrAttr("value",this.user.password)+' class="form-control" data-v-04612b9e></div> '+(this.loginMode?'<div class="d-flex justify-content-around" data-v-04612b9e><button type="submit" class="btn btn-primary" data-v-04612b9e>Login</button> <button class="btn btn-dark ml-auto" data-v-04612b9e>Register first</button></div>':"\x3c!----\x3e")+" "+(this.loginMode?"\x3c!----\x3e":'<div class="d-flex justify-content-around" data-v-04612b9e><button type="submit" class="btn btn-primary" data-v-04612b9e>Register</button> <button class="btn btn-dark ml-auto" data-v-04612b9e>Login instead</button></div>')+"</form>")])},[],!1,function(t){var e=o(82);e.__inject__&&e.__inject__(t)},"04612b9e","257b193e");e.default=component.exports}};
//# sourceMappingURL=58a5d7beb76c1a970510.js.map