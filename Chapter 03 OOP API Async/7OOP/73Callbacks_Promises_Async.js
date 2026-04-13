// call back: eik function ko agar ap aik aur funtionc baj rahy ho parameter ma to wo parameter wala funtion known as call back

// function kuchdeirbaad(fnc) {
//     setTimeout(fnc, Math.floor(Math.random() * 20) * 1000)
// }

// kuchdeirbaad(function () {
//     console.log("Hey");
// })

// call hell: aik call back ka andar dusra then so on
// function profilelakaraw(username, cb) {
//     console.log("Fetching profile....");
//     setTimeout(() => {
//         cb({ _id: 128, username, age: 23, email: "hassanzahir2004@gmail.com" });
//     }, 2000)
// }
// function sarePostLakarAwo(id, cb) {
//     console.log("Fetching posts....");
//     setTimeout(() => {
//         cb({ _id: id, posts: ["hey", "Hello", "Good Morning"] });
//     }, 3000)
// }

// function savePostNikalo(id, cb) {
//     console.log("Fetching saved posts...")
//     setTimeout(() => {
//         cb({ _id: id, saved: [1, 2, 3, 4, 5, 6] });
//     }, 3000)
// }

// profilelakaraw("Hassan Jan", function (data) {
//     console.log(data);
//     sarePostLakarAwo(data._id, function (posts) {
//         console.log(posts);
//         savePostNikalo(data._id, function (saved) {
//             console.log(saved);
//         });
//     });
// });

// practicing call hell
// function profilelaAwo(username, cb) {
//     console.log("Fetching profile data...")
//     setTimeout(() => {
//         cb({ _id: 128, username, age: 23, email: "hay@hay.com" })
//     }, 3000);
// }
// function saryPostLaw(id, cb) {
//     console.log("Fetching posts...");
//     setTimeout(() => {
//         cb({ _id: id, posts: ["Hello", "How", "Are", "You"] });
//     }, 3000)
// }
// function savePostNikalLo(id, cb) {
//     console.log("Fetching saved posts...");
//     setTimeout(() => {
//         cb({ _id: id, saved: [1, 2, 3, 4, 5, 6] });
//     }, 3000)
// }

// profilelaAwo("Hassan", function (data) {
//     console.log(data);
//     saryPostLaw(data._id, function (posts) {
//         console.log(posts);
//         savePostNikalLo(data._id, function (saved) {
//             console.log(saved);
//         })
//     })
// })

// =========== promises ==============
let pr = new Promise(function (res, rej) {
    setTimeout(() => {
        let rn = Math.floor(Math.random() * 10);
        if (rn > 5) res("resoloved " + rn);
        else rej("rejected " + rn);
    },3000);
});

// pr resolve howa then chalyga and reject how to catch chalyga

pr.then(function (val) {
    console.log(val);
})
    .catch(function (val) {
        console.log(val);
    });