function perevText() {

    let text = prompt(`Введите текст`);
    const result = text.split('').reverse().join('');
    alert(result);

}