const fs = require('fs');
const superagent = require('superagent');

const readFilePro = file => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) reject("didn't find file");
            console.log(data);
            resolve(data);
        });
    });
};

const writeFilePro = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, err => {
            if (err) reject("didn't write");
            resolve("success");
        });
    });
};

const getDogPic = async () =>
{
    try
    { 
    const data = await readFilePro("dog.txt")
    const res  = await superagent.get(`https://dog.ceo/api/breeds/${data}/image/random`)
    await writeFilePro("dog-write.txt",res.body.message)
    }catch(err){
        console.log(err);
    }
}
getDogPic()

// readFilePro("dog.txt")
//     .then(data => {
//         return superagent.get(`https://dog.ceo/api/breeds/${data}/image/random`);
//     })
//     .then(data => {
//         return writeFilePro("dog-image.txt", data.body.message);
//     })
//     .then(result => {
//         console.log(result); // Output the success message
//     })
//     .catch(error => {
//         console.log(error); // Handle any errors that occurred
//     });