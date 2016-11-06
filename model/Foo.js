const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FooSchema = new Schema({
    text: { type: String },
    timestamp: { type: Date, default: Date.now }
});

const Foo = mongoose.model('Foo', FooSchema);

module.exports = {
    Foo: Foo
};