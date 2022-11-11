const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/test')

const Cat = mongoose.model('Cat',{name:String});

const kitty = new Cat({name:'jimmy'});
kitty.save().then(()=>{
    console.log('meow')
    console.log(`kitty's name is ${kitty.name}`)
})