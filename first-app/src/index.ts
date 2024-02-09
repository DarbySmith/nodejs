import express from 'express';

const app = express()

interface Params {
    a: number;
    b: number;
}

type Params2 = {
    a: number;
    b: number;
}

const add = (a: number, b: number): number => {
    return a + b
}

app.get('/', (req) => {
    add(1,2)
})

app.listen(3001, () => {
    console.log("started");
});