const mongoose = require('mongoose');

mongoose
.connect('mongodb+srv://jmayhugh:<password>@nomad.ypwwj5b.mongodb.net/?retryWrites=true&w=majority')
.then(() => app.listen(4000, () => console.log('Server running on port 4000')))
.catch((error) => console.log(error.message));