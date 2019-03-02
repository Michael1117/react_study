import dva from 'dva'
import router from './router'
// https://github.com/dvajs/dva/tree/master/examples/func-test/src 官网
// 引入需要的文件
import counterModel from './models/counterModel'
import studentModel from './models/studentModel'
import todoModel from './models/todoModel'
const app = dva()

// 使用model
app.model(counterModel)
app.model(studentModel)
app.model(todoModel)

app.router(router)
app.start('#app')