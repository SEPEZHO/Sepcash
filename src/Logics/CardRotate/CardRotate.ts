const CardRotate = () => {
  const startRotate = function(event: any) {
    let cardItem = this.querySelector('.RotateItem'),
      halfHeight = cardItem.offsetHeight / 2,
      halfWidth = cardItem.offsetWidth / 2;
    cardItem.style.transform = 'rotatex(' + -(event.offsetY - halfHeight) / 10 + 'deg) rotatey(' + (event.offsetX - halfWidth) / 10 + 'deg)';
  }
  const stopRotate = function() {
    let cardItem = this.querySelector('.RotateItem');
    cardItem.style.transform = 'rotate(0)';
  }

  let cards = document.querySelectorAll('.RotateContainer');

  for (let i = 0, length = cards.length; i < length; i++) {
    cards[i].addEventListener('mousemove', startRotate);
    cards[i].addEventListener('mouseout', stopRotate);
  }
}

export default CardRotate
