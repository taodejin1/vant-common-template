# vant-common-template
vue-cli2.0 initialize tools with  vant、axios、momentJS、vux &amp; 3 environment develop、test、production


``` bash
introduction container：

## npm i axios moment vant vux -S
    install dependencies


## npm i vux-loader sass-loader node-sass less less-loader babel-plugin-import -D
    install devDependencies

## modify src/main.js
    `import api from './server-api/api.js'`
    `Vue.prototype.$moment = moment`

## App.vue add flexible.js reset.css common.css 
    `import flexible from '@/assets/js/flexible.js'`  
    `1rem = 100px`


```