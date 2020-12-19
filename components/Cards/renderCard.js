import jsPDF from 'jspdf'
import { base, color, font, img } from '../iconsBase64'


const setFont = style => {
    let doc = new jsPDF()
    if (style === 'normal') {
        doc.addFileToVFS('Spartan-Regular.ttf', font.normal)
        doc.addFont('Spartan-Regular.ttf', 'normal', 'normal');
        doc.setFont('normal');
    }
}


async function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)

        reader.onload = () => resolve(reader.result)
        reader.onerror = (e) => reject(e)
    });
}

export const renderPdf = async (item, file, customIcon) => {

    let doc = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [620, 874]
    })

    if (item.bgColor !== 'white') {
        doc.addImage(color[item.bgColor], 'png', 0, 0, 620, 874)
    }

    if (file !== undefined) {
        let image = await fileToBase64(file.target.files[0]);
        doc.addImage(image, 'png', 23, 77, 574, 587)
    } else {
        doc.addImage(img[item.link], 'jpg', 23, 77, 574, 587)
    }

    doc.addImage(base.myCard, 'png', 517, 97, 60, 76)
    doc.link(517, 97, 60, 76, { url: 'https://www.figma.com/file/HEBZAQLqQikRB8Wxk5guya/MyCard?node-id=299%3A13127' })


    const describeText = item.posText === 'bottom' ? 538 : 185
    const nameText = item.posText === 'bottom' ? 588 : 137

    doc.setTextColor(255, 255, 255);
    setFont('normal')
    doc.setFontSize(25)
    doc.text(43, describeText, item.describe)
    doc.addFileToVFS('Spartan-Regular.ttf', font.bold)
    doc.addFont('Spartan-Regular.ttf', 'bold', 'normal');
    doc.setFont('bold');
    doc.setFontSize(50)
    doc.text(43, nameText, item.name)


    let position = 0
    for (let i = 0; i < item.icons.length; i++) {
        const el = item.icons[i];
        if (i < 12) {
            doc.addImage(base[el.name], 'png', 23 + 87 * (i <= 6 ? i : i - 6), (i <= 6 ? 707 : 780), 50, 50)
            doc.link(23 + 87 * (i <= 6 ? i : i - 6), (i <= 6 ? 707 : 780), 50, 50, { url: `${el.href}` });

        }
        position = i;
    }


    if (position < 12 && customIcon!==undefined) {
        let i = ++position;
        let image = await fileToBase64(customIcon.file.target.files[0]);
        doc.addImage(image, 'jpg', 23 + 87 * (i <= 6 ? i : i - 6), (i <= 6 ? 707 : 780), 50, 50)
        doc.link(23 + 87 * (i <= 6 ? i : i - 6), (i <= 6 ? 707 : 780), 50, 50, { url: `${customIcon.href}` });
    }

    doc.save(`${item.name} my-card.pdf`);

}
