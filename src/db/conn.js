const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://research:research@researchproject.czt59.mongodb.net/Details_store?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log(`connection is succsessfill`);
}).catch((e) => {
    console.log(`no connection`);
})

