console.log("CREATED BY I PUTU SUGIANTA ('2301010030')")
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let score = 0;
let correctAns = 0;
let wrongAns = 0;
let point_per_soal = 1;

let q1 = `
Siapakah Presiden tahun 2030?
A: sugik
B: gusher
C: eka
D: Arya
Jawaban Anda: `;
q2 = `
Berapakah jumlah pulau yang dimiliki Indonesia?
a. Lebih dari 10,000
b. Lebih dari 15,000
c. Lebih dari 20,000
d. Lebih dari 25,000
Jawaban Anda: `;
q3 = `
Apa mata uang resmi Indonesia?
a. Ringgit
b. Rupiah
c. Baht
d. Peso
Jawaban Anda: `;
q4 = `
Gunung tertinggi di Indonesia adalah...
a. Gunung Semeru
b. Gunung Rinjani
c. Gunung Kerinci
d. Gunung Gede Pangrango
Jawaban Anda: `;
q5 = `
Siapakah Presiden Indonesia saat ini (per 2022)?
a. Joko Widodo
b. Susilo Bambang Yudhoyono
c. Megawati Sukarnoputri
d. Abdurrahman Wahid
Jawaban Anda: `;
q6 = `
Apa nama tarian tradisional dari Bali?
a. Jaipong
b. Saman
c. Piring
d. Legong
Jawaban Anda: `;



rl.question('Masukkan nama Anda: ', (input) => {
    rl.question(q1, (ans1) => {
      if (ans1 == 'A' || ans1 == 'a') {
        score++
        correctAns++
      } else {
        wrongAns++
      }

        rl.question(q2, (ans1) => {
          if (ans1 == 'C'|| ans1 == 'c') {
            score++
            correctAns++
          } else {
            wrongAns++
          }

            rl.question(q3, (ans1) => {
              if (ans1 == 'B'|| ans1 == 'b') {
                score++
                correctAns++
              } else {
                wrongAns++
              }

            rl.question(q4, (ans1) => {
                if (ans1.toUpperCase == 'C'|| ans1 == 'c') {
                  score++
                  correctAns++
                } else {
                  wrongAns++
                }
      
            rl.question(q5, (ans1) => {
                    if (ans1.toUpperCase == 'A'|| ans1 == 'a') {
                      score++
                      correctAns++
                    } else {
                      wrongAns++
                    }
                    
                    rl.question(q6, (ans1) => {
                        if (ans1.toUpperCase == 'D'|| ans1 == 'd') {
                          score++
                          correctAns++
                        } else {
                          wrongAns++
                        }
                        
        console.log('Kuis Selesai');
        console.log('-----');
        console.log('Statistik Kuis');
        console.log(`Nama: ${input}`);
        console.log(`Nilai: ${score}`);
        console.log(`Jawaban Benar: ${correctAns}`);
        console.log(`Jawaban Salah: ${wrongAns}`);
        rl.close();
    })
})
})
})
})
})
})