class HanoiView {
  constructor(game, $el) {
    this.game = game;
    this.el = $el;
  }

  setupTowers() {
    for (let i = 0; i < 3; i++) {
      $("body").append(`<ul tower="${i}"></ul>`);
    }
    for (let j = 0; j < 3; j++) {
      $("ul").append("<li></li>");
    }
  }

  render() {
    let towers = this.game.towers;
    for (let t = 0; t < 3; t++) {
      for (let p = 0; p < 3; p++) {
        let $el = $("ul").eq(t).children("li").eq(2 - p);
        $el.removeAttr("class");
        if (towers[t][p] === 3) {
          $el.addClass("big");
        }
        else if (towers[t][p] === 2) {
          $el.addClass("middle");
        }
        else if (towers[t][p] === 1) {
          $el.addClass("small");
        }
        else {
          $el.addClass("hidden");
        }
      }
    }
  }

  clickTower($tower) {
    let idx = parseInt($tower.attr("tower"));
    if (this.startPile === undefined) {
      this.startPile = idx;
    }
    else {
      let endPile = idx;
      let valid = this.game.move(this.startPile, endPile);
      if (!valid) { alert("Invalid move!"); }
      this.startPile = undefined;
    }
    this.render();
  }
}

module.exports = HanoiView;
