const config = {
  type: Phaser.AUTO,
  width: 400,
  height: 600,
  backgroundColor: '#222',
  scene: {
    preload,
    create,
    update
  }
};

let score = 0;
let scoreText;
let clickButton;

function preload() {
  this.load.image('button', 'https://labs.phaser.io/assets/sprites/red_ball.png'); // bạn có thể thay bằng nút khác
}

function create() {
  clickButton = this.add.image(200, 300, 'button').setInteractive();
  clickButton.setScale(2);

  scoreText = this.add.text(140, 100, 'Score: 0', {
    fontSize: '32px',
    fill: '#fff'
  });

  clickButton.on('pointerdown', () => {
    score++;
    scoreText.setText('Score: ' + score);
  });
}

function update() {}

new Phaser.Game(config);
const config = {
  type: Phaser.AUTO,
  width: 400,
  height: 600,
  backgroundColor: '#222',
  scene: {
    preload,
    create,
    update
  }
};

let score = 0;
let scoreText;
let clickButton;

function preload() {
  this.load.image('button', 'https://labs.phaser.io/assets/sprites/red_ball.png'); // bạn có thể thay bằng nút khác
}

function create() {
  clickButton = this.add.image(200, 300, 'button').setInteractive();
  clickButton.setScale(2);

  scoreText = this.add.text(140, 100, 'Score: 0', {
    fontSize: '32px',
    fill: '#fff'
  });

  clickButton.on('pointerdown', () => {
    score++;
    scoreText.setText('Score: ' + score);
  });
}

function update() {}

new Phaser.Game(config);
