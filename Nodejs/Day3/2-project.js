// 1. 사용자가 원하는 폴더를 선택하게 함
// node 2-project test
// 0    1         2      의 인덱스를 가지게됨

// const curdir = process.argv[2];
// console.log(curdir);

// 2. 사용자가 원하는 폴더안에 video, captured, duplicated 폴더를 만듬

// 3. 폴더안에 있는 파일들을 조건에 맞게 정리함
// mp4, mov 확장명을 가진 파일들은 video 폴더 안으로 이동
// png,aae 확장명을 가진 파일들은 cpatured 폴더 안으로 이동
// IMG_로 시작하는 파일들은 duplicated 폴더 안으로 이동
// rename 메소드를 활용한다. rename은 같은폴더에 있으면 이름을 바꾸지만 다른폴더로 지정해준다면 이름을 바꾸며 이동시킨다.

// const fs = require('fs').promises;
// const path = require('path');
// const fs2 = require('fs');

// fs.mkdir('./test/video')
//     .catch(console.error);

// fs.mkdir('./test/captured')
//     .catch(console.error);

// fs.mkdir('./test/duplicated')
//     .catch(console.error);

// console.log(__dirname);
// console.log(__filename);

// const cd = path.parse(path.join('./test'));
// console.log(cd);

// const cd2 = cd.name;
// console.log(cd2);
console.log('--------------------------------');

// 1번 코드
// const curdir = process.argv[2];
// console.log(curdir);
// const fs = require('fs');
// const path = require('path');
// const makeFolder = (dir) => {
//     if (!fs.existsSync(dir)) {
//         fs.mkdirSync(dir);
//     }
// };
// makeFolder(`./${curdir}/video`);
// makeFolder(`./${curdir}/captured`);
// makeFolder(`./${curdir}/duplicated`);
// const folder = `./${curdir}`;
// fs.readdir(folder, (err, fileList) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     for (let i = 0; i < fileList.length; i++) {
//         const file = fileList[i];
//         const extname = path.extname(file);
//         if (extname === '.mp4' || extname === '.mov') {
//             fs.rename(
//                 `${folder}/${file}`,
//                 `./${curdir}/video/${file}`,
//                 (error) => {
//                     if (error) console.error(error);
//                 }
//             );
//         } else if (extname === '.png' || extname === '.aae') {
//             fs.rename(
//                 `${folder}/${file}`,
//                 `./${curdir}/captured/${file}`,
//                 (error) => {
//                     if (error) console.error(error);
//                 }
//             );
//         } else if (file.startsWith('IMG_')) {
//             fs.rename(
//                 `${folder}/${file}`,
//                 `./${curdir}/duplicated/${file}`,
//                 (error) => {
//                     if (error) console.error(error);
//                 }
//             );
//         }
//     }
// });

//2번 코드
// 1. 사용자가 원하는 폴더를 선택하게 함
const path = require('path');
const os = require('os');
const fs = require('fs');

const curdir = process.argv[2]
const workingDir = path.join(__dirname, curdir);
// console.log(workingDir);

//existsSync -> exits의 동기식 -> 이게존재하는가?
if (!curdir || !fs.existsSync(workingDir)) {
    console.error('해당 경로및 폴더가 없습니다')
    return;
}

// 2. 사용자가 원하는 폴더안에 video, captured, duplicated 폴더를 만듬
const videoDir = path.join(workingDir, 'video');
const capturedDir = path.join(workingDir, 'captured');
const DuplicatedDir = path.join(workingDir, 'duplicated');

!fs.existsSync(videoDir) && fs.mkdirSync(videoDir);
!fs.existsSync(capturedDir) && fs.mkdirSync(capturedDir);
!fs.existsSync(DuplicatedDir) && fs.mkdirSync(DuplicatedDir);

//두번쨰실행의 중복을 제거, or조건으로 앞이 있으면 끝 없으면 뒤에 실행을 통해 중복을 제거해준다.

//3. 폴더안에 있는 파일들을 조건에 맞게 정리함

fs.promises
    .readdir(workingDir)
    .then(processFiles)
    .catch(console.log)

function processFiles(files) {
    files.forEach((file) => {
        if (isVideoFile(file)) {
            move(file, videoDir)
        } else if (isCapturedfile(file)) {
            move(file, capturedDir)
        } else if (isDuplicatedfile(file)) {
            move(file, DuplicatedDir)
        }
    })
}

function isVideoFile(file) {
    const regExp = /(mp4|mov)$/gm;
    const match = file.match(regExp); //match는 정규표현식을 매개변수로 받는다, match 되면 값이 있고 없으면 null 값을 리턴한다.
    return !!match; //값이 있을떄 true 없으면 false 리턴
}

// /(mp4|mov)$/gm -> 소괄호:구분지정
// g: global, 전역검색
// m: multi-line, 다중행(여러줄) 검색

function isCapturedfile(file) {
    const regExp = /(png|aae)$/gm;
    const match = file.match(regExp);
    return !!match;
}

function isDuplicatedfile(file) {
    if (!file.startsWith('IMG_') || file.startsWith('IMG_E')) {
        return false;
    }
    return true;
}

function move(file, targetDir) {
    console.info(`move${file} to ${path.basename(targetDir)}`)
    const oldPath = path.join(workingDir, file);
    const newPath = path.join(targetDir, file);

    fs.promises
        .rename(oldPath, newPath)
        .catch(console.error);
}





















