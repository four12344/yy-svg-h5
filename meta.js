/* 用来生成 docs 中每一个文件夹中 md 文件的列表 */
const fs = require('fs');
const path = require('path');
const dayjs = require('dayjs');

const ignore = ['.vuepress'];
const ignoreFile = ['README.md', 'meta.json']

function loop(dir) {
    // 当前文件夹.子文件[夹] 
    const dirs = fs.readdirSync(dir);

    /* 文件夹非空.且包含 md 文件 */
    /* 备注： docs 中有 .vuepress 会排在 md 文件前面，所以没有进入这一步。 */
    /* 备注：排序 隐藏文件夹 > 文件 > 文件夹 */
    /* 注意：文件夹中没有隐藏文件 .DS_Store */
    if (dirs.length && dirs[0].includes('.md')) {
        // meta.json 的内容
        const meta = [];
        // README.md 的内容
        let md = '---\nsidebar: false\n---\n';
        for (let i = 0; i < dirs.length; i++) {
            // 当前文件.路径
            const filePath = path.join(dir, dirs[i]);
            // 当前文件.详细信息
            const stat = fs.statSync(filePath);

            /* 当前文件.是文件夹.则退出处理下一个文件 */
            if (stat.isDirectory()) {
                continue;
            }

            /* 当前文件.不需要处理.则退出处理下一个文件 */
            if (ignoreFile.includes(dirs[i])) {
                continue;
            }

            /* 当前文件.需要处理 */
            /* 备注：可以根据文件内容获取标题，这里直接使用文件名称（快一点） */
            // const file = fs.readFileSync(filePath);
            // const context = file.toString();
            // const title = context.split('\n')[0].replace('#', '');
            const fileName = dirs[i];
            const routePath = filePath.replace('docs', '');
            const dateShow = dayjs(stat.atime).format('YYYY/MM/DD');
            meta.push({
                title: fileName,
                date: dayjs(stat.atime).format('YYYY-MM-DD HH:mm:ss'),
                path: routePath
            })
            md += `${dateShow} [${fileName.replace('.md', '')}](${routePath})<br/>\n`
        }
        // console.log(md);
        // console.log(meta);

        fs.writeFileSync(path.join(dir, 'meta.json'), JSON.stringify(meta));
        fs.writeFileSync(path.join(dir, 'README.md'), md);
    }

    /* 递归遍历文件夹，去生成meta.json */
    dirs.map(item => {
        const childPath = path.join(dir, item);
        const stat = fs.statSync(childPath); // 获取当前文件的信息）
        /* 是文件夹.且需要获取md列表 */
        if (stat.isDirectory() && !ignore.includes(item)) {
            loop(childPath);
        }
    })
}

loop('./docs');