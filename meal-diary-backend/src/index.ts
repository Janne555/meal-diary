import mongoose from 'mongoose'
import { env } from './constants'
import { app } from './express/server'

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(`${env.MONGO_URI.replace("<dbname>", env.APP_NAME)}`)

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("mongodb connection established")
})

const listener = app.listen(Number(env.PORT), () => {
  console.log(`🚀 Server listening at ${JSON.stringify(listener.address())}`)
})