const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'assets');
const outputFilePath = path.join(__dirname, 'assets', 'imageList.json');

let imageList = [];

// assets 폴더 내의 모든 파일을 순회
fs.readdirSync(assetsDir).forEach(file => {
    if (/\.(jpg|jpeg|png|svg)$/.test(file)) {
        imageList.push(`https://cdn.jsdelivr.net/gh/deccomm/fdpm/assets/${file}`);
    }
});

// JSON 파일로 결과 저장
fs.writeFileSync(outputFilePath, JSON.stringify(imageList, null, 2));
console.log('Image list JSON file generated.');
