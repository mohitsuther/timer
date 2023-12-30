let [minite, second, milisecond] = [0, 0, 0];
let rest = document.querySelector('.reset');
let starts = document.querySelector('.start');
let re = document.querySelector('.re');
let a = document.querySelector('.a');
let b = document.querySelector('.b');
let c = document.querySelector('.c');
let Dtimer = document.getElementById('displaytime');
let st = document.querySelector(".st");
let l = true;
let rese = true;
let res = true;
mm = 0;
ss = 0;
Ms = 0;
kfm = true;
let start1 = true;
let times = null;
function runtime() {

    milisecond++;

    if (milisecond == 100) {
        milisecond = 0;
        second++;

        if (second == 60) {
            second = 0;
            minite++;
        }
    }
    let mili = milisecond <= 9 ? "0" + milisecond : milisecond;
    let se = second <= 9 ? "0" + second : second;
    let mi = minite <= 9 ? "0" + minite : minite;

    allmi = milisecond
    allse = second
    allm = minite




    Dtimer.innerHTML = mi + ":" + se + "." + mili;


}


function start() {
    if (times !== null) {

        clearInterval(times);


    }


    times = setInterval(runtime, 10.6666666667);

}
function stops() {
    if (l == true) {


        re.innerHTML = "reset";

        clearInterval(times);
        l = false;

    }
    else {
        resets();
        l = true
    }

}
fff = 0;
sss = 0;
ccc = 0;
function resets() {
    re.innerHTML = "stop";
    clearInterval(times);
    [minite, second, milisecond] = [0, 0, 0];

    Dtimer.innerHTML = "00:00.00";
    location.reload()


}
let sd = 1;
let om = 0
let ots = 0
let otmi = 0
let mos = 0
let som = 0;
let mis = 0;
dd = true;
const bb = document.createElement('p');
function lap() {
    const aa = document.createElement('p');
    // const bb = document.createElement('p');
    const cc = document.createElement('p');
    a.appendChild(aa)
   
    c.appendChild(cc)
    aa.innerHTML = sd;
    let om = minite;
    let ots = second;
    let otmi = milisecond;
    milisecond++;
    function k() {

        if (fff == 100) {
            fff = 0;
            sss++;

            if (sss == 60) {
                sss = 0;
                ccc++;
            }
        }
        let fq = fff <= 9 ? "0" + fff : fff;
        let sq = sss <= 9 ? "0" + sss : sss;
        let mq = ccc <= 9 ? "0" + ccc : ccc;

       allm = fq
        alls = sq
        all = mq
    }
    setInterval(k,16.6666666)



    // ll = minite - om;
    // oo = second - ots;
    // yy = milisecond - otmi;
    amain = om <= 9 ? "0" + om : om;
    asen = ots <= 9 ? "0" + ots : ots;
    amini = otmi <= 9 ? "0" + otmi : otmi;

    cc.innerHTML = amain + ":" + asen + "." + amini;
    sd++;
    


   
//         if (dd = true) {
//             dd = false;
//             bb.innerHTML = amain + ":" + asen + "." + amini;
        

//     }
//     let Aa = amain - allm;
//     let Bb = asen - alls;
//     let Cc = amini - all;
// console.log(Aa)
//     bb.innerHTML = Aa + ":" + Bb + "." + Cc;
   

}
